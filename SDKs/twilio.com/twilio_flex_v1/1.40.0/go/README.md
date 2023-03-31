# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_flex_v1/1.40.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CreateChannelCreateChannelRequest{
        ChatFriendlyName: "corrupti",
        ChatUniqueName: "provident",
        ChatUserFriendlyName: "distinctio",
        FlexFlowSid: "quibusdam",
        Identity: "unde",
        LongLived: false,
        PreEngagementData: "nulla",
        Target: "corrupti",
        TaskAttributes: "illum",
        TaskSid: "vel",
    }

    ctx := context.Background()
    res, err := s.CreateChannel(ctx, req, operations.CreateChannelSecurity{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateChannel`
* `CreateFlexFlow`
* `CreateInsightsAssessments` - Add assessments against conversation to dynamo db. Used in assessments screen by user. Users can select the questionnaire and pick up answers for each and every question.
* `CreateInsightsAssessmentsComment` - To create a comment assessment for a conversation
* `CreateInsightsQuestionnaires` - To create a Questionnaire
* `CreateInsightsQuestionnairesCategory` - To create a category for Questions
* `CreateInsightsQuestionnairesQuestion` - To create a question for a Category
* `CreateInsightsSession` - To obtain session details for fetching reports and dashboards
* `CreateInteraction` - Create a new Interaction.
* `CreateInteractionChannelInvite` - Invite an Agent or a TaskQueue to a Channel.
* `CreateInteractionChannelParticipant` - Add a Participant to a Channel.
* `CreateWebChannel`
* `DeleteChannel`
* `DeleteFlexFlow`
* `DeleteInsightsQuestionnaires` - To delete the questionnaire
* `DeleteInsightsQuestionnairesCategory`
* `DeleteInsightsQuestionnairesQuestion`
* `DeleteWebChannel`
* `FetchChannel`
* `FetchConfiguration`
* `FetchFlexFlow`
* `FetchInsightsQuestionnaires` - To get the Questionnaire Detail
* `FetchInsightsSegments` - To get the Segments of an Account
* `FetchInsightsSettingsAnswersets` - To get the Answer Set Settings for an Account
* `FetchInsightsSettingsComment` - To get the Comment Settings for an Account
* `FetchInsightsUserRoles` - This is used by Flex UI and Quality Management to fetch the Flex Insights roles for the user
* `FetchInteraction`
* `FetchInteractionChannel` - Fetch a Channel for an Interaction.
* `FetchWebChannel`
* `ListChannel`
* `ListFlexFlow`
* `ListInsightsAssessments` - Get assessments done for a conversation by logged in user
* `ListInsightsAssessmentsComment` - To create a comment assessment for a conversation
* `ListInsightsConversations` - To get conversation with segment id
* `ListInsightsQuestionnaires` - To get all questionnaires with questions
* `ListInsightsQuestionnairesCategory` - To get all the categories
* `ListInsightsQuestionnairesQuestion` - To get all the question for the given categories
* `ListInsightsSegments` - To get segments for given reservation Ids
* `ListInteractionChannel` - List all Channels for an Interaction.
* `ListInteractionChannelInvite` - List all Invites for a Channel.
* `ListInteractionChannelParticipant` - List all Participants for a Channel.
* `ListWebChannel`
* `UpdateFlexFlow`
* `UpdateInsightsAssessments` - Update a specific Assessment assessed earlier
* `UpdateInsightsQuestionnaires` - To update the questionnaire
* `UpdateInsightsQuestionnairesCategory` - To update the category for Questions
* `UpdateInsightsQuestionnairesQuestion` - To update the question
* `UpdateInteractionChannel` - Update an existing Interaction Channel.
* `UpdateInteractionChannelParticipant` - Update an existing Channel Participant.
* `UpdateWebChannel`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
