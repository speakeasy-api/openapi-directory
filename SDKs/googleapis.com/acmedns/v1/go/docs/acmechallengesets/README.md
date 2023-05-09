# AcmeChallengeSets

### Available Operations

* [AcmednsAcmeChallengeSetsGet](#acmednsacmechallengesetsget) - Gets the ACME challenge set for a given domain name. Domain names must be provided in Punycode.
* [AcmednsAcmeChallengeSetsRotateChallenges](#acmednsacmechallengesetsrotatechallenges) - Rotate the ACME challenges for a given domain name. By default, removes any challenges that are older than 30 days. Domain names must be provided in Punycode.

## AcmednsAcmeChallengeSetsGet

Gets the ACME challenge set for a given domain name. Domain names must be provided in Punycode.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AcmeChallengeSets.AcmednsAcmeChallengeSetsGet(ctx, operations.AcmednsAcmeChallengeSetsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        RootDomain: "molestiae",
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcmeChallengeSet != nil {
        // handle response
    }
}
```

## AcmednsAcmeChallengeSetsRotateChallenges

Rotate the ACME challenges for a given domain name. By default, removes any challenges that are older than 30 days. Domain names must be provided in Punycode.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AcmeChallengeSets.AcmednsAcmeChallengeSetsRotateChallenges(ctx, operations.AcmednsAcmeChallengeSetsRotateChallengesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RotateChallengesRequestInput: &shared.RotateChallengesRequestInput{
            AccessToken: sdk.String("iusto"),
            KeepExpiredRecords: sdk.Bool(false),
            RecordsToAdd: []shared.AcmeTxtRecordInput{
                shared.AcmeTxtRecordInput{
                    Digest: sdk.String("nisi"),
                    Fqdn: sdk.String("recusandae"),
                },
                shared.AcmeTxtRecordInput{
                    Digest: sdk.String("temporibus"),
                    Fqdn: sdk.String("ab"),
                },
                shared.AcmeTxtRecordInput{
                    Digest: sdk.String("quis"),
                    Fqdn: sdk.String("veritatis"),
                },
            },
            RecordsToRemove: []shared.AcmeTxtRecordInput{
                shared.AcmeTxtRecordInput{
                    Digest: sdk.String("perferendis"),
                    Fqdn: sdk.String("ipsam"),
                },
                shared.AcmeTxtRecordInput{
                    Digest: sdk.String("repellendus"),
                    Fqdn: sdk.String("sapiente"),
                },
                shared.AcmeTxtRecordInput{
                    Digest: sdk.String("quo"),
                    Fqdn: sdk.String("odit"),
                },
            },
        },
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        RootDomain: "totam",
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcmeChallengeSet != nil {
        // handle response
    }
}
```
