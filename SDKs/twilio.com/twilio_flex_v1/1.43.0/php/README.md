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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelCreateChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateChannelCreateChannelRequest();
    $request->chatFriendlyName = 'corrupti';
    $request->chatUniqueName = 'provident';
    $request->chatUserFriendlyName = 'distinctio';
    $request->flexFlowSid = 'quibusdam';
    $request->identity = 'unde';
    $request->longLived = false;
    $request->preEngagementData = 'nulla';
    $request->target = 'corrupti';
    $request->taskAttributes = 'illum';
    $request->taskSid = 'vel';

    $requestSecurity = new CreateChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createChannel($request, $requestSecurity);

    if ($response->flexV1Channel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createChannel](docs/sdk/README.md#createchannel)
* [createFlexFlow](docs/sdk/README.md#createflexflow)
* [createInsightsAssessments](docs/sdk/README.md#createinsightsassessments) - Add assessments against conversation to dynamo db. Used in assessments screen by user. Users can select the questionnaire and pick up answers for each and every question.
* [createInsightsAssessmentsComment](docs/sdk/README.md#createinsightsassessmentscomment) - To create a comment assessment for a conversation
* [createInsightsQuestionnaires](docs/sdk/README.md#createinsightsquestionnaires) - To create a Questionnaire
* [createInsightsQuestionnairesCategory](docs/sdk/README.md#createinsightsquestionnairescategory) - To create a category for Questions
* [createInsightsQuestionnairesQuestion](docs/sdk/README.md#createinsightsquestionnairesquestion) - To create a question for a Category
* [createInsightsSession](docs/sdk/README.md#createinsightssession) - To obtain session details for fetching reports and dashboards
* [createInteraction](docs/sdk/README.md#createinteraction) - Create a new Interaction.
* [createInteractionChannelInvite](docs/sdk/README.md#createinteractionchannelinvite) - Invite an Agent or a TaskQueue to a Channel.
* [createInteractionChannelParticipant](docs/sdk/README.md#createinteractionchannelparticipant) - Add a Participant to a Channel.
* [createWebChannel](docs/sdk/README.md#createwebchannel)
* [deleteChannel](docs/sdk/README.md#deletechannel)
* [deleteFlexFlow](docs/sdk/README.md#deleteflexflow)
* [deleteInsightsQuestionnaires](docs/sdk/README.md#deleteinsightsquestionnaires) - To delete the questionnaire
* [deleteInsightsQuestionnairesCategory](docs/sdk/README.md#deleteinsightsquestionnairescategory)
* [deleteInsightsQuestionnairesQuestion](docs/sdk/README.md#deleteinsightsquestionnairesquestion)
* [deleteWebChannel](docs/sdk/README.md#deletewebchannel)
* [fetchChannel](docs/sdk/README.md#fetchchannel)
* [fetchConfiguration](docs/sdk/README.md#fetchconfiguration)
* [fetchFlexFlow](docs/sdk/README.md#fetchflexflow)
* [fetchInsightsQuestionnaires](docs/sdk/README.md#fetchinsightsquestionnaires) - To get the Questionnaire Detail
* [fetchInsightsSettingsAnswersets](docs/sdk/README.md#fetchinsightssettingsanswersets) - To get the Answer Set Settings for an Account
* [fetchInsightsSettingsComment](docs/sdk/README.md#fetchinsightssettingscomment) - To get the Comment Settings for an Account
* [fetchInsightsUserRoles](docs/sdk/README.md#fetchinsightsuserroles) - This is used by Flex UI and Quality Management to fetch the Flex Insights roles for the user
* [fetchInteraction](docs/sdk/README.md#fetchinteraction)
* [fetchInteractionChannel](docs/sdk/README.md#fetchinteractionchannel) - Fetch a Channel for an Interaction.
* [fetchWebChannel](docs/sdk/README.md#fetchwebchannel)
* [listChannel](docs/sdk/README.md#listchannel)
* [listFlexFlow](docs/sdk/README.md#listflexflow)
* [listInsightsAssessments](docs/sdk/README.md#listinsightsassessments) - Get assessments done for a conversation by logged in user
* [listInsightsAssessmentsComment](docs/sdk/README.md#listinsightsassessmentscomment) - To create a comment assessment for a conversation
* [listInsightsConversations](docs/sdk/README.md#listinsightsconversations) - To get conversation with segment id
* [listInsightsQuestionnaires](docs/sdk/README.md#listinsightsquestionnaires) - To get all questionnaires with questions
* [listInsightsQuestionnairesCategory](docs/sdk/README.md#listinsightsquestionnairescategory) - To get all the categories
* [listInsightsQuestionnairesQuestion](docs/sdk/README.md#listinsightsquestionnairesquestion) - To get all the question for the given categories
* [listInsightsSegments](docs/sdk/README.md#listinsightssegments) - To get segments for given reservation Ids
* [listInteractionChannel](docs/sdk/README.md#listinteractionchannel) - List all Channels for an Interaction.
* [listInteractionChannelInvite](docs/sdk/README.md#listinteractionchannelinvite) - List all Invites for a Channel.
* [listInteractionChannelParticipant](docs/sdk/README.md#listinteractionchannelparticipant) - List all Participants for a Channel.
* [listWebChannel](docs/sdk/README.md#listwebchannel)
* [updateFlexFlow](docs/sdk/README.md#updateflexflow)
* [updateInsightsAssessments](docs/sdk/README.md#updateinsightsassessments) - Update a specific Assessment assessed earlier
* [updateInsightsQuestionnaires](docs/sdk/README.md#updateinsightsquestionnaires) - To update the questionnaire
* [updateInsightsQuestionnairesCategory](docs/sdk/README.md#updateinsightsquestionnairescategory) - To update the category for Questions
* [updateInsightsQuestionnairesQuestion](docs/sdk/README.md#updateinsightsquestionnairesquestion) - To update the question
* [updateInteractionChannel](docs/sdk/README.md#updateinteractionchannel) - Update an existing Interaction Channel.
* [updateInteractionChannelParticipant](docs/sdk/README.md#updateinteractionchannelparticipant) - Update an existing Channel Participant.
* [updateWebChannel](docs/sdk/README.md#updatewebchannel)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
