# applicationCharge

### Available Operations

* [createUsageCharge](#createusagecharge) - 従量課金データの作成
* [postApplicationCharge](#postapplicationcharge) - アプリ内課金データの作成

## createUsageCharge

アプリ内で基本機能が利用された頻度に伴って毎月の請求が変動するようなアプリの場合は「従量課金」を使って利用者に変動分の請求を行うことができます。
※無料お試し期間中のショップに対しては従量課金データを作成できません。


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUsageChargeRequest;
import org.openapis.openapi.models.operations.CreateUsageChargeRequestBody;
import org.openapis.openapi.models.operations.CreateUsageChargeRequestBodyUsageCharge;
import org.openapis.openapi.models.operations.CreateUsageChargeResponse;
import org.openapis.openapi.models.operations.CreateUsageChargeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateUsageChargeRequest req = new CreateUsageChargeRequest(                new CreateUsageChargeRequestBody() {{
                                usageCharge = new CreateUsageChargeRequestBodyUsageCharge("2019/4 メール送信分", 100L);;
                            }};, "quibusdam") {{
                xAppstoreUsageChargeToken = "unde";
            }};            

            CreateUsageChargeResponse res = sdk.applicationCharge.createUsageCharge(req, new CreateUsageChargeSecurity("nulla") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createUsageCharge201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApplicationCharge

「アプリ内課金」はすでにインストール済みのアプリ上において、利用者が追加の買い切りによる課金によって新たなアプリ内の機能を提供される場合などに、利用者へ買い切りの課金分の請求を行うための課金形式です。

この課金はプラン課金の情報に紐付かないため、リクエストされたタイミングで課金データが作成されます。また、同一のアプリ内課金IDで同じ利用者へ複数回請求を行うことも可能です。

ただし、アプリの基本機能として提供しているサービスを利用した量やその頻度などに伴って毎月異なった額の請求を行うような課金については、プラン課金の「従量による課金」の機能を使って請求を行う必要があります。


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApplicationChargeRequestBody;
import org.openapis.openapi.models.operations.PostApplicationChargeRequestBodyApplicationCharge;
import org.openapis.openapi.models.operations.PostApplicationChargeResponse;
import org.openapis.openapi.models.operations.PostApplicationChargeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApplicationChargeRequestBody req = new PostApplicationChargeRequestBody() {{
                applicationCharge = new PostApplicationChargeRequestBodyApplicationCharge() {{
                    applicationChargeSourceId = "5S1DAG";
                }};;
            }};            

            PostApplicationChargeResponse res = sdk.applicationCharge.postApplicationCharge(req, new PostApplicationChargeSecurity("corrupti") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.postApplicationCharge201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
