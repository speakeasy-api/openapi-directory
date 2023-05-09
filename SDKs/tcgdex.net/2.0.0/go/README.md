# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/tcgdex.net/2.0.0/go
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
    res, err := s.Cards.Cards(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CardResumes != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Cards](docs/cards/README.md)

* [Cards](docs/cards/README.md#cards) - fetch the list of cards
* [FindPetsByTags](docs/cards/README.md#findpetsbytags) - Finds Card by Global ID
* [GetSetsSetCardLocalID](docs/cards/README.md#getsetssetcardlocalid)

### [Filters](docs/filters/README.md)

* [GetCategories](docs/filters/README.md#getcategories)
* [GetCategoriesCategory](docs/filters/README.md#getcategoriescategory)
* [GetDexIds](docs/filters/README.md#getdexids)
* [GetDexIdsDexID](docs/filters/README.md#getdexidsdexid)
* [GetEnergyTypes](docs/filters/README.md#getenergytypes)
* [GetEnergyTypesEnergyType](docs/filters/README.md#getenergytypesenergytype)
* [GetHp](docs/filters/README.md#gethp)
* [GetHpHp](docs/filters/README.md#gethphp)
* [GetIllustrators](docs/filters/README.md#getillustrators)
* [GetIllustratorsIllustrator](docs/filters/README.md#getillustratorsillustrator)
* [GetRarities](docs/filters/README.md#getrarities)
* [GetRaritiesRarity](docs/filters/README.md#getraritiesrarity)
* [GetRegulationMarks](docs/filters/README.md#getregulationmarks)
* [GetRegulationMarksRegulationMark](docs/filters/README.md#getregulationmarksregulationmark)
* [GetRetreats](docs/filters/README.md#getretreats)
* [GetRetreatsRetreat](docs/filters/README.md#getretreatsretreat)
* [GetSeries](docs/filters/README.md#getseries)
* [GetSeriesSerie](docs/filters/README.md#getseriesserie)
* [GetSets](docs/filters/README.md#getsets)
* [GetSetsSet](docs/filters/README.md#getsetsset)
* [GetStages](docs/filters/README.md#getstages)
* [GetStagesStage](docs/filters/README.md#getstagesstage)
* [GetSuffixes](docs/filters/README.md#getsuffixes)
* [GetSuffixesSuffix](docs/filters/README.md#getsuffixessuffix)
* [GetTrainerTypes](docs/filters/README.md#gettrainertypes)
* [GetTrainerTypesTrainerType](docs/filters/README.md#gettrainertypestrainertype)
* [GetTypes](docs/filters/README.md#gettypes)
* [GetTypesType](docs/filters/README.md#gettypestype)
* [GetVariants](docs/filters/README.md#getvariants)
* [GetVariantsVariant](docs/filters/README.md#getvariantsvariant)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
