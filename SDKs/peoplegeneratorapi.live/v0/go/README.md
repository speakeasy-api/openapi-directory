# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/peoplegeneratorapi.live/v0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PeoplegeneratorapiApplication.Age(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [PeoplegeneratorapiApplication](docs/peoplegeneratorapiapplication/README.md)

* [Age](docs/peoplegeneratorapiapplication/README.md#age)
* [Age1](docs/peoplegeneratorapiapplication/README.md#age1)
* [Bloodtype](docs/peoplegeneratorapiapplication/README.md#bloodtype)
* [Bloodtype1](docs/peoplegeneratorapiapplication/README.md#bloodtype1)
* [Creditcardnumber](docs/peoplegeneratorapiapplication/README.md#creditcardnumber)
* [Creditcardnumber1](docs/peoplegeneratorapiapplication/README.md#creditcardnumber1)
* [Creditscore](docs/peoplegeneratorapiapplication/README.md#creditscore)
* [Creditscore1](docs/peoplegeneratorapiapplication/README.md#creditscore1)
* [Email](docs/peoplegeneratorapiapplication/README.md#email)
* [Email1](docs/peoplegeneratorapiapplication/README.md#email1)
* [Eyecolor](docs/peoplegeneratorapiapplication/README.md#eyecolor)
* [Eyecolor1](docs/peoplegeneratorapiapplication/README.md#eyecolor1)
* [Gender](docs/peoplegeneratorapiapplication/README.md#gender)
* [Gender1](docs/peoplegeneratorapiapplication/README.md#gender1)
* [GenerateAddress](docs/peoplegeneratorapiapplication/README.md#generateaddress)
* [GenerateAddress1](docs/peoplegeneratorapiapplication/README.md#generateaddress1)
* [GenerateLifeStory](docs/peoplegeneratorapiapplication/README.md#generatelifestory)
* [GenerateLifeStory1](docs/peoplegeneratorapiapplication/README.md#generatelifestory1)
* [GetCompressedPerson](docs/peoplegeneratorapiapplication/README.md#getcompressedperson)
* [GetCompressedPerson1](docs/peoplegeneratorapiapplication/README.md#getcompressedperson1)
* [GetPerson](docs/peoplegeneratorapiapplication/README.md#getperson)
* [GetPerson1](docs/peoplegeneratorapiapplication/README.md#getperson1)
* [Gpa](docs/peoplegeneratorapiapplication/README.md#gpa)
* [Gpa1](docs/peoplegeneratorapiapplication/README.md#gpa1)
* [Haschildren](docs/peoplegeneratorapiapplication/README.md#haschildren)
* [Haschildren1](docs/peoplegeneratorapiapplication/README.md#haschildren1)
* [Hasdegree](docs/peoplegeneratorapiapplication/README.md#hasdegree)
* [Hasdegree1](docs/peoplegeneratorapiapplication/README.md#hasdegree1)
* [Height](docs/peoplegeneratorapiapplication/README.md#height)
* [Height1](docs/peoplegeneratorapiapplication/README.md#height1)
* [Income](docs/peoplegeneratorapiapplication/README.md#income)
* [Income1](docs/peoplegeneratorapiapplication/README.md#income1)
* [Job](docs/peoplegeneratorapiapplication/README.md#job)
* [Job1](docs/peoplegeneratorapiapplication/README.md#job1)
* [Maritalstatus](docs/peoplegeneratorapiapplication/README.md#maritalstatus)
* [Maritalstatus1](docs/peoplegeneratorapiapplication/README.md#maritalstatus1)
* [Name](docs/peoplegeneratorapiapplication/README.md#name)
* [Name1](docs/peoplegeneratorapiapplication/README.md#name1)
* [PoliticalLeaning](docs/peoplegeneratorapiapplication/README.md#politicalleaning)
* [PoliticalLeaning1](docs/peoplegeneratorapiapplication/README.md#politicalleaning1)
* [Religion](docs/peoplegeneratorapiapplication/README.md#religion)
* [Religion1](docs/peoplegeneratorapiapplication/README.md#religion1)
* [Username](docs/peoplegeneratorapiapplication/README.md#username)
* [Username1](docs/peoplegeneratorapiapplication/README.md#username1)
* [Weight](docs/peoplegeneratorapiapplication/README.md#weight)
* [Weight1](docs/peoplegeneratorapiapplication/README.md#weight1)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
