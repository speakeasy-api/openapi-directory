# ApplicationCharge

### Available Operations

* [CreateUsageCharge](#createusagecharge) - 従量課金データの作成
* [PostApplicationCharge](#postapplicationcharge) - アプリ内課金データの作成

## CreateUsageCharge

アプリ内で基本機能が利用された頻度に伴って毎月の請求が変動するようなアプリの場合は「従量課金」を使って利用者に変動分の請求を行うことができます。
※無料お試し期間中のショップに対しては従量課金データを作成できません。


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ApplicationCharge.CreateUsageCharge(ctx, operations.CreateUsageChargeRequest{
        RequestBody: operations.CreateUsageChargeRequestBody{
            UsageCharge: &operations.CreateUsageChargeRequestBodyUsageCharge{
                Description: "2019/4 メール送信分",
                Point: 100,
            },
        },
        XAppstoreUsageChargeToken: sdk.String("distinctio"),
        RecurringApplicationChargeID: "quibusdam",
    }, operations.CreateUsageChargeSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUsageCharge201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostApplicationCharge

「アプリ内課金」はすでにインストール済みのアプリ上において、利用者が追加の買い切りによる課金によって新たなアプリ内の機能を提供される場合などに、利用者へ買い切りの課金分の請求を行うための課金形式です。

この課金はプラン課金の情報に紐付かないため、リクエストされたタイミングで課金データが作成されます。また、同一のアプリ内課金IDで同じ利用者へ複数回請求を行うことも可能です。

ただし、アプリの基本機能として提供しているサービスを利用した量やその頻度などに伴って毎月異なった額の請求を行うような課金については、プラン課金の「従量による課金」の機能を使って請求を行う必要があります。


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ApplicationCharge.PostApplicationCharge(ctx, operations.PostApplicationChargeRequestBody{
        ApplicationCharge: &operations.PostApplicationChargeRequestBodyApplicationCharge{
            ApplicationChargeSourceID: sdk.String("5S1DAG"),
        },
    }, operations.PostApplicationChargeSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostApplicationCharge201ApplicationJSONObject != nil {
        // handle response
    }
}
```
