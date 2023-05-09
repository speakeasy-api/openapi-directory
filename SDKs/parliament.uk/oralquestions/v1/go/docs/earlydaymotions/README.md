# EarlyDayMotions

### Available Operations

* [PublishedEarlyDayMotionGet](#publishedearlydaymotionget) - Returns a single Early Day Motion by ID
* [GetEarlyDayMotionsList](#getearlydaymotionslist) - Returns a list of Early Day Motions

## PublishedEarlyDayMotionGet

Get a single Early Day Motion which has the ID specified.

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
    res, err := s.EarlyDayMotions.PublishedEarlyDayMotionGet(ctx, operations.PublishedEarlyDayMotionGetRequest{
        ID: 592845,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponseListPublishedWrittenQuestion != nil {
        // handle response
    }
}
```

## GetEarlyDayMotionsList

Get a list of Early Day Motions which meet the specified criteria. Only supports Published and Withdrawn status.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.EarlyDayMotions.GetEarlyDayMotionsList(ctx, operations.GetEarlyDayMotionsListRequest{
        ParametersCurrentStatusDateEnd: types.MustTimeFromString("2021-04-24T16:27:50.833Z"),
        ParametersCurrentStatusDateStart: types.MustTimeFromString("2021-04-14T16:47:33.722Z"),
        ParametersEdmIds: []int{
            847252,
            423655,
            623564,
        },
        ParametersIncludeSponsoredByMember: sdk.Bool(false),
        ParametersIsPrayer: sdk.Bool(false),
        ParametersMemberID: sdk.Int(645894),
        ParametersOrderBy: operations.GetEarlyDayMotionsListParametersOrderByEnumTitleAsc.ToPointer(),
        ParametersSearchTerm: sdk.String("iure"),
        ParametersSkip: sdk.Int(297534),
        ParametersStatuses: []GetEarlyDayMotionsListParametersStatusesEnum{
            operations.GetEarlyDayMotionsListParametersStatusesEnumPublished,
            operations.GetEarlyDayMotionsListParametersStatusesEnumWithdrawn,
            operations.GetEarlyDayMotionsListParametersStatusesEnumPublished,
            operations.GetEarlyDayMotionsListParametersStatusesEnumPublished,
        },
        ParametersTabledEndDate: types.MustTimeFromString("2022-03-18T00:29:19.137Z"),
        ParametersTabledStartDate: types.MustTimeFromString("2021-05-31T20:38:28.793Z"),
        ParametersTake: sdk.Int(479977),
        ParametersUINWithAmendmentSuffix: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponseListPublishedWrittenQuestion != nil {
        // handle response
    }
}
```
