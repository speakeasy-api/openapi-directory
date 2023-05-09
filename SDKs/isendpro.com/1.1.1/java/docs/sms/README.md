# sms

### Available Operations

* [sendSms](#sendsms) - Envoyer un sms
* [sendSmsMulti](#sendsmsmulti) - Envoyer des SMS

## sendSms

Envoi un sms vers un unique destinataire

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendSmsResponse;
import org.openapis.openapi.models.shared.SmsUniqueRequest;
import org.openapis.openapi.models.shared.SmsUniqueRequestGmtZoneEnum;
import org.openapis.openapi.models.shared.SmsUniqueRequestNumAzurEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SmsUniqueRequest req = new SmsUniqueRequest("vero", "nihil", "praesentium") {{
                dateEnvoi = "voluptatibus";
                emetteur = "ipsa";
                gmtZone = SmsUniqueRequestGmtZoneEnum.AFRICA_ADDIS_ABABA;
                nostop = "voluptate";
                numAzur = SmsUniqueRequestNumAzurEnum.ONE;
                smslong = "cum";
                tracker = "perferendis";
                ucs2 = "doloremque";
            }};            

            SendSmsResponse res = sdk.sms.sendSms(req);

            if (res.smsReponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendSmsMulti

Envoi de SMS vers 1 ou plusieurs destinataires


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendSmsMultiResponse;
import org.openapis.openapi.models.shared.SMSRequest;
import org.openapis.openapi.models.shared.SMSRequestGmtZoneEnum;
import org.openapis.openapi.models.shared.SMSRequestNumAzurEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SMSRequest req = new SMSRequest("reprehenderit",                 new String[]{{
                                add("maiores"),
                                add("dicta"),
                            }},                 new String[]{{
                                add("dolore"),
                                add("iusto"),
                            }}) {{
                dateEnvoi = "dicta";
                emetteur = "harum";
                gmtZone = SMSRequestGmtZoneEnum.AMERICA_MONTEVIDEO;
                nostop = "accusamus";
                numAzur = SMSRequestNumAzurEnum.ONE;
                repertoireId = "commodi";
                smslong = "repudiandae";
                tracker = new String[]{{
                    add("ipsum"),
                }};
                ucs2 = "quidem";
            }};            

            SendSmsMultiResponse res = sdk.sms.sendSmsMulti(req);

            if (res.smsReponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
