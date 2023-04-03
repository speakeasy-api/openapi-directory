# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createChannel`
* `createFlexFlow`
* `createInsightsAssessments` - Add assessments against conversation to dynamo db. Used in assessments screen by user. Users can select the questionnaire and pick up answers for each and every question.
* `createInsightsAssessmentsComment` - To create a comment assessment for a conversation
* `createInsightsQuestionnaires` - To create a Questionnaire
* `createInsightsQuestionnairesCategory` - To create a category for Questions
* `createInsightsQuestionnairesQuestion` - To create a question for a Category
* `createInsightsSession` - To obtain session details for fetching reports and dashboards
* `createInteraction` - Create a new Interaction.
* `createInteractionChannelInvite` - Invite an Agent or a TaskQueue to a Channel.
* `createInteractionChannelParticipant` - Add a Participant to a Channel.
* `createWebChannel`
* `deleteChannel`
* `deleteFlexFlow`
* `deleteInsightsQuestionnaires` - To delete the questionnaire
* `deleteInsightsQuestionnairesCategory`
* `deleteInsightsQuestionnairesQuestion`
* `deleteWebChannel`
* `fetchChannel`
* `fetchConfiguration`
* `fetchFlexFlow`
* `fetchInsightsQuestionnaires` - To get the Questionnaire Detail
* `fetchInsightsSegments` - To get the Segments of an Account
* `fetchInsightsSettingsAnswersets` - To get the Answer Set Settings for an Account
* `fetchInsightsSettingsComment` - To get the Comment Settings for an Account
* `fetchInsightsUserRoles` - This is used by Flex UI and Quality Management to fetch the Flex Insights roles for the user
* `fetchInteraction`
* `fetchInteractionChannel` - Fetch a Channel for an Interaction.
* `fetchWebChannel`
* `listChannel`
* `listFlexFlow`
* `listInsightsAssessments` - Get assessments done for a conversation by logged in user
* `listInsightsAssessmentsComment` - To create a comment assessment for a conversation
* `listInsightsConversations` - To get conversation with segment id
* `listInsightsQuestionnaires` - To get all questionnaires with questions
* `listInsightsQuestionnairesCategory` - To get all the categories
* `listInsightsQuestionnairesQuestion` - To get all the question for the given categories
* `listInsightsSegments` - To get segments for given reservation Ids
* `listInteractionChannel` - List all Channels for an Interaction.
* `listInteractionChannelInvite` - List all Invites for a Channel.
* `listInteractionChannelParticipant` - List all Participants for a Channel.
* `listWebChannel`
* `updateFlexFlow`
* `updateInsightsAssessments` - Update a specific Assessment assessed earlier
* `updateInsightsQuestionnaires` - To update the questionnaire
* `updateInsightsQuestionnairesCategory` - To update the category for Questions
* `updateInsightsQuestionnairesQuestion` - To update the question
* `updateInteractionChannel` - Update an existing Interaction Channel.
* `updateInteractionChannelParticipant` - Update an existing Channel Participant.
* `updateWebChannel`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
