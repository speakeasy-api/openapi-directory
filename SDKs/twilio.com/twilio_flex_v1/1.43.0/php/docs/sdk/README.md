# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createChannel](#createchannel)
* [createFlexFlow](#createflexflow)
* [createInsightsAssessments](#createinsightsassessments) - Add assessments against conversation to dynamo db. Used in assessments screen by user. Users can select the questionnaire and pick up answers for each and every question.
* [createInsightsAssessmentsComment](#createinsightsassessmentscomment) - To create a comment assessment for a conversation
* [createInsightsQuestionnaires](#createinsightsquestionnaires) - To create a Questionnaire
* [createInsightsQuestionnairesCategory](#createinsightsquestionnairescategory) - To create a category for Questions
* [createInsightsQuestionnairesQuestion](#createinsightsquestionnairesquestion) - To create a question for a Category
* [createInsightsSession](#createinsightssession) - To obtain session details for fetching reports and dashboards
* [createInteraction](#createinteraction) - Create a new Interaction.
* [createInteractionChannelInvite](#createinteractionchannelinvite) - Invite an Agent or a TaskQueue to a Channel.
* [createInteractionChannelParticipant](#createinteractionchannelparticipant) - Add a Participant to a Channel.
* [createWebChannel](#createwebchannel)
* [deleteChannel](#deletechannel)
* [deleteFlexFlow](#deleteflexflow)
* [deleteInsightsQuestionnaires](#deleteinsightsquestionnaires) - To delete the questionnaire
* [deleteInsightsQuestionnairesCategory](#deleteinsightsquestionnairescategory)
* [deleteInsightsQuestionnairesQuestion](#deleteinsightsquestionnairesquestion)
* [deleteWebChannel](#deletewebchannel)
* [fetchChannel](#fetchchannel)
* [fetchConfiguration](#fetchconfiguration)
* [fetchFlexFlow](#fetchflexflow)
* [fetchInsightsQuestionnaires](#fetchinsightsquestionnaires) - To get the Questionnaire Detail
* [fetchInsightsSettingsAnswersets](#fetchinsightssettingsanswersets) - To get the Answer Set Settings for an Account
* [fetchInsightsSettingsComment](#fetchinsightssettingscomment) - To get the Comment Settings for an Account
* [fetchInsightsUserRoles](#fetchinsightsuserroles) - This is used by Flex UI and Quality Management to fetch the Flex Insights roles for the user
* [fetchInteraction](#fetchinteraction)
* [fetchInteractionChannel](#fetchinteractionchannel) - Fetch a Channel for an Interaction.
* [fetchWebChannel](#fetchwebchannel)
* [listChannel](#listchannel)
* [listFlexFlow](#listflexflow)
* [listInsightsAssessments](#listinsightsassessments) - Get assessments done for a conversation by logged in user
* [listInsightsAssessmentsComment](#listinsightsassessmentscomment) - To create a comment assessment for a conversation
* [listInsightsConversations](#listinsightsconversations) - To get conversation with segment id
* [listInsightsQuestionnaires](#listinsightsquestionnaires) - To get all questionnaires with questions
* [listInsightsQuestionnairesCategory](#listinsightsquestionnairescategory) - To get all the categories
* [listInsightsQuestionnairesQuestion](#listinsightsquestionnairesquestion) - To get all the question for the given categories
* [listInsightsSegments](#listinsightssegments) - To get segments for given reservation Ids
* [listInteractionChannel](#listinteractionchannel) - List all Channels for an Interaction.
* [listInteractionChannelInvite](#listinteractionchannelinvite) - List all Invites for a Channel.
* [listInteractionChannelParticipant](#listinteractionchannelparticipant) - List all Participants for a Channel.
* [listWebChannel](#listwebchannel)
* [updateFlexFlow](#updateflexflow)
* [updateInsightsAssessments](#updateinsightsassessments) - Update a specific Assessment assessed earlier
* [updateInsightsQuestionnaires](#updateinsightsquestionnaires) - To update the questionnaire
* [updateInsightsQuestionnairesCategory](#updateinsightsquestionnairescategory) - To update the category for Questions
* [updateInsightsQuestionnairesQuestion](#updateinsightsquestionnairesquestion) - To update the question
* [updateInteractionChannel](#updateinteractionchannel) - Update an existing Interaction Channel.
* [updateInteractionChannelParticipant](#updateinteractionchannelparticipant) - Update an existing Channel Participant.
* [updateWebChannel](#updatewebchannel)

## createChannel

### Example Usage

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
    $request->chatFriendlyName = 'error';
    $request->chatUniqueName = 'deserunt';
    $request->chatUserFriendlyName = 'suscipit';
    $request->flexFlowSid = 'iure';
    $request->identity = 'magnam';
    $request->longLived = false;
    $request->preEngagementData = 'debitis';
    $request->target = 'ipsa';
    $request->taskAttributes = 'delectus';
    $request->taskSid = 'tempora';

    $requestSecurity = new CreateChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createChannel($request, $requestSecurity);

    if ($response->flexV1Channel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFlexFlow

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateFlexFlowCreateFlexFlowRequest;
use \OpenAPI\OpenAPI\Models\Shared\FlexFlowEnumChannelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FlexFlowEnumIntegrationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFlexFlowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFlexFlowCreateFlexFlowRequest();
    $request->channelType = FlexFlowEnumChannelTypeEnum::FACEBOOK;
    $request->chatServiceSid = 'molestiae';
    $request->contactIdentity = 'minus';
    $request->enabled = false;
    $request->friendlyName = 'placeat';
    $request->integrationChannel = 'voluptatum';
    $request->integrationCreationOnMessage = false;
    $request->integrationFlowSid = 'iusto';
    $request->integrationPriority = 568045;
    $request->integrationRetryCount = 392785;
    $request->integrationTimeout = 925597;
    $request->integrationUrl = 'https://bite-sized-favorite.com';
    $request->integrationWorkflowSid = 'deserunt';
    $request->integrationWorkspaceSid = 'perferendis';
    $request->integrationType = FlexFlowEnumIntegrationTypeEnum::EXTERNAL;
    $request->janitorEnabled = false;
    $request->longLived = false;

    $requestSecurity = new CreateFlexFlowSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createFlexFlow($request, $requestSecurity);

    if ($response->flexV1FlexFlow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInsightsAssessments

Add assessments against conversation to dynamo db. Used in assessments screen by user. Users can select the questionnaire and pick up answers for each and every question.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInsightsAssessmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInsightsAssessmentsCreateInsightsAssessmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInsightsAssessmentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInsightsAssessmentsRequest();
    $request->requestBody = new CreateInsightsAssessmentsCreateInsightsAssessmentsRequest();
    $request->requestBody->agentId = 'repellendus';
    $request->requestBody->answerId = 'sapiente';
    $request->requestBody->answerText = 'quo';
    $request->requestBody->categoryName = 'odit';
    $request->requestBody->categorySid = 'at';
    $request->requestBody->metricId = 'at';
    $request->requestBody->metricName = 'maiores';
    $request->requestBody->offset = 4736.08;
    $request->requestBody->questionnaireSid = 'quod';
    $request->requestBody->segmentId = 'quod';
    $request->requestBody->userEmail = 'esse';
    $request->requestBody->userName = 'Jovan.Sauer72';
    $request->token = 'officia';

    $requestSecurity = new CreateInsightsAssessmentsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createInsightsAssessments($request, $requestSecurity);

    if ($response->flexV1InsightsAssessments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInsightsAssessmentsComment

To create a comment assessment for a conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInsightsAssessmentsCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInsightsAssessmentsCommentCreateInsightsAssessmentsCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInsightsAssessmentsCommentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInsightsAssessmentsCommentRequest();
    $request->requestBody = new CreateInsightsAssessmentsCommentCreateInsightsAssessmentsCommentRequest();
    $request->requestBody->agentId = 'occaecati';
    $request->requestBody->categoryId = 'fugit';
    $request->requestBody->categoryName = 'deleniti';
    $request->requestBody->comment = 'hic';
    $request->requestBody->offset = 7586.16;
    $request->requestBody->segmentId = 'totam';
    $request->requestBody->userEmail = 'beatae';
    $request->requestBody->userName = 'Haskell18';
    $request->token = 'impedit';

    $requestSecurity = new CreateInsightsAssessmentsCommentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createInsightsAssessmentsComment($request, $requestSecurity);

    if ($response->flexV1InsightsAssessmentsComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInsightsQuestionnaires

To create a Questionnaire

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInsightsQuestionnairesRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInsightsQuestionnairesCreateInsightsQuestionnairesRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInsightsQuestionnairesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInsightsQuestionnairesRequest();
    $request->requestBody = new CreateInsightsQuestionnairesCreateInsightsQuestionnairesRequest();
    $request->requestBody->active = false;
    $request->requestBody->description = 'cum';
    $request->requestBody->name = 'Edna Mante II';
    $request->requestBody->questionSids = [
        'sed',
        'iste',
        'dolor',
    ];
    $request->token = 'natus';

    $requestSecurity = new CreateInsightsQuestionnairesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createInsightsQuestionnaires($request, $requestSecurity);

    if ($response->flexV1InsightsQuestionnaires !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInsightsQuestionnairesCategory

To create a category for Questions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInsightsQuestionnairesCategoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInsightsQuestionnairesCategoryCreateInsightsQuestionnairesCategoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInsightsQuestionnairesCategorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInsightsQuestionnairesCategoryRequest();
    $request->requestBody = new CreateInsightsQuestionnairesCategoryCreateInsightsQuestionnairesCategoryRequest();
    $request->requestBody->name = 'May Turcotte';
    $request->token = 'corporis';

    $requestSecurity = new CreateInsightsQuestionnairesCategorySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createInsightsQuestionnairesCategory($request, $requestSecurity);

    if ($response->flexV1InsightsQuestionnairesCategory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInsightsQuestionnairesQuestion

To create a question for a Category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInsightsQuestionnairesQuestionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInsightsQuestionnairesQuestionCreateInsightsQuestionnairesQuestionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInsightsQuestionnairesQuestionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInsightsQuestionnairesQuestionRequest();
    $request->requestBody = new CreateInsightsQuestionnairesQuestionCreateInsightsQuestionnairesQuestionRequest();
    $request->requestBody->allowNa = false;
    $request->requestBody->answerSetId = 'iste';
    $request->requestBody->categorySid = 'iure';
    $request->requestBody->description = 'saepe';
    $request->requestBody->question = 'quidem';
    $request->token = 'architecto';

    $requestSecurity = new CreateInsightsQuestionnairesQuestionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createInsightsQuestionnairesQuestion($request, $requestSecurity);

    if ($response->flexV1InsightsQuestionnairesQuestion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInsightsSession

To obtain session details for fetching reports and dashboards

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInsightsSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInsightsSessionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInsightsSessionRequest();
    $request->authorization = 'ipsa';

    $requestSecurity = new CreateInsightsSessionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createInsightsSession($request, $requestSecurity);

    if ($response->flexV1InsightsSession !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInteraction

Create a new Interaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInteractionCreateInteractionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInteractionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInteractionCreateInteractionRequest();
    $request->channel = 'reiciendis';
    $request->routing = 'est';

    $requestSecurity = new CreateInteractionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createInteraction($request, $requestSecurity);

    if ($response->flexV1Interaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInteractionChannelInvite

Invite an Agent or a TaskQueue to a Channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInteractionChannelInviteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInteractionChannelInviteCreateInteractionChannelInviteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInteractionChannelInviteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInteractionChannelInviteRequest();
    $request->channelSid = 'mollitia';
    $request->interactionSid = 'laborum';
    $request->requestBody = new CreateInteractionChannelInviteCreateInteractionChannelInviteRequest();
    $request->requestBody->routing = 'dolores';

    $requestSecurity = new CreateInteractionChannelInviteSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createInteractionChannelInvite($request, $requestSecurity);

    if ($response->flexV1InteractionInteractionChannelInteractionChannelInvite !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInteractionChannelParticipant

Add a Participant to a Channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateInteractionChannelParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest;
use \OpenAPI\OpenAPI\Models\Shared\InteractionChannelParticipantEnumTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateInteractionChannelParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInteractionChannelParticipantRequest();
    $request->channelSid = 'dolorem';
    $request->interactionSid = 'corporis';
    $request->requestBody = new CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest();
    $request->requestBody->mediaProperties = 'explicabo';
    $request->requestBody->type = InteractionChannelParticipantEnumTypeEnum::AGENT;

    $requestSecurity = new CreateInteractionChannelParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createInteractionChannelParticipant($request, $requestSecurity);

    if ($response->flexV1InteractionInteractionChannelInteractionChannelParticipant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWebChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebChannelCreateWebChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWebChannelCreateWebChannelRequest();
    $request->chatFriendlyName = 'enim';
    $request->chatUniqueName = 'omnis';
    $request->customerFriendlyName = 'nemo';
    $request->flexFlowSid = 'minima';
    $request->identity = 'excepturi';
    $request->preEngagementData = 'accusantium';

    $requestSecurity = new CreateWebChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createWebChannel($request, $requestSecurity);

    if ($response->flexV1WebChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteChannelRequest();
    $request->sid = 'iure';

    $requestSecurity = new DeleteChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteChannel($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFlexFlow

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFlexFlowRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFlexFlowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFlexFlowRequest();
    $request->sid = 'culpa';

    $requestSecurity = new DeleteFlexFlowSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteFlexFlow($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInsightsQuestionnaires

To delete the questionnaire

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInsightsQuestionnairesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInsightsQuestionnairesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInsightsQuestionnairesRequest();
    $request->questionnaireSid = 'doloribus';
    $request->token = 'sapiente';

    $requestSecurity = new DeleteInsightsQuestionnairesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteInsightsQuestionnaires($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInsightsQuestionnairesCategory

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInsightsQuestionnairesCategoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInsightsQuestionnairesCategorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInsightsQuestionnairesCategoryRequest();
    $request->categorySid = 'architecto';
    $request->token = 'mollitia';

    $requestSecurity = new DeleteInsightsQuestionnairesCategorySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteInsightsQuestionnairesCategory($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInsightsQuestionnairesQuestion

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInsightsQuestionnairesQuestionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInsightsQuestionnairesQuestionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInsightsQuestionnairesQuestionRequest();
    $request->questionSid = 'dolorem';
    $request->token = 'culpa';

    $requestSecurity = new DeleteInsightsQuestionnairesQuestionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteInsightsQuestionnairesQuestion($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWebChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWebChannelRequest();
    $request->sid = 'consequuntur';

    $requestSecurity = new DeleteWebChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteWebChannel($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchChannelRequest();
    $request->sid = 'repellat';

    $requestSecurity = new FetchChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchChannel($request, $requestSecurity);

    if ($response->flexV1Channel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchConfiguration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchConfigurationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchConfigurationRequest();
    $request->uiVersion = 'mollitia';

    $requestSecurity = new FetchConfigurationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchConfiguration($request, $requestSecurity);

    if ($response->flexV1Configuration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchFlexFlow

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchFlexFlowRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchFlexFlowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchFlexFlowRequest();
    $request->sid = 'occaecati';

    $requestSecurity = new FetchFlexFlowSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchFlexFlow($request, $requestSecurity);

    if ($response->flexV1FlexFlow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchInsightsQuestionnaires

To get the Questionnaire Detail

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchInsightsQuestionnairesRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchInsightsQuestionnairesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchInsightsQuestionnairesRequest();
    $request->questionnaireSid = 'numquam';
    $request->token = 'commodi';

    $requestSecurity = new FetchInsightsQuestionnairesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchInsightsQuestionnaires($request, $requestSecurity);

    if ($response->flexV1InsightsQuestionnaires !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchInsightsSettingsAnswersets

To get the Answer Set Settings for an Account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchInsightsSettingsAnswersetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchInsightsSettingsAnswersetsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchInsightsSettingsAnswersetsRequest();
    $request->token = 'quam';

    $requestSecurity = new FetchInsightsSettingsAnswersetsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchInsightsSettingsAnswersets($request, $requestSecurity);

    if ($response->flexV1InsightsSettingsAnswersets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchInsightsSettingsComment

To get the Comment Settings for an Account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchInsightsSettingsCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchInsightsSettingsCommentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchInsightsSettingsCommentRequest();
    $request->token = 'molestiae';

    $requestSecurity = new FetchInsightsSettingsCommentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchInsightsSettingsComment($request, $requestSecurity);

    if ($response->flexV1InsightsSettingsComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchInsightsUserRoles

This is used by Flex UI and Quality Management to fetch the Flex Insights roles for the user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchInsightsUserRolesRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchInsightsUserRolesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchInsightsUserRolesRequest();
    $request->authorization = 'velit';

    $requestSecurity = new FetchInsightsUserRolesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchInsightsUserRoles($request, $requestSecurity);

    if ($response->flexV1InsightsUserRoles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchInteraction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchInteractionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchInteractionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchInteractionRequest();
    $request->sid = 'error';

    $requestSecurity = new FetchInteractionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchInteraction($request, $requestSecurity);

    if ($response->flexV1Interaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchInteractionChannel

Fetch a Channel for an Interaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchInteractionChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchInteractionChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchInteractionChannelRequest();
    $request->interactionSid = 'quia';
    $request->sid = 'quis';

    $requestSecurity = new FetchInteractionChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchInteractionChannel($request, $requestSecurity);

    if ($response->flexV1InteractionInteractionChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWebChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWebChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWebChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWebChannelRequest();
    $request->sid = 'vitae';

    $requestSecurity = new FetchWebChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWebChannel($request, $requestSecurity);

    if ($response->flexV1WebChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListChannelRequest();
    $request->page = 674752;
    $request->pageSize = 656330;
    $request->pageToken = 'enim';

    $requestSecurity = new ListChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listChannel($request, $requestSecurity);

    if ($response->listChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFlexFlow

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListFlexFlowRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFlexFlowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFlexFlowRequest();
    $request->friendlyName = 'odit';
    $request->page = 778346;
    $request->pageSize = 196582;
    $request->pageToken = 'tenetur';

    $requestSecurity = new ListFlexFlowSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listFlexFlow($request, $requestSecurity);

    if ($response->listFlexFlowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInsightsAssessments

Get assessments done for a conversation by logged in user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListInsightsAssessmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInsightsAssessmentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInsightsAssessmentsRequest();
    $request->page = 368725;
    $request->pageSize = 662527;
    $request->pageToken = 'possimus';
    $request->segmentId = 'aut';
    $request->token = 'quasi';

    $requestSecurity = new ListInsightsAssessmentsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listInsightsAssessments($request, $requestSecurity);

    if ($response->listInsightsAssessmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInsightsAssessmentsComment

To create a comment assessment for a conversation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListInsightsAssessmentsCommentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInsightsAssessmentsCommentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInsightsAssessmentsCommentRequest();
    $request->agentId = 'error';
    $request->page = 837945;
    $request->pageSize = 673660;
    $request->pageToken = 'quasi';
    $request->segmentId = 'reiciendis';
    $request->token = 'voluptatibus';

    $requestSecurity = new ListInsightsAssessmentsCommentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listInsightsAssessmentsComment($request, $requestSecurity);

    if ($response->listInsightsAssessmentsCommentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInsightsConversations

To get conversation with segment id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListInsightsConversationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInsightsConversationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInsightsConversationsRequest();
    $request->page = 878194;
    $request->pageSize = 468651;
    $request->pageToken = 'praesentium';
    $request->segmentId = 'voluptatibus';
    $request->token = 'ipsa';

    $requestSecurity = new ListInsightsConversationsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listInsightsConversations($request, $requestSecurity);

    if ($response->listInsightsConversationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInsightsQuestionnaires

To get all questionnaires with questions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListInsightsQuestionnairesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInsightsQuestionnairesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInsightsQuestionnairesRequest();
    $request->includeInactive = false;
    $request->page = 604846;
    $request->pageSize = 451159;
    $request->pageToken = 'cum';
    $request->token = 'perferendis';

    $requestSecurity = new ListInsightsQuestionnairesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listInsightsQuestionnaires($request, $requestSecurity);

    if ($response->listInsightsQuestionnairesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInsightsQuestionnairesCategory

To get all the categories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListInsightsQuestionnairesCategoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInsightsQuestionnairesCategorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInsightsQuestionnairesCategoryRequest();
    $request->page = 39187;
    $request->pageSize = 441711;
    $request->pageToken = 'ut';
    $request->token = 'maiores';

    $requestSecurity = new ListInsightsQuestionnairesCategorySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listInsightsQuestionnairesCategory($request, $requestSecurity);

    if ($response->listInsightsQuestionnairesCategoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInsightsQuestionnairesQuestion

To get all the question for the given categories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListInsightsQuestionnairesQuestionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInsightsQuestionnairesQuestionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInsightsQuestionnairesQuestionRequest();
    $request->categorySid = [
        'corporis',
    ];
    $request->page = 296140;
    $request->pageSize = 480894;
    $request->pageToken = 'dicta';
    $request->token = 'harum';

    $requestSecurity = new ListInsightsQuestionnairesQuestionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listInsightsQuestionnairesQuestion($request, $requestSecurity);

    if ($response->listInsightsQuestionnairesQuestionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInsightsSegments

To get segments for given reservation Ids

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListInsightsSegmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInsightsSegmentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInsightsSegmentsRequest();
    $request->page = 317983;
    $request->pageSize = 880476;
    $request->pageToken = 'commodi';
    $request->reservationId = [
        'quae',
        'ipsum',
        'quidem',
        'molestias',
    ];
    $request->segmentId = 'excepturi';
    $request->token = 'pariatur';

    $requestSecurity = new ListInsightsSegmentsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listInsightsSegments($request, $requestSecurity);

    if ($response->listInsightsSegmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInteractionChannel

List all Channels for an Interaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListInteractionChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInteractionChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInteractionChannelRequest();
    $request->interactionSid = 'modi';
    $request->page = 508969;
    $request->pageSize = 523248;
    $request->pageToken = 'voluptates';

    $requestSecurity = new ListInteractionChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listInteractionChannel($request, $requestSecurity);

    if ($response->listInteractionChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInteractionChannelInvite

List all Invites for a Channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListInteractionChannelInviteRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInteractionChannelInviteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInteractionChannelInviteRequest();
    $request->channelSid = 'quasi';
    $request->interactionSid = 'repudiandae';
    $request->page = 575947;
    $request->pageSize = 83112;
    $request->pageToken = 'itaque';

    $requestSecurity = new ListInteractionChannelInviteSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listInteractionChannelInvite($request, $requestSecurity);

    if ($response->listInteractionChannelInviteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInteractionChannelParticipant

List all Participants for a Channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListInteractionChannelParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInteractionChannelParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInteractionChannelParticipantRequest();
    $request->channelSid = 'incidunt';
    $request->interactionSid = 'enim';
    $request->page = 9356;
    $request->pageSize = 667411;
    $request->pageToken = 'quibusdam';

    $requestSecurity = new ListInteractionChannelParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listInteractionChannelParticipant($request, $requestSecurity);

    if ($response->listInteractionChannelParticipantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWebChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListWebChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWebChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWebChannelRequest();
    $request->page = 131797;
    $request->pageSize = 647174;
    $request->pageToken = 'distinctio';

    $requestSecurity = new ListWebChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listWebChannel($request, $requestSecurity);

    if ($response->listWebChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFlexFlow

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFlexFlowRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFlexFlowUpdateFlexFlowRequest;
use \OpenAPI\OpenAPI\Models\Shared\FlexFlowEnumChannelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FlexFlowEnumIntegrationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFlexFlowSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFlexFlowRequest();
    $request->requestBody = new UpdateFlexFlowUpdateFlexFlowRequest();
    $request->requestBody->channelType = FlexFlowEnumChannelTypeEnum::CUSTOM;
    $request->requestBody->chatServiceSid = 'labore';
    $request->requestBody->contactIdentity = 'modi';
    $request->requestBody->enabled = false;
    $request->requestBody->friendlyName = 'qui';
    $request->requestBody->integrationChannel = 'aliquid';
    $request->requestBody->integrationCreationOnMessage = false;
    $request->requestBody->integrationFlowSid = 'cupiditate';
    $request->requestBody->integrationPriority = 552822;
    $request->requestBody->integrationRetryCount = 20107;
    $request->requestBody->integrationTimeout = 164940;
    $request->requestBody->integrationUrl = 'https://hard-accordion.com';
    $request->requestBody->integrationWorkflowSid = 'dolorum';
    $request->requestBody->integrationWorkspaceSid = 'excepturi';
    $request->requestBody->integrationType = FlexFlowEnumIntegrationTypeEnum::STUDIO;
    $request->requestBody->janitorEnabled = false;
    $request->requestBody->longLived = false;
    $request->sid = 'facilis';

    $requestSecurity = new UpdateFlexFlowSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateFlexFlow($request, $requestSecurity);

    if ($response->flexV1FlexFlow !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInsightsAssessments

Update a specific Assessment assessed earlier

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInsightsAssessmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInsightsAssessmentsUpdateInsightsAssessmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInsightsAssessmentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInsightsAssessmentsRequest();
    $request->assessmentSid = 'tempore';
    $request->requestBody = new UpdateInsightsAssessmentsUpdateInsightsAssessmentsRequest();
    $request->requestBody->answerId = 'labore';
    $request->requestBody->answerText = 'delectus';
    $request->requestBody->offset = 4332.88;
    $request->token = 'non';

    $requestSecurity = new UpdateInsightsAssessmentsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateInsightsAssessments($request, $requestSecurity);

    if ($response->flexV1InsightsAssessments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInsightsQuestionnaires

To update the questionnaire

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInsightsQuestionnairesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInsightsQuestionnairesUpdateInsightsQuestionnairesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInsightsQuestionnairesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInsightsQuestionnairesRequest();
    $request->questionnaireSid = 'eligendi';
    $request->requestBody = new UpdateInsightsQuestionnairesUpdateInsightsQuestionnairesRequest();
    $request->requestBody->active = false;
    $request->requestBody->description = 'sint';
    $request->requestBody->name = 'Sherri Tremblay';
    $request->requestBody->questionSids = [
        'debitis',
    ];
    $request->token = 'a';

    $requestSecurity = new UpdateInsightsQuestionnairesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateInsightsQuestionnaires($request, $requestSecurity);

    if ($response->flexV1InsightsQuestionnaires !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInsightsQuestionnairesCategory

To update the category for Questions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInsightsQuestionnairesCategoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInsightsQuestionnairesCategoryUpdateInsightsQuestionnairesCategoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInsightsQuestionnairesCategorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInsightsQuestionnairesCategoryRequest();
    $request->categorySid = 'dolorum';
    $request->requestBody = new UpdateInsightsQuestionnairesCategoryUpdateInsightsQuestionnairesCategoryRequest();
    $request->requestBody->name = 'Arlene Stamm';
    $request->token = 'dicta';

    $requestSecurity = new UpdateInsightsQuestionnairesCategorySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateInsightsQuestionnairesCategory($request, $requestSecurity);

    if ($response->flexV1InsightsQuestionnairesCategory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInsightsQuestionnairesQuestion

To update the question

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInsightsQuestionnairesQuestionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInsightsQuestionnairesQuestionUpdateInsightsQuestionnairesQuestionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInsightsQuestionnairesQuestionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInsightsQuestionnairesQuestionRequest();
    $request->questionSid = 'magnam';
    $request->requestBody = new UpdateInsightsQuestionnairesQuestionUpdateInsightsQuestionnairesQuestionRequest();
    $request->requestBody->allowNa = false;
    $request->requestBody->answerSetId = 'cumque';
    $request->requestBody->categorySid = 'facere';
    $request->requestBody->description = 'ea';
    $request->requestBody->question = 'aliquid';
    $request->token = 'laborum';

    $requestSecurity = new UpdateInsightsQuestionnairesQuestionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateInsightsQuestionnairesQuestion($request, $requestSecurity);

    if ($response->flexV1InsightsQuestionnairesQuestion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInteractionChannel

Update an existing Interaction Channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInteractionChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInteractionChannelUpdateInteractionChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\InteractionChannelEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInteractionChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInteractionChannelRequest();
    $request->interactionSid = 'accusamus';
    $request->requestBody = new UpdateInteractionChannelUpdateInteractionChannelRequest();
    $request->requestBody->routing = 'non';
    $request->requestBody->status = InteractionChannelEnumStatusEnum::WRAPUP;
    $request->sid = 'enim';

    $requestSecurity = new UpdateInteractionChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateInteractionChannel($request, $requestSecurity);

    if ($response->flexV1InteractionInteractionChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInteractionChannelParticipant

Update an existing Channel Participant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInteractionChannelParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest;
use \OpenAPI\OpenAPI\Models\Shared\InteractionChannelParticipantEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInteractionChannelParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInteractionChannelParticipantRequest();
    $request->channelSid = 'accusamus';
    $request->interactionSid = 'delectus';
    $request->requestBody = new UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest();
    $request->requestBody->status = InteractionChannelParticipantEnumStatusEnum::WRAPUP;
    $request->sid = 'provident';

    $requestSecurity = new UpdateInteractionChannelParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateInteractionChannelParticipant($request, $requestSecurity);

    if ($response->flexV1InteractionInteractionChannelInteractionChannelParticipant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWebChannel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWebChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWebChannelUpdateWebChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\WebChannelEnumChatStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWebChannelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWebChannelRequest();
    $request->requestBody = new UpdateWebChannelUpdateWebChannelRequest();
    $request->requestBody->chatStatus = WebChannelEnumChatStatusEnum::INACTIVE;
    $request->requestBody->postEngagementData = 'nam';
    $request->sid = 'id';

    $requestSecurity = new UpdateWebChannelSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateWebChannel($request, $requestSecurity);

    if ($response->flexV1WebChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
