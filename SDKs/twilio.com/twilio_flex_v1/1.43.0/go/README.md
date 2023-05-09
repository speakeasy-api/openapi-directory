# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_flex_v1/1.43.0/go
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
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateChannel(ctx, operations.CreateChannelCreateChannelRequest{
        ChatFriendlyName: "corrupti",
        ChatUniqueName: sdk.String("provident"),
        ChatUserFriendlyName: "distinctio",
        FlexFlowSid: "quibusdam",
        Identity: "unde",
        LongLived: sdk.Bool(false),
        PreEngagementData: sdk.String("nulla"),
        Target: sdk.String("corrupti"),
        TaskAttributes: sdk.String("illum"),
        TaskSid: sdk.String("vel"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateChannel](docs/sdk/README.md#createchannel)
* [CreateFlexFlow](docs/sdk/README.md#createflexflow)
* [CreateInsightsAssessments](docs/sdk/README.md#createinsightsassessments) - Add assessments against conversation to dynamo db. Used in assessments screen by user. Users can select the questionnaire and pick up answers for each and every question.
* [CreateInsightsAssessmentsComment](docs/sdk/README.md#createinsightsassessmentscomment) - To create a comment assessment for a conversation
* [CreateInsightsQuestionnaires](docs/sdk/README.md#createinsightsquestionnaires) - To create a Questionnaire
* [CreateInsightsQuestionnairesCategory](docs/sdk/README.md#createinsightsquestionnairescategory) - To create a category for Questions
* [CreateInsightsQuestionnairesQuestion](docs/sdk/README.md#createinsightsquestionnairesquestion) - To create a question for a Category
* [CreateInsightsSession](docs/sdk/README.md#createinsightssession) - To obtain session details for fetching reports and dashboards
* [CreateInteraction](docs/sdk/README.md#createinteraction) - Create a new Interaction.
* [CreateInteractionChannelInvite](docs/sdk/README.md#createinteractionchannelinvite) - Invite an Agent or a TaskQueue to a Channel.
* [CreateInteractionChannelParticipant](docs/sdk/README.md#createinteractionchannelparticipant) - Add a Participant to a Channel.
* [CreateWebChannel](docs/sdk/README.md#createwebchannel)
* [DeleteChannel](docs/sdk/README.md#deletechannel)
* [DeleteFlexFlow](docs/sdk/README.md#deleteflexflow)
* [DeleteInsightsQuestionnaires](docs/sdk/README.md#deleteinsightsquestionnaires) - To delete the questionnaire
* [DeleteInsightsQuestionnairesCategory](docs/sdk/README.md#deleteinsightsquestionnairescategory)
* [DeleteInsightsQuestionnairesQuestion](docs/sdk/README.md#deleteinsightsquestionnairesquestion)
* [DeleteWebChannel](docs/sdk/README.md#deletewebchannel)
* [FetchChannel](docs/sdk/README.md#fetchchannel)
* [FetchConfiguration](docs/sdk/README.md#fetchconfiguration)
* [FetchFlexFlow](docs/sdk/README.md#fetchflexflow)
* [FetchInsightsQuestionnaires](docs/sdk/README.md#fetchinsightsquestionnaires) - To get the Questionnaire Detail
* [FetchInsightsSettingsAnswersets](docs/sdk/README.md#fetchinsightssettingsanswersets) - To get the Answer Set Settings for an Account
* [FetchInsightsSettingsComment](docs/sdk/README.md#fetchinsightssettingscomment) - To get the Comment Settings for an Account
* [FetchInsightsUserRoles](docs/sdk/README.md#fetchinsightsuserroles) - This is used by Flex UI and Quality Management to fetch the Flex Insights roles for the user
* [FetchInteraction](docs/sdk/README.md#fetchinteraction)
* [FetchInteractionChannel](docs/sdk/README.md#fetchinteractionchannel) - Fetch a Channel for an Interaction.
* [FetchWebChannel](docs/sdk/README.md#fetchwebchannel)
* [ListChannel](docs/sdk/README.md#listchannel)
* [ListFlexFlow](docs/sdk/README.md#listflexflow)
* [ListInsightsAssessments](docs/sdk/README.md#listinsightsassessments) - Get assessments done for a conversation by logged in user
* [ListInsightsAssessmentsComment](docs/sdk/README.md#listinsightsassessmentscomment) - To create a comment assessment for a conversation
* [ListInsightsConversations](docs/sdk/README.md#listinsightsconversations) - To get conversation with segment id
* [ListInsightsQuestionnaires](docs/sdk/README.md#listinsightsquestionnaires) - To get all questionnaires with questions
* [ListInsightsQuestionnairesCategory](docs/sdk/README.md#listinsightsquestionnairescategory) - To get all the categories
* [ListInsightsQuestionnairesQuestion](docs/sdk/README.md#listinsightsquestionnairesquestion) - To get all the question for the given categories
* [ListInsightsSegments](docs/sdk/README.md#listinsightssegments) - To get segments for given reservation Ids
* [ListInteractionChannel](docs/sdk/README.md#listinteractionchannel) - List all Channels for an Interaction.
* [ListInteractionChannelInvite](docs/sdk/README.md#listinteractionchannelinvite) - List all Invites for a Channel.
* [ListInteractionChannelParticipant](docs/sdk/README.md#listinteractionchannelparticipant) - List all Participants for a Channel.
* [ListWebChannel](docs/sdk/README.md#listwebchannel)
* [UpdateFlexFlow](docs/sdk/README.md#updateflexflow)
* [UpdateInsightsAssessments](docs/sdk/README.md#updateinsightsassessments) - Update a specific Assessment assessed earlier
* [UpdateInsightsQuestionnaires](docs/sdk/README.md#updateinsightsquestionnaires) - To update the questionnaire
* [UpdateInsightsQuestionnairesCategory](docs/sdk/README.md#updateinsightsquestionnairescategory) - To update the category for Questions
* [UpdateInsightsQuestionnairesQuestion](docs/sdk/README.md#updateinsightsquestionnairesquestion) - To update the question
* [UpdateInteractionChannel](docs/sdk/README.md#updateinteractionchannel) - Update an existing Interaction Channel.
* [UpdateInteractionChannelParticipant](docs/sdk/README.md#updateinteractionchannelparticipant) - Update an existing Channel Participant.
* [UpdateWebChannel](docs/sdk/README.md#updatewebchannel)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
