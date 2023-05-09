# Sms

### Available Operations

* [SendSms](#sendsms) - Envoyer un sms
* [SendSmsMulti](#sendsmsmulti) - Envoyer des SMS

## SendSms

Envoi un sms vers un unique destinataire

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Sms.SendSms(ctx, shared.SmsUniqueRequest{
        DateEnvoi: sdk.String("vero"),
        Emetteur: sdk.String("nihil"),
        GmtZone: shared.SmsUniqueRequestGmtZoneEnumAfricaWindhoek.ToPointer(),
        Keyid: "voluptatibus",
        Nostop: sdk.String("ipsa"),
        Num: "omnis",
        NumAzur: shared.SmsUniqueRequestNumAzurEnumOne.ToPointer(),
        Sms: "voluptate",
        Smslong: sdk.String("cum"),
        Tracker: sdk.String("perferendis"),
        Ucs2: sdk.String("doloremque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SMSReponse != nil {
        // handle response
    }
}
```

## SendSmsMulti

Envoi de SMS vers 1 ou plusieurs destinataires


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Sms.SendSmsMulti(ctx, shared.SMSRequest{
        DateEnvoi: sdk.String("reprehenderit"),
        Emetteur: sdk.String("ut"),
        GmtZone: shared.SMSRequestGmtZoneEnumPacificTongatapu.ToPointer(),
        Keyid: "dicta",
        Nostop: sdk.String("corporis"),
        Num: []string{
            "iusto",
            "dicta",
        },
        NumAzur: shared.SMSRequestNumAzurEnumOne.ToPointer(),
        RepertoireID: sdk.String("harum"),
        Sms: []string{
            "accusamus",
            "commodi",
        },
        Smslong: sdk.String("repudiandae"),
        Tracker: []string{
            "ipsum",
        },
        Ucs2: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SMSReponse != nil {
        // handle response
    }
}
```
