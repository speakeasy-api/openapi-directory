# spaces

### Available Operations

* [chatSpacesList](#chatspaceslist) - Lists spaces the caller is a member of. Requires [authentication](https://developers.google.com/chat/api/guides/auth). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.spaces` or `chat.spaces.readonly` authorization scope. Lists spaces visible to the caller or authenticated user. Group chats and DMs aren't listed until the first message is sent.
* [chatSpacesMembersList](#chatspacesmemberslist) - Lists memberships in a space. Requires [authentication](https://developers.google.com/chat/api/guides/auth/). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.memberships` or `chat.memberships.readonly` authorization scope.
* [chatSpacesMessagesAttachmentsGet](#chatspacesmessagesattachmentsget) - Gets the metadata of a message attachment. The attachment data is fetched using the [media API](https://developers.google.com/chat/api/reference/rest/v1/media/download). Requires [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts).
* [chatSpacesMessagesCreate](#chatspacesmessagescreate) - Creates a message. For example usage, see [Create a message](https://developers.google.com/chat/api/guides/crudl/messages#create_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` or `chat.messages.create` authorization scope. Because Chat provides authentication for [webhooks](https://developers.google.com/chat/how-tos/webhooks) as part of the URL that's generated when a webhook is registered, webhooks can create messages without a service account or user authentication.
* [chatSpacesMessagesDelete](#chatspacesmessagesdelete) - Deletes a message. For example usage, see [Delete a message](https://developers.google.com/chat/api/guides/crudl/messages#delete_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` authorization scope.
* [chatSpacesMessagesPatch](#chatspacesmessagespatch) - Updates a message. There's a difference between `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For example usage, see [Update a message](https://developers.google.com/chat/api/guides/crudl/messages#update_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth/). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` authorization scope.
* [chatSpacesMessagesUpdate](#chatspacesmessagesupdate) - Updates a message. There's a difference between `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For example usage, see [Update a message](https://developers.google.com/chat/api/guides/crudl/messages#update_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth/). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` authorization scope.

## chatSpacesList

Lists spaces the caller is a member of. Requires [authentication](https://developers.google.com/chat/api/guides/auth). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.spaces` or `chat.spaces.readonly` authorization scope. Lists spaces visible to the caller or authenticated user. Group chats and DMs aren't listed until the first message is sent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChatSpacesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'recusandae';
    $request->key = 'temporibus';
    $request->oauthToken = 'ab';
    $request->pageSize = 337396;
    $request->pageToken = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new ChatSpacesListSecurity();
    $requestSecurity->option1 = new ChatSpacesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spaces->chatSpacesList($request, $requestSecurity);

    if ($response->listSpacesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chatSpacesMembersList

Lists memberships in a space. Requires [authentication](https://developers.google.com/chat/api/guides/auth/). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.memberships` or `chat.memberships.readonly` authorization scope.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMembersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMembersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMembersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMembersListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMembersListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChatSpacesMembersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->fields = 'at';
    $request->key = 'at';
    $request->oauthToken = 'maiores';
    $request->pageSize = 473608;
    $request->pageToken = 'quod';
    $request->parent = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new ChatSpacesMembersListSecurity();
    $requestSecurity->option1 = new ChatSpacesMembersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spaces->chatSpacesMembersList($request, $requestSecurity);

    if ($response->listMembershipsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chatSpacesMessagesAttachmentsGet

Gets the metadata of a message attachment. The attachment data is fetched using the [media API](https://developers.google.com/chat/api/reference/rest/v1/media/download). Requires [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesAttachmentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesAttachmentsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesAttachmentsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesAttachmentsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesAttachmentsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChatSpacesMessagesAttachmentsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'occaecati';
    $request->key = 'fugit';
    $request->name = 'Irvin Rosenbaum III';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'impedit';

    $requestSecurity = new ChatSpacesMessagesAttachmentsGetSecurity();
    $requestSecurity->option1 = new ChatSpacesMessagesAttachmentsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spaces->chatSpacesMessagesAttachmentsGet($request, $requestSecurity);

    if ($response->attachment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chatSpacesMessagesCreate

Creates a message. For example usage, see [Create a message](https://developers.google.com/chat/api/guides/crudl/messages#create_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` or `chat.messages.create` authorization scope. Because Chat provides authentication for [webhooks](https://developers.google.com/chat/how-tos/webhooks) as part of the URL that's generated when a webhook is registered, webhooks can create messages without a service account or user authentication.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MessageInput;
use \OpenAPI\OpenAPI\Models\Shared\ActionResponse;
use \OpenAPI\OpenAPI\Models\Shared\DialogAction;
use \OpenAPI\OpenAPI\Models\Shared\ActionStatus;
use \OpenAPI\OpenAPI\Models\Shared\ActionStatusStatusCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Dialog;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Card;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1CardAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1OnClick;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Action;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1ActionInteractionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1ActionLoadIndicatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1ActionParameter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1OpenLink;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1OpenLinkOnCloseEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1OpenLinkOpenAsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1CardDisplayStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1CardFixedFooter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Button;
use \OpenAPI\OpenAPI\Models\Shared\Color;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Icon;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1IconImageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1CardHeader;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1CardHeaderImageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Section;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Widget;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1ButtonList;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1DateTimePicker;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1DateTimePickerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1DecoratedText;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1SwitchControl;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1SwitchControlControlTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Grid;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1BorderStyle;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1BorderStyleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1GridItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1ImageComponent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1ImageCropStyle;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1ImageCropStyleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1GridItemLayoutEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Image;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1SelectionInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1SelectionItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1SelectionInputTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1TextInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Suggestions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1SuggestionItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1TextInputTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1TextParagraph;
use \OpenAPI\OpenAPI\Models\Shared\ActionResponseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentInput;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentDataRef;
use \OpenAPI\OpenAPI\Models\Shared\DriveDataRef;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\Card;
use \OpenAPI\OpenAPI\Models\Shared\CardAction;
use \OpenAPI\OpenAPI\Models\Shared\OnClick;
use \OpenAPI\OpenAPI\Models\Shared\FormAction;
use \OpenAPI\OpenAPI\Models\Shared\ActionParameter;
use \OpenAPI\OpenAPI\Models\Shared\OpenLink;
use \OpenAPI\OpenAPI\Models\Shared\CardHeader;
use \OpenAPI\OpenAPI\Models\Shared\CardHeaderImageStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\Section;
use \OpenAPI\OpenAPI\Models\Shared\WidgetMarkup;
use \OpenAPI\OpenAPI\Models\Shared\Button;
use \OpenAPI\OpenAPI\Models\Shared\ImageButton;
use \OpenAPI\OpenAPI\Models\Shared\ImageButtonIconEnum;
use \OpenAPI\OpenAPI\Models\Shared\TextButton;
use \OpenAPI\OpenAPI\Models\Shared\Image;
use \OpenAPI\OpenAPI\Models\Shared\KeyValue;
use \OpenAPI\OpenAPI\Models\Shared\KeyValueIconEnum;
use \OpenAPI\OpenAPI\Models\Shared\TextParagraph;
use \OpenAPI\OpenAPI\Models\Shared\CardWithId;
use \OpenAPI\OpenAPI\Models\Shared\UserInput;
use \OpenAPI\OpenAPI\Models\Shared\UserTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SlashCommand;
use \OpenAPI\OpenAPI\Models\Shared\SpaceInput;
use \OpenAPI\OpenAPI\Models\Shared\SpaceDetails;
use \OpenAPI\OpenAPI\Models\Shared\Thread;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesCreateMessageReplyOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesCreateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChatSpacesMessagesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->messageInput = new MessageInput();
    $request->messageInput->actionResponse = new ActionResponse();
    $request->messageInput->actionResponse->dialogAction = new DialogAction();
    $request->messageInput->actionResponse->dialogAction->actionStatus = new ActionStatus();
    $request->messageInput->actionResponse->dialogAction->actionStatus->statusCode = ActionStatusStatusCodeEnum::PERMISSION_DENIED;
    $request->messageInput->actionResponse->dialogAction->actionStatus->userFacingMessage = 'ipsum';
    $request->messageInput->actionResponse->dialogAction->dialog = new Dialog();
    $request->messageInput->actionResponse->dialogAction->dialog->body = new GoogleAppsCardV1Card();
    $request->messageInput->actionResponse->dialogAction->dialog->body->cardActions = [
        new GoogleAppsCardV1CardAction(),
        new GoogleAppsCardV1CardAction(),
        new GoogleAppsCardV1CardAction(),
    ];
    $request->messageInput->actionResponse->dialogAction->dialog->body->displayStyle = GoogleAppsCardV1CardDisplayStyleEnum::DISPLAY_STYLE_UNSPECIFIED;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter = new GoogleAppsCardV1CardFixedFooter();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton = new GoogleAppsCardV1Button();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->altText = 'perferendis';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->color = new Color();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->color->alpha = 3241.41;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->color->blue = 6176.36;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->color->green = 1496.75;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->color->red = 6120.96;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->disabled = false;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->icon = new GoogleAppsCardV1Icon();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->icon->altText = 'dolor';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->icon->iconUrl = 'natus';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->icon->imageType = GoogleAppsCardV1IconImageTypeEnum::SQUARE;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->icon->knownIcon = 'hic';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick = new GoogleAppsCardV1OnClick();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->action = new GoogleAppsCardV1Action();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->action->function = 'saepe';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->action->interaction = GoogleAppsCardV1ActionInteractionEnum::OPEN_DIALOG;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->action->loadIndicator = GoogleAppsCardV1ActionLoadIndicatorEnum::SPINNER;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->action->parameters = [
        new GoogleAppsCardV1ActionParameter(),
        new GoogleAppsCardV1ActionParameter(),
    ];
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->action->persistValues = false;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->card = new GoogleAppsCardV1Card();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openDynamicLinkAction = new GoogleAppsCardV1Action();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openDynamicLinkAction->function = 'iste';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openDynamicLinkAction->interaction = GoogleAppsCardV1ActionInteractionEnum::INTERACTION_UNSPECIFIED;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openDynamicLinkAction->loadIndicator = GoogleAppsCardV1ActionLoadIndicatorEnum::NONE;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openDynamicLinkAction->parameters = [
        new GoogleAppsCardV1ActionParameter(),
        new GoogleAppsCardV1ActionParameter(),
        new GoogleAppsCardV1ActionParameter(),
    ];
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openDynamicLinkAction->persistValues = false;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openLink = new GoogleAppsCardV1OpenLink();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openLink->onClose = GoogleAppsCardV1OpenLinkOnCloseEnum::NOTHING;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openLink->openAs = GoogleAppsCardV1OpenLinkOpenAsEnum::FULL_SIZE;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openLink->url = 'reiciendis';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->text = 'est';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton = new GoogleAppsCardV1Button();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->altText = 'mollitia';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->color = new Color();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->color->alpha = 6706.38;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->color->blue = 1709.09;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->color->green = 2103.82;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->color->red = 3581.52;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->disabled = false;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->icon = new GoogleAppsCardV1Icon();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->icon->altText = 'explicabo';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->icon->iconUrl = 'nobis';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->icon->imageType = GoogleAppsCardV1IconImageTypeEnum::SQUARE;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->icon->knownIcon = 'omnis';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick = new GoogleAppsCardV1OnClick();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->action = new GoogleAppsCardV1Action();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->action->function = 'nemo';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->action->interaction = GoogleAppsCardV1ActionInteractionEnum::INTERACTION_UNSPECIFIED;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->action->loadIndicator = GoogleAppsCardV1ActionLoadIndicatorEnum::NONE;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->action->parameters = [
        new GoogleAppsCardV1ActionParameter(),
    ];
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->action->persistValues = false;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->card = new GoogleAppsCardV1Card();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openDynamicLinkAction = new GoogleAppsCardV1Action();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openDynamicLinkAction->function = 'iure';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openDynamicLinkAction->interaction = GoogleAppsCardV1ActionInteractionEnum::OPEN_DIALOG;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openDynamicLinkAction->loadIndicator = GoogleAppsCardV1ActionLoadIndicatorEnum::NONE;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openDynamicLinkAction->parameters = [
        new GoogleAppsCardV1ActionParameter(),
        new GoogleAppsCardV1ActionParameter(),
        new GoogleAppsCardV1ActionParameter(),
        new GoogleAppsCardV1ActionParameter(),
    ];
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openDynamicLinkAction->persistValues = false;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openLink = new GoogleAppsCardV1OpenLink();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openLink->onClose = GoogleAppsCardV1OpenLinkOnCloseEnum::NOTHING;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openLink->openAs = GoogleAppsCardV1OpenLinkOpenAsEnum::OVERLAY;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openLink->url = 'dolorem';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->text = 'culpa';
    $request->messageInput->actionResponse->dialogAction->dialog->body->header = new GoogleAppsCardV1CardHeader();
    $request->messageInput->actionResponse->dialogAction->dialog->body->header->imageAltText = 'consequuntur';
    $request->messageInput->actionResponse->dialogAction->dialog->body->header->imageType = GoogleAppsCardV1CardHeaderImageTypeEnum::CIRCLE;
    $request->messageInput->actionResponse->dialogAction->dialog->body->header->imageUrl = 'mollitia';
    $request->messageInput->actionResponse->dialogAction->dialog->body->header->subtitle = 'occaecati';
    $request->messageInput->actionResponse->dialogAction->dialog->body->header->title = 'Mrs.';
    $request->messageInput->actionResponse->dialogAction->dialog->body->name = 'Claudia Krajcik';
    $request->messageInput->actionResponse->dialogAction->dialog->body->peekCardHeader = new GoogleAppsCardV1CardHeader();
    $request->messageInput->actionResponse->dialogAction->dialog->body->peekCardHeader->imageAltText = 'quia';
    $request->messageInput->actionResponse->dialogAction->dialog->body->peekCardHeader->imageType = GoogleAppsCardV1CardHeaderImageTypeEnum::SQUARE;
    $request->messageInput->actionResponse->dialogAction->dialog->body->peekCardHeader->imageUrl = 'vitae';
    $request->messageInput->actionResponse->dialogAction->dialog->body->peekCardHeader->subtitle = 'laborum';
    $request->messageInput->actionResponse->dialogAction->dialog->body->peekCardHeader->title = 'Miss';
    $request->messageInput->actionResponse->dialogAction->dialog->body->sections = [
        new GoogleAppsCardV1Section(),
        new GoogleAppsCardV1Section(),
    ];
    $request->messageInput->actionResponse->type = ActionResponseTypeEnum::TYPE_UNSPECIFIED;
    $request->messageInput->actionResponse->url = 'quo';
    $request->messageInput->attachment = [
        new AttachmentInput(),
    ];
    $request->messageInput->cards = [
        new Card(),
        new Card(),
        new Card(),
        new Card(),
    ];
    $request->messageInput->cardsV2 = [
        new CardWithId(),
        new CardWithId(),
    ];
    $request->messageInput->clientAssignedMessageId = 'id';
    $request->messageInput->fallbackText = 'possimus';
    $request->messageInput->name = 'Joyce Mueller';
    $request->messageInput->sender = new UserInput();
    $request->messageInput->sender->domainId = 'quasi';
    $request->messageInput->sender->name = 'Jan Thiel';
    $request->messageInput->sender->type = UserTypeEnum::BOT;
    $request->messageInput->slashCommand = new SlashCommand();
    $request->messageInput->slashCommand->commandId = 'ipsa';
    $request->messageInput->space = new SpaceInput();
    $request->messageInput->space->displayName = 'omnis';
    $request->messageInput->space->name = 'Ms. Karla Aufderhar';
    $request->messageInput->space->singleUserBotDm = false;
    $request->messageInput->space->spaceDetails = new SpaceDetails();
    $request->messageInput->space->spaceDetails->description = 'maiores';
    $request->messageInput->space->spaceDetails->guidelines = 'dicta';
    $request->messageInput->text = 'corporis';
    $request->messageInput->thread = new Thread();
    $request->messageInput->thread->name = 'Heidi Carter';
    $request->messageInput->thread->threadKey = 'accusamus';
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quae';
    $request->fields = 'ipsum';
    $request->key = 'quidem';
    $request->messageId = 'molestias';
    $request->messageReplyOption = ChatSpacesMessagesCreateMessageReplyOptionEnum::REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD;
    $request->oauthToken = 'pariatur';
    $request->parent = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->requestId = 'rem';
    $request->threadKey = 'voluptates';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'repudiandae';

    $requestSecurity = new ChatSpacesMessagesCreateSecurity();
    $requestSecurity->option1 = new ChatSpacesMessagesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spaces->chatSpacesMessagesCreate($request, $requestSecurity);

    if ($response->message !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chatSpacesMessagesDelete

Deletes a message. For example usage, see [Delete a message](https://developers.google.com/chat/api/guides/crudl/messages#delete_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` authorization scope.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChatSpacesMessagesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'incidunt';
    $request->fields = 'enim';
    $request->key = 'consequatur';
    $request->name = 'Taylor Cole';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new ChatSpacesMessagesDeleteSecurity();
    $requestSecurity->option1 = new ChatSpacesMessagesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spaces->chatSpacesMessagesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chatSpacesMessagesPatch

Updates a message. There's a difference between `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For example usage, see [Update a message](https://developers.google.com/chat/api/guides/crudl/messages#update_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth/). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` authorization scope.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MessageInput;
use \OpenAPI\OpenAPI\Models\Shared\ActionResponse;
use \OpenAPI\OpenAPI\Models\Shared\DialogAction;
use \OpenAPI\OpenAPI\Models\Shared\ActionStatus;
use \OpenAPI\OpenAPI\Models\Shared\ActionStatusStatusCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Dialog;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Card;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1CardAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1OnClick;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Action;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1ActionInteractionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1ActionLoadIndicatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1ActionParameter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1OpenLink;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1OpenLinkOnCloseEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1OpenLinkOpenAsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1CardDisplayStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1CardFixedFooter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Button;
use \OpenAPI\OpenAPI\Models\Shared\Color;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Icon;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1IconImageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1CardHeader;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1CardHeaderImageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Section;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Widget;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1ButtonList;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1DateTimePicker;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1DateTimePickerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1DecoratedText;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1SwitchControl;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1SwitchControlControlTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Grid;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1BorderStyle;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1BorderStyleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1GridItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1ImageComponent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1ImageCropStyle;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1ImageCropStyleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1GridItemLayoutEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Image;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1SelectionInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1SelectionItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1SelectionInputTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1TextInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Suggestions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1SuggestionItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1TextInputTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1TextParagraph;
use \OpenAPI\OpenAPI\Models\Shared\ActionResponseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentInput;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentDataRef;
use \OpenAPI\OpenAPI\Models\Shared\DriveDataRef;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\Card;
use \OpenAPI\OpenAPI\Models\Shared\CardAction;
use \OpenAPI\OpenAPI\Models\Shared\OnClick;
use \OpenAPI\OpenAPI\Models\Shared\FormAction;
use \OpenAPI\OpenAPI\Models\Shared\ActionParameter;
use \OpenAPI\OpenAPI\Models\Shared\OpenLink;
use \OpenAPI\OpenAPI\Models\Shared\CardHeader;
use \OpenAPI\OpenAPI\Models\Shared\CardHeaderImageStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\Section;
use \OpenAPI\OpenAPI\Models\Shared\WidgetMarkup;
use \OpenAPI\OpenAPI\Models\Shared\Button;
use \OpenAPI\OpenAPI\Models\Shared\ImageButton;
use \OpenAPI\OpenAPI\Models\Shared\ImageButtonIconEnum;
use \OpenAPI\OpenAPI\Models\Shared\TextButton;
use \OpenAPI\OpenAPI\Models\Shared\Image;
use \OpenAPI\OpenAPI\Models\Shared\KeyValue;
use \OpenAPI\OpenAPI\Models\Shared\KeyValueIconEnum;
use \OpenAPI\OpenAPI\Models\Shared\TextParagraph;
use \OpenAPI\OpenAPI\Models\Shared\CardWithId;
use \OpenAPI\OpenAPI\Models\Shared\UserInput;
use \OpenAPI\OpenAPI\Models\Shared\UserTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SlashCommand;
use \OpenAPI\OpenAPI\Models\Shared\SpaceInput;
use \OpenAPI\OpenAPI\Models\Shared\SpaceDetails;
use \OpenAPI\OpenAPI\Models\Shared\Thread;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChatSpacesMessagesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->messageInput = new MessageInput();
    $request->messageInput->actionResponse = new ActionResponse();
    $request->messageInput->actionResponse->dialogAction = new DialogAction();
    $request->messageInput->actionResponse->dialogAction->actionStatus = new ActionStatus();
    $request->messageInput->actionResponse->dialogAction->actionStatus->statusCode = ActionStatusStatusCodeEnum::RESOURCE_EXHAUSTED;
    $request->messageInput->actionResponse->dialogAction->actionStatus->userFacingMessage = 'quos';
    $request->messageInput->actionResponse->dialogAction->dialog = new Dialog();
    $request->messageInput->actionResponse->dialogAction->dialog->body = new GoogleAppsCardV1Card();
    $request->messageInput->actionResponse->dialogAction->dialog->body->cardActions = [
        new GoogleAppsCardV1CardAction(),
    ];
    $request->messageInput->actionResponse->dialogAction->dialog->body->displayStyle = GoogleAppsCardV1CardDisplayStyleEnum::DISPLAY_STYLE_UNSPECIFIED;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter = new GoogleAppsCardV1CardFixedFooter();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton = new GoogleAppsCardV1Button();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->altText = 'assumenda';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->color = new Color();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->color->alpha = 3698.08;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->color->blue = 46.95;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->color->green = 1464.41;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->color->red = 6778.17;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->disabled = false;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->icon = new GoogleAppsCardV1Icon();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->icon->altText = 'excepturi';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->icon->iconUrl = 'tempora';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->icon->imageType = GoogleAppsCardV1IconImageTypeEnum::CIRCLE;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->icon->knownIcon = 'tempore';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick = new GoogleAppsCardV1OnClick();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->action = new GoogleAppsCardV1Action();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->action->function = 'labore';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->action->interaction = GoogleAppsCardV1ActionInteractionEnum::OPEN_DIALOG;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->action->loadIndicator = GoogleAppsCardV1ActionLoadIndicatorEnum::SPINNER;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->action->parameters = [
        new GoogleAppsCardV1ActionParameter(),
    ];
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->action->persistValues = false;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->card = new GoogleAppsCardV1Card();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openDynamicLinkAction = new GoogleAppsCardV1Action();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openDynamicLinkAction->function = 'eligendi';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openDynamicLinkAction->interaction = GoogleAppsCardV1ActionInteractionEnum::OPEN_DIALOG;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openDynamicLinkAction->loadIndicator = GoogleAppsCardV1ActionLoadIndicatorEnum::SPINNER;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openDynamicLinkAction->parameters = [
        new GoogleAppsCardV1ActionParameter(),
        new GoogleAppsCardV1ActionParameter(),
        new GoogleAppsCardV1ActionParameter(),
    ];
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openDynamicLinkAction->persistValues = false;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openLink = new GoogleAppsCardV1OpenLink();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openLink->onClose = GoogleAppsCardV1OpenLinkOnCloseEnum::RELOAD;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openLink->openAs = GoogleAppsCardV1OpenLinkOpenAsEnum::OVERLAY;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openLink->url = 'officia';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->text = 'dolor';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton = new GoogleAppsCardV1Button();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->altText = 'debitis';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->color = new Color();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->color->alpha = 9527.49;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->color->blue = 6800.56;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->color->green = 4471.25;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->color->red = 4491.98;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->disabled = false;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->icon = new GoogleAppsCardV1Icon();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->icon->altText = 'illum';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->icon->iconUrl = 'maiores';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->icon->imageType = GoogleAppsCardV1IconImageTypeEnum::CIRCLE;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->icon->knownIcon = 'dicta';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick = new GoogleAppsCardV1OnClick();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->action = new GoogleAppsCardV1Action();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->action->function = 'magnam';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->action->interaction = GoogleAppsCardV1ActionInteractionEnum::OPEN_DIALOG;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->action->loadIndicator = GoogleAppsCardV1ActionLoadIndicatorEnum::NONE;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->action->parameters = [
        new GoogleAppsCardV1ActionParameter(),
        new GoogleAppsCardV1ActionParameter(),
    ];
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->action->persistValues = false;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->card = new GoogleAppsCardV1Card();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openDynamicLinkAction = new GoogleAppsCardV1Action();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openDynamicLinkAction->function = 'aliquid';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openDynamicLinkAction->interaction = GoogleAppsCardV1ActionInteractionEnum::OPEN_DIALOG;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openDynamicLinkAction->loadIndicator = GoogleAppsCardV1ActionLoadIndicatorEnum::NONE;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openDynamicLinkAction->parameters = [
        new GoogleAppsCardV1ActionParameter(),
    ];
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openDynamicLinkAction->persistValues = false;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openLink = new GoogleAppsCardV1OpenLink();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openLink->onClose = GoogleAppsCardV1OpenLinkOnCloseEnum::RELOAD;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openLink->openAs = GoogleAppsCardV1OpenLinkOpenAsEnum::FULL_SIZE;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openLink->url = 'accusamus';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->text = 'delectus';
    $request->messageInput->actionResponse->dialogAction->dialog->body->header = new GoogleAppsCardV1CardHeader();
    $request->messageInput->actionResponse->dialogAction->dialog->body->header->imageAltText = 'quidem';
    $request->messageInput->actionResponse->dialogAction->dialog->body->header->imageType = GoogleAppsCardV1CardHeaderImageTypeEnum::CIRCLE;
    $request->messageInput->actionResponse->dialogAction->dialog->body->header->imageUrl = 'nam';
    $request->messageInput->actionResponse->dialogAction->dialog->body->header->subtitle = 'id';
    $request->messageInput->actionResponse->dialogAction->dialog->body->header->title = 'Ms.';
    $request->messageInput->actionResponse->dialogAction->dialog->body->name = 'Timmy Feeney';
    $request->messageInput->actionResponse->dialogAction->dialog->body->peekCardHeader = new GoogleAppsCardV1CardHeader();
    $request->messageInput->actionResponse->dialogAction->dialog->body->peekCardHeader->imageAltText = 'vel';
    $request->messageInput->actionResponse->dialogAction->dialog->body->peekCardHeader->imageType = GoogleAppsCardV1CardHeaderImageTypeEnum::CIRCLE;
    $request->messageInput->actionResponse->dialogAction->dialog->body->peekCardHeader->imageUrl = 'omnis';
    $request->messageInput->actionResponse->dialogAction->dialog->body->peekCardHeader->subtitle = 'molestiae';
    $request->messageInput->actionResponse->dialogAction->dialog->body->peekCardHeader->title = 'Mr.';
    $request->messageInput->actionResponse->dialogAction->dialog->body->sections = [
        new GoogleAppsCardV1Section(),
        new GoogleAppsCardV1Section(),
    ];
    $request->messageInput->actionResponse->type = ActionResponseTypeEnum::NEW_MESSAGE;
    $request->messageInput->actionResponse->url = 'distinctio';
    $request->messageInput->attachment = [
        new AttachmentInput(),
        new AttachmentInput(),
        new AttachmentInput(),
    ];
    $request->messageInput->cards = [
        new Card(),
        new Card(),
    ];
    $request->messageInput->cardsV2 = [
        new CardWithId(),
        new CardWithId(),
    ];
    $request->messageInput->clientAssignedMessageId = 'suscipit';
    $request->messageInput->fallbackText = 'natus';
    $request->messageInput->name = 'Duane Thiel II';
    $request->messageInput->sender = new UserInput();
    $request->messageInput->sender->domainId = 'et';
    $request->messageInput->sender->name = 'Derrick McLaughlin';
    $request->messageInput->sender->type = UserTypeEnum::TYPE_UNSPECIFIED;
    $request->messageInput->slashCommand = new SlashCommand();
    $request->messageInput->slashCommand->commandId = 'mollitia';
    $request->messageInput->space = new SpaceInput();
    $request->messageInput->space->displayName = 'reiciendis';
    $request->messageInput->space->name = 'Tommy Kemmer';
    $request->messageInput->space->singleUserBotDm = false;
    $request->messageInput->space->spaceDetails = new SpaceDetails();
    $request->messageInput->space->spaceDetails->description = 'odit';
    $request->messageInput->space->spaceDetails->guidelines = 'nemo';
    $request->messageInput->text = 'quasi';
    $request->messageInput->thread = new Thread();
    $request->messageInput->thread->name = 'Melba Toy';
    $request->messageInput->thread->threadKey = 'deleniti';
    $request->accessToken = 'facilis';
    $request->allowMissing = false;
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'architecto';
    $request->fields = 'architecto';
    $request->key = 'repudiandae';
    $request->name = 'Lola Koss';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->updateMask = 'pariatur';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new ChatSpacesMessagesPatchSecurity();
    $requestSecurity->option1 = new ChatSpacesMessagesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spaces->chatSpacesMessagesPatch($request, $requestSecurity);

    if ($response->message !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## chatSpacesMessagesUpdate

Updates a message. There's a difference between `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For example usage, see [Update a message](https://developers.google.com/chat/api/guides/crudl/messages#update_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth/). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` authorization scope.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MessageInput;
use \OpenAPI\OpenAPI\Models\Shared\ActionResponse;
use \OpenAPI\OpenAPI\Models\Shared\DialogAction;
use \OpenAPI\OpenAPI\Models\Shared\ActionStatus;
use \OpenAPI\OpenAPI\Models\Shared\ActionStatusStatusCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Dialog;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Card;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1CardAction;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1OnClick;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Action;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1ActionInteractionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1ActionLoadIndicatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1ActionParameter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1OpenLink;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1OpenLinkOnCloseEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1OpenLinkOpenAsEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1CardDisplayStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1CardFixedFooter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Button;
use \OpenAPI\OpenAPI\Models\Shared\Color;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Icon;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1IconImageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1CardHeader;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1CardHeaderImageTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Section;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Widget;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1ButtonList;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1DateTimePicker;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1DateTimePickerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1DecoratedText;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1SwitchControl;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1SwitchControlControlTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Grid;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1BorderStyle;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1BorderStyleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1GridItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1ImageComponent;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1ImageCropStyle;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1ImageCropStyleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1GridItemLayoutEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Image;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1SelectionInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1SelectionItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1SelectionInputTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1TextInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1Suggestions;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1SuggestionItem;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1TextInputTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAppsCardV1TextParagraph;
use \OpenAPI\OpenAPI\Models\Shared\ActionResponseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentInput;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentDataRef;
use \OpenAPI\OpenAPI\Models\Shared\DriveDataRef;
use \OpenAPI\OpenAPI\Models\Shared\AttachmentSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\Card;
use \OpenAPI\OpenAPI\Models\Shared\CardAction;
use \OpenAPI\OpenAPI\Models\Shared\OnClick;
use \OpenAPI\OpenAPI\Models\Shared\FormAction;
use \OpenAPI\OpenAPI\Models\Shared\ActionParameter;
use \OpenAPI\OpenAPI\Models\Shared\OpenLink;
use \OpenAPI\OpenAPI\Models\Shared\CardHeader;
use \OpenAPI\OpenAPI\Models\Shared\CardHeaderImageStyleEnum;
use \OpenAPI\OpenAPI\Models\Shared\Section;
use \OpenAPI\OpenAPI\Models\Shared\WidgetMarkup;
use \OpenAPI\OpenAPI\Models\Shared\Button;
use \OpenAPI\OpenAPI\Models\Shared\ImageButton;
use \OpenAPI\OpenAPI\Models\Shared\ImageButtonIconEnum;
use \OpenAPI\OpenAPI\Models\Shared\TextButton;
use \OpenAPI\OpenAPI\Models\Shared\Image;
use \OpenAPI\OpenAPI\Models\Shared\KeyValue;
use \OpenAPI\OpenAPI\Models\Shared\KeyValueIconEnum;
use \OpenAPI\OpenAPI\Models\Shared\TextParagraph;
use \OpenAPI\OpenAPI\Models\Shared\CardWithId;
use \OpenAPI\OpenAPI\Models\Shared\UserInput;
use \OpenAPI\OpenAPI\Models\Shared\UserTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SlashCommand;
use \OpenAPI\OpenAPI\Models\Shared\SpaceInput;
use \OpenAPI\OpenAPI\Models\Shared\SpaceDetails;
use \OpenAPI\OpenAPI\Models\Shared\Thread;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ChatSpacesMessagesUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChatSpacesMessagesUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->messageInput = new MessageInput();
    $request->messageInput->actionResponse = new ActionResponse();
    $request->messageInput->actionResponse->dialogAction = new DialogAction();
    $request->messageInput->actionResponse->dialogAction->actionStatus = new ActionStatus();
    $request->messageInput->actionResponse->dialogAction->actionStatus->statusCode = ActionStatusStatusCodeEnum::FAILED_PRECONDITION;
    $request->messageInput->actionResponse->dialogAction->actionStatus->userFacingMessage = 'magni';
    $request->messageInput->actionResponse->dialogAction->dialog = new Dialog();
    $request->messageInput->actionResponse->dialogAction->dialog->body = new GoogleAppsCardV1Card();
    $request->messageInput->actionResponse->dialogAction->dialog->body->cardActions = [
        new GoogleAppsCardV1CardAction(),
    ];
    $request->messageInput->actionResponse->dialogAction->dialog->body->displayStyle = GoogleAppsCardV1CardDisplayStyleEnum::REPLACE;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter = new GoogleAppsCardV1CardFixedFooter();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton = new GoogleAppsCardV1Button();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->altText = 'illum';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->color = new Color();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->color->alpha = 8649.34;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->color->blue = 8073.19;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->color->green = 4113.97;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->color->red = 5691.01;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->disabled = false;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->icon = new GoogleAppsCardV1Icon();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->icon->altText = 'odit';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->icon->iconUrl = 'ea';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->icon->imageType = GoogleAppsCardV1IconImageTypeEnum::SQUARE;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->icon->knownIcon = 'ab';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick = new GoogleAppsCardV1OnClick();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->action = new GoogleAppsCardV1Action();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->action->function = 'maiores';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->action->interaction = GoogleAppsCardV1ActionInteractionEnum::OPEN_DIALOG;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->action->loadIndicator = GoogleAppsCardV1ActionLoadIndicatorEnum::SPINNER;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->action->parameters = [
        new GoogleAppsCardV1ActionParameter(),
        new GoogleAppsCardV1ActionParameter(),
    ];
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->action->persistValues = false;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->card = new GoogleAppsCardV1Card();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openDynamicLinkAction = new GoogleAppsCardV1Action();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openDynamicLinkAction->function = 'autem';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openDynamicLinkAction->interaction = GoogleAppsCardV1ActionInteractionEnum::OPEN_DIALOG;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openDynamicLinkAction->loadIndicator = GoogleAppsCardV1ActionLoadIndicatorEnum::SPINNER;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openDynamicLinkAction->parameters = [
        new GoogleAppsCardV1ActionParameter(),
        new GoogleAppsCardV1ActionParameter(),
        new GoogleAppsCardV1ActionParameter(),
        new GoogleAppsCardV1ActionParameter(),
    ];
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openDynamicLinkAction->persistValues = false;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openLink = new GoogleAppsCardV1OpenLink();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openLink->onClose = GoogleAppsCardV1OpenLinkOnCloseEnum::NOTHING;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openLink->openAs = GoogleAppsCardV1OpenLinkOpenAsEnum::OVERLAY;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->onClick->openLink->url = 'perferendis';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->primaryButton->text = 'fugiat';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton = new GoogleAppsCardV1Button();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->altText = 'amet';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->color = new Color();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->color->alpha = 117.14;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->color->blue = 7649.12;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->color->green = 3599.78;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->color->red = 9441.24;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->disabled = false;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->icon = new GoogleAppsCardV1Icon();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->icon->altText = 'libero';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->icon->iconUrl = 'nobis';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->icon->imageType = GoogleAppsCardV1IconImageTypeEnum::SQUARE;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->icon->knownIcon = 'quis';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick = new GoogleAppsCardV1OnClick();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->action = new GoogleAppsCardV1Action();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->action->function = 'totam';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->action->interaction = GoogleAppsCardV1ActionInteractionEnum::INTERACTION_UNSPECIFIED;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->action->loadIndicator = GoogleAppsCardV1ActionLoadIndicatorEnum::SPINNER;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->action->parameters = [
        new GoogleAppsCardV1ActionParameter(),
        new GoogleAppsCardV1ActionParameter(),
    ];
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->action->persistValues = false;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->card = new GoogleAppsCardV1Card();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openDynamicLinkAction = new GoogleAppsCardV1Action();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openDynamicLinkAction->function = 'nesciunt';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openDynamicLinkAction->interaction = GoogleAppsCardV1ActionInteractionEnum::INTERACTION_UNSPECIFIED;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openDynamicLinkAction->loadIndicator = GoogleAppsCardV1ActionLoadIndicatorEnum::SPINNER;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openDynamicLinkAction->parameters = [
        new GoogleAppsCardV1ActionParameter(),
    ];
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openDynamicLinkAction->persistValues = false;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openLink = new GoogleAppsCardV1OpenLink();
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openLink->onClose = GoogleAppsCardV1OpenLinkOnCloseEnum::RELOAD;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openLink->openAs = GoogleAppsCardV1OpenLinkOpenAsEnum::FULL_SIZE;
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->onClick->openLink->url = 'dolor';
    $request->messageInput->actionResponse->dialogAction->dialog->body->fixedFooter->secondaryButton->text = 'vero';
    $request->messageInput->actionResponse->dialogAction->dialog->body->header = new GoogleAppsCardV1CardHeader();
    $request->messageInput->actionResponse->dialogAction->dialog->body->header->imageAltText = 'nostrum';
    $request->messageInput->actionResponse->dialogAction->dialog->body->header->imageType = GoogleAppsCardV1CardHeaderImageTypeEnum::CIRCLE;
    $request->messageInput->actionResponse->dialogAction->dialog->body->header->imageUrl = 'recusandae';
    $request->messageInput->actionResponse->dialogAction->dialog->body->header->subtitle = 'omnis';
    $request->messageInput->actionResponse->dialogAction->dialog->body->header->title = 'Miss';
    $request->messageInput->actionResponse->dialogAction->dialog->body->name = 'George Sawayn';
    $request->messageInput->actionResponse->dialogAction->dialog->body->peekCardHeader = new GoogleAppsCardV1CardHeader();
    $request->messageInput->actionResponse->dialogAction->dialog->body->peekCardHeader->imageAltText = 'error';
    $request->messageInput->actionResponse->dialogAction->dialog->body->peekCardHeader->imageType = GoogleAppsCardV1CardHeaderImageTypeEnum::SQUARE;
    $request->messageInput->actionResponse->dialogAction->dialog->body->peekCardHeader->imageUrl = 'occaecati';
    $request->messageInput->actionResponse->dialogAction->dialog->body->peekCardHeader->subtitle = 'rerum';
    $request->messageInput->actionResponse->dialogAction->dialog->body->peekCardHeader->title = 'Mrs.';
    $request->messageInput->actionResponse->dialogAction->dialog->body->sections = [
        new GoogleAppsCardV1Section(),
        new GoogleAppsCardV1Section(),
        new GoogleAppsCardV1Section(),
        new GoogleAppsCardV1Section(),
    ];
    $request->messageInput->actionResponse->type = ActionResponseTypeEnum::DIALOG;
    $request->messageInput->actionResponse->url = 'modi';
    $request->messageInput->attachment = [
        new AttachmentInput(),
        new AttachmentInput(),
        new AttachmentInput(),
    ];
    $request->messageInput->cards = [
        new Card(),
        new Card(),
        new Card(),
    ];
    $request->messageInput->cardsV2 = [
        new CardWithId(),
        new CardWithId(),
        new CardWithId(),
    ];
    $request->messageInput->clientAssignedMessageId = 'pariatur';
    $request->messageInput->fallbackText = 'provident';
    $request->messageInput->name = 'Randolph Wintheiser';
    $request->messageInput->sender = new UserInput();
    $request->messageInput->sender->domainId = 'aliquid';
    $request->messageInput->sender->name = 'Dawn Fadel';
    $request->messageInput->sender->type = UserTypeEnum::BOT;
    $request->messageInput->slashCommand = new SlashCommand();
    $request->messageInput->slashCommand->commandId = 'excepturi';
    $request->messageInput->space = new SpaceInput();
    $request->messageInput->space->displayName = 'cum';
    $request->messageInput->space->name = 'Marian Wisozk';
    $request->messageInput->space->singleUserBotDm = false;
    $request->messageInput->space->spaceDetails = new SpaceDetails();
    $request->messageInput->space->spaceDetails->description = 'numquam';
    $request->messageInput->space->spaceDetails->guidelines = 'veritatis';
    $request->messageInput->text = 'ipsa';
    $request->messageInput->thread = new Thread();
    $request->messageInput->thread->name = 'Vera Kuhlman';
    $request->messageInput->thread->threadKey = 'quidem';
    $request->accessToken = 'voluptatibus';
    $request->allowMissing = false;
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'eos';
    $request->key = 'atque';
    $request->name = 'Ginger Bergstrom';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->updateMask = 'dolorum';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new ChatSpacesMessagesUpdateSecurity();
    $requestSecurity->option1 = new ChatSpacesMessagesUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->spaces->chatSpacesMessagesUpdate($request, $requestSecurity);

    if ($response->message !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
