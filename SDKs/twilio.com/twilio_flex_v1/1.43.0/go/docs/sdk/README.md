# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateChannel](#createchannel)
* [CreateFlexFlow](#createflexflow)
* [CreateInsightsAssessments](#createinsightsassessments) - Add assessments against conversation to dynamo db. Used in assessments screen by user. Users can select the questionnaire and pick up answers for each and every question.
* [CreateInsightsAssessmentsComment](#createinsightsassessmentscomment) - To create a comment assessment for a conversation
* [CreateInsightsQuestionnaires](#createinsightsquestionnaires) - To create a Questionnaire
* [CreateInsightsQuestionnairesCategory](#createinsightsquestionnairescategory) - To create a category for Questions
* [CreateInsightsQuestionnairesQuestion](#createinsightsquestionnairesquestion) - To create a question for a Category
* [CreateInsightsSession](#createinsightssession) - To obtain session details for fetching reports and dashboards
* [CreateInteraction](#createinteraction) - Create a new Interaction.
* [CreateInteractionChannelInvite](#createinteractionchannelinvite) - Invite an Agent or a TaskQueue to a Channel.
* [CreateInteractionChannelParticipant](#createinteractionchannelparticipant) - Add a Participant to a Channel.
* [CreateWebChannel](#createwebchannel)
* [DeleteChannel](#deletechannel)
* [DeleteFlexFlow](#deleteflexflow)
* [DeleteInsightsQuestionnaires](#deleteinsightsquestionnaires) - To delete the questionnaire
* [DeleteInsightsQuestionnairesCategory](#deleteinsightsquestionnairescategory)
* [DeleteInsightsQuestionnairesQuestion](#deleteinsightsquestionnairesquestion)
* [DeleteWebChannel](#deletewebchannel)
* [FetchChannel](#fetchchannel)
* [FetchConfiguration](#fetchconfiguration)
* [FetchFlexFlow](#fetchflexflow)
* [FetchInsightsQuestionnaires](#fetchinsightsquestionnaires) - To get the Questionnaire Detail
* [FetchInsightsSettingsAnswersets](#fetchinsightssettingsanswersets) - To get the Answer Set Settings for an Account
* [FetchInsightsSettingsComment](#fetchinsightssettingscomment) - To get the Comment Settings for an Account
* [FetchInsightsUserRoles](#fetchinsightsuserroles) - This is used by Flex UI and Quality Management to fetch the Flex Insights roles for the user
* [FetchInteraction](#fetchinteraction)
* [FetchInteractionChannel](#fetchinteractionchannel) - Fetch a Channel for an Interaction.
* [FetchWebChannel](#fetchwebchannel)
* [ListChannel](#listchannel)
* [ListFlexFlow](#listflexflow)
* [ListInsightsAssessments](#listinsightsassessments) - Get assessments done for a conversation by logged in user
* [ListInsightsAssessmentsComment](#listinsightsassessmentscomment) - To create a comment assessment for a conversation
* [ListInsightsConversations](#listinsightsconversations) - To get conversation with segment id
* [ListInsightsQuestionnaires](#listinsightsquestionnaires) - To get all questionnaires with questions
* [ListInsightsQuestionnairesCategory](#listinsightsquestionnairescategory) - To get all the categories
* [ListInsightsQuestionnairesQuestion](#listinsightsquestionnairesquestion) - To get all the question for the given categories
* [ListInsightsSegments](#listinsightssegments) - To get segments for given reservation Ids
* [ListInteractionChannel](#listinteractionchannel) - List all Channels for an Interaction.
* [ListInteractionChannelInvite](#listinteractionchannelinvite) - List all Invites for a Channel.
* [ListInteractionChannelParticipant](#listinteractionchannelparticipant) - List all Participants for a Channel.
* [ListWebChannel](#listwebchannel)
* [UpdateFlexFlow](#updateflexflow)
* [UpdateInsightsAssessments](#updateinsightsassessments) - Update a specific Assessment assessed earlier
* [UpdateInsightsQuestionnaires](#updateinsightsquestionnaires) - To update the questionnaire
* [UpdateInsightsQuestionnairesCategory](#updateinsightsquestionnairescategory) - To update the category for Questions
* [UpdateInsightsQuestionnairesQuestion](#updateinsightsquestionnairesquestion) - To update the question
* [UpdateInteractionChannel](#updateinteractionchannel) - Update an existing Interaction Channel.
* [UpdateInteractionChannelParticipant](#updateinteractionchannelparticipant) - Update an existing Channel Participant.
* [UpdateWebChannel](#updatewebchannel)

## CreateChannel

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
    res, err := s.SDK.CreateChannel(ctx, operations.CreateChannelCreateChannelRequest{
        ChatFriendlyName: "error",
        ChatUniqueName: sdk.String("deserunt"),
        ChatUserFriendlyName: "suscipit",
        FlexFlowSid: "iure",
        Identity: "magnam",
        LongLived: sdk.Bool(false),
        PreEngagementData: sdk.String("debitis"),
        Target: sdk.String("ipsa"),
        TaskAttributes: sdk.String("delectus"),
        TaskSid: sdk.String("tempora"),
    }, operations.CreateChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1Channel != nil {
        // handle response
    }
}
```

## CreateFlexFlow

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
    res, err := s.SDK.CreateFlexFlow(ctx, operations.CreateFlexFlowCreateFlexFlowRequest{
        ChannelType: shared.FlexFlowEnumChannelTypeEnumFacebook,
        ChatServiceSid: "molestiae",
        ContactIdentity: sdk.String("minus"),
        Enabled: sdk.Bool(false),
        FriendlyName: "placeat",
        IntegrationChannel: sdk.String("voluptatum"),
        IntegrationCreationOnMessage: sdk.Bool(false),
        IntegrationFlowSid: sdk.String("iusto"),
        IntegrationPriority: sdk.Int64(568045),
        IntegrationRetryCount: sdk.Int64(392785),
        IntegrationTimeout: sdk.Int64(925597),
        IntegrationURL: sdk.String("https://bite-sized-favorite.com"),
        IntegrationWorkflowSid: sdk.String("deserunt"),
        IntegrationWorkspaceSid: sdk.String("perferendis"),
        IntegrationType: shared.FlexFlowEnumIntegrationTypeEnumExternal.ToPointer(),
        JanitorEnabled: sdk.Bool(false),
        LongLived: sdk.Bool(false),
    }, operations.CreateFlexFlowSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1FlexFlow != nil {
        // handle response
    }
}
```

## CreateInsightsAssessments

Add assessments against conversation to dynamo db. Used in assessments screen by user. Users can select the questionnaire and pick up answers for each and every question.

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
    res, err := s.SDK.CreateInsightsAssessments(ctx, operations.CreateInsightsAssessmentsRequest{
        RequestBody: &operations.CreateInsightsAssessmentsCreateInsightsAssessmentsRequest{
            AgentID: "repellendus",
            AnswerID: "sapiente",
            AnswerText: "quo",
            CategoryName: "odit",
            CategorySid: "at",
            MetricID: "at",
            MetricName: "maiores",
            Offset: 4736.08,
            QuestionnaireSid: "quod",
            SegmentID: "quod",
            UserEmail: "esse",
            UserName: "Jovan.Sauer72",
        },
        Token: sdk.String("officia"),
    }, operations.CreateInsightsAssessmentsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1InsightsAssessments != nil {
        // handle response
    }
}
```

## CreateInsightsAssessmentsComment

To create a comment assessment for a conversation

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
    res, err := s.SDK.CreateInsightsAssessmentsComment(ctx, operations.CreateInsightsAssessmentsCommentRequest{
        RequestBody: &operations.CreateInsightsAssessmentsCommentCreateInsightsAssessmentsCommentRequest{
            AgentID: "occaecati",
            CategoryID: "fugit",
            CategoryName: "deleniti",
            Comment: "hic",
            Offset: 7586.16,
            SegmentID: "totam",
            UserEmail: "beatae",
            UserName: "Haskell18",
        },
        Token: sdk.String("impedit"),
    }, operations.CreateInsightsAssessmentsCommentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1InsightsAssessmentsComment != nil {
        // handle response
    }
}
```

## CreateInsightsQuestionnaires

To create a Questionnaire

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
    res, err := s.SDK.CreateInsightsQuestionnaires(ctx, operations.CreateInsightsQuestionnairesRequest{
        RequestBody: &operations.CreateInsightsQuestionnairesCreateInsightsQuestionnairesRequest{
            Active: sdk.Bool(false),
            Description: sdk.String("cum"),
            Name: "Edna Mante II",
            QuestionSids: []string{
                "sed",
                "iste",
                "dolor",
            },
        },
        Token: sdk.String("natus"),
    }, operations.CreateInsightsQuestionnairesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1InsightsQuestionnaires != nil {
        // handle response
    }
}
```

## CreateInsightsQuestionnairesCategory

To create a category for Questions

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
    res, err := s.SDK.CreateInsightsQuestionnairesCategory(ctx, operations.CreateInsightsQuestionnairesCategoryRequest{
        RequestBody: &operations.CreateInsightsQuestionnairesCategoryCreateInsightsQuestionnairesCategoryRequest{
            Name: "May Turcotte",
        },
        Token: sdk.String("corporis"),
    }, operations.CreateInsightsQuestionnairesCategorySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1InsightsQuestionnairesCategory != nil {
        // handle response
    }
}
```

## CreateInsightsQuestionnairesQuestion

To create a question for a Category

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
    res, err := s.SDK.CreateInsightsQuestionnairesQuestion(ctx, operations.CreateInsightsQuestionnairesQuestionRequest{
        RequestBody: &operations.CreateInsightsQuestionnairesQuestionCreateInsightsQuestionnairesQuestionRequest{
            AllowNa: false,
            AnswerSetID: "iste",
            CategorySid: "iure",
            Description: sdk.String("saepe"),
            Question: "quidem",
        },
        Token: sdk.String("architecto"),
    }, operations.CreateInsightsQuestionnairesQuestionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1InsightsQuestionnairesQuestion != nil {
        // handle response
    }
}
```

## CreateInsightsSession

To obtain session details for fetching reports and dashboards

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
    res, err := s.SDK.CreateInsightsSession(ctx, operations.CreateInsightsSessionRequest{
        Authorization: sdk.String("ipsa"),
    }, operations.CreateInsightsSessionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1InsightsSession != nil {
        // handle response
    }
}
```

## CreateInteraction

Create a new Interaction.

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
    res, err := s.SDK.CreateInteraction(ctx, operations.CreateInteractionCreateInteractionRequest{
        Channel: "reiciendis",
        Routing: "est",
    }, operations.CreateInteractionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1Interaction != nil {
        // handle response
    }
}
```

## CreateInteractionChannelInvite

Invite an Agent or a TaskQueue to a Channel.

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
    res, err := s.SDK.CreateInteractionChannelInvite(ctx, operations.CreateInteractionChannelInviteRequest{
        ChannelSid: "mollitia",
        InteractionSid: "laborum",
        RequestBody: &operations.CreateInteractionChannelInviteCreateInteractionChannelInviteRequest{
            Routing: "dolores",
        },
    }, operations.CreateInteractionChannelInviteSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1InteractionInteractionChannelInteractionChannelInvite != nil {
        // handle response
    }
}
```

## CreateInteractionChannelParticipant

Add a Participant to a Channel.

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
    res, err := s.SDK.CreateInteractionChannelParticipant(ctx, operations.CreateInteractionChannelParticipantRequest{
        ChannelSid: "dolorem",
        InteractionSid: "corporis",
        RequestBody: &operations.CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest{
            MediaProperties: "explicabo",
            Type: shared.InteractionChannelParticipantEnumTypeEnumAgent,
        },
    }, operations.CreateInteractionChannelParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1InteractionInteractionChannelInteractionChannelParticipant != nil {
        // handle response
    }
}
```

## CreateWebChannel

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
    res, err := s.SDK.CreateWebChannel(ctx, operations.CreateWebChannelCreateWebChannelRequest{
        ChatFriendlyName: "enim",
        ChatUniqueName: sdk.String("omnis"),
        CustomerFriendlyName: "nemo",
        FlexFlowSid: "minima",
        Identity: "excepturi",
        PreEngagementData: sdk.String("accusantium"),
    }, operations.CreateWebChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1WebChannel != nil {
        // handle response
    }
}
```

## DeleteChannel

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
    res, err := s.SDK.DeleteChannel(ctx, operations.DeleteChannelRequest{
        Sid: "iure",
    }, operations.DeleteChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteFlexFlow

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
    res, err := s.SDK.DeleteFlexFlow(ctx, operations.DeleteFlexFlowRequest{
        Sid: "culpa",
    }, operations.DeleteFlexFlowSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteInsightsQuestionnaires

To delete the questionnaire

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
    res, err := s.SDK.DeleteInsightsQuestionnaires(ctx, operations.DeleteInsightsQuestionnairesRequest{
        QuestionnaireSid: "doloribus",
        Token: sdk.String("sapiente"),
    }, operations.DeleteInsightsQuestionnairesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteInsightsQuestionnairesCategory

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
    res, err := s.SDK.DeleteInsightsQuestionnairesCategory(ctx, operations.DeleteInsightsQuestionnairesCategoryRequest{
        CategorySid: "architecto",
        Token: sdk.String("mollitia"),
    }, operations.DeleteInsightsQuestionnairesCategorySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteInsightsQuestionnairesQuestion

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
    res, err := s.SDK.DeleteInsightsQuestionnairesQuestion(ctx, operations.DeleteInsightsQuestionnairesQuestionRequest{
        QuestionSid: "dolorem",
        Token: sdk.String("culpa"),
    }, operations.DeleteInsightsQuestionnairesQuestionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteWebChannel

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
    res, err := s.SDK.DeleteWebChannel(ctx, operations.DeleteWebChannelRequest{
        Sid: "consequuntur",
    }, operations.DeleteWebChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FetchChannel

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
    res, err := s.SDK.FetchChannel(ctx, operations.FetchChannelRequest{
        Sid: "repellat",
    }, operations.FetchChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1Channel != nil {
        // handle response
    }
}
```

## FetchConfiguration

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
    res, err := s.SDK.FetchConfiguration(ctx, operations.FetchConfigurationRequest{
        UIVersion: sdk.String("mollitia"),
    }, operations.FetchConfigurationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1Configuration != nil {
        // handle response
    }
}
```

## FetchFlexFlow

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
    res, err := s.SDK.FetchFlexFlow(ctx, operations.FetchFlexFlowRequest{
        Sid: "occaecati",
    }, operations.FetchFlexFlowSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1FlexFlow != nil {
        // handle response
    }
}
```

## FetchInsightsQuestionnaires

To get the Questionnaire Detail

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
    res, err := s.SDK.FetchInsightsQuestionnaires(ctx, operations.FetchInsightsQuestionnairesRequest{
        QuestionnaireSid: "numquam",
        Token: sdk.String("commodi"),
    }, operations.FetchInsightsQuestionnairesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1InsightsQuestionnaires != nil {
        // handle response
    }
}
```

## FetchInsightsSettingsAnswersets

To get the Answer Set Settings for an Account

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
    res, err := s.SDK.FetchInsightsSettingsAnswersets(ctx, operations.FetchInsightsSettingsAnswersetsRequest{
        Token: sdk.String("quam"),
    }, operations.FetchInsightsSettingsAnswersetsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1InsightsSettingsAnswersets != nil {
        // handle response
    }
}
```

## FetchInsightsSettingsComment

To get the Comment Settings for an Account

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
    res, err := s.SDK.FetchInsightsSettingsComment(ctx, operations.FetchInsightsSettingsCommentRequest{
        Token: sdk.String("molestiae"),
    }, operations.FetchInsightsSettingsCommentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1InsightsSettingsComment != nil {
        // handle response
    }
}
```

## FetchInsightsUserRoles

This is used by Flex UI and Quality Management to fetch the Flex Insights roles for the user

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
    res, err := s.SDK.FetchInsightsUserRoles(ctx, operations.FetchInsightsUserRolesRequest{
        Authorization: sdk.String("velit"),
    }, operations.FetchInsightsUserRolesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1InsightsUserRoles != nil {
        // handle response
    }
}
```

## FetchInteraction

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
    res, err := s.SDK.FetchInteraction(ctx, operations.FetchInteractionRequest{
        Sid: "error",
    }, operations.FetchInteractionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1Interaction != nil {
        // handle response
    }
}
```

## FetchInteractionChannel

Fetch a Channel for an Interaction.

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
    res, err := s.SDK.FetchInteractionChannel(ctx, operations.FetchInteractionChannelRequest{
        InteractionSid: "quia",
        Sid: "quis",
    }, operations.FetchInteractionChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1InteractionInteractionChannel != nil {
        // handle response
    }
}
```

## FetchWebChannel

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
    res, err := s.SDK.FetchWebChannel(ctx, operations.FetchWebChannelRequest{
        Sid: "vitae",
    }, operations.FetchWebChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1WebChannel != nil {
        // handle response
    }
}
```

## ListChannel

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
    res, err := s.SDK.ListChannel(ctx, operations.ListChannelRequest{
        Page: sdk.Int64(674752),
        PageSize: sdk.Int64(656330),
        PageToken: sdk.String("enim"),
    }, operations.ListChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListChannelResponse != nil {
        // handle response
    }
}
```

## ListFlexFlow

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
    res, err := s.SDK.ListFlexFlow(ctx, operations.ListFlexFlowRequest{
        FriendlyName: sdk.String("odit"),
        Page: sdk.Int64(778346),
        PageSize: sdk.Int64(196582),
        PageToken: sdk.String("tenetur"),
    }, operations.ListFlexFlowSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFlexFlowResponse != nil {
        // handle response
    }
}
```

## ListInsightsAssessments

Get assessments done for a conversation by logged in user

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
    res, err := s.SDK.ListInsightsAssessments(ctx, operations.ListInsightsAssessmentsRequest{
        Page: sdk.Int64(368725),
        PageSize: sdk.Int64(662527),
        PageToken: sdk.String("possimus"),
        SegmentID: sdk.String("aut"),
        Token: sdk.String("quasi"),
    }, operations.ListInsightsAssessmentsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInsightsAssessmentsResponse != nil {
        // handle response
    }
}
```

## ListInsightsAssessmentsComment

To create a comment assessment for a conversation

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
    res, err := s.SDK.ListInsightsAssessmentsComment(ctx, operations.ListInsightsAssessmentsCommentRequest{
        AgentID: sdk.String("error"),
        Page: sdk.Int64(837945),
        PageSize: sdk.Int64(673660),
        PageToken: sdk.String("quasi"),
        SegmentID: sdk.String("reiciendis"),
        Token: sdk.String("voluptatibus"),
    }, operations.ListInsightsAssessmentsCommentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInsightsAssessmentsCommentResponse != nil {
        // handle response
    }
}
```

## ListInsightsConversations

To get conversation with segment id

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
    res, err := s.SDK.ListInsightsConversations(ctx, operations.ListInsightsConversationsRequest{
        Page: sdk.Int64(878194),
        PageSize: sdk.Int64(468651),
        PageToken: sdk.String("praesentium"),
        SegmentID: sdk.String("voluptatibus"),
        Token: sdk.String("ipsa"),
    }, operations.ListInsightsConversationsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInsightsConversationsResponse != nil {
        // handle response
    }
}
```

## ListInsightsQuestionnaires

To get all questionnaires with questions

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
    res, err := s.SDK.ListInsightsQuestionnaires(ctx, operations.ListInsightsQuestionnairesRequest{
        IncludeInactive: sdk.Bool(false),
        Page: sdk.Int64(604846),
        PageSize: sdk.Int64(451159),
        PageToken: sdk.String("cum"),
        Token: sdk.String("perferendis"),
    }, operations.ListInsightsQuestionnairesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInsightsQuestionnairesResponse != nil {
        // handle response
    }
}
```

## ListInsightsQuestionnairesCategory

To get all the categories

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
    res, err := s.SDK.ListInsightsQuestionnairesCategory(ctx, operations.ListInsightsQuestionnairesCategoryRequest{
        Page: sdk.Int64(39187),
        PageSize: sdk.Int64(441711),
        PageToken: sdk.String("ut"),
        Token: sdk.String("maiores"),
    }, operations.ListInsightsQuestionnairesCategorySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInsightsQuestionnairesCategoryResponse != nil {
        // handle response
    }
}
```

## ListInsightsQuestionnairesQuestion

To get all the question for the given categories

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
    res, err := s.SDK.ListInsightsQuestionnairesQuestion(ctx, operations.ListInsightsQuestionnairesQuestionRequest{
        CategorySid: []string{
            "corporis",
        },
        Page: sdk.Int64(296140),
        PageSize: sdk.Int64(480894),
        PageToken: sdk.String("dicta"),
        Token: sdk.String("harum"),
    }, operations.ListInsightsQuestionnairesQuestionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInsightsQuestionnairesQuestionResponse != nil {
        // handle response
    }
}
```

## ListInsightsSegments

To get segments for given reservation Ids

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
    res, err := s.SDK.ListInsightsSegments(ctx, operations.ListInsightsSegmentsRequest{
        Page: sdk.Int64(317983),
        PageSize: sdk.Int64(880476),
        PageToken: sdk.String("commodi"),
        ReservationID: []string{
            "quae",
            "ipsum",
            "quidem",
            "molestias",
        },
        SegmentID: sdk.String("excepturi"),
        Token: sdk.String("pariatur"),
    }, operations.ListInsightsSegmentsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInsightsSegmentsResponse != nil {
        // handle response
    }
}
```

## ListInteractionChannel

List all Channels for an Interaction.

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
    res, err := s.SDK.ListInteractionChannel(ctx, operations.ListInteractionChannelRequest{
        InteractionSid: "modi",
        Page: sdk.Int64(508969),
        PageSize: sdk.Int64(523248),
        PageToken: sdk.String("voluptates"),
    }, operations.ListInteractionChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInteractionChannelResponse != nil {
        // handle response
    }
}
```

## ListInteractionChannelInvite

List all Invites for a Channel.

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
    res, err := s.SDK.ListInteractionChannelInvite(ctx, operations.ListInteractionChannelInviteRequest{
        ChannelSid: "quasi",
        InteractionSid: "repudiandae",
        Page: sdk.Int64(575947),
        PageSize: sdk.Int64(83112),
        PageToken: sdk.String("itaque"),
    }, operations.ListInteractionChannelInviteSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInteractionChannelInviteResponse != nil {
        // handle response
    }
}
```

## ListInteractionChannelParticipant

List all Participants for a Channel.

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
    res, err := s.SDK.ListInteractionChannelParticipant(ctx, operations.ListInteractionChannelParticipantRequest{
        ChannelSid: "incidunt",
        InteractionSid: "enim",
        Page: sdk.Int64(9356),
        PageSize: sdk.Int64(667411),
        PageToken: sdk.String("quibusdam"),
    }, operations.ListInteractionChannelParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInteractionChannelParticipantResponse != nil {
        // handle response
    }
}
```

## ListWebChannel

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
    res, err := s.SDK.ListWebChannel(ctx, operations.ListWebChannelRequest{
        Page: sdk.Int64(131797),
        PageSize: sdk.Int64(647174),
        PageToken: sdk.String("distinctio"),
    }, operations.ListWebChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWebChannelResponse != nil {
        // handle response
    }
}
```

## UpdateFlexFlow

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
    res, err := s.SDK.UpdateFlexFlow(ctx, operations.UpdateFlexFlowRequest{
        RequestBody: &operations.UpdateFlexFlowUpdateFlexFlowRequest{
            ChannelType: shared.FlexFlowEnumChannelTypeEnumCustom.ToPointer(),
            ChatServiceSid: sdk.String("labore"),
            ContactIdentity: sdk.String("modi"),
            Enabled: sdk.Bool(false),
            FriendlyName: sdk.String("qui"),
            IntegrationChannel: sdk.String("aliquid"),
            IntegrationCreationOnMessage: sdk.Bool(false),
            IntegrationFlowSid: sdk.String("cupiditate"),
            IntegrationPriority: sdk.Int64(552822),
            IntegrationRetryCount: sdk.Int64(20107),
            IntegrationTimeout: sdk.Int64(164940),
            IntegrationURL: sdk.String("https://hard-accordion.com"),
            IntegrationWorkflowSid: sdk.String("dolorum"),
            IntegrationWorkspaceSid: sdk.String("excepturi"),
            IntegrationType: shared.FlexFlowEnumIntegrationTypeEnumStudio.ToPointer(),
            JanitorEnabled: sdk.Bool(false),
            LongLived: sdk.Bool(false),
        },
        Sid: "facilis",
    }, operations.UpdateFlexFlowSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1FlexFlow != nil {
        // handle response
    }
}
```

## UpdateInsightsAssessments

Update a specific Assessment assessed earlier

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
    res, err := s.SDK.UpdateInsightsAssessments(ctx, operations.UpdateInsightsAssessmentsRequest{
        AssessmentSid: "tempore",
        RequestBody: &operations.UpdateInsightsAssessmentsUpdateInsightsAssessmentsRequest{
            AnswerID: "labore",
            AnswerText: "delectus",
            Offset: 4332.88,
        },
        Token: sdk.String("non"),
    }, operations.UpdateInsightsAssessmentsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1InsightsAssessments != nil {
        // handle response
    }
}
```

## UpdateInsightsQuestionnaires

To update the questionnaire

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
    res, err := s.SDK.UpdateInsightsQuestionnaires(ctx, operations.UpdateInsightsQuestionnairesRequest{
        QuestionnaireSid: "eligendi",
        RequestBody: &operations.UpdateInsightsQuestionnairesUpdateInsightsQuestionnairesRequest{
            Active: false,
            Description: sdk.String("sint"),
            Name: sdk.String("Sherri Tremblay"),
            QuestionSids: []string{
                "debitis",
            },
        },
        Token: sdk.String("a"),
    }, operations.UpdateInsightsQuestionnairesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1InsightsQuestionnaires != nil {
        // handle response
    }
}
```

## UpdateInsightsQuestionnairesCategory

To update the category for Questions

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
    res, err := s.SDK.UpdateInsightsQuestionnairesCategory(ctx, operations.UpdateInsightsQuestionnairesCategoryRequest{
        CategorySid: "dolorum",
        RequestBody: &operations.UpdateInsightsQuestionnairesCategoryUpdateInsightsQuestionnairesCategoryRequest{
            Name: "Arlene Stamm",
        },
        Token: sdk.String("dicta"),
    }, operations.UpdateInsightsQuestionnairesCategorySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1InsightsQuestionnairesCategory != nil {
        // handle response
    }
}
```

## UpdateInsightsQuestionnairesQuestion

To update the question

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
    res, err := s.SDK.UpdateInsightsQuestionnairesQuestion(ctx, operations.UpdateInsightsQuestionnairesQuestionRequest{
        QuestionSid: "magnam",
        RequestBody: &operations.UpdateInsightsQuestionnairesQuestionUpdateInsightsQuestionnairesQuestionRequest{
            AllowNa: false,
            AnswerSetID: sdk.String("cumque"),
            CategorySid: sdk.String("facere"),
            Description: sdk.String("ea"),
            Question: sdk.String("aliquid"),
        },
        Token: sdk.String("laborum"),
    }, operations.UpdateInsightsQuestionnairesQuestionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1InsightsQuestionnairesQuestion != nil {
        // handle response
    }
}
```

## UpdateInteractionChannel

Update an existing Interaction Channel.

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
    res, err := s.SDK.UpdateInteractionChannel(ctx, operations.UpdateInteractionChannelRequest{
        InteractionSid: "accusamus",
        RequestBody: &operations.UpdateInteractionChannelUpdateInteractionChannelRequest{
            Routing: sdk.String("non"),
            Status: shared.InteractionChannelEnumStatusEnumWrapup,
        },
        Sid: "enim",
    }, operations.UpdateInteractionChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1InteractionInteractionChannel != nil {
        // handle response
    }
}
```

## UpdateInteractionChannelParticipant

Update an existing Channel Participant.

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
    res, err := s.SDK.UpdateInteractionChannelParticipant(ctx, operations.UpdateInteractionChannelParticipantRequest{
        ChannelSid: "accusamus",
        InteractionSid: "delectus",
        RequestBody: &operations.UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest{
            Status: shared.InteractionChannelParticipantEnumStatusEnumWrapup,
        },
        Sid: "provident",
    }, operations.UpdateInteractionChannelParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1InteractionInteractionChannelInteractionChannelParticipant != nil {
        // handle response
    }
}
```

## UpdateWebChannel

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
    res, err := s.SDK.UpdateWebChannel(ctx, operations.UpdateWebChannelRequest{
        RequestBody: &operations.UpdateWebChannelUpdateWebChannelRequest{
            ChatStatus: shared.WebChannelEnumChatStatusEnumInactive.ToPointer(),
            PostEngagementData: sdk.String("nam"),
        },
        Sid: "id",
    }, operations.UpdateWebChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1WebChannel != nil {
        // handle response
    }
}
```
