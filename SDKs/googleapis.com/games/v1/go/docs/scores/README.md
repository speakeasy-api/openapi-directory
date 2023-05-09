# Scores

### Available Operations

* [GamesScoresGet](#gamesscoresget) - Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.
* [GamesScoresList](#gamesscoreslist) - Lists the scores in a leaderboard, starting from the top.
* [GamesScoresListWindow](#gamesscoreslistwindow) - Lists the scores in a leaderboard around (and including) a player's score.
* [GamesScoresSubmit](#gamesscoressubmit) - Submits a score to the specified leaderboard.
* [GamesScoresSubmitMultiple](#gamesscoressubmitmultiple) - Submits multiple scores to leaderboards.

## GamesScoresGet

Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.

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
    res, err := s.Scores.GamesScoresGet(ctx, operations.GamesScoresGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("blanditiis"),
        IncludeRankType: operations.GamesScoresGetIncludeRankTypeEnumSocial.ToPointer(),
        Key: sdk.String("eaque"),
        Language: sdk.String("occaecati"),
        LeaderboardID: "rerum",
        MaxResults: sdk.Int64(237893),
        OauthToken: sdk.String("asperiores"),
        PageToken: sdk.String("earum"),
        PlayerID: "modi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        TimeSpan: operations.GamesScoresGetTimeSpanEnumWeekly,
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.GamesScoresGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerLeaderboardScoreListResponse != nil {
        // handle response
    }
}
```

## GamesScoresList

Lists the scores in a leaderboard, starting from the top.

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
    res, err := s.Scores.GamesScoresList(ctx, operations.GamesScoresListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("delectus"),
        Collection: operations.GamesScoresListCollectionEnumPublic,
        Fields: sdk.String("quos"),
        Key: sdk.String("aliquid"),
        Language: sdk.String("dolorem"),
        LeaderboardID: "dolorem",
        MaxResults: sdk.Int64(222443),
        OauthToken: sdk.String("qui"),
        PageToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        TimeSpan: operations.GamesScoresListTimeSpanEnumWeekly,
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.GamesScoresListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LeaderboardScores != nil {
        // handle response
    }
}
```

## GamesScoresListWindow

Lists the scores in a leaderboard around (and including) a player's score.

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
    res, err := s.Scores.GamesScoresListWindow(ctx, operations.GamesScoresListWindowRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorum"),
        Collection: operations.GamesScoresListWindowCollectionEnumPublic,
        Fields: sdk.String("veritatis"),
        Key: sdk.String("ipsa"),
        Language: sdk.String("ipsa"),
        LeaderboardID: "iure",
        MaxResults: sdk.Int64(487838),
        OauthToken: sdk.String("quaerat"),
        PageToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        ResultsAbove: sdk.Int64(976405),
        ReturnTopIfAbsent: sdk.Bool(false),
        TimeSpan: operations.GamesScoresListWindowTimeSpanEnumAllTime,
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("eos"),
    }, operations.GamesScoresListWindowSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LeaderboardScores != nil {
        // handle response
    }
}
```

## GamesScoresSubmit

Submits a score to the specified leaderboard.

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
    res, err := s.Scores.GamesScoresSubmit(ctx, operations.GamesScoresSubmitRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("soluta"),
        Key: sdk.String("dolorum"),
        Language: sdk.String("iusto"),
        LeaderboardID: "voluptate",
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        Score: "omnis",
        ScoreTag: sdk.String("necessitatibus"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("asperiores"),
    }, operations.GamesScoresSubmitSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerScoreResponse != nil {
        // handle response
    }
}
```

## GamesScoresSubmitMultiple

Submits multiple scores to leaderboards.

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
    res, err := s.Scores.GamesScoresSubmitMultiple(ctx, operations.GamesScoresSubmitMultipleRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PlayerScoreSubmissionList: &shared.PlayerScoreSubmissionList{
            Kind: sdk.String("ipsum"),
            Scores: []shared.ScoreSubmission{
                shared.ScoreSubmission{
                    Kind: sdk.String("id"),
                    LeaderboardID: sdk.String("saepe"),
                    Score: sdk.String("eius"),
                    ScoreTag: sdk.String("aspernatur"),
                    Signature: sdk.String("perferendis"),
                },
                shared.ScoreSubmission{
                    Kind: sdk.String("amet"),
                    LeaderboardID: sdk.String("optio"),
                    Score: sdk.String("accusamus"),
                    ScoreTag: sdk.String("ad"),
                    Signature: sdk.String("saepe"),
                },
            },
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("minima"),
        Key: sdk.String("repellendus"),
        Language: sdk.String("totam"),
        OauthToken: sdk.String("similique"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.GamesScoresSubmitMultipleSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerScoreListResponse != nil {
        // handle response
    }
}
```
