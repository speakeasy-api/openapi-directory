# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createAccount](#createaccount) - Create a new Twilio Subaccount from the account making the request
* [createAddress](#createaddress)
* [createApplication](#createapplication) - Create a new application within your account
* [createCall](#createcall) - Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections
* [createCallFeedbackSummary](#createcallfeedbacksummary) - Create a FeedbackSummary resource for a call
* [createCallRecording](#createcallrecording) - Create a recording for the call
* [createIncomingPhoneNumber](#createincomingphonenumber) - Purchase a phone-number for the account.
* [createIncomingPhoneNumberAssignedAddOn](#createincomingphonenumberassignedaddon) - Assign an Add-on installation to the Number specified.
* [createIncomingPhoneNumberLocal](#createincomingphonenumberlocal)
* [createIncomingPhoneNumberMobile](#createincomingphonenumbermobile)
* [createIncomingPhoneNumberTollFree](#createincomingphonenumbertollfree)
* [createMessage](#createmessage) - Send a message from the account used to make the request
* [createMessageFeedback](#createmessagefeedback)
* [createNewKey](#createnewkey)
* [createNewSigningKey](#createnewsigningkey) - Create a new Signing Key for the account making the request.
* [createParticipant](#createparticipant)
* [createPayments](#createpayments) - create an instance of payments. This will start a new payments session
* [createQueue](#createqueue) - Create a queue
* [createSipAuthCallsCredentialListMapping](#createsipauthcallscredentiallistmapping) - Create a new credential list mapping resource
* [createSipAuthCallsIpAccessControlListMapping](#createsipauthcallsipaccesscontrollistmapping) - Create a new IP Access Control List mapping
* [createSipAuthRegistrationsCredentialListMapping](#createsipauthregistrationscredentiallistmapping) - Create a new credential list mapping resource
* [createSipCredential](#createsipcredential) - Create a new credential resource.
* [createSipCredentialList](#createsipcredentiallist) - Create a Credential List
* [createSipCredentialListMapping](#createsipcredentiallistmapping) - Create a CredentialListMapping resource for an account.
* [createSipDomain](#createsipdomain) - Create a new Domain
* [createSipIpAccessControlList](#createsipipaccesscontrollist) - Create a new IpAccessControlList resource
* [createSipIpAccessControlListMapping](#createsipipaccesscontrollistmapping) - Create a new IpAccessControlListMapping resource.
* [createSipIpAddress](#createsipipaddress) - Create a new IpAddress resource.
* [createSiprec](#createsiprec) - Create a Siprec
* [createStream](#createstream) - Create a Stream
* [createToken](#createtoken) - Create a new token for ICE servers
* [createUsageTrigger](#createusagetrigger) - Create a new UsageTrigger
* [createUserDefinedMessage](#createuserdefinedmessage) - Create a new User Defined Message for the given Call SID.
* [createUserDefinedMessageSubscription](#createuserdefinedmessagesubscription) - Subscribe to User Defined Messages for a given Call SID.
* [createValidationRequest](#createvalidationrequest)
* [deleteAddress](#deleteaddress)
* [deleteApplication](#deleteapplication) - Delete the application by the specified application sid
* [deleteCall](#deletecall) - Delete a Call record from your account. Once the record is deleted, it will no longer appear in the API and Account Portal logs.
* [deleteCallFeedbackSummary](#deletecallfeedbacksummary) - Delete a FeedbackSummary resource from a call
* [deleteCallRecording](#deletecallrecording) - Delete a recording from your account
* [deleteConferenceRecording](#deleteconferencerecording) - Delete a recording from your account
* [deleteConnectApp](#deleteconnectapp) - Delete an instance of a connect-app
* [deleteIncomingPhoneNumber](#deleteincomingphonenumber) - Delete a phone-numbers belonging to the account used to make the request.
* [deleteIncomingPhoneNumberAssignedAddOn](#deleteincomingphonenumberassignedaddon) - Remove the assignment of an Add-on installation from the Number specified.
* [deleteKey](#deletekey)
* [deleteMedia](#deletemedia) - Delete media from your account. Once delete, you will no longer be billed
* [deleteMessage](#deletemessage) - Deletes a message record from your account
* [deleteOutgoingCallerId](#deleteoutgoingcallerid) - Delete the caller-id specified from the account
* [deleteParticipant](#deleteparticipant) - Kick a participant from a given conference
* [deleteQueue](#deletequeue) - Remove an empty queue
* [deleteRecording](#deleterecording) - Delete a recording from your account
* [deleteRecordingAddOnResult](#deleterecordingaddonresult) - Delete a result and purge all associated Payloads
* [deleteRecordingAddOnResultPayload](#deleterecordingaddonresultpayload) - Delete a payload from the result along with all associated Data
* [deleteRecordingTranscription](#deleterecordingtranscription)
* [deleteSigningKey](#deletesigningkey)
* [deleteSipAuthCallsCredentialListMapping](#deletesipauthcallscredentiallistmapping) - Delete a credential list mapping from the requested domain
* [deleteSipAuthCallsIpAccessControlListMapping](#deletesipauthcallsipaccesscontrollistmapping) - Delete an IP Access Control List mapping from the requested domain
* [deleteSipAuthRegistrationsCredentialListMapping](#deletesipauthregistrationscredentiallistmapping) - Delete a credential list mapping from the requested domain
* [deleteSipCredential](#deletesipcredential) - Delete a credential resource.
* [deleteSipCredentialList](#deletesipcredentiallist) - Delete a Credential List
* [deleteSipCredentialListMapping](#deletesipcredentiallistmapping) - Delete a CredentialListMapping resource from an account.
* [deleteSipDomain](#deletesipdomain) - Delete an instance of a Domain
* [deleteSipIpAccessControlList](#deletesipipaccesscontrollist) - Delete an IpAccessControlList from the requested account
* [deleteSipIpAccessControlListMapping](#deletesipipaccesscontrollistmapping) - Delete an IpAccessControlListMapping resource.
* [deleteSipIpAddress](#deletesipipaddress) - Delete an IpAddress resource.
* [deleteTranscription](#deletetranscription) - Delete a transcription from the account used to make the request
* [deleteUsageTrigger](#deleteusagetrigger)
* [deleteUserDefinedMessageSubscription](#deleteuserdefinedmessagesubscription) - Delete a specific User Defined Message Subscription.
* [fetchAccount](#fetchaccount) - Fetch the account specified by the provided Account Sid
* [fetchAddress](#fetchaddress)
* [fetchApplication](#fetchapplication) - Fetch the application specified by the provided sid
* [fetchAuthorizedConnectApp](#fetchauthorizedconnectapp) - Fetch an instance of an authorized-connect-app
* [fetchAvailablePhoneNumberCountry](#fetchavailablephonenumbercountry)
* [fetchBalance](#fetchbalance) - Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected immediately. Child accounts do not contain balance information
* [fetchCall](#fetchcall) - Fetch the call specified by the provided Call SID
* [fetchCallFeedback](#fetchcallfeedback) - Fetch a Feedback resource from a call
* [fetchCallFeedbackSummary](#fetchcallfeedbacksummary) - Fetch a FeedbackSummary resource from a call
* [fetchCallNotification](#fetchcallnotification)
* [fetchCallRecording](#fetchcallrecording) - Fetch an instance of a recording for a call
* [fetchConference](#fetchconference) - Fetch an instance of a conference
* [fetchConferenceRecording](#fetchconferencerecording) - Fetch an instance of a recording for a call
* [fetchConnectApp](#fetchconnectapp) - Fetch an instance of a connect-app
* [fetchIncomingPhoneNumber](#fetchincomingphonenumber) - Fetch an incoming-phone-number belonging to the account used to make the request.
* [fetchIncomingPhoneNumberAssignedAddOn](#fetchincomingphonenumberassignedaddon) - Fetch an instance of an Add-on installation currently assigned to this Number.
* [fetchIncomingPhoneNumberAssignedAddOnExtension](#fetchincomingphonenumberassignedaddonextension) - Fetch an instance of an Extension for the Assigned Add-on.
* [fetchKey](#fetchkey)
* [fetchMedia](#fetchmedia) - Fetch a single media instance belonging to the account used to make the request
* [fetchMember](#fetchmember) - Fetch a specific member from the queue
* [fetchMessage](#fetchmessage) - Fetch a message belonging to the account used to make the request
* [fetchNotification](#fetchnotification) - Fetch a notification belonging to the account used to make the request
* [fetchOutgoingCallerId](#fetchoutgoingcallerid) - Fetch an outgoing-caller-id belonging to the account used to make the request
* [fetchParticipant](#fetchparticipant) - Fetch an instance of a participant
* [fetchQueue](#fetchqueue) - Fetch an instance of a queue identified by the QueueSid
* [fetchRecording](#fetchrecording) - Fetch an instance of a recording
* [fetchRecordingAddOnResult](#fetchrecordingaddonresult) - Fetch an instance of an AddOnResult
* [fetchRecordingAddOnResultPayload](#fetchrecordingaddonresultpayload) - Fetch an instance of a result payload
* [fetchRecordingTranscription](#fetchrecordingtranscription)
* [fetchShortCode](#fetchshortcode) - Fetch an instance of a short code
* [fetchSigningKey](#fetchsigningkey)
* [fetchSipAuthCallsCredentialListMapping](#fetchsipauthcallscredentiallistmapping) - Fetch a specific instance of a credential list mapping
* [fetchSipAuthCallsIpAccessControlListMapping](#fetchsipauthcallsipaccesscontrollistmapping) - Fetch a specific instance of an IP Access Control List mapping
* [fetchSipAuthRegistrationsCredentialListMapping](#fetchsipauthregistrationscredentiallistmapping) - Fetch a specific instance of a credential list mapping
* [fetchSipCredential](#fetchsipcredential) - Fetch a single credential.
* [fetchSipCredentialList](#fetchsipcredentiallist) - Get a Credential List
* [fetchSipCredentialListMapping](#fetchsipcredentiallistmapping) - Fetch a single CredentialListMapping resource from an account.
* [fetchSipDomain](#fetchsipdomain) - Fetch an instance of a Domain
* [fetchSipIpAccessControlList](#fetchsipipaccesscontrollist) - Fetch a specific instance of an IpAccessControlList
* [fetchSipIpAccessControlListMapping](#fetchsipipaccesscontrollistmapping) - Fetch an IpAccessControlListMapping resource.
* [fetchSipIpAddress](#fetchsipipaddress) - Read one IpAddress resource.
* [fetchTranscription](#fetchtranscription) - Fetch an instance of a Transcription
* [fetchUsageTrigger](#fetchusagetrigger) - Fetch and instance of a usage-trigger
* [listAccount](#listaccount) - Retrieves a collection of Accounts belonging to the account used to make the request
* [listAddress](#listaddress)
* [listApplication](#listapplication) - Retrieve a list of applications representing an application within the requesting account
* [listAuthorizedConnectApp](#listauthorizedconnectapp) - Retrieve a list of authorized-connect-apps belonging to the account used to make the request
* [listAvailablePhoneNumberCountry](#listavailablephonenumbercountry)
* [listAvailablePhoneNumberLocal](#listavailablephonenumberlocal)
* [listAvailablePhoneNumberMachineToMachine](#listavailablephonenumbermachinetomachine)
* [listAvailablePhoneNumberMobile](#listavailablephonenumbermobile)
* [listAvailablePhoneNumberNational](#listavailablephonenumbernational)
* [listAvailablePhoneNumberSharedCost](#listavailablephonenumbersharedcost)
* [listAvailablePhoneNumberTollFree](#listavailablephonenumbertollfree)
* [listAvailablePhoneNumberVoip](#listavailablephonenumbervoip)
* [listCall](#listcall) - Retrieves a collection of calls made to and from your account
* [listCallEvent](#listcallevent) - Retrieve a list of all events for a call.
* [listCallNotification](#listcallnotification)
* [listCallRecording](#listcallrecording) - Retrieve a list of recordings belonging to the call used to make the request
* [listConference](#listconference) - Retrieve a list of conferences belonging to the account used to make the request
* [listConferenceRecording](#listconferencerecording) - Retrieve a list of recordings belonging to the call used to make the request
* [listConnectApp](#listconnectapp) - Retrieve a list of connect-apps belonging to the account used to make the request
* [listDependentPhoneNumber](#listdependentphonenumber)
* [listIncomingPhoneNumber](#listincomingphonenumber) - Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.
* [listIncomingPhoneNumberAssignedAddOn](#listincomingphonenumberassignedaddon) - Retrieve a list of Add-on installations currently assigned to this Number.
* [listIncomingPhoneNumberAssignedAddOnExtension](#listincomingphonenumberassignedaddonextension) - Retrieve a list of Extensions for the Assigned Add-on.
* [listIncomingPhoneNumberLocal](#listincomingphonenumberlocal)
* [listIncomingPhoneNumberMobile](#listincomingphonenumbermobile)
* [listIncomingPhoneNumberTollFree](#listincomingphonenumbertollfree)
* [listKey](#listkey)
* [listMedia](#listmedia) - Retrieve a list of Media resources belonging to the account used to make the request
* [listMember](#listmember) - Retrieve the members of the queue
* [listMessage](#listmessage) - Retrieve a list of messages belonging to the account used to make the request
* [listNotification](#listnotification) - Retrieve a list of notifications belonging to the account used to make the request
* [listOutgoingCallerId](#listoutgoingcallerid) - Retrieve a list of outgoing-caller-ids belonging to the account used to make the request
* [listParticipant](#listparticipant) - Retrieve a list of participants belonging to the account used to make the request
* [listQueue](#listqueue) - Retrieve a list of queues belonging to the account used to make the request
* [listRecording](#listrecording) - Retrieve a list of recordings belonging to the account used to make the request
* [listRecordingAddOnResult](#listrecordingaddonresult) - Retrieve a list of results belonging to the recording
* [listRecordingAddOnResultPayload](#listrecordingaddonresultpayload) - Retrieve a list of payloads belonging to the AddOnResult
* [listRecordingTranscription](#listrecordingtranscription)
* [listShortCode](#listshortcode) - Retrieve a list of short-codes belonging to the account used to make the request
* [listSigningKey](#listsigningkey)
* [listSipAuthCallsCredentialListMapping](#listsipauthcallscredentiallistmapping) - Retrieve a list of credential list mappings belonging to the domain used in the request
* [listSipAuthCallsIpAccessControlListMapping](#listsipauthcallsipaccesscontrollistmapping) - Retrieve a list of IP Access Control List mappings belonging to the domain used in the request
* [listSipAuthRegistrationsCredentialListMapping](#listsipauthregistrationscredentiallistmapping) - Retrieve a list of credential list mappings belonging to the domain used in the request
* [listSipCredential](#listsipcredential) - Retrieve a list of credentials.
* [listSipCredentialList](#listsipcredentiallist) - Get All Credential Lists
* [listSipCredentialListMapping](#listsipcredentiallistmapping) - Read multiple CredentialListMapping resources from an account.
* [listSipDomain](#listsipdomain) - Retrieve a list of domains belonging to the account used to make the request
* [listSipIpAccessControlList](#listsipipaccesscontrollist) - Retrieve a list of IpAccessControlLists that belong to the account used to make the request
* [listSipIpAccessControlListMapping](#listsipipaccesscontrollistmapping) - Retrieve a list of IpAccessControlListMapping resources.
* [listSipIpAddress](#listsipipaddress) - Read multiple IpAddress resources.
* [listTranscription](#listtranscription) - Retrieve a list of transcriptions belonging to the account used to make the request
* [listUsageRecord](#listusagerecord) - Retrieve a list of usage-records belonging to the account used to make the request
* [listUsageRecordAllTime](#listusagerecordalltime)
* [listUsageRecordDaily](#listusagerecorddaily)
* [listUsageRecordLastMonth](#listusagerecordlastmonth)
* [listUsageRecordMonthly](#listusagerecordmonthly)
* [listUsageRecordThisMonth](#listusagerecordthismonth)
* [listUsageRecordToday](#listusagerecordtoday)
* [listUsageRecordYearly](#listusagerecordyearly)
* [listUsageRecordYesterday](#listusagerecordyesterday)
* [listUsageTrigger](#listusagetrigger) - Retrieve a list of usage-triggers belonging to the account used to make the request
* [updateAccount](#updateaccount) - Modify the properties of a given Account
* [updateAddress](#updateaddress)
* [updateApplication](#updateapplication) - Updates the application's properties
* [updateCall](#updatecall) - Initiates a call redirect or terminates a call
* [updateCallFeedback](#updatecallfeedback) - Update a Feedback resource for a call
* [updateCallRecording](#updatecallrecording) - Changes the status of the recording to paused, stopped, or in-progress. Note: Pass `Twilio.CURRENT` instead of recording sid to reference current active recording.
* [updateConference](#updateconference)
* [updateConferenceRecording](#updateconferencerecording) - Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.
* [updateConnectApp](#updateconnectapp) - Update a connect-app with the specified parameters
* [updateIncomingPhoneNumber](#updateincomingphonenumber) - Update an incoming-phone-number instance.
* [updateKey](#updatekey)
* [updateMember](#updatemember) - Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL
* [updateMessage](#updatemessage) - To redact a message-body from a post-flight message record, post to the message instance resource with an empty body
* [updateOutgoingCallerId](#updateoutgoingcallerid) - Updates the caller-id
* [updateParticipant](#updateparticipant) - Update the properties of the participant
* [updatePayments](#updatepayments) - update an instance of payments with different phases of payment flows.
* [updateQueue](#updatequeue) - Update the queue with the new parameters
* [updateShortCode](#updateshortcode) - Update a short code with the following parameters
* [updateSigningKey](#updatesigningkey)
* [updateSipCredential](#updatesipcredential) - Update a credential resource.
* [updateSipCredentialList](#updatesipcredentiallist) - Update a Credential List
* [updateSipDomain](#updatesipdomain) - Update the attributes of a domain
* [updateSipIpAccessControlList](#updatesipipaccesscontrollist) - Rename an IpAccessControlList
* [updateSipIpAddress](#updatesipipaddress) - Update an IpAddress resource.
* [updateSiprec](#updatesiprec) - Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource
* [updateStream](#updatestream) - Stop a Stream using either the SID of the Stream resource or the `name` used when creating the resource
* [updateUsageTrigger](#updateusagetrigger) - Update an instance of a usage trigger

## createAccount

Create a new Twilio Subaccount from the account making the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountCreateAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccountCreateAccountRequest();
    $request->friendlyName = 'provident';

    $requestSecurity = new CreateAccountSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createAccount($request, $requestSecurity);

    if ($response->apiV2010Account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAddressCreateAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAddressSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAddressRequest();
    $request->accountSid = 'distinctio';
    $request->requestBody = new CreateAddressCreateAddressRequest();
    $request->requestBody->autoCorrectAddress = false;
    $request->requestBody->city = 'New Orleans';
    $request->requestBody->customerName = 'nulla';
    $request->requestBody->emergencyEnabled = false;
    $request->requestBody->friendlyName = 'corrupti';
    $request->requestBody->isoCountry = 'illum';
    $request->requestBody->postalCode = '66342';
    $request->requestBody->region = 'debitis';
    $request->requestBody->street = '92347 Lehner Lights';
    $request->requestBody->streetSecondary = 'excepturi';

    $requestSecurity = new CreateAddressSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createAddress($request, $requestSecurity);

    if ($response->apiV2010AccountAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createApplication

Create a new application within your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationCreateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationCreateApplicationRequestSmsMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationCreateApplicationRequestVoiceMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateApplicationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApplicationRequest();
    $request->accountSid = 'nisi';
    $request->requestBody = new CreateApplicationCreateApplicationRequest();
    $request->requestBody->apiVersion = 'recusandae';
    $request->requestBody->friendlyName = 'temporibus';
    $request->requestBody->messageStatusCallback = 'http://gloomy-blanket.name';
    $request->requestBody->publicApplicationConnectEnabled = false;
    $request->requestBody->smsFallbackMethod = CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum::HEAD;
    $request->requestBody->smsFallbackUrl = 'http://sympathetic-viewer.net';
    $request->requestBody->smsMethod = CreateApplicationCreateApplicationRequestSmsMethodEnum::HEAD;
    $request->requestBody->smsStatusCallback = 'https://trim-wheat.info';
    $request->requestBody->smsUrl = 'https://starry-initialise.name';
    $request->requestBody->statusCallback = 'https://rash-butcher.net';
    $request->requestBody->statusCallbackMethod = CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum::PATCH;
    $request->requestBody->voiceCallerIdLookup = false;
    $request->requestBody->voiceFallbackMethod = CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum::PATCH;
    $request->requestBody->voiceFallbackUrl = 'http://miserly-usage.net';
    $request->requestBody->voiceMethod = CreateApplicationCreateApplicationRequestVoiceMethodEnum::PATCH;
    $request->requestBody->voiceUrl = 'http://immense-investor.biz';

    $requestSecurity = new CreateApplicationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createApplication($request, $requestSecurity);

    if ($response->apiV2010AccountApplication !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCall

Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallCreateCallRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallCreateCallRequestFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallCreateCallRequestMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallCreateCallRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCallRequest();
    $request->accountSid = 'qui';
    $request->requestBody = new CreateCallCreateCallRequest();
    $request->requestBody->applicationSid = 'impedit';
    $request->requestBody->asyncAmd = 'cum';
    $request->requestBody->asyncAmdStatusCallback = 'http://dull-mister.com';
    $request->requestBody->asyncAmdStatusCallbackMethod = CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum::HEAD;
    $request->requestBody->byoc = 'ad';
    $request->requestBody->callReason = 'natus';
    $request->requestBody->callToken = 'sed';
    $request->requestBody->callerId = 'iste';
    $request->requestBody->fallbackMethod = CreateCallCreateCallRequestFallbackMethodEnum::GET;
    $request->requestBody->fallbackUrl = 'https://hoarse-upper.org';
    $request->requestBody->from = 'fuga';
    $request->requestBody->machineDetection = 'in';
    $request->requestBody->machineDetectionSilenceTimeout = 359508;
    $request->requestBody->machineDetectionSpeechEndThreshold = 613064;
    $request->requestBody->machineDetectionSpeechThreshold = 437032;
    $request->requestBody->machineDetectionTimeout = 902349;
    $request->requestBody->method = CreateCallCreateCallRequestMethodEnum::PUT;
    $request->requestBody->record = false;
    $request->requestBody->recordingChannels = 'architecto';
    $request->requestBody->recordingStatusCallback = 'ipsa';
    $request->requestBody->recordingStatusCallbackEvent = [
        'est',
        'mollitia',
        'laborum',
        'dolores',
    ];
    $request->requestBody->recordingStatusCallbackMethod = CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum::GET;
    $request->requestBody->recordingTrack = 'corporis';
    $request->requestBody->sendDigits = 'explicabo';
    $request->requestBody->sipAuthPassword = 'nobis';
    $request->requestBody->sipAuthUsername = 'enim';
    $request->requestBody->statusCallback = 'https://gummy-expedition.name';
    $request->requestBody->statusCallbackEvent = [
        'iure',
    ];
    $request->requestBody->statusCallbackMethod = CreateCallCreateCallRequestStatusCallbackMethodEnum::PATCH;
    $request->requestBody->timeLimit = 988374;
    $request->requestBody->timeout = 958950;
    $request->requestBody->to = 'architecto';
    $request->requestBody->trim = 'mollitia';
    $request->requestBody->twiml = 'dolorem';
    $request->requestBody->url = 'https://curly-yellow.name';

    $requestSecurity = new CreateCallSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createCall($request, $requestSecurity);

    if ($response->apiV2010AccountCall !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCallFeedbackSummary

Create a FeedbackSummary resource for a call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallFeedbackSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallFeedbackSummarySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCallFeedbackSummaryRequest();
    $request->accountSid = 'occaecati';
    $request->requestBody = new CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest();
    $request->requestBody->endDate = DateTime::createFromFormat('Y-m-d', '2022-08-02');
    $request->requestBody->includeSubaccounts = false;
    $request->requestBody->startDate = DateTime::createFromFormat('Y-m-d', '2022-07-11');
    $request->requestBody->statusCallback = 'http://physical-chord.info';
    $request->requestBody->statusCallbackMethod = CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum::HEAD;

    $requestSecurity = new CreateCallFeedbackSummarySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createCallFeedbackSummary($request, $requestSecurity);

    if ($response->apiV2010AccountCallCallFeedbackSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCallRecording

Create a recording for the call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallRecordingCreateCallRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCallRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCallRecordingRequest();
    $request->accountSid = 'laborum';
    $request->callSid = 'animi';
    $request->requestBody = new CreateCallRecordingCreateCallRecordingRequest();
    $request->requestBody->recordingChannels = 'enim';
    $request->requestBody->recordingStatusCallback = 'http://sophisticated-conifer.org';
    $request->requestBody->recordingStatusCallbackEvent = [
        'id',
        'possimus',
    ];
    $request->requestBody->recordingStatusCallbackMethod = CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum::HEAD;
    $request->requestBody->recordingTrack = 'quasi';
    $request->requestBody->trim = 'error';

    $requestSecurity = new CreateCallRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createCallRecording($request, $requestSecurity);

    if ($response->apiV2010AccountCallCallRecording !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createIncomingPhoneNumber

Purchase a phone-number for the account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Shared\IncomingPhoneNumberEnumEmergencyStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\IncomingPhoneNumberEnumVoiceReceiveModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateIncomingPhoneNumberRequest();
    $request->accountSid = 'temporibus';
    $request->requestBody = new CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest();
    $request->requestBody->addressSid = 'laborum';
    $request->requestBody->apiVersion = 'quasi';
    $request->requestBody->areaCode = 'reiciendis';
    $request->requestBody->bundleSid = 'voluptatibus';
    $request->requestBody->emergencyAddressSid = 'vero';
    $request->requestBody->emergencyStatus = IncomingPhoneNumberEnumEmergencyStatusEnum::ACTIVE;
    $request->requestBody->friendlyName = 'praesentium';
    $request->requestBody->identitySid = 'voluptatibus';
    $request->requestBody->phoneNumber = 'ipsa';
    $request->requestBody->smsApplicationSid = 'omnis';
    $request->requestBody->smsFallbackMethod = CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum::POST;
    $request->requestBody->smsFallbackUrl = 'https://agile-arch-rival.info';
    $request->requestBody->smsMethod = CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum::GET;
    $request->requestBody->smsUrl = 'https://clear-forage.biz';
    $request->requestBody->statusCallback = 'http://classic-presidency.biz';
    $request->requestBody->statusCallbackMethod = CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum::DELETE;
    $request->requestBody->trunkSid = 'commodi';
    $request->requestBody->voiceApplicationSid = 'repudiandae';
    $request->requestBody->voiceCallerIdLookup = false;
    $request->requestBody->voiceFallbackMethod = CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum::HEAD;
    $request->requestBody->voiceFallbackUrl = 'http://repentant-minnow.name';
    $request->requestBody->voiceMethod = CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum::DELETE;
    $request->requestBody->voiceReceiveMode = IncomingPhoneNumberEnumVoiceReceiveModeEnum::VOICE;
    $request->requestBody->voiceUrl = 'https://meaty-tortoise.com';

    $requestSecurity = new CreateIncomingPhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createIncomingPhoneNumber($request, $requestSecurity);

    if ($response->apiV2010AccountIncomingPhoneNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createIncomingPhoneNumberAssignedAddOn

Assign an Add-on installation to the Number specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberAssignedAddOnRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberAssignedAddOnSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateIncomingPhoneNumberAssignedAddOnRequest();
    $request->accountSid = 'repudiandae';
    $request->requestBody = new CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest();
    $request->requestBody->installedAddOnSid = 'sint';
    $request->resourceSid = 'veritatis';

    $requestSecurity = new CreateIncomingPhoneNumberAssignedAddOnSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createIncomingPhoneNumberAssignedAddOn($request, $requestSecurity);

    if ($response->apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createIncomingPhoneNumberLocal

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberLocalRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest;
use \OpenAPI\OpenAPI\Models\Shared\IncomingPhoneNumberLocalEnumEmergencyStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\IncomingPhoneNumberLocalEnumVoiceReceiveModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberLocalSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateIncomingPhoneNumberLocalRequest();
    $request->accountSid = 'itaque';
    $request->requestBody = new CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest();
    $request->requestBody->addressSid = 'incidunt';
    $request->requestBody->apiVersion = 'enim';
    $request->requestBody->bundleSid = 'consequatur';
    $request->requestBody->emergencyAddressSid = 'est';
    $request->requestBody->emergencyStatus = IncomingPhoneNumberLocalEnumEmergencyStatusEnum::INACTIVE;
    $request->requestBody->friendlyName = 'explicabo';
    $request->requestBody->identitySid = 'deserunt';
    $request->requestBody->phoneNumber = 'distinctio';
    $request->requestBody->smsApplicationSid = 'quibusdam';
    $request->requestBody->smsFallbackMethod = CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum::GET;
    $request->requestBody->smsFallbackUrl = 'http://delightful-graph.name';
    $request->requestBody->smsMethod = CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum::PATCH;
    $request->requestBody->smsUrl = 'http://damp-sousaphone.info';
    $request->requestBody->statusCallback = 'http://costly-poncho.name';
    $request->requestBody->statusCallbackMethod = CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum::GET;
    $request->requestBody->trunkSid = 'facilis';
    $request->requestBody->voiceApplicationSid = 'tempore';
    $request->requestBody->voiceCallerIdLookup = false;
    $request->requestBody->voiceFallbackMethod = CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum::GET;
    $request->requestBody->voiceFallbackUrl = 'https://infantile-demur.net';
    $request->requestBody->voiceMethod = CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum::PATCH;
    $request->requestBody->voiceReceiveMode = IncomingPhoneNumberLocalEnumVoiceReceiveModeEnum::VOICE;
    $request->requestBody->voiceUrl = 'https://unlined-mole.name';

    $requestSecurity = new CreateIncomingPhoneNumberLocalSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createIncomingPhoneNumberLocal($request, $requestSecurity);

    if ($response->apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createIncomingPhoneNumberMobile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberMobileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest;
use \OpenAPI\OpenAPI\Models\Shared\IncomingPhoneNumberMobileEnumEmergencyStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberMobileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateIncomingPhoneNumberMobileRequest();
    $request->accountSid = 'dolor';
    $request->requestBody = new CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest();
    $request->requestBody->addressSid = 'debitis';
    $request->requestBody->apiVersion = 'a';
    $request->requestBody->bundleSid = 'dolorum';
    $request->requestBody->emergencyAddressSid = 'in';
    $request->requestBody->emergencyStatus = IncomingPhoneNumberMobileEnumEmergencyStatusEnum::ACTIVE;
    $request->requestBody->friendlyName = 'illum';
    $request->requestBody->identitySid = 'maiores';
    $request->requestBody->phoneNumber = 'rerum';
    $request->requestBody->smsApplicationSid = 'dicta';
    $request->requestBody->smsFallbackMethod = CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum::GET;
    $request->requestBody->smsFallbackUrl = 'https://stupendous-handmaiden.info';
    $request->requestBody->smsMethod = CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum::PUT;
    $request->requestBody->smsUrl = 'https://exemplary-mover.biz';
    $request->requestBody->statusCallback = 'https://white-printing.name';
    $request->requestBody->statusCallbackMethod = CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum::PUT;
    $request->requestBody->trunkSid = 'id';
    $request->requestBody->voiceApplicationSid = 'blanditiis';
    $request->requestBody->voiceCallerIdLookup = false;
    $request->requestBody->voiceFallbackMethod = CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum::PATCH;
    $request->requestBody->voiceFallbackUrl = 'https://embarrassed-peacock.info';
    $request->requestBody->voiceMethod = CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum::POST;
    $request->requestBody->voiceReceiveMode = IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum::FAX;
    $request->requestBody->voiceUrl = 'https://lame-alcohol.info';

    $requestSecurity = new CreateIncomingPhoneNumberMobileSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createIncomingPhoneNumberMobile($request, $requestSecurity);

    if ($response->apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createIncomingPhoneNumberTollFree

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberTollFreeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest;
use \OpenAPI\OpenAPI\Models\Shared\IncomingPhoneNumberTollFreeEnumEmergencyStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\IncomingPhoneNumberTollFreeEnumVoiceReceiveModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateIncomingPhoneNumberTollFreeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateIncomingPhoneNumberTollFreeRequest();
    $request->accountSid = 'magnam';
    $request->requestBody = new CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest();
    $request->requestBody->addressSid = 'distinctio';
    $request->requestBody->apiVersion = 'id';
    $request->requestBody->bundleSid = 'labore';
    $request->requestBody->emergencyAddressSid = 'labore';
    $request->requestBody->emergencyStatus = IncomingPhoneNumberTollFreeEnumEmergencyStatusEnum::ACTIVE;
    $request->requestBody->friendlyName = 'natus';
    $request->requestBody->identitySid = 'nobis';
    $request->requestBody->phoneNumber = 'eum';
    $request->requestBody->smsApplicationSid = 'vero';
    $request->requestBody->smsFallbackMethod = CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum::HEAD;
    $request->requestBody->smsFallbackUrl = 'http://foolhardy-bolero.name';
    $request->requestBody->smsMethod = CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum::POST;
    $request->requestBody->smsUrl = 'https://murky-monotheism.com';
    $request->requestBody->statusCallback = 'https://wide-eyed-perspective.biz';
    $request->requestBody->statusCallbackMethod = CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum::POST;
    $request->requestBody->trunkSid = 'dolor';
    $request->requestBody->voiceApplicationSid = 'necessitatibus';
    $request->requestBody->voiceCallerIdLookup = false;
    $request->requestBody->voiceFallbackMethod = CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum::HEAD;
    $request->requestBody->voiceFallbackUrl = 'http://bumpy-hosiery.org';
    $request->requestBody->voiceMethod = CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum::DELETE;
    $request->requestBody->voiceReceiveMode = IncomingPhoneNumberTollFreeEnumVoiceReceiveModeEnum::VOICE;
    $request->requestBody->voiceUrl = 'https://miserly-pruner.info';

    $requestSecurity = new CreateIncomingPhoneNumberTollFreeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createIncomingPhoneNumberTollFree($request, $requestSecurity);

    if ($response->apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMessage

Send a message from the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessageCreateMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\MessageEnumAddressRetentionEnum;
use \OpenAPI\OpenAPI\Models\Shared\MessageEnumContentRetentionEnum;
use \OpenAPI\OpenAPI\Models\Shared\MessageEnumScheduleTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMessageRequest();
    $request->accountSid = 'architecto';
    $request->requestBody = new CreateMessageCreateMessageRequest();
    $request->requestBody->addressRetention = MessageEnumAddressRetentionEnum::RETAIN;
    $request->requestBody->applicationSid = 'architecto';
    $request->requestBody->attempt = 919483;
    $request->requestBody->body = 'ullam';
    $request->requestBody->contentRetention = MessageEnumContentRetentionEnum::RETAIN;
    $request->requestBody->contentSid = 'expedita';
    $request->requestBody->contentVariables = 'nihil';
    $request->requestBody->forceDelivery = false;
    $request->requestBody->from = 'repellat';
    $request->requestBody->maxPrice = 8411.4;
    $request->requestBody->mediaUrl = [
        'https://triangular-apprehension.com',
    ];
    $request->requestBody->messagingServiceSid = 'praesentium';
    $request->requestBody->persistentAction = [
        'magni',
        'sunt',
        'quo',
    ];
    $request->requestBody->provideFeedback = false;
    $request->requestBody->scheduleType = MessageEnumScheduleTypeEnum::FIXED;
    $request->requestBody->sendAsMms = false;
    $request->requestBody->sendAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-28T21:33:10.895Z');
    $request->requestBody->shortenUrls = false;
    $request->requestBody->smartEncoded = false;
    $request->requestBody->statusCallback = 'https://imaginary-mix.com';
    $request->requestBody->to = 'ea';
    $request->requestBody->validityPeriod = 33222;

    $requestSecurity = new CreateMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createMessage($request, $requestSecurity);

    if ($response->apiV2010AccountMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMessageFeedback

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessageFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessageFeedbackCreateMessageFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Shared\MessageFeedbackEnumOutcomeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessageFeedbackSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMessageFeedbackRequest();
    $request->accountSid = 'ab';
    $request->messageSid = 'maiores';
    $request->requestBody = new CreateMessageFeedbackCreateMessageFeedbackRequest();
    $request->requestBody->outcome = MessageFeedbackEnumOutcomeEnum::UNCONFIRMED;

    $requestSecurity = new CreateMessageFeedbackSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createMessageFeedback($request, $requestSecurity);

    if ($response->apiV2010AccountMessageMessageFeedback !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNewKey

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateNewKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNewKeyCreateNewKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNewKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNewKeyRequest();
    $request->accountSid = 'ipsam';
    $request->requestBody = new CreateNewKeyCreateNewKeyRequest();
    $request->requestBody->friendlyName = 'voluptate';

    $requestSecurity = new CreateNewKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createNewKey($request, $requestSecurity);

    if ($response->apiV2010AccountNewKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNewSigningKey

Create a new Signing Key for the account making the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateNewSigningKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNewSigningKeyCreateNewSigningKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNewSigningKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNewSigningKeyRequest();
    $request->accountSid = 'autem';
    $request->requestBody = new CreateNewSigningKeyCreateNewSigningKeyRequest();
    $request->requestBody->friendlyName = 'nam';

    $requestSecurity = new CreateNewSigningKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createNewSigningKey($request, $requestSecurity);

    if ($response->apiV2010AccountNewSigningKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createParticipant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateParticipantCreateParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateParticipantCreateParticipantRequestWaitMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateParticipantRequest();
    $request->accountSid = 'eaque';
    $request->conferenceSid = 'pariatur';
    $request->requestBody = new CreateParticipantCreateParticipantRequest();
    $request->requestBody->amdStatusCallback = 'http://wise-airbag.org';
    $request->requestBody->amdStatusCallbackMethod = CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum::GET;
    $request->requestBody->beep = 'aut';
    $request->requestBody->byoc = 'cumque';
    $request->requestBody->callReason = 'corporis';
    $request->requestBody->callSidToCoach = 'hic';
    $request->requestBody->callerId = 'libero';
    $request->requestBody->coaching = false;
    $request->requestBody->conferenceRecord = 'nobis';
    $request->requestBody->conferenceRecordingStatusCallback = 'http://glum-locality.info';
    $request->requestBody->conferenceRecordingStatusCallbackEvent = [
        'quis',
    ];
    $request->requestBody->conferenceRecordingStatusCallbackMethod = CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum::GET;
    $request->requestBody->conferenceStatusCallback = 'http://aggravating-clogs.net';
    $request->requestBody->conferenceStatusCallbackEvent = [
        'dolor',
        'vero',
    ];
    $request->requestBody->conferenceStatusCallbackMethod = CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum::POST;
    $request->requestBody->conferenceTrim = 'hic';
    $request->requestBody->earlyMedia = false;
    $request->requestBody->endConferenceOnExit = false;
    $request->requestBody->from = 'recusandae';
    $request->requestBody->jitterBufferSize = 'omnis';
    $request->requestBody->label = 'facilis';
    $request->requestBody->machineDetection = 'perspiciatis';
    $request->requestBody->machineDetectionSilenceTimeout = 31838;
    $request->requestBody->machineDetectionSpeechEndThreshold = 783645;
    $request->requestBody->machineDetectionSpeechThreshold = 164694;
    $request->requestBody->machineDetectionTimeout = 500026;
    $request->requestBody->maxParticipants = 621479;
    $request->requestBody->muted = false;
    $request->requestBody->record = false;
    $request->requestBody->recordingChannels = 'eaque';
    $request->requestBody->recordingStatusCallback = 'https://right-damage.org';
    $request->requestBody->recordingStatusCallbackEvent = [
        'modi',
        'iste',
        'dolorum',
        'deleniti',
    ];
    $request->requestBody->recordingStatusCallbackMethod = CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum::DELETE;
    $request->requestBody->recordingTrack = 'provident';
    $request->requestBody->region = 'nobis';
    $request->requestBody->sipAuthPassword = 'libero';
    $request->requestBody->sipAuthUsername = 'delectus';
    $request->requestBody->startConferenceOnEnter = false;
    $request->requestBody->statusCallback = 'http://mysterious-grass.biz';
    $request->requestBody->statusCallbackEvent = [
        'dolor',
    ];
    $request->requestBody->statusCallbackMethod = CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum::GET;
    $request->requestBody->timeLimit = 218749;
    $request->requestBody->timeout = 944373;
    $request->requestBody->to = 'excepturi';
    $request->requestBody->waitMethod = CreateParticipantCreateParticipantRequestWaitMethodEnum::PUT;
    $request->requestBody->waitUrl = 'http://limping-washbasin.biz';

    $requestSecurity = new CreateParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createParticipant($request, $requestSecurity);

    if ($response->apiV2010AccountConferenceParticipant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPayments

create an instance of payments. This will start a new payments session

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatePaymentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePaymentsCreatePaymentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaymentsEnumBankAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentsEnumPaymentMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentsEnumTokenTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreatePaymentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePaymentsRequest();
    $request->accountSid = 'dolorum';
    $request->callSid = 'numquam';
    $request->requestBody = new CreatePaymentsCreatePaymentsRequest();
    $request->requestBody->bankAccountType = PaymentsEnumBankAccountTypeEnum::CONSUMER_CHECKING;
    $request->requestBody->chargeAmount = 580.29;
    $request->requestBody->currency = 'ipsa';
    $request->requestBody->description = 'iure';
    $request->requestBody->idempotencyKey = 'odio';
    $request->requestBody->input = 'quaerat';
    $request->requestBody->minPostalCodeLength = 881005;
    $request->requestBody->parameter = 'quidem';
    $request->requestBody->paymentConnector = 'voluptatibus';
    $request->requestBody->paymentMethod = PaymentsEnumPaymentMethodEnum::CREDIT_CARD;
    $request->requestBody->postalCode = false;
    $request->requestBody->securityCode = false;
    $request->requestBody->statusCallback = 'https://definite-marines.com';
    $request->requestBody->timeout = 854614;
    $request->requestBody->tokenType = PaymentsEnumTokenTypeEnum::ONE_TIME;
    $request->requestBody->validCardTypes = 'soluta';

    $requestSecurity = new CreatePaymentsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createPayments($request, $requestSecurity);

    if ($response->apiV2010AccountCallPayments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createQueue

Create a queue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateQueueRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateQueueCreateQueueRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateQueueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateQueueRequest();
    $request->accountSid = 'dolorum';
    $request->requestBody = new CreateQueueCreateQueueRequest();
    $request->requestBody->friendlyName = 'iusto';
    $request->requestBody->maxSize = 453697;

    $requestSecurity = new CreateQueueSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createQueue($request, $requestSecurity);

    if ($response->apiV2010AccountQueue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSipAuthCallsCredentialListMapping

Create a new credential list mapping resource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipAuthCallsCredentialListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipAuthCallsCredentialListMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSipAuthCallsCredentialListMappingRequest();
    $request->accountSid = 'dolorum';
    $request->domainSid = 'deleniti';
    $request->requestBody = new CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest();
    $request->requestBody->credentialListSid = 'omnis';

    $requestSecurity = new CreateSipAuthCallsCredentialListMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSipAuthCallsCredentialListMapping($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSipAuthCallsIpAccessControlListMapping

Create a new IP Access Control List mapping

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipAuthCallsIpAccessControlListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipAuthCallsIpAccessControlListMappingCreateSipAuthCallsIpAccessControlListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipAuthCallsIpAccessControlListMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSipAuthCallsIpAccessControlListMappingRequest();
    $request->accountSid = 'necessitatibus';
    $request->domainSid = 'distinctio';
    $request->requestBody = new CreateSipAuthCallsIpAccessControlListMappingCreateSipAuthCallsIpAccessControlListMappingRequest();
    $request->requestBody->ipAccessControlListSid = 'asperiores';

    $requestSecurity = new CreateSipAuthCallsIpAccessControlListMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSipAuthCallsIpAccessControlListMapping($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSipAuthRegistrationsCredentialListMapping

Create a new credential list mapping resource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipAuthRegistrationsCredentialListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipAuthRegistrationsCredentialListMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSipAuthRegistrationsCredentialListMappingRequest();
    $request->accountSid = 'nihil';
    $request->domainSid = 'ipsum';
    $request->requestBody = new CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest();
    $request->requestBody->credentialListSid = 'voluptate';

    $requestSecurity = new CreateSipAuthRegistrationsCredentialListMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSipAuthRegistrationsCredentialListMapping($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSipCredential

Create a new credential resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipCredentialCreateSipCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSipCredentialRequest();
    $request->accountSid = 'id';
    $request->credentialListSid = 'saepe';
    $request->requestBody = new CreateSipCredentialCreateSipCredentialRequest();
    $request->requestBody->password = 'eius';
    $request->requestBody->username = 'Brigitte75';

    $requestSecurity = new CreateSipCredentialSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSipCredential($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipCredentialListSipCredential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSipCredentialList

Create a Credential List

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipCredentialListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipCredentialListCreateSipCredentialListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipCredentialListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSipCredentialListRequest();
    $request->accountSid = 'accusamus';
    $request->requestBody = new CreateSipCredentialListCreateSipCredentialListRequest();
    $request->requestBody->friendlyName = 'ad';

    $requestSecurity = new CreateSipCredentialListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSipCredentialList($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipCredentialList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSipCredentialListMapping

Create a CredentialListMapping resource for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipCredentialListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipCredentialListMappingCreateSipCredentialListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipCredentialListMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSipCredentialListMappingRequest();
    $request->accountSid = 'saepe';
    $request->domainSid = 'suscipit';
    $request->requestBody = new CreateSipCredentialListMappingCreateSipCredentialListMappingRequest();
    $request->requestBody->credentialListSid = 'deserunt';

    $requestSecurity = new CreateSipCredentialListMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSipCredentialListMapping($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipDomainSipCredentialListMapping !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSipDomain

Create a new Domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipDomainCreateSipDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipDomainCreateSipDomainRequestVoiceMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipDomainSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSipDomainRequest();
    $request->accountSid = 'provident';
    $request->requestBody = new CreateSipDomainCreateSipDomainRequest();
    $request->requestBody->byocTrunkSid = 'minima';
    $request->requestBody->domainName = 'repellendus';
    $request->requestBody->emergencyCallerSid = 'totam';
    $request->requestBody->emergencyCallingEnabled = false;
    $request->requestBody->friendlyName = 'similique';
    $request->requestBody->secure = false;
    $request->requestBody->sipRegistration = false;
    $request->requestBody->voiceFallbackMethod = CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum::HEAD;
    $request->requestBody->voiceFallbackUrl = 'https://frightening-diving.info';
    $request->requestBody->voiceMethod = CreateSipDomainCreateSipDomainRequestVoiceMethodEnum::PUT;
    $request->requestBody->voiceStatusCallbackMethod = CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum::DELETE;
    $request->requestBody->voiceStatusCallbackUrl = 'http://raw-venue.info';
    $request->requestBody->voiceUrl = 'https://left-cousin.net';

    $requestSecurity = new CreateSipDomainSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSipDomain($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipDomain !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSipIpAccessControlList

Create a new IpAccessControlList resource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipIpAccessControlListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipIpAccessControlListCreateSipIpAccessControlListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipIpAccessControlListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSipIpAccessControlListRequest();
    $request->accountSid = 'tenetur';
    $request->requestBody = new CreateSipIpAccessControlListCreateSipIpAccessControlListRequest();
    $request->requestBody->friendlyName = 'amet';

    $requestSecurity = new CreateSipIpAccessControlListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSipIpAccessControlList($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipIpAccessControlList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSipIpAccessControlListMapping

Create a new IpAccessControlListMapping resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipIpAccessControlListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipIpAccessControlListMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSipIpAccessControlListMappingRequest();
    $request->accountSid = 'tempore';
    $request->domainSid = 'accusamus';
    $request->requestBody = new CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest();
    $request->requestBody->ipAccessControlListSid = 'numquam';

    $requestSecurity = new CreateSipIpAccessControlListMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSipIpAccessControlListMapping($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipDomainSipIpAccessControlListMapping !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSipIpAddress

Create a new IpAddress resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipIpAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipIpAddressCreateSipIpAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSipIpAddressSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSipIpAddressRequest();
    $request->accountSid = 'enim';
    $request->ipAccessControlListSid = 'dolorem';
    $request->requestBody = new CreateSipIpAddressCreateSipIpAddressRequest();
    $request->requestBody->cidrPrefixLength = 957451;
    $request->requestBody->friendlyName = 'totam';
    $request->requestBody->ipAddress = 'nihil';

    $requestSecurity = new CreateSipIpAddressSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSipIpAddress($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipIpAccessControlListSipIpAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSiprec

Create a Siprec

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSiprecRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSiprecCreateSiprecRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\SiprecEnumTrackEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSiprecSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSiprecRequest();
    $request->accountSid = 'sit';
    $request->callSid = 'expedita';
    $request->requestBody = new CreateSiprecCreateSiprecRequest();
    $request->requestBody->connectorName = 'neque';
    $request->requestBody->name = 'Gina Renner';
    $request->requestBody->parameter1Name = 'quam';
    $request->requestBody->parameter1Value = 'ipsum';
    $request->requestBody->parameter10Name = 'incidunt';
    $request->requestBody->parameter10Value = 'qui';
    $request->requestBody->parameter11Name = 'cupiditate';
    $request->requestBody->parameter11Value = 'maxime';
    $request->requestBody->parameter12Name = 'pariatur';
    $request->requestBody->parameter12Value = 'soluta';
    $request->requestBody->parameter13Name = 'dicta';
    $request->requestBody->parameter13Value = 'laborum';
    $request->requestBody->parameter14Name = 'totam';
    $request->requestBody->parameter14Value = 'incidunt';
    $request->requestBody->parameter15Name = 'aspernatur';
    $request->requestBody->parameter15Value = 'dolores';
    $request->requestBody->parameter16Name = 'distinctio';
    $request->requestBody->parameter16Value = 'facilis';
    $request->requestBody->parameter17Name = 'aliquid';
    $request->requestBody->parameter17Value = 'quam';
    $request->requestBody->parameter18Name = 'molestias';
    $request->requestBody->parameter18Value = 'temporibus';
    $request->requestBody->parameter19Name = 'qui';
    $request->requestBody->parameter19Value = 'neque';
    $request->requestBody->parameter2Name = 'fugit';
    $request->requestBody->parameter2Value = 'magni';
    $request->requestBody->parameter20Name = 'odio';
    $request->requestBody->parameter20Value = 'sunt';
    $request->requestBody->parameter21Name = 'ullam';
    $request->requestBody->parameter21Value = 'nam';
    $request->requestBody->parameter22Name = 'hic';
    $request->requestBody->parameter22Value = 'voluptatem';
    $request->requestBody->parameter23Name = 'cumque';
    $request->requestBody->parameter23Value = 'soluta';
    $request->requestBody->parameter24Name = 'nobis';
    $request->requestBody->parameter24Value = 'et';
    $request->requestBody->parameter25Name = 'saepe';
    $request->requestBody->parameter25Value = 'ipsum';
    $request->requestBody->parameter26Name = 'veritatis';
    $request->requestBody->parameter26Value = 'nobis';
    $request->requestBody->parameter27Name = 'quos';
    $request->requestBody->parameter27Value = 'tempore';
    $request->requestBody->parameter28Name = 'cupiditate';
    $request->requestBody->parameter28Value = 'aperiam';
    $request->requestBody->parameter29Name = 'delectus';
    $request->requestBody->parameter29Value = 'dolorem';
    $request->requestBody->parameter3Name = 'dolore';
    $request->requestBody->parameter3Value = 'labore';
    $request->requestBody->parameter30Name = 'adipisci';
    $request->requestBody->parameter30Value = 'dolorum';
    $request->requestBody->parameter31Name = 'architecto';
    $request->requestBody->parameter31Value = 'quae';
    $request->requestBody->parameter32Name = 'aut';
    $request->requestBody->parameter32Value = 'quas';
    $request->requestBody->parameter33Name = 'itaque';
    $request->requestBody->parameter33Value = 'consequatur';
    $request->requestBody->parameter34Name = 'est';
    $request->requestBody->parameter34Value = 'repellendus';
    $request->requestBody->parameter35Name = 'porro';
    $request->requestBody->parameter35Value = 'doloribus';
    $request->requestBody->parameter36Name = 'ut';
    $request->requestBody->parameter36Value = 'facilis';
    $request->requestBody->parameter37Name = 'cupiditate';
    $request->requestBody->parameter37Value = 'qui';
    $request->requestBody->parameter38Name = 'quae';
    $request->requestBody->parameter38Value = 'laudantium';
    $request->requestBody->parameter39Name = 'odio';
    $request->requestBody->parameter39Value = 'occaecati';
    $request->requestBody->parameter4Name = 'voluptatibus';
    $request->requestBody->parameter4Value = 'quisquam';
    $request->requestBody->parameter40Name = 'vero';
    $request->requestBody->parameter40Value = 'omnis';
    $request->requestBody->parameter41Name = 'quis';
    $request->requestBody->parameter41Value = 'ipsum';
    $request->requestBody->parameter42Name = 'delectus';
    $request->requestBody->parameter42Value = 'voluptate';
    $request->requestBody->parameter43Name = 'consectetur';
    $request->requestBody->parameter43Value = 'vero';
    $request->requestBody->parameter44Name = 'tenetur';
    $request->requestBody->parameter44Value = 'dignissimos';
    $request->requestBody->parameter45Name = 'hic';
    $request->requestBody->parameter45Value = 'distinctio';
    $request->requestBody->parameter46Name = 'quod';
    $request->requestBody->parameter46Value = 'odio';
    $request->requestBody->parameter47Name = 'similique';
    $request->requestBody->parameter47Value = 'facilis';
    $request->requestBody->parameter48Name = 'vero';
    $request->requestBody->parameter48Value = 'ducimus';
    $request->requestBody->parameter49Name = 'dolore';
    $request->requestBody->parameter49Value = 'quibusdam';
    $request->requestBody->parameter5Name = 'illum';
    $request->requestBody->parameter5Value = 'sequi';
    $request->requestBody->parameter50Name = 'natus';
    $request->requestBody->parameter50Value = 'impedit';
    $request->requestBody->parameter51Name = 'aut';
    $request->requestBody->parameter51Value = 'voluptatibus';
    $request->requestBody->parameter52Name = 'exercitationem';
    $request->requestBody->parameter52Value = 'nulla';
    $request->requestBody->parameter53Name = 'fugit';
    $request->requestBody->parameter53Value = 'porro';
    $request->requestBody->parameter54Name = 'maiores';
    $request->requestBody->parameter54Value = 'doloribus';
    $request->requestBody->parameter55Name = 'iusto';
    $request->requestBody->parameter55Value = 'eligendi';
    $request->requestBody->parameter56Name = 'ducimus';
    $request->requestBody->parameter56Value = 'alias';
    $request->requestBody->parameter57Name = 'officia';
    $request->requestBody->parameter57Value = 'tempora';
    $request->requestBody->parameter58Name = 'ipsam';
    $request->requestBody->parameter58Value = 'ea';
    $request->requestBody->parameter59Name = 'aspernatur';
    $request->requestBody->parameter59Value = 'vel';
    $request->requestBody->parameter6Name = 'possimus';
    $request->requestBody->parameter6Value = 'magnam';
    $request->requestBody->parameter60Name = 'ratione';
    $request->requestBody->parameter60Value = 'ex';
    $request->requestBody->parameter61Name = 'laudantium';
    $request->requestBody->parameter61Value = 'dicta';
    $request->requestBody->parameter62Name = 'dolor';
    $request->requestBody->parameter62Value = 'maiores';
    $request->requestBody->parameter63Name = 'quasi';
    $request->requestBody->parameter63Value = 'ex';
    $request->requestBody->parameter64Name = 'nulla';
    $request->requestBody->parameter64Value = 'excepturi';
    $request->requestBody->parameter65Name = 'voluptatibus';
    $request->requestBody->parameter65Value = 'nostrum';
    $request->requestBody->parameter66Name = 'sapiente';
    $request->requestBody->parameter66Value = 'quisquam';
    $request->requestBody->parameter67Name = 'saepe';
    $request->requestBody->parameter67Value = 'ea';
    $request->requestBody->parameter68Name = 'impedit';
    $request->requestBody->parameter68Value = 'corporis';
    $request->requestBody->parameter69Name = 'veniam';
    $request->requestBody->parameter69Value = 'aliquid';
    $request->requestBody->parameter7Name = 'inventore';
    $request->requestBody->parameter7Value = 'magnam';
    $request->requestBody->parameter70Name = 'ea';
    $request->requestBody->parameter70Value = 'quo';
    $request->requestBody->parameter71Name = 'consectetur';
    $request->requestBody->parameter71Value = 'recusandae';
    $request->requestBody->parameter72Name = 'aspernatur';
    $request->requestBody->parameter72Value = 'minima';
    $request->requestBody->parameter73Name = 'eaque';
    $request->requestBody->parameter73Value = 'a';
    $request->requestBody->parameter74Name = 'libero';
    $request->requestBody->parameter74Value = 'aut';
    $request->requestBody->parameter75Name = 'aut';
    $request->requestBody->parameter75Value = 'deleniti';
    $request->requestBody->parameter76Name = 'impedit';
    $request->requestBody->parameter76Value = 'aliquam';
    $request->requestBody->parameter77Name = 'fugit';
    $request->requestBody->parameter77Value = 'accusamus';
    $request->requestBody->parameter78Name = 'inventore';
    $request->requestBody->parameter78Value = 'non';
    $request->requestBody->parameter79Name = 'et';
    $request->requestBody->parameter79Value = 'dolorum';
    $request->requestBody->parameter8Name = 'laborum';
    $request->requestBody->parameter8Value = 'placeat';
    $request->requestBody->parameter80Name = 'velit';
    $request->requestBody->parameter80Value = 'eum';
    $request->requestBody->parameter81Name = 'autem';
    $request->requestBody->parameter81Value = 'nobis';
    $request->requestBody->parameter82Name = 'quas';
    $request->requestBody->parameter82Value = 'assumenda';
    $request->requestBody->parameter83Name = 'nulla';
    $request->requestBody->parameter83Value = 'voluptas';
    $request->requestBody->parameter84Name = 'libero';
    $request->requestBody->parameter84Value = 'quasi';
    $request->requestBody->parameter85Name = 'tempora';
    $request->requestBody->parameter85Value = 'numquam';
    $request->requestBody->parameter86Name = 'explicabo';
    $request->requestBody->parameter86Value = 'provident';
    $request->requestBody->parameter87Name = 'ipsa';
    $request->requestBody->parameter87Value = 'molestiae';
    $request->requestBody->parameter88Name = 'magnam';
    $request->requestBody->parameter88Value = 'odio';
    $request->requestBody->parameter89Name = 'eius';
    $request->requestBody->parameter89Value = 'esse';
    $request->requestBody->parameter9Name = 'esse';
    $request->requestBody->parameter9Value = 'rem';
    $request->requestBody->parameter90Name = 'fuga';
    $request->requestBody->parameter90Value = 'reprehenderit';
    $request->requestBody->parameter91Name = 'quidem';
    $request->requestBody->parameter91Value = 'fugiat';
    $request->requestBody->parameter92Name = 'ut';
    $request->requestBody->parameter92Value = 'eum';
    $request->requestBody->parameter93Name = 'suscipit';
    $request->requestBody->parameter93Value = 'assumenda';
    $request->requestBody->parameter94Name = 'eos';
    $request->requestBody->parameter94Value = 'praesentium';
    $request->requestBody->parameter95Name = 'quisquam';
    $request->requestBody->parameter95Value = 'veritatis';
    $request->requestBody->parameter96Name = 'ipsa';
    $request->requestBody->parameter96Value = 'id';
    $request->requestBody->parameter97Name = 'quidem';
    $request->requestBody->parameter97Value = 'neque';
    $request->requestBody->parameter98Name = 'quo';
    $request->requestBody->parameter98Value = 'illum';
    $request->requestBody->parameter99Name = 'quo';
    $request->requestBody->parameter99Value = 'fuga';
    $request->requestBody->statusCallback = 'http://defiant-gain.com';
    $request->requestBody->statusCallbackMethod = CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum::PATCH;
    $request->requestBody->track = SiprecEnumTrackEnum::INBOUND_TRACK;

    $requestSecurity = new CreateSiprecSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSiprec($request, $requestSecurity);

    if ($response->apiV2010AccountCallSiprec !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStream

Create a Stream

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamCreateStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamCreateStreamRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\StreamEnumTrackEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStreamRequest();
    $request->accountSid = 'tempora';
    $request->callSid = 'debitis';
    $request->requestBody = new CreateStreamCreateStreamRequest();
    $request->requestBody->name = 'Kelly Donnelly';
    $request->requestBody->parameter1Name = 'recusandae';
    $request->requestBody->parameter1Value = 'aperiam';
    $request->requestBody->parameter10Name = 'distinctio';
    $request->requestBody->parameter10Value = 'quod';
    $request->requestBody->parameter11Name = 'dignissimos';
    $request->requestBody->parameter11Value = 'inventore';
    $request->requestBody->parameter12Name = 'nihil';
    $request->requestBody->parameter12Value = 'totam';
    $request->requestBody->parameter13Name = 'accusamus';
    $request->requestBody->parameter13Value = 'aliquam';
    $request->requestBody->parameter14Name = 'odio';
    $request->requestBody->parameter14Value = 'occaecati';
    $request->requestBody->parameter15Name = 'commodi';
    $request->requestBody->parameter15Value = 'sapiente';
    $request->requestBody->parameter16Name = 'dolores';
    $request->requestBody->parameter16Value = 'deserunt';
    $request->requestBody->parameter17Name = 'molestiae';
    $request->requestBody->parameter17Value = 'accusantium';
    $request->requestBody->parameter18Name = 'porro';
    $request->requestBody->parameter18Value = 'eum';
    $request->requestBody->parameter19Name = 'quas';
    $request->requestBody->parameter19Value = 'praesentium';
    $request->requestBody->parameter2Name = 'consequuntur';
    $request->requestBody->parameter2Value = 'deleniti';
    $request->requestBody->parameter20Name = 'fugit';
    $request->requestBody->parameter20Value = 'fuga';
    $request->requestBody->parameter21Name = 'mollitia';
    $request->requestBody->parameter21Value = 'incidunt';
    $request->requestBody->parameter22Name = 'atque';
    $request->requestBody->parameter22Value = 'explicabo';
    $request->requestBody->parameter23Name = 'minima';
    $request->requestBody->parameter23Value = 'nisi';
    $request->requestBody->parameter24Name = 'fugit';
    $request->requestBody->parameter24Value = 'sapiente';
    $request->requestBody->parameter25Name = 'consequuntur';
    $request->requestBody->parameter25Value = 'ratione';
    $request->requestBody->parameter26Name = 'explicabo';
    $request->requestBody->parameter26Value = 'saepe';
    $request->requestBody->parameter27Name = 'occaecati';
    $request->requestBody->parameter27Value = 'atque';
    $request->requestBody->parameter28Name = 'et';
    $request->requestBody->parameter28Value = 'esse';
    $request->requestBody->parameter29Name = 'eveniet';
    $request->requestBody->parameter29Value = 'accusamus';
    $request->requestBody->parameter3Name = 'veritatis';
    $request->requestBody->parameter3Value = 'esse';
    $request->requestBody->parameter30Name = 'quod';
    $request->requestBody->parameter30Value = 'nam';
    $request->requestBody->parameter31Name = 'vero';
    $request->requestBody->parameter31Value = 'aliquid';
    $request->requestBody->parameter32Name = 'quasi';
    $request->requestBody->parameter32Value = 'saepe';
    $request->requestBody->parameter33Name = 'vel';
    $request->requestBody->parameter33Value = 'harum';
    $request->requestBody->parameter34Name = 'molestiae';
    $request->requestBody->parameter34Value = 'rerum';
    $request->requestBody->parameter35Name = 'occaecati';
    $request->requestBody->parameter35Value = 'minima';
    $request->requestBody->parameter36Name = 'distinctio';
    $request->requestBody->parameter36Value = 'eligendi';
    $request->requestBody->parameter37Name = 'sit';
    $request->requestBody->parameter37Value = 'culpa';
    $request->requestBody->parameter38Name = 'tempore';
    $request->requestBody->parameter38Value = 'adipisci';
    $request->requestBody->parameter39Name = 'cumque';
    $request->requestBody->parameter39Value = 'consequuntur';
    $request->requestBody->parameter4Name = 'consequatur';
    $request->requestBody->parameter4Value = 'minus';
    $request->requestBody->parameter40Name = 'quaerat';
    $request->requestBody->parameter40Value = 'sapiente';
    $request->requestBody->parameter41Name = 'consectetur';
    $request->requestBody->parameter41Value = 'esse';
    $request->requestBody->parameter42Name = 'blanditiis';
    $request->requestBody->parameter42Value = 'provident';
    $request->requestBody->parameter43Name = 'a';
    $request->requestBody->parameter43Value = 'nulla';
    $request->requestBody->parameter44Name = 'quas';
    $request->requestBody->parameter44Value = 'esse';
    $request->requestBody->parameter45Name = 'quasi';
    $request->requestBody->parameter45Value = 'a';
    $request->requestBody->parameter46Name = 'error';
    $request->requestBody->parameter46Value = 'sint';
    $request->requestBody->parameter47Name = 'pariatur';
    $request->requestBody->parameter47Value = 'possimus';
    $request->requestBody->parameter48Name = 'quia';
    $request->requestBody->parameter48Value = 'eveniet';
    $request->requestBody->parameter49Name = 'asperiores';
    $request->requestBody->parameter49Value = 'facere';
    $request->requestBody->parameter5Name = 'veritatis';
    $request->requestBody->parameter5Value = 'consequuntur';
    $request->requestBody->parameter50Name = 'quasi';
    $request->requestBody->parameter50Value = 'similique';
    $request->requestBody->parameter51Name = 'culpa';
    $request->requestBody->parameter51Value = 'aliquid';
    $request->requestBody->parameter52Name = 'tenetur';
    $request->requestBody->parameter52Value = 'quae';
    $request->requestBody->parameter53Name = 'earum';
    $request->requestBody->parameter53Value = 'vel';
    $request->requestBody->parameter54Name = 'in';
    $request->requestBody->parameter54Value = 'eius';
    $request->requestBody->parameter55Name = 'libero';
    $request->requestBody->parameter55Value = 'illum';
    $request->requestBody->parameter56Name = 'soluta';
    $request->requestBody->parameter56Value = 'accusantium';
    $request->requestBody->parameter57Name = 'aliquam';
    $request->requestBody->parameter57Value = 'sapiente';
    $request->requestBody->parameter58Name = 'dicta';
    $request->requestBody->parameter58Value = 'ullam';
    $request->requestBody->parameter59Name = 'reprehenderit';
    $request->requestBody->parameter59Value = 'ullam';
    $request->requestBody->parameter6Name = 'nisi';
    $request->requestBody->parameter6Value = 'aut';
    $request->requestBody->parameter60Name = 'voluptatum';
    $request->requestBody->parameter60Value = 'qui';
    $request->requestBody->parameter61Name = 'quibusdam';
    $request->requestBody->parameter61Value = 'ex';
    $request->requestBody->parameter62Name = 'deleniti';
    $request->requestBody->parameter62Value = 'itaque';
    $request->requestBody->parameter63Name = 'dolorum';
    $request->requestBody->parameter63Value = 'architecto';
    $request->requestBody->parameter64Name = 'omnis';
    $request->requestBody->parameter64Value = 'tenetur';
    $request->requestBody->parameter65Name = 'quasi';
    $request->requestBody->parameter65Value = 'at';
    $request->requestBody->parameter66Name = 'et';
    $request->requestBody->parameter66Value = 'voluptate';
    $request->requestBody->parameter67Name = 'ipsa';
    $request->requestBody->parameter67Value = 'minima';
    $request->requestBody->parameter68Name = 'veritatis';
    $request->requestBody->parameter68Value = 'consectetur';
    $request->requestBody->parameter69Name = 'adipisci';
    $request->requestBody->parameter69Value = 'iste';
    $request->requestBody->parameter7Name = 'temporibus';
    $request->requestBody->parameter7Value = 'accusantium';
    $request->requestBody->parameter70Name = 'rem';
    $request->requestBody->parameter70Value = 'aut';
    $request->requestBody->parameter71Name = 'laudantium';
    $request->requestBody->parameter71Value = 'eum';
    $request->requestBody->parameter72Name = 'mollitia';
    $request->requestBody->parameter72Value = 'ab';
    $request->requestBody->parameter73Name = 'corrupti';
    $request->requestBody->parameter73Value = 'non';
    $request->requestBody->parameter74Name = 'voluptatem';
    $request->requestBody->parameter74Value = 'dolor';
    $request->requestBody->parameter75Name = 'occaecati';
    $request->requestBody->parameter75Value = 'numquam';
    $request->requestBody->parameter76Name = 'impedit';
    $request->requestBody->parameter76Value = 'explicabo';
    $request->requestBody->parameter77Name = 'voluptas';
    $request->requestBody->parameter77Value = 'aut';
    $request->requestBody->parameter78Name = 'dignissimos';
    $request->requestBody->parameter78Value = 'dicta';
    $request->requestBody->parameter79Name = 'maiores';
    $request->requestBody->parameter79Value = 'natus';
    $request->requestBody->parameter8Name = 'velit';
    $request->requestBody->parameter8Value = 'voluptatibus';
    $request->requestBody->parameter80Name = 'voluptas';
    $request->requestBody->parameter80Value = 'asperiores';
    $request->requestBody->parameter81Name = 'aperiam';
    $request->requestBody->parameter81Value = 'ea';
    $request->requestBody->parameter82Name = 'quaerat';
    $request->requestBody->parameter82Value = 'consequuntur';
    $request->requestBody->parameter83Name = 'repellendus';
    $request->requestBody->parameter83Value = 'officia';
    $request->requestBody->parameter84Name = 'maxime';
    $request->requestBody->parameter84Value = 'dignissimos';
    $request->requestBody->parameter85Name = 'officia';
    $request->requestBody->parameter85Value = 'asperiores';
    $request->requestBody->parameter86Name = 'nemo';
    $request->requestBody->parameter86Value = 'quae';
    $request->requestBody->parameter87Name = 'quaerat';
    $request->requestBody->parameter87Value = 'porro';
    $request->requestBody->parameter88Name = 'quod';
    $request->requestBody->parameter88Value = 'labore';
    $request->requestBody->parameter89Name = 'ab';
    $request->requestBody->parameter89Value = 'adipisci';
    $request->requestBody->parameter9Name = 'fuga';
    $request->requestBody->parameter9Value = 'id';
    $request->requestBody->parameter90Name = 'suscipit';
    $request->requestBody->parameter90Value = 'velit';
    $request->requestBody->parameter91Name = 'culpa';
    $request->requestBody->parameter91Value = 'est';
    $request->requestBody->parameter92Name = 'recusandae';
    $request->requestBody->parameter92Value = 'totam';
    $request->requestBody->parameter93Name = 'fugiat';
    $request->requestBody->parameter93Value = 'vel';
    $request->requestBody->parameter94Name = 'ducimus';
    $request->requestBody->parameter94Value = 'quos';
    $request->requestBody->parameter95Name = 'vel';
    $request->requestBody->parameter95Value = 'labore';
    $request->requestBody->parameter96Name = 'possimus';
    $request->requestBody->parameter96Value = 'facilis';
    $request->requestBody->parameter97Name = 'cum';
    $request->requestBody->parameter97Value = 'commodi';
    $request->requestBody->parameter98Name = 'in';
    $request->requestBody->parameter98Value = 'corporis';
    $request->requestBody->parameter99Name = 'reiciendis';
    $request->requestBody->parameter99Value = 'assumenda';
    $request->requestBody->statusCallback = 'http://vast-grape.com';
    $request->requestBody->statusCallbackMethod = CreateStreamCreateStreamRequestStatusCallbackMethodEnum::PUT;
    $request->requestBody->track = StreamEnumTrackEnum::INBOUND_TRACK;
    $request->requestBody->url = 'http://gray-twig.net';

    $requestSecurity = new CreateStreamSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createStream($request, $requestSecurity);

    if ($response->apiV2010AccountCallStream !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createToken

Create a new token for ICE servers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenCreateTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTokenRequest();
    $request->accountSid = 'numquam';
    $request->requestBody = new CreateTokenCreateTokenRequest();
    $request->requestBody->ttl = 985492;

    $requestSecurity = new CreateTokenSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createToken($request, $requestSecurity);

    if ($response->apiV2010AccountToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUsageTrigger

Create a new UsageTrigger

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateUsageTriggerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUsageTriggerCreateUsageTriggerRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\UsageTriggerEnumRecurringEnum;
use \OpenAPI\OpenAPI\Models\Shared\UsageTriggerEnumTriggerFieldEnum;
use \OpenAPI\OpenAPI\Models\Shared\UsageTriggerEnumUsageCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateUsageTriggerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUsageTriggerRequest();
    $request->accountSid = 'suscipit';
    $request->requestBody = new CreateUsageTriggerCreateUsageTriggerRequest();
    $request->requestBody->callbackMethod = CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum::DELETE;
    $request->requestBody->callbackUrl = 'https://untimely-termite.biz';
    $request->requestBody->friendlyName = 'sunt';
    $request->requestBody->recurring = UsageTriggerEnumRecurringEnum::ALLTIME;
    $request->requestBody->triggerBy = UsageTriggerEnumTriggerFieldEnum::COUNT;
    $request->requestBody->triggerValue = 'non';
    $request->requestBody->usageCategory = UsageTriggerEnumUsageCategoryEnum::MARKETPLACE_DIGITAL_SEGMENT_BUSINESS_INFO;

    $requestSecurity = new CreateUsageTriggerSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createUsageTrigger($request, $requestSecurity);

    if ($response->apiV2010AccountUsageUsageTrigger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUserDefinedMessage

Create a new User Defined Message for the given Call SID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserDefinedMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserDefinedMessageCreateUserDefinedMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserDefinedMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserDefinedMessageRequest();
    $request->accountSid = 'beatae';
    $request->callSid = 'dignissimos';
    $request->requestBody = new CreateUserDefinedMessageCreateUserDefinedMessageRequest();
    $request->requestBody->content = 'a';
    $request->requestBody->idempotencyKey = 'debitis';

    $requestSecurity = new CreateUserDefinedMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createUserDefinedMessage($request, $requestSecurity);

    if ($response->apiV2010AccountCallUserDefinedMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUserDefinedMessageSubscription

Subscribe to User Defined Messages for a given Call SID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserDefinedMessageSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserDefinedMessageSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserDefinedMessageSubscriptionRequest();
    $request->accountSid = 'consectetur';
    $request->callSid = 'corporis';
    $request->requestBody = new CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest();
    $request->requestBody->callback = 'https://high-level-backup.org';
    $request->requestBody->idempotencyKey = 'libero';
    $request->requestBody->method = CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum::HEAD;

    $requestSecurity = new CreateUserDefinedMessageSubscriptionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createUserDefinedMessageSubscription($request, $requestSecurity);

    if ($response->apiV2010AccountCallUserDefinedMessageSubscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createValidationRequest

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateValidationRequestRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateValidationRequestCreateValidationRequestRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateValidationRequestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateValidationRequestRequest();
    $request->accountSid = 'accusamus';
    $request->requestBody = new CreateValidationRequestCreateValidationRequestRequest();
    $request->requestBody->callDelay = 631126;
    $request->requestBody->extension = 'tempora';
    $request->requestBody->friendlyName = 'aspernatur';
    $request->requestBody->phoneNumber = 'voluptas';
    $request->requestBody->statusCallback = 'http://hasty-exocrine.net';
    $request->requestBody->statusCallbackMethod = CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum::PUT;

    $requestSecurity = new CreateValidationRequestSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createValidationRequest($request, $requestSecurity);

    if ($response->apiV2010AccountValidationRequest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAddressSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAddressRequest();
    $request->accountSid = 'adipisci';
    $request->sid = 'minus';

    $requestSecurity = new DeleteAddressSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteAddress($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApplication

Delete the application by the specified application sid

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApplicationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApplicationRequest();
    $request->accountSid = 'dolores';
    $request->sid = 'blanditiis';

    $requestSecurity = new DeleteApplicationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteApplication($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCall

Delete a Call record from your account. Once the record is deleted, it will no longer appear in the API and Account Portal logs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCallRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCallRequest();
    $request->accountSid = 'in';
    $request->sid = 'dolore';

    $requestSecurity = new DeleteCallSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteCall($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCallFeedbackSummary

Delete a FeedbackSummary resource from a call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCallFeedbackSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCallFeedbackSummarySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCallFeedbackSummaryRequest();
    $request->accountSid = 'aliquam';
    $request->sid = 'officiis';

    $requestSecurity = new DeleteCallFeedbackSummarySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteCallFeedbackSummary($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCallRecording

Delete a recording from your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCallRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCallRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCallRecordingRequest();
    $request->accountSid = 'temporibus';
    $request->callSid = 'ullam';
    $request->sid = 'adipisci';

    $requestSecurity = new DeleteCallRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteCallRecording($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConferenceRecording

Delete a recording from your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConferenceRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConferenceRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConferenceRecordingRequest();
    $request->accountSid = 'cum';
    $request->conferenceSid = 'blanditiis';
    $request->sid = 'quas';

    $requestSecurity = new DeleteConferenceRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteConferenceRecording($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConnectApp

Delete an instance of a connect-app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectAppSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectAppRequest();
    $request->accountSid = 'hic';
    $request->sid = 'nesciunt';

    $requestSecurity = new DeleteConnectAppSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteConnectApp($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteIncomingPhoneNumber

Delete a phone-numbers belonging to the account used to make the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIncomingPhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIncomingPhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIncomingPhoneNumberRequest();
    $request->accountSid = 'culpa';
    $request->sid = 'corrupti';

    $requestSecurity = new DeleteIncomingPhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteIncomingPhoneNumber($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteIncomingPhoneNumberAssignedAddOn

Remove the assignment of an Add-on installation from the Number specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIncomingPhoneNumberAssignedAddOnRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIncomingPhoneNumberAssignedAddOnSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIncomingPhoneNumberAssignedAddOnRequest();
    $request->accountSid = 'pariatur';
    $request->resourceSid = 'totam';
    $request->sid = 'hic';

    $requestSecurity = new DeleteIncomingPhoneNumberAssignedAddOnSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteIncomingPhoneNumberAssignedAddOn($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteKey

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteKeyRequest();
    $request->accountSid = 'exercitationem';
    $request->sid = 'nobis';

    $requestSecurity = new DeleteKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteKey($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMedia

Delete media from your account. Once delete, you will no longer be billed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMediaRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMediaSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMediaRequest();
    $request->accountSid = 'sit';
    $request->messageSid = 'rerum';
    $request->sid = 'sed';

    $requestSecurity = new DeleteMediaSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteMedia($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMessage

Deletes a message record from your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMessageRequest();
    $request->accountSid = 'reiciendis';
    $request->sid = 'explicabo';

    $requestSecurity = new DeleteMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteMessage($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOutgoingCallerId

Delete the caller-id specified from the account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOutgoingCallerIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOutgoingCallerIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOutgoingCallerIdRequest();
    $request->accountSid = 'asperiores';
    $request->sid = 'facilis';

    $requestSecurity = new DeleteOutgoingCallerIdSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteOutgoingCallerId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteParticipant

Kick a participant from a given conference

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteParticipantRequest();
    $request->accountSid = 'voluptate';
    $request->callSid = 'expedita';
    $request->conferenceSid = 'ab';

    $requestSecurity = new DeleteParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteParticipant($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteQueue

Remove an empty queue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQueueRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQueueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteQueueRequest();
    $request->accountSid = 'iste';
    $request->sid = 'dolore';

    $requestSecurity = new DeleteQueueSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteQueue($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRecording

Delete a recording from your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRecordingRequest();
    $request->accountSid = 'laborum';
    $request->sid = 'sed';

    $requestSecurity = new DeleteRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteRecording($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRecordingAddOnResult

Delete a result and purge all associated Payloads

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecordingAddOnResultRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecordingAddOnResultSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRecordingAddOnResultRequest();
    $request->accountSid = 'in';
    $request->referenceSid = 'commodi';
    $request->sid = 'quidem';

    $requestSecurity = new DeleteRecordingAddOnResultSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteRecordingAddOnResult($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRecordingAddOnResultPayload

Delete a payload from the result along with all associated Data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecordingAddOnResultPayloadRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecordingAddOnResultPayloadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRecordingAddOnResultPayloadRequest();
    $request->accountSid = 'explicabo';
    $request->addOnResultSid = 'voluptas';
    $request->referenceSid = 'unde';
    $request->sid = 'architecto';

    $requestSecurity = new DeleteRecordingAddOnResultPayloadSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteRecordingAddOnResultPayload($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRecordingTranscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecordingTranscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecordingTranscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRecordingTranscriptionRequest();
    $request->accountSid = 'suscipit';
    $request->recordingSid = 'sapiente';
    $request->sid = 'debitis';

    $requestSecurity = new DeleteRecordingTranscriptionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteRecordingTranscription($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSigningKey

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSigningKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSigningKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSigningKeyRequest();
    $request->accountSid = 'illo';
    $request->sid = 'reiciendis';

    $requestSecurity = new DeleteSigningKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSigningKey($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSipAuthCallsCredentialListMapping

Delete a credential list mapping from the requested domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSipAuthCallsCredentialListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSipAuthCallsCredentialListMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSipAuthCallsCredentialListMappingRequest();
    $request->accountSid = 'perferendis';
    $request->domainSid = 'corrupti';
    $request->sid = 'maiores';

    $requestSecurity = new DeleteSipAuthCallsCredentialListMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSipAuthCallsCredentialListMapping($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSipAuthCallsIpAccessControlListMapping

Delete an IP Access Control List mapping from the requested domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSipAuthCallsIpAccessControlListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSipAuthCallsIpAccessControlListMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSipAuthCallsIpAccessControlListMappingRequest();
    $request->accountSid = 'incidunt';
    $request->domainSid = 'sed';
    $request->sid = 'provident';

    $requestSecurity = new DeleteSipAuthCallsIpAccessControlListMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSipAuthCallsIpAccessControlListMapping($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSipAuthRegistrationsCredentialListMapping

Delete a credential list mapping from the requested domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSipAuthRegistrationsCredentialListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSipAuthRegistrationsCredentialListMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSipAuthRegistrationsCredentialListMappingRequest();
    $request->accountSid = 'eius';
    $request->domainSid = 'necessitatibus';
    $request->sid = 'ipsum';

    $requestSecurity = new DeleteSipAuthRegistrationsCredentialListMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSipAuthRegistrationsCredentialListMapping($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSipCredential

Delete a credential resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSipCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSipCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSipCredentialRequest();
    $request->accountSid = 'ea';
    $request->credentialListSid = 'occaecati';
    $request->sid = 'quos';

    $requestSecurity = new DeleteSipCredentialSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSipCredential($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSipCredentialList

Delete a Credential List

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSipCredentialListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSipCredentialListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSipCredentialListRequest();
    $request->accountSid = 'voluptatibus';
    $request->sid = 'tempora';

    $requestSecurity = new DeleteSipCredentialListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSipCredentialList($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSipCredentialListMapping

Delete a CredentialListMapping resource from an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSipCredentialListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSipCredentialListMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSipCredentialListMappingRequest();
    $request->accountSid = 'tempora';
    $request->domainSid = 'voluptate';
    $request->sid = 'reiciendis';

    $requestSecurity = new DeleteSipCredentialListMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSipCredentialListMapping($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSipDomain

Delete an instance of a Domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSipDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSipDomainSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSipDomainRequest();
    $request->accountSid = 'ex';
    $request->sid = 'sit';

    $requestSecurity = new DeleteSipDomainSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSipDomain($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSipIpAccessControlList

Delete an IpAccessControlList from the requested account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSipIpAccessControlListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSipIpAccessControlListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSipIpAccessControlListRequest();
    $request->accountSid = 'non';
    $request->sid = 'officiis';

    $requestSecurity = new DeleteSipIpAccessControlListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSipIpAccessControlList($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSipIpAccessControlListMapping

Delete an IpAccessControlListMapping resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSipIpAccessControlListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSipIpAccessControlListMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSipIpAccessControlListMappingRequest();
    $request->accountSid = 'praesentium';
    $request->domainSid = 'facilis';
    $request->sid = 'quaerat';

    $requestSecurity = new DeleteSipIpAccessControlListMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSipIpAccessControlListMapping($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSipIpAddress

Delete an IpAddress resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSipIpAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSipIpAddressSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSipIpAddressRequest();
    $request->accountSid = 'incidunt';
    $request->ipAccessControlListSid = 'ipsam';
    $request->sid = 'debitis';

    $requestSecurity = new DeleteSipIpAddressSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSipIpAddress($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTranscription

Delete a transcription from the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTranscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTranscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTranscriptionRequest();
    $request->accountSid = 'rem';
    $request->sid = 'sit';

    $requestSecurity = new DeleteTranscriptionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteTranscription($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUsageTrigger

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsageTriggerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUsageTriggerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUsageTriggerRequest();
    $request->accountSid = 'nobis';
    $request->sid = 'error';

    $requestSecurity = new DeleteUsageTriggerSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteUsageTrigger($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUserDefinedMessageSubscription

Delete a specific User Defined Message Subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserDefinedMessageSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserDefinedMessageSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserDefinedMessageSubscriptionRequest();
    $request->accountSid = 'veniam';
    $request->callSid = 'minima';
    $request->sid = 'recusandae';

    $requestSecurity = new DeleteUserDefinedMessageSubscriptionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteUserDefinedMessageSubscription($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchAccount

Fetch the account specified by the provided Account Sid

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchAccountRequest();
    $request->sid = 'reiciendis';

    $requestSecurity = new FetchAccountSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchAccount($request, $requestSecurity);

    if ($response->apiV2010Account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchAddressSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchAddressRequest();
    $request->accountSid = 'nulla';
    $request->sid = 'magni';

    $requestSecurity = new FetchAddressSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchAddress($request, $requestSecurity);

    if ($response->apiV2010AccountAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchApplication

Fetch the application specified by the provided sid

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchApplicationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchApplicationRequest();
    $request->accountSid = 'aperiam';
    $request->sid = 'saepe';

    $requestSecurity = new FetchApplicationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchApplication($request, $requestSecurity);

    if ($response->apiV2010AccountApplication !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchAuthorizedConnectApp

Fetch an instance of an authorized-connect-app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchAuthorizedConnectAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchAuthorizedConnectAppSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchAuthorizedConnectAppRequest();
    $request->accountSid = 'numquam';
    $request->connectAppSid = 'veniam';

    $requestSecurity = new FetchAuthorizedConnectAppSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchAuthorizedConnectApp($request, $requestSecurity);

    if ($response->apiV2010AccountAuthorizedConnectApp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchAvailablePhoneNumberCountry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchAvailablePhoneNumberCountryRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchAvailablePhoneNumberCountrySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchAvailablePhoneNumberCountryRequest();
    $request->accountSid = 'in';
    $request->countryCode = 'officiis';

    $requestSecurity = new FetchAvailablePhoneNumberCountrySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchAvailablePhoneNumberCountry($request, $requestSecurity);

    if ($response->apiV2010AccountAvailablePhoneNumberCountry !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchBalance

Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected immediately. Child accounts do not contain balance information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchBalanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchBalanceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchBalanceRequest();
    $request->accountSid = 'beatae';

    $requestSecurity = new FetchBalanceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchBalance($request, $requestSecurity);

    if ($response->apiV2010AccountBalance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCall

Fetch the call specified by the provided Call SID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCallRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchCallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCallRequest();
    $request->accountSid = 'laudantium';
    $request->sid = 'exercitationem';

    $requestSecurity = new FetchCallSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchCall($request, $requestSecurity);

    if ($response->apiV2010AccountCall !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCallFeedback

Fetch a Feedback resource from a call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCallFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchCallFeedbackSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCallFeedbackRequest();
    $request->accountSid = 'praesentium';
    $request->callSid = 'cum';

    $requestSecurity = new FetchCallFeedbackSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchCallFeedback($request, $requestSecurity);

    if ($response->apiV2010AccountCallCallFeedback !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCallFeedbackSummary

Fetch a FeedbackSummary resource from a call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCallFeedbackSummaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchCallFeedbackSummarySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCallFeedbackSummaryRequest();
    $request->accountSid = 'laboriosam';
    $request->sid = 'dolorum';

    $requestSecurity = new FetchCallFeedbackSummarySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchCallFeedbackSummary($request, $requestSecurity);

    if ($response->apiV2010AccountCallCallFeedbackSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCallNotification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCallNotificationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchCallNotificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCallNotificationRequest();
    $request->accountSid = 'voluptatum';
    $request->callSid = 'error';
    $request->sid = 'hic';

    $requestSecurity = new FetchCallNotificationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchCallNotification($request, $requestSecurity);

    if ($response->apiV2010AccountCallCallNotificationInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchCallRecording

Fetch an instance of a recording for a call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchCallRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchCallRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchCallRecordingRequest();
    $request->accountSid = 'expedita';
    $request->callSid = 'debitis';
    $request->sid = 'neque';

    $requestSecurity = new FetchCallRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchCallRecording($request, $requestSecurity);

    if ($response->apiV2010AccountCallCallRecording !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchConference

Fetch an instance of a conference

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchConferenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchConferenceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchConferenceRequest();
    $request->accountSid = 'dolorum';
    $request->sid = 'nostrum';

    $requestSecurity = new FetchConferenceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchConference($request, $requestSecurity);

    if ($response->apiV2010AccountConference !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchConferenceRecording

Fetch an instance of a recording for a call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchConferenceRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchConferenceRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchConferenceRecordingRequest();
    $request->accountSid = 'officia';
    $request->conferenceSid = 'dolorum';
    $request->sid = 'corrupti';

    $requestSecurity = new FetchConferenceRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchConferenceRecording($request, $requestSecurity);

    if ($response->apiV2010AccountConferenceConferenceRecording !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchConnectApp

Fetch an instance of a connect-app

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchConnectAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchConnectAppSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchConnectAppRequest();
    $request->accountSid = 'accusamus';
    $request->sid = 'tempora';

    $requestSecurity = new FetchConnectAppSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchConnectApp($request, $requestSecurity);

    if ($response->apiV2010AccountConnectApp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchIncomingPhoneNumber

Fetch an incoming-phone-number belonging to the account used to make the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchIncomingPhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchIncomingPhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchIncomingPhoneNumberRequest();
    $request->accountSid = 'atque';
    $request->sid = 'fugit';

    $requestSecurity = new FetchIncomingPhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchIncomingPhoneNumber($request, $requestSecurity);

    if ($response->apiV2010AccountIncomingPhoneNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchIncomingPhoneNumberAssignedAddOn

Fetch an instance of an Add-on installation currently assigned to this Number.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchIncomingPhoneNumberAssignedAddOnRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchIncomingPhoneNumberAssignedAddOnSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchIncomingPhoneNumberAssignedAddOnRequest();
    $request->accountSid = 'ut';
    $request->resourceSid = 'fugiat';
    $request->sid = 'voluptatem';

    $requestSecurity = new FetchIncomingPhoneNumberAssignedAddOnSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchIncomingPhoneNumberAssignedAddOn($request, $requestSecurity);

    if ($response->apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchIncomingPhoneNumberAssignedAddOnExtension

Fetch an instance of an Extension for the Assigned Add-on.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchIncomingPhoneNumberAssignedAddOnExtensionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchIncomingPhoneNumberAssignedAddOnExtensionRequest();
    $request->accountSid = 'culpa';
    $request->assignedAddOnSid = 'expedita';
    $request->resourceSid = 'magnam';
    $request->sid = 'consequatur';

    $requestSecurity = new FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchIncomingPhoneNumberAssignedAddOnExtension($request, $requestSecurity);

    if ($response->apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchKey

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchKeyRequest();
    $request->accountSid = 'esse';
    $request->sid = 'ipsam';

    $requestSecurity = new FetchKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchKey($request, $requestSecurity);

    if ($response->apiV2010AccountKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchMedia

Fetch a single media instance belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchMediaRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchMediaSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchMediaRequest();
    $request->accountSid = 'sit';
    $request->messageSid = 'voluptatum';
    $request->sid = 'quas';

    $requestSecurity = new FetchMediaSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchMedia($request, $requestSecurity);

    if ($response->apiV2010AccountMessageMedia !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchMember

Fetch a specific member from the queue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchMemberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchMemberRequest();
    $request->accountSid = 'repudiandae';
    $request->callSid = 'corporis';
    $request->queueSid = 'et';

    $requestSecurity = new FetchMemberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchMember($request, $requestSecurity);

    if ($response->apiV2010AccountQueueMember !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchMessage

Fetch a message belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchMessageRequest();
    $request->accountSid = 'blanditiis';
    $request->sid = 'ex';

    $requestSecurity = new FetchMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchMessage($request, $requestSecurity);

    if ($response->apiV2010AccountMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchNotification

Fetch a notification belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchNotificationRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchNotificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchNotificationRequest();
    $request->accountSid = 'sed';
    $request->sid = 'sit';

    $requestSecurity = new FetchNotificationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchNotification($request, $requestSecurity);

    if ($response->apiV2010AccountNotificationInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchOutgoingCallerId

Fetch an outgoing-caller-id belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchOutgoingCallerIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchOutgoingCallerIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchOutgoingCallerIdRequest();
    $request->accountSid = 'vel';
    $request->sid = 'nostrum';

    $requestSecurity = new FetchOutgoingCallerIdSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchOutgoingCallerId($request, $requestSecurity);

    if ($response->apiV2010AccountOutgoingCallerId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchParticipant

Fetch an instance of a participant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchParticipantRequest();
    $request->accountSid = 'saepe';
    $request->callSid = 'error';
    $request->conferenceSid = 'consequatur';

    $requestSecurity = new FetchParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchParticipant($request, $requestSecurity);

    if ($response->apiV2010AccountConferenceParticipant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchQueue

Fetch an instance of a queue identified by the QueueSid

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchQueueRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchQueueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchQueueRequest();
    $request->accountSid = 'incidunt';
    $request->sid = 'reiciendis';

    $requestSecurity = new FetchQueueSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchQueue($request, $requestSecurity);

    if ($response->apiV2010AccountQueue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRecording

Fetch an instance of a recording

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRecordingRequest();
    $request->accountSid = 'dolorem';
    $request->includeSoftDeleted = false;
    $request->sid = 'harum';

    $requestSecurity = new FetchRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchRecording($request, $requestSecurity);

    if ($response->apiV2010AccountRecording !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRecordingAddOnResult

Fetch an instance of an AddOnResult

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRecordingAddOnResultRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchRecordingAddOnResultSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRecordingAddOnResultRequest();
    $request->accountSid = 'dicta';
    $request->referenceSid = 'architecto';
    $request->sid = 'occaecati';

    $requestSecurity = new FetchRecordingAddOnResultSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchRecordingAddOnResult($request, $requestSecurity);

    if ($response->apiV2010AccountRecordingRecordingAddOnResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRecordingAddOnResultPayload

Fetch an instance of a result payload

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRecordingAddOnResultPayloadRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchRecordingAddOnResultPayloadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRecordingAddOnResultPayloadRequest();
    $request->accountSid = 'labore';
    $request->addOnResultSid = 'quidem';
    $request->referenceSid = 'atque';
    $request->sid = 'laborum';

    $requestSecurity = new FetchRecordingAddOnResultPayloadSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchRecordingAddOnResultPayload($request, $requestSecurity);

    if ($response->apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchRecordingTranscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchRecordingTranscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchRecordingTranscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchRecordingTranscriptionRequest();
    $request->accountSid = 'nam';
    $request->recordingSid = 'tenetur';
    $request->sid = 'laboriosam';

    $requestSecurity = new FetchRecordingTranscriptionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchRecordingTranscription($request, $requestSecurity);

    if ($response->apiV2010AccountRecordingRecordingTranscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchShortCode

Fetch an instance of a short code

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchShortCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchShortCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchShortCodeRequest();
    $request->accountSid = 'alias';
    $request->sid = 'amet';

    $requestSecurity = new FetchShortCodeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchShortCode($request, $requestSecurity);

    if ($response->apiV2010AccountShortCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSigningKey

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSigningKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSigningKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSigningKeyRequest();
    $request->accountSid = 'deserunt';
    $request->sid = 'voluptate';

    $requestSecurity = new FetchSigningKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSigningKey($request, $requestSecurity);

    if ($response->apiV2010AccountSigningKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSipAuthCallsCredentialListMapping

Fetch a specific instance of a credential list mapping

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipAuthCallsCredentialListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipAuthCallsCredentialListMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSipAuthCallsCredentialListMappingRequest();
    $request->accountSid = 'unde';
    $request->domainSid = 'reiciendis';
    $request->sid = 'provident';

    $requestSecurity = new FetchSipAuthCallsCredentialListMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSipAuthCallsCredentialListMapping($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSipAuthCallsIpAccessControlListMapping

Fetch a specific instance of an IP Access Control List mapping

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipAuthCallsIpAccessControlListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipAuthCallsIpAccessControlListMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSipAuthCallsIpAccessControlListMappingRequest();
    $request->accountSid = 'repellendus';
    $request->domainSid = 'delectus';
    $request->sid = 'voluptates';

    $requestSecurity = new FetchSipAuthCallsIpAccessControlListMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSipAuthCallsIpAccessControlListMapping($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSipAuthRegistrationsCredentialListMapping

Fetch a specific instance of a credential list mapping

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipAuthRegistrationsCredentialListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipAuthRegistrationsCredentialListMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSipAuthRegistrationsCredentialListMappingRequest();
    $request->accountSid = 'perferendis';
    $request->domainSid = 'est';
    $request->sid = 'quidem';

    $requestSecurity = new FetchSipAuthRegistrationsCredentialListMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSipAuthRegistrationsCredentialListMapping($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSipCredential

Fetch a single credential.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSipCredentialRequest();
    $request->accountSid = 'reprehenderit';
    $request->credentialListSid = 'facere';
    $request->sid = 'fuga';

    $requestSecurity = new FetchSipCredentialSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSipCredential($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipCredentialListSipCredential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSipCredentialList

Get a Credential List

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipCredentialListRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipCredentialListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSipCredentialListRequest();
    $request->accountSid = 'praesentium';
    $request->sid = 'mollitia';

    $requestSecurity = new FetchSipCredentialListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSipCredentialList($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipCredentialList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSipCredentialListMapping

Fetch a single CredentialListMapping resource from an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipCredentialListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipCredentialListMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSipCredentialListMappingRequest();
    $request->accountSid = 'veniam';
    $request->domainSid = 'voluptatem';
    $request->sid = 'quisquam';

    $requestSecurity = new FetchSipCredentialListMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSipCredentialListMapping($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipDomainSipCredentialListMapping !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSipDomain

Fetch an instance of a Domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipDomainSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSipDomainRequest();
    $request->accountSid = 'repudiandae';
    $request->sid = 'quasi';

    $requestSecurity = new FetchSipDomainSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSipDomain($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipDomain !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSipIpAccessControlList

Fetch a specific instance of an IpAccessControlList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipIpAccessControlListRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipIpAccessControlListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSipIpAccessControlListRequest();
    $request->accountSid = 'atque';
    $request->sid = 'reprehenderit';

    $requestSecurity = new FetchSipIpAccessControlListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSipIpAccessControlList($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipIpAccessControlList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSipIpAccessControlListMapping

Fetch an IpAccessControlListMapping resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipIpAccessControlListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipIpAccessControlListMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSipIpAccessControlListMappingRequest();
    $request->accountSid = 'asperiores';
    $request->domainSid = 'totam';
    $request->sid = 'suscipit';

    $requestSecurity = new FetchSipIpAccessControlListMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSipIpAccessControlListMapping($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipDomainSipIpAccessControlListMapping !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSipIpAddress

Read one IpAddress resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipIpAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSipIpAddressSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSipIpAddressRequest();
    $request->accountSid = 'quidem';
    $request->ipAccessControlListSid = 'maxime';
    $request->sid = 'et';

    $requestSecurity = new FetchSipIpAddressSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSipIpAddress($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipIpAccessControlListSipIpAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchTranscription

Fetch an instance of a Transcription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchTranscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchTranscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchTranscriptionRequest();
    $request->accountSid = 'esse';
    $request->sid = 'amet';

    $requestSecurity = new FetchTranscriptionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchTranscription($request, $requestSecurity);

    if ($response->apiV2010AccountTranscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUsageTrigger

Fetch and instance of a usage-trigger

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUsageTriggerRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUsageTriggerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUsageTriggerRequest();
    $request->accountSid = 'assumenda';
    $request->sid = 'ea';

    $requestSecurity = new FetchUsageTriggerSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUsageTrigger($request, $requestSecurity);

    if ($response->apiV2010AccountUsageUsageTrigger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccount

Retrieves a collection of Accounts belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAccountRequest();
    $request->friendlyName = 'atque';
    $request->page = 623295;
    $request->pageSize = 887265;
    $request->pageToken = 'officiis';
    $request->status = AccountEnumStatusEnum::CLOSED;

    $requestSecurity = new ListAccountSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listAccount($request, $requestSecurity);

    if ($response->listAccountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAddressSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAddressRequest();
    $request->accountSid = 'natus';
    $request->customerName = 'minima';
    $request->friendlyName = 'aspernatur';
    $request->isoCountry = 'ex';
    $request->page = 980581;
    $request->pageSize = 544647;
    $request->pageToken = 'at';

    $requestSecurity = new ListAddressSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listAddress($request, $requestSecurity);

    if ($response->listAddressResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApplication

Retrieve a list of applications representing an application within the requesting account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListApplicationRequest();
    $request->accountSid = 'error';
    $request->friendlyName = 'blanditiis';
    $request->page = 379356;
    $request->pageSize = 922348;
    $request->pageToken = 'atque';

    $requestSecurity = new ListApplicationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listApplication($request, $requestSecurity);

    if ($response->listApplicationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAuthorizedConnectApp

Retrieve a list of authorized-connect-apps belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAuthorizedConnectAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAuthorizedConnectAppSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAuthorizedConnectAppRequest();
    $request->accountSid = 'atque';
    $request->page = 120919;
    $request->pageSize = 923306;
    $request->pageToken = 'dolorum';

    $requestSecurity = new ListAuthorizedConnectAppSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listAuthorizedConnectApp($request, $requestSecurity);

    if ($response->listAuthorizedConnectAppResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAvailablePhoneNumberCountry

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailablePhoneNumberCountryRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailablePhoneNumberCountrySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAvailablePhoneNumberCountryRequest();
    $request->accountSid = 'repellendus';
    $request->page = 287119;
    $request->pageSize = 968287;
    $request->pageToken = 'doloremque';

    $requestSecurity = new ListAvailablePhoneNumberCountrySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listAvailablePhoneNumberCountry($request, $requestSecurity);

    if ($response->listAvailablePhoneNumberCountryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAvailablePhoneNumberLocal

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailablePhoneNumberLocalRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailablePhoneNumberLocalSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAvailablePhoneNumberLocalRequest();
    $request->accountSid = 'repudiandae';
    $request->areaCode = 116098;
    $request->beta = false;
    $request->contains = 'accusantium';
    $request->countryCode = 'beatae';
    $request->distance = 174772;
    $request->excludeAllAddressRequired = false;
    $request->excludeForeignAddressRequired = false;
    $request->excludeLocalAddressRequired = false;
    $request->faxEnabled = false;
    $request->inLata = 'enim';
    $request->inLocality = 'laboriosam';
    $request->inPostalCode = 'velit';
    $request->inRateCenter = 'a';
    $request->inRegion = 'molestias';
    $request->mmsEnabled = false;
    $request->nearLatLong = 'magnam';
    $request->nearNumber = 'saepe';
    $request->page = 160467;
    $request->pageSize = 580107;
    $request->pageToken = 'officiis';
    $request->smsEnabled = false;
    $request->voiceEnabled = false;

    $requestSecurity = new ListAvailablePhoneNumberLocalSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listAvailablePhoneNumberLocal($request, $requestSecurity);

    if ($response->listAvailablePhoneNumberLocalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAvailablePhoneNumberMachineToMachine

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailablePhoneNumberMachineToMachineRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailablePhoneNumberMachineToMachineSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAvailablePhoneNumberMachineToMachineRequest();
    $request->accountSid = 'perspiciatis';
    $request->areaCode = 446394;
    $request->beta = false;
    $request->contains = 'adipisci';
    $request->countryCode = 'eveniet';
    $request->distance = 580887;
    $request->excludeAllAddressRequired = false;
    $request->excludeForeignAddressRequired = false;
    $request->excludeLocalAddressRequired = false;
    $request->faxEnabled = false;
    $request->inLata = 'consequuntur';
    $request->inLocality = 'fugit';
    $request->inPostalCode = 'id';
    $request->inRateCenter = 'quis';
    $request->inRegion = 'reprehenderit';
    $request->mmsEnabled = false;
    $request->nearLatLong = 'error';
    $request->nearNumber = 'illo';
    $request->page = 361306;
    $request->pageSize = 696463;
    $request->pageToken = 'eveniet';
    $request->smsEnabled = false;
    $request->voiceEnabled = false;

    $requestSecurity = new ListAvailablePhoneNumberMachineToMachineSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listAvailablePhoneNumberMachineToMachine($request, $requestSecurity);

    if ($response->listAvailablePhoneNumberMachineToMachineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAvailablePhoneNumberMobile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailablePhoneNumberMobileRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailablePhoneNumberMobileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAvailablePhoneNumberMobileRequest();
    $request->accountSid = 'non';
    $request->areaCode = 878493;
    $request->beta = false;
    $request->contains = 'doloremque';
    $request->countryCode = 'iure';
    $request->distance = 59944;
    $request->excludeAllAddressRequired = false;
    $request->excludeForeignAddressRequired = false;
    $request->excludeLocalAddressRequired = false;
    $request->faxEnabled = false;
    $request->inLata = 'totam';
    $request->inLocality = 'quae';
    $request->inPostalCode = 'molestiae';
    $request->inRateCenter = 'eveniet';
    $request->inRegion = 'qui';
    $request->mmsEnabled = false;
    $request->nearLatLong = 'cum';
    $request->nearNumber = 'iure';
    $request->page = 898063;
    $request->pageSize = 187552;
    $request->pageToken = 'laborum';
    $request->smsEnabled = false;
    $request->voiceEnabled = false;

    $requestSecurity = new ListAvailablePhoneNumberMobileSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listAvailablePhoneNumberMobile($request, $requestSecurity);

    if ($response->listAvailablePhoneNumberMobileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAvailablePhoneNumberNational

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailablePhoneNumberNationalRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailablePhoneNumberNationalSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAvailablePhoneNumberNationalRequest();
    $request->accountSid = 'distinctio';
    $request->areaCode = 528940;
    $request->beta = false;
    $request->contains = 'rem';
    $request->countryCode = 'aliquam';
    $request->distance = 320565;
    $request->excludeAllAddressRequired = false;
    $request->excludeForeignAddressRequired = false;
    $request->excludeLocalAddressRequired = false;
    $request->faxEnabled = false;
    $request->inLata = 'repellat';
    $request->inLocality = 'alias';
    $request->inPostalCode = 'corporis';
    $request->inRateCenter = 'perspiciatis';
    $request->inRegion = 'nihil';
    $request->mmsEnabled = false;
    $request->nearLatLong = 'mollitia';
    $request->nearNumber = 'voluptas';
    $request->page = 5189;
    $request->pageSize = 979527;
    $request->pageToken = 'reiciendis';
    $request->smsEnabled = false;
    $request->voiceEnabled = false;

    $requestSecurity = new ListAvailablePhoneNumberNationalSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listAvailablePhoneNumberNational($request, $requestSecurity);

    if ($response->listAvailablePhoneNumberNationalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAvailablePhoneNumberSharedCost

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailablePhoneNumberSharedCostRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailablePhoneNumberSharedCostSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAvailablePhoneNumberSharedCostRequest();
    $request->accountSid = 'dolores';
    $request->areaCode = 663866;
    $request->beta = false;
    $request->contains = 'minima';
    $request->countryCode = 'dolore';
    $request->distance = 680349;
    $request->excludeAllAddressRequired = false;
    $request->excludeForeignAddressRequired = false;
    $request->excludeLocalAddressRequired = false;
    $request->faxEnabled = false;
    $request->inLata = 'nesciunt';
    $request->inLocality = 'quae';
    $request->inPostalCode = 'recusandae';
    $request->inRateCenter = 'omnis';
    $request->inRegion = 'quaerat';
    $request->mmsEnabled = false;
    $request->nearLatLong = 'molestiae';
    $request->nearNumber = 'ex';
    $request->page = 284000;
    $request->pageSize = 633062;
    $request->pageToken = 'adipisci';
    $request->smsEnabled = false;
    $request->voiceEnabled = false;

    $requestSecurity = new ListAvailablePhoneNumberSharedCostSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listAvailablePhoneNumberSharedCost($request, $requestSecurity);

    if ($response->listAvailablePhoneNumberSharedCostResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAvailablePhoneNumberTollFree

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailablePhoneNumberTollFreeRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailablePhoneNumberTollFreeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAvailablePhoneNumberTollFreeRequest();
    $request->accountSid = 'debitis';
    $request->areaCode = 514513;
    $request->beta = false;
    $request->contains = 'eum';
    $request->countryCode = 'nemo';
    $request->distance = 928219;
    $request->excludeAllAddressRequired = false;
    $request->excludeForeignAddressRequired = false;
    $request->excludeLocalAddressRequired = false;
    $request->faxEnabled = false;
    $request->inLata = 'esse';
    $request->inLocality = 'provident';
    $request->inPostalCode = 'quis';
    $request->inRateCenter = 'eum';
    $request->inRegion = 'reiciendis';
    $request->mmsEnabled = false;
    $request->nearLatLong = 'provident';
    $request->nearNumber = 'aspernatur';
    $request->page = 354506;
    $request->pageSize = 96804;
    $request->pageToken = 'animi';
    $request->smsEnabled = false;
    $request->voiceEnabled = false;

    $requestSecurity = new ListAvailablePhoneNumberTollFreeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listAvailablePhoneNumberTollFree($request, $requestSecurity);

    if ($response->listAvailablePhoneNumberTollFreeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAvailablePhoneNumberVoip

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailablePhoneNumberVoipRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAvailablePhoneNumberVoipSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAvailablePhoneNumberVoipRequest();
    $request->accountSid = 'nostrum';
    $request->areaCode = 652309;
    $request->beta = false;
    $request->contains = 'provident';
    $request->countryCode = 'possimus';
    $request->distance = 659177;
    $request->excludeAllAddressRequired = false;
    $request->excludeForeignAddressRequired = false;
    $request->excludeLocalAddressRequired = false;
    $request->faxEnabled = false;
    $request->inLata = 'ex';
    $request->inLocality = 'aliquid';
    $request->inPostalCode = 'accusantium';
    $request->inRateCenter = 'repellat';
    $request->inRegion = 'doloribus';
    $request->mmsEnabled = false;
    $request->nearLatLong = 'ullam';
    $request->nearNumber = 'in';
    $request->page = 721407;
    $request->pageSize = 937636;
    $request->pageToken = 'officia';
    $request->smsEnabled = false;
    $request->voiceEnabled = false;

    $requestSecurity = new ListAvailablePhoneNumberVoipSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listAvailablePhoneNumberVoip($request, $requestSecurity);

    if ($response->listAvailablePhoneNumberVoipResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCall

Retrieves a collection of calls made to and from your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCallRequest;
use \OpenAPI\OpenAPI\Models\Shared\CallEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCallRequest();
    $request->accountSid = 'laborum';
    $request->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-14T23:12:21.252Z');
    $request->endTimeLessThan = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-23T08:23:19.189Z');
    $request->endTimeGreaterThan = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-18T03:48:05.478Z');
    $request->from = 'cumque';
    $request->page = 113486;
    $request->pageSize = 698249;
    $request->pageToken = 'tempora';
    $request->parentCallSid = 'quis';
    $request->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-08T02:16:26.757Z');
    $request->startTimeLessThan = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-24T09:55:31.770Z');
    $request->startTimeGreaterThan = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-04T16:56:27.065Z');
    $request->status = CallEnumStatusEnum::RINGING;
    $request->to = 'eum';

    $requestSecurity = new ListCallSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listCall($request, $requestSecurity);

    if ($response->listCallResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCallEvent

Retrieve a list of all events for a call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCallEventRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCallEventSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCallEventRequest();
    $request->accountSid = 'eius';
    $request->callSid = 'rem';
    $request->page = 871083;
    $request->pageSize = 773084;
    $request->pageToken = 'eos';

    $requestSecurity = new ListCallEventSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listCallEvent($request, $requestSecurity);

    if ($response->listCallEventResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCallNotification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCallNotificationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCallNotificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCallNotificationRequest();
    $request->accountSid = 'sapiente';
    $request->callSid = 'eum';
    $request->log = 117320;
    $request->messageDate = DateTime::createFromFormat('Y-m-d', '2022-11-22');
    $request->messageDateLessThan = DateTime::createFromFormat('Y-m-d', '2021-10-27');
    $request->messageDateGreaterThan = DateTime::createFromFormat('Y-m-d', '2020-10-06');
    $request->page = 940782;
    $request->pageSize = 848151;
    $request->pageToken = 'eaque';

    $requestSecurity = new ListCallNotificationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listCallNotification($request, $requestSecurity);

    if ($response->listCallNotificationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCallRecording

Retrieve a list of recordings belonging to the call used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCallRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCallRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCallRecordingRequest();
    $request->accountSid = 'earum';
    $request->callSid = 'perspiciatis';
    $request->dateCreated = DateTime::createFromFormat('Y-m-d', '2020-04-29');
    $request->dateCreatedLessThan = DateTime::createFromFormat('Y-m-d', '2022-03-21');
    $request->dateCreatedGreaterThan = DateTime::createFromFormat('Y-m-d', '2022-10-15');
    $request->page = 147808;
    $request->pageSize = 764995;
    $request->pageToken = 'fuga';

    $requestSecurity = new ListCallRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listCallRecording($request, $requestSecurity);

    if ($response->listCallRecordingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConference

Retrieve a list of conferences belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListConferenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListConferenceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConferenceRequest();
    $request->accountSid = 'ratione';
    $request->dateCreated = DateTime::createFromFormat('Y-m-d', '2021-03-15');
    $request->dateCreatedLessThan = DateTime::createFromFormat('Y-m-d', '2022-12-22');
    $request->dateCreatedGreaterThan = DateTime::createFromFormat('Y-m-d', '2022-11-29');
    $request->dateUpdated = DateTime::createFromFormat('Y-m-d', '2022-05-19');
    $request->dateUpdatedLessThan = DateTime::createFromFormat('Y-m-d', '2022-03-27');
    $request->dateUpdatedGreaterThan = DateTime::createFromFormat('Y-m-d', '2022-11-26');
    $request->friendlyName = 'magni';
    $request->page = 984934;
    $request->pageSize = 859581;
    $request->pageToken = 'necessitatibus';
    $request->status = ConferenceEnumStatusEnum::INIT;

    $requestSecurity = new ListConferenceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listConference($request, $requestSecurity);

    if ($response->listConferenceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConferenceRecording

Retrieve a list of recordings belonging to the call used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListConferenceRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListConferenceRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConferenceRecordingRequest();
    $request->accountSid = 'tempora';
    $request->conferenceSid = 'nihil';
    $request->dateCreated = DateTime::createFromFormat('Y-m-d', '2022-11-19');
    $request->dateCreatedLessThan = DateTime::createFromFormat('Y-m-d', '2022-07-18');
    $request->dateCreatedGreaterThan = DateTime::createFromFormat('Y-m-d', '2021-01-15');
    $request->page = 967260;
    $request->pageSize = 423706;
    $request->pageToken = 'architecto';

    $requestSecurity = new ListConferenceRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listConferenceRecording($request, $requestSecurity);

    if ($response->listConferenceRecordingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConnectApp

Retrieve a list of connect-apps belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectAppSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConnectAppRequest();
    $request->accountSid = 'fugiat';
    $request->page = 39650;
    $request->pageSize = 117315;
    $request->pageToken = 'odio';

    $requestSecurity = new ListConnectAppSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listConnectApp($request, $requestSecurity);

    if ($response->listConnectAppResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDependentPhoneNumber

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDependentPhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDependentPhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDependentPhoneNumberRequest();
    $request->accountSid = 'tempora';
    $request->addressSid = 'esse';
    $request->page = 403793;
    $request->pageSize = 235263;
    $request->pageToken = 'aliquid';

    $requestSecurity = new ListDependentPhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listDependentPhoneNumber($request, $requestSecurity);

    if ($response->listDependentPhoneNumberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIncomingPhoneNumber

Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListIncomingPhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListIncomingPhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIncomingPhoneNumberRequest();
    $request->accountSid = 'ipsa';
    $request->beta = false;
    $request->friendlyName = 'laborum';
    $request->origin = 'sunt';
    $request->page = 344718;
    $request->pageSize = 856756;
    $request->pageToken = 'expedita';
    $request->phoneNumber = 'aliquid';

    $requestSecurity = new ListIncomingPhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listIncomingPhoneNumber($request, $requestSecurity);

    if ($response->listIncomingPhoneNumberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIncomingPhoneNumberAssignedAddOn

Retrieve a list of Add-on installations currently assigned to this Number.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListIncomingPhoneNumberAssignedAddOnRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListIncomingPhoneNumberAssignedAddOnSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIncomingPhoneNumberAssignedAddOnRequest();
    $request->accountSid = 'officia';
    $request->page = 381397;
    $request->pageSize = 399161;
    $request->pageToken = 'perferendis';
    $request->resourceSid = 'eum';

    $requestSecurity = new ListIncomingPhoneNumberAssignedAddOnSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listIncomingPhoneNumberAssignedAddOn($request, $requestSecurity);

    if ($response->listIncomingPhoneNumberAssignedAddOnResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIncomingPhoneNumberAssignedAddOnExtension

Retrieve a list of Extensions for the Assigned Add-on.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListIncomingPhoneNumberAssignedAddOnExtensionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListIncomingPhoneNumberAssignedAddOnExtensionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIncomingPhoneNumberAssignedAddOnExtensionRequest();
    $request->accountSid = 'voluptas';
    $request->assignedAddOnSid = 'iste';
    $request->page = 661607;
    $request->pageSize = 70042;
    $request->pageToken = 'error';
    $request->resourceSid = 'possimus';

    $requestSecurity = new ListIncomingPhoneNumberAssignedAddOnExtensionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listIncomingPhoneNumberAssignedAddOnExtension($request, $requestSecurity);

    if ($response->listIncomingPhoneNumberAssignedAddOnExtensionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIncomingPhoneNumberLocal

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListIncomingPhoneNumberLocalRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListIncomingPhoneNumberLocalSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIncomingPhoneNumberLocalRequest();
    $request->accountSid = 'voluptates';
    $request->beta = false;
    $request->friendlyName = 'mollitia';
    $request->origin = 'laborum';
    $request->page = 726343;
    $request->pageSize = 324083;
    $request->pageToken = 'deleniti';
    $request->phoneNumber = 'enim';

    $requestSecurity = new ListIncomingPhoneNumberLocalSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listIncomingPhoneNumberLocal($request, $requestSecurity);

    if ($response->listIncomingPhoneNumberLocalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIncomingPhoneNumberMobile

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListIncomingPhoneNumberMobileRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListIncomingPhoneNumberMobileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIncomingPhoneNumberMobileRequest();
    $request->accountSid = 'vitae';
    $request->beta = false;
    $request->friendlyName = 'repellendus';
    $request->origin = 'ex';
    $request->page = 775803;
    $request->pageSize = 405373;
    $request->pageToken = 'ut';
    $request->phoneNumber = 'ad';

    $requestSecurity = new ListIncomingPhoneNumberMobileSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listIncomingPhoneNumberMobile($request, $requestSecurity);

    if ($response->listIncomingPhoneNumberMobileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIncomingPhoneNumberTollFree

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListIncomingPhoneNumberTollFreeRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListIncomingPhoneNumberTollFreeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIncomingPhoneNumberTollFreeRequest();
    $request->accountSid = 'expedita';
    $request->beta = false;
    $request->friendlyName = 'voluptatem';
    $request->origin = 'molestias';
    $request->page = 737254;
    $request->pageSize = 399660;
    $request->pageToken = 'beatae';
    $request->phoneNumber = 'voluptatum';

    $requestSecurity = new ListIncomingPhoneNumberTollFreeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listIncomingPhoneNumberTollFree($request, $requestSecurity);

    if ($response->listIncomingPhoneNumberTollFreeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listKey

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListKeyRequest();
    $request->accountSid = 'omnis';
    $request->page = 85233;
    $request->pageSize = 703218;
    $request->pageToken = 'est';

    $requestSecurity = new ListKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listKey($request, $requestSecurity);

    if ($response->listKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMedia

Retrieve a list of Media resources belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListMediaRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMediaSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMediaRequest();
    $request->accountSid = 'culpa';
    $request->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-15T21:54:49.962Z');
    $request->dateCreatedLessThan = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-09T21:19:27.244Z');
    $request->dateCreatedGreaterThan = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-07T23:13:52.948Z');
    $request->messageSid = 'debitis';
    $request->page = 29190;
    $request->pageSize = 1207;
    $request->pageToken = 'deleniti';

    $requestSecurity = new ListMediaSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listMedia($request, $requestSecurity);

    if ($response->listMediaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMember

Retrieve the members of the queue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMemberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMemberRequest();
    $request->accountSid = 'earum';
    $request->page = 404244;
    $request->pageSize = 958308;
    $request->pageToken = 'rem';
    $request->queueSid = 'minus';

    $requestSecurity = new ListMemberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listMember($request, $requestSecurity);

    if ($response->listMemberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMessage

Retrieve a list of messages belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMessageRequest();
    $request->accountSid = 'nemo';
    $request->dateSent = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-06T07:54:04.224Z');
    $request->dateSentLessThan = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-25T00:28:59.319Z');
    $request->dateSentGreaterThan = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-12T15:01:22.390Z');
    $request->from = 'impedit';
    $request->page = 842777;
    $request->pageSize = 720528;
    $request->pageToken = 'ipsam';
    $request->to = 'culpa';

    $requestSecurity = new ListMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listMessage($request, $requestSecurity);

    if ($response->listMessageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNotification

Retrieve a list of notifications belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListNotificationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListNotificationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNotificationRequest();
    $request->accountSid = 'dolor';
    $request->log = 307376;
    $request->messageDate = DateTime::createFromFormat('Y-m-d', '2022-06-18');
    $request->messageDateLessThan = DateTime::createFromFormat('Y-m-d', '2022-09-22');
    $request->messageDateGreaterThan = DateTime::createFromFormat('Y-m-d', '2022-12-28');
    $request->page = 100014;
    $request->pageSize = 24944;
    $request->pageToken = 'modi';

    $requestSecurity = new ListNotificationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listNotification($request, $requestSecurity);

    if ($response->listNotificationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOutgoingCallerId

Retrieve a list of outgoing-caller-ids belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListOutgoingCallerIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListOutgoingCallerIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOutgoingCallerIdRequest();
    $request->accountSid = 'fugit';
    $request->friendlyName = 'ab';
    $request->page = 513760;
    $request->pageSize = 65604;
    $request->pageToken = 'dolor';
    $request->phoneNumber = 'fugiat';

    $requestSecurity = new ListOutgoingCallerIdSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listOutgoingCallerId($request, $requestSecurity);

    if ($response->listOutgoingCallerIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listParticipant

Retrieve a list of participants belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListParticipantRequest();
    $request->accountSid = 'ipsam';
    $request->coaching = false;
    $request->conferenceSid = 'consequuntur';
    $request->hold = false;
    $request->muted = false;
    $request->page = 55107;
    $request->pageSize = 559682;
    $request->pageToken = 'eveniet';

    $requestSecurity = new ListParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listParticipant($request, $requestSecurity);

    if ($response->listParticipantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listQueue

Retrieve a list of queues belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListQueueRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListQueueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListQueueRequest();
    $request->accountSid = 'impedit';
    $request->page = 884952;
    $request->pageSize = 456410;
    $request->pageToken = 'necessitatibus';

    $requestSecurity = new ListQueueSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listQueue($request, $requestSecurity);

    if ($response->listQueueResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRecording

Retrieve a list of recordings belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRecordingRequest();
    $request->accountSid = 'sed';
    $request->callSid = 'veniam';
    $request->conferenceSid = 'nesciunt';
    $request->dateCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-18T22:06:59.614Z');
    $request->dateCreatedLessThan = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-22T04:40:09.209Z');
    $request->dateCreatedGreaterThan = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-26T10:54:10.191Z');
    $request->includeSoftDeleted = false;
    $request->page = 70410;
    $request->pageSize = 781480;
    $request->pageToken = 'autem';

    $requestSecurity = new ListRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listRecording($request, $requestSecurity);

    if ($response->listRecordingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRecordingAddOnResult

Retrieve a list of results belonging to the recording

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListRecordingAddOnResultRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRecordingAddOnResultSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRecordingAddOnResultRequest();
    $request->accountSid = 'nobis';
    $request->page = 388319;
    $request->pageSize = 927212;
    $request->pageToken = 'consequuntur';
    $request->referenceSid = 'voluptatem';

    $requestSecurity = new ListRecordingAddOnResultSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listRecordingAddOnResult($request, $requestSecurity);

    if ($response->listRecordingAddOnResultResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRecordingAddOnResultPayload

Retrieve a list of payloads belonging to the AddOnResult

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListRecordingAddOnResultPayloadRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRecordingAddOnResultPayloadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRecordingAddOnResultPayloadRequest();
    $request->accountSid = 'exercitationem';
    $request->addOnResultSid = 'necessitatibus';
    $request->page = 95619;
    $request->pageSize = 392569;
    $request->pageToken = 'at';
    $request->referenceSid = 'vero';

    $requestSecurity = new ListRecordingAddOnResultPayloadSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listRecordingAddOnResultPayload($request, $requestSecurity);

    if ($response->listRecordingAddOnResultPayloadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRecordingTranscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListRecordingTranscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRecordingTranscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRecordingTranscriptionRequest();
    $request->accountSid = 'est';
    $request->page = 690785;
    $request->pageSize = 192718;
    $request->pageToken = 'doloribus';
    $request->recordingSid = 'repudiandae';

    $requestSecurity = new ListRecordingTranscriptionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listRecordingTranscription($request, $requestSecurity);

    if ($response->listRecordingTranscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listShortCode

Retrieve a list of short-codes belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListShortCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListShortCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListShortCodeRequest();
    $request->accountSid = 'optio';
    $request->friendlyName = 'occaecati';
    $request->page = 364544;
    $request->pageSize = 455898;
    $request->pageToken = 'blanditiis';
    $request->shortCode = 'officia';

    $requestSecurity = new ListShortCodeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listShortCode($request, $requestSecurity);

    if ($response->listShortCodeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSigningKey

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSigningKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSigningKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSigningKeyRequest();
    $request->accountSid = 'voluptas';
    $request->page = 254025;
    $request->pageSize = 364912;
    $request->pageToken = 'quos';

    $requestSecurity = new ListSigningKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSigningKey($request, $requestSecurity);

    if ($response->listSigningKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSipAuthCallsCredentialListMapping

Retrieve a list of credential list mappings belonging to the domain used in the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSipAuthCallsCredentialListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSipAuthCallsCredentialListMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSipAuthCallsCredentialListMappingRequest();
    $request->accountSid = 'eius';
    $request->domainSid = 'aspernatur';
    $request->page = 495970;
    $request->pageSize = 200516;
    $request->pageToken = 'fuga';

    $requestSecurity = new ListSipAuthCallsCredentialListMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSipAuthCallsCredentialListMapping($request, $requestSecurity);

    if ($response->listSipAuthCallsCredentialListMappingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSipAuthCallsIpAccessControlListMapping

Retrieve a list of IP Access Control List mappings belonging to the domain used in the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSipAuthCallsIpAccessControlListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSipAuthCallsIpAccessControlListMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSipAuthCallsIpAccessControlListMappingRequest();
    $request->accountSid = 'laudantium';
    $request->domainSid = 'incidunt';
    $request->page = 97493;
    $request->pageSize = 524380;
    $request->pageToken = 'fugiat';

    $requestSecurity = new ListSipAuthCallsIpAccessControlListMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSipAuthCallsIpAccessControlListMapping($request, $requestSecurity);

    if ($response->listSipAuthCallsIpAccessControlListMappingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSipAuthRegistrationsCredentialListMapping

Retrieve a list of credential list mappings belonging to the domain used in the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSipAuthRegistrationsCredentialListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSipAuthRegistrationsCredentialListMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSipAuthRegistrationsCredentialListMappingRequest();
    $request->accountSid = 'dicta';
    $request->domainSid = 'nisi';
    $request->page = 159845;
    $request->pageSize = 233078;
    $request->pageToken = 'aperiam';

    $requestSecurity = new ListSipAuthRegistrationsCredentialListMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSipAuthRegistrationsCredentialListMapping($request, $requestSecurity);

    if ($response->listSipAuthRegistrationsCredentialListMappingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSipCredential

Retrieve a list of credentials.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSipCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSipCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSipCredentialRequest();
    $request->accountSid = 'cupiditate';
    $request->credentialListSid = 'reiciendis';
    $request->page = 746837;
    $request->pageSize = 3860;
    $request->pageToken = 'omnis';

    $requestSecurity = new ListSipCredentialSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSipCredential($request, $requestSecurity);

    if ($response->listSipCredentialResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSipCredentialList

Get All Credential Lists

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSipCredentialListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSipCredentialListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSipCredentialListRequest();
    $request->accountSid = 'eos';
    $request->page = 579011;
    $request->pageSize = 612867;
    $request->pageToken = 'magni';

    $requestSecurity = new ListSipCredentialListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSipCredentialList($request, $requestSecurity);

    if ($response->listSipCredentialListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSipCredentialListMapping

Read multiple CredentialListMapping resources from an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSipCredentialListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSipCredentialListMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSipCredentialListMappingRequest();
    $request->accountSid = 'inventore';
    $request->domainSid = 'fuga';
    $request->page = 881897;
    $request->pageSize = 976802;
    $request->pageToken = 'distinctio';

    $requestSecurity = new ListSipCredentialListMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSipCredentialListMapping($request, $requestSecurity);

    if ($response->listSipCredentialListMappingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSipDomain

Retrieve a list of domains belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSipDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSipDomainSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSipDomainRequest();
    $request->accountSid = 'omnis';
    $request->page = 966390;
    $request->pageSize = 328379;
    $request->pageToken = 'praesentium';

    $requestSecurity = new ListSipDomainSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSipDomain($request, $requestSecurity);

    if ($response->listSipDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSipIpAccessControlList

Retrieve a list of IpAccessControlLists that belong to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSipIpAccessControlListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSipIpAccessControlListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSipIpAccessControlListRequest();
    $request->accountSid = 'maxime';
    $request->page = 300403;
    $request->pageSize = 836364;
    $request->pageToken = 'quos';

    $requestSecurity = new ListSipIpAccessControlListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSipIpAccessControlList($request, $requestSecurity);

    if ($response->listSipIpAccessControlListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSipIpAccessControlListMapping

Retrieve a list of IpAccessControlListMapping resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSipIpAccessControlListMappingRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSipIpAccessControlListMappingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSipIpAccessControlListMappingRequest();
    $request->accountSid = 'commodi';
    $request->domainSid = 'itaque';
    $request->page = 415608;
    $request->pageSize = 520761;
    $request->pageToken = 'earum';

    $requestSecurity = new ListSipIpAccessControlListMappingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSipIpAccessControlListMapping($request, $requestSecurity);

    if ($response->listSipIpAccessControlListMappingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSipIpAddress

Read multiple IpAddress resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSipIpAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSipIpAddressSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSipIpAddressRequest();
    $request->accountSid = 'modi';
    $request->ipAccessControlListSid = 'nam';
    $request->page = 877399;
    $request->pageSize = 32901;
    $request->pageToken = 'ipsam';

    $requestSecurity = new ListSipIpAddressSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSipIpAddress($request, $requestSecurity);

    if ($response->listSipIpAddressResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTranscription

Retrieve a list of transcriptions belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListTranscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTranscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTranscriptionRequest();
    $request->accountSid = 'vel';
    $request->page = 1383;
    $request->pageSize = 93894;
    $request->pageToken = 'non';

    $requestSecurity = new ListTranscriptionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listTranscription($request, $requestSecurity);

    if ($response->listTranscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsageRecord

Retrieve a list of usage-records belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordRequest;
use \OpenAPI\OpenAPI\Models\Shared\UsageRecordEnumCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsageRecordRequest();
    $request->accountSid = 'maiores';
    $request->category = UsageRecordEnumCategoryEnum::MARKETPLACE_TWILIO_CALLER_NAME_LOOKUP_US;
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2021-04-14');
    $request->includeSubaccounts = false;
    $request->page = 643678;
    $request->pageSize = 458503;
    $request->pageToken = 'nemo';
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-05-02');

    $requestSecurity = new ListUsageRecordSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUsageRecord($request, $requestSecurity);

    if ($response->listUsageRecordResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsageRecordAllTime

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordAllTimeRequest;
use \OpenAPI\OpenAPI\Models\Shared\UsageRecordAllTimeEnumCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordAllTimeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsageRecordAllTimeRequest();
    $request->accountSid = 'quis';
    $request->category = UsageRecordAllTimeEnumCategoryEnum::RECORDINGSTORAGE;
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2020-09-04');
    $request->includeSubaccounts = false;
    $request->page = 945027;
    $request->pageSize = 900103;
    $request->pageToken = 'asperiores';
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-08-16');

    $requestSecurity = new ListUsageRecordAllTimeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUsageRecordAllTime($request, $requestSecurity);

    if ($response->listUsageRecordAllTimeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsageRecordDaily

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordDailyRequest;
use \OpenAPI\OpenAPI\Models\Shared\UsageRecordDailyEnumCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordDailySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsageRecordDailyRequest();
    $request->accountSid = 'debitis';
    $request->category = UsageRecordDailyEnumCategoryEnum::WIRELESS_USAGE_DATA_POOLED_DOWNLINK;
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2022-03-17');
    $request->includeSubaccounts = false;
    $request->page = 685478;
    $request->pageSize = 675689;
    $request->pageToken = 'consectetur';
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-06-18');

    $requestSecurity = new ListUsageRecordDailySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUsageRecordDaily($request, $requestSecurity);

    if ($response->listUsageRecordDailyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsageRecordLastMonth

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordLastMonthRequest;
use \OpenAPI\OpenAPI\Models\Shared\UsageRecordLastMonthEnumCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordLastMonthSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsageRecordLastMonthRequest();
    $request->accountSid = 'ipsum';
    $request->category = UsageRecordLastMonthEnumCategoryEnum::TURNMEGABYTES_JAPAN;
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2022-04-03');
    $request->includeSubaccounts = false;
    $request->page = 922757;
    $request->pageSize = 721430;
    $request->pageToken = 'dolore';
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-07-19');

    $requestSecurity = new ListUsageRecordLastMonthSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUsageRecordLastMonth($request, $requestSecurity);

    if ($response->listUsageRecordLastMonthResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsageRecordMonthly

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordMonthlyRequest;
use \OpenAPI\OpenAPI\Models\Shared\UsageRecordMonthlyEnumCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordMonthlySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsageRecordMonthlyRequest();
    $request->accountSid = 'sequi';
    $request->category = UsageRecordMonthlyEnumCategoryEnum::PROXY_ACTIVE_SESSIONS;
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2022-03-22');
    $request->includeSubaccounts = false;
    $request->page = 535468;
    $request->pageSize = 844235;
    $request->pageToken = 'iure';
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-01-10');

    $requestSecurity = new ListUsageRecordMonthlySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUsageRecordMonthly($request, $requestSecurity);

    if ($response->listUsageRecordMonthlyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsageRecordThisMonth

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordThisMonthRequest;
use \OpenAPI\OpenAPI\Models\Shared\UsageRecordThisMonthEnumCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordThisMonthSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsageRecordThisMonthRequest();
    $request->accountSid = 'vel';
    $request->category = UsageRecordThisMonthEnumCategoryEnum::MARKETPLACE_REMEETING_AUTOMATIC_SPEECH_RECOGNITION;
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2022-10-06');
    $request->includeSubaccounts = false;
    $request->page = 818034;
    $request->pageSize = 726878;
    $request->pageToken = 'architecto';
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-07-13');

    $requestSecurity = new ListUsageRecordThisMonthSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUsageRecordThisMonth($request, $requestSecurity);

    if ($response->listUsageRecordThisMonthResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsageRecordToday

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordTodayRequest;
use \OpenAPI\OpenAPI\Models\Shared\UsageRecordTodayEnumCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordTodaySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsageRecordTodayRequest();
    $request->accountSid = 'porro';
    $request->category = UsageRecordTodayEnumCategoryEnum::MARKETPLACE_TCPA_DEFENSE_SOLUTIONS_BLACKLIST_FEED;
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2022-12-04');
    $request->includeSubaccounts = false;
    $request->page = 36561;
    $request->pageSize = 424663;
    $request->pageToken = 'ea';
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-02-14');

    $requestSecurity = new ListUsageRecordTodaySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUsageRecordToday($request, $requestSecurity);

    if ($response->listUsageRecordTodayResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsageRecordYearly

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordYearlyRequest;
use \OpenAPI\OpenAPI\Models\Shared\UsageRecordYearlyEnumCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordYearlySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsageRecordYearlyRequest();
    $request->accountSid = 'excepturi';
    $request->category = UsageRecordYearlyEnumCategoryEnum::PCHAT_USERS;
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2022-09-19');
    $request->includeSubaccounts = false;
    $request->page = 596433;
    $request->pageSize = 935302;
    $request->pageToken = 'dicta';
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2020-01-28');

    $requestSecurity = new ListUsageRecordYearlySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUsageRecordYearly($request, $requestSecurity);

    if ($response->listUsageRecordYearlyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsageRecordYesterday

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordYesterdayRequest;
use \OpenAPI\OpenAPI\Models\Shared\UsageRecordYesterdayEnumCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageRecordYesterdaySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsageRecordYesterdayRequest();
    $request->accountSid = 'iste';
    $request->category = UsageRecordYesterdayEnumCategoryEnum::WIRELESS_USAGE_DATA_INDIVIDUAL_ADDITIONALGB;
    $request->endDate = DateTime::createFromFormat('Y-m-d', '2022-08-10');
    $request->includeSubaccounts = false;
    $request->page = 931505;
    $request->pageSize = 242178;
    $request->pageToken = 'laborum';
    $request->startDate = DateTime::createFromFormat('Y-m-d', '2022-10-11');

    $requestSecurity = new ListUsageRecordYesterdaySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUsageRecordYesterday($request, $requestSecurity);

    if ($response->listUsageRecordYesterdayResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsageTrigger

Retrieve a list of usage-triggers belonging to the account used to make the request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageTriggerRequest;
use \OpenAPI\OpenAPI\Models\Shared\UsageTriggerEnumRecurringEnum;
use \OpenAPI\OpenAPI\Models\Shared\UsageTriggerEnumTriggerFieldEnum;
use \OpenAPI\OpenAPI\Models\Shared\UsageTriggerEnumUsageCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageTriggerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsageTriggerRequest();
    $request->accountSid = 'iusto';
    $request->page = 24753;
    $request->pageSize = 39992;
    $request->pageToken = 'consequatur';
    $request->recurring = UsageTriggerEnumRecurringEnum::YEARLY;
    $request->triggerBy = UsageTriggerEnumTriggerFieldEnum::PRICE;
    $request->usageCategory = UsageTriggerEnumUsageCategoryEnum::NOTIFY;

    $requestSecurity = new ListUsageTriggerSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUsageTrigger($request, $requestSecurity);

    if ($response->listUsageTriggerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAccount

Modify the properties of a given Account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountUpdateAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\AccountEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccountRequest();
    $request->requestBody = new UpdateAccountUpdateAccountRequest();
    $request->requestBody->friendlyName = 'quidem';
    $request->requestBody->status = AccountEnumStatusEnum::SUSPENDED;
    $request->sid = 'facilis';

    $requestSecurity = new UpdateAccountSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateAccount($request, $requestSecurity);

    if ($response->apiV2010Account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAddress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAddressUpdateAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAddressSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAddressRequest();
    $request->accountSid = 'placeat';
    $request->requestBody = new UpdateAddressUpdateAddressRequest();
    $request->requestBody->autoCorrectAddress = false;
    $request->requestBody->city = 'Melvinstad';
    $request->requestBody->customerName = 'a';
    $request->requestBody->emergencyEnabled = false;
    $request->requestBody->friendlyName = 'voluptate';
    $request->requestBody->postalCode = '68673';
    $request->requestBody->region = 'corporis';
    $request->requestBody->street = '642 Scotty Falls';
    $request->requestBody->streetSecondary = 'vitae';
    $request->sid = 'inventore';

    $requestSecurity = new UpdateAddressSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateAddress($request, $requestSecurity);

    if ($response->apiV2010AccountAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApplication

Updates the application's properties

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationUpdateApplicationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationUpdateApplicationRequestSmsMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationUpdateApplicationRequestVoiceMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateApplicationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateApplicationRequest();
    $request->accountSid = 'dolorem';
    $request->requestBody = new UpdateApplicationUpdateApplicationRequest();
    $request->requestBody->apiVersion = 'ad';
    $request->requestBody->friendlyName = 'qui';
    $request->requestBody->messageStatusCallback = 'https://identical-fresco.net';
    $request->requestBody->publicApplicationConnectEnabled = false;
    $request->requestBody->smsFallbackMethod = UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum::PUT;
    $request->requestBody->smsFallbackUrl = 'https://rapid-keyboard.com';
    $request->requestBody->smsMethod = UpdateApplicationUpdateApplicationRequestSmsMethodEnum::HEAD;
    $request->requestBody->smsStatusCallback = 'http://impure-banker.com';
    $request->requestBody->smsUrl = 'http://distorted-fish.org';
    $request->requestBody->statusCallback = 'http://dual-nursing.org';
    $request->requestBody->statusCallbackMethod = UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum::PUT;
    $request->requestBody->voiceCallerIdLookup = false;
    $request->requestBody->voiceFallbackMethod = UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum::PUT;
    $request->requestBody->voiceFallbackUrl = 'http://cultured-fiberglass.name';
    $request->requestBody->voiceMethod = UpdateApplicationUpdateApplicationRequestVoiceMethodEnum::PUT;
    $request->requestBody->voiceUrl = 'http://putrid-recipe.org';
    $request->sid = 'officia';

    $requestSecurity = new UpdateApplicationSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateApplication($request, $requestSecurity);

    if ($response->apiV2010AccountApplication !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCall

Initiates a call redirect or terminates a call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCallRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCallUpdateCallRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCallUpdateCallRequestFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCallUpdateCallRequestMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\CallEnumUpdateStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCallUpdateCallRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCallSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCallRequest();
    $request->accountSid = 'quos';
    $request->requestBody = new UpdateCallUpdateCallRequest();
    $request->requestBody->fallbackMethod = UpdateCallUpdateCallRequestFallbackMethodEnum::PUT;
    $request->requestBody->fallbackUrl = 'http://lavish-back.org';
    $request->requestBody->method = UpdateCallUpdateCallRequestMethodEnum::HEAD;
    $request->requestBody->status = CallEnumUpdateStatusEnum::CANCELED;
    $request->requestBody->statusCallback = 'https://flippant-robotics.net';
    $request->requestBody->statusCallbackMethod = UpdateCallUpdateCallRequestStatusCallbackMethodEnum::HEAD;
    $request->requestBody->timeLimit = 418109;
    $request->requestBody->twiml = 'esse';
    $request->requestBody->url = 'http://superior-brink.net';
    $request->sid = 'facere';

    $requestSecurity = new UpdateCallSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateCall($request, $requestSecurity);

    if ($response->apiV2010AccountCall !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCallFeedback

Update a Feedback resource for a call

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCallFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCallFeedbackUpdateCallFeedbackRequest;
use \OpenAPI\OpenAPI\Models\Shared\CallFeedbackEnumIssuesEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCallFeedbackSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCallFeedbackRequest();
    $request->accountSid = 'corrupti';
    $request->callSid = 'molestiae';
    $request->requestBody = new UpdateCallFeedbackUpdateCallFeedbackRequest();
    $request->requestBody->issue = [
        CallFeedbackEnumIssuesEnum::UNSOLICITED_CALL,
        CallFeedbackEnumIssuesEnum::UNSOLICITED_CALL,
        CallFeedbackEnumIssuesEnum::ONE_WAY_AUDIO,
    ];
    $request->requestBody->qualityScore = 575078;

    $requestSecurity = new UpdateCallFeedbackSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateCallFeedback($request, $requestSecurity);

    if ($response->apiV2010AccountCallCallFeedback !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCallRecording

Changes the status of the recording to paused, stopped, or in-progress. Note: Pass `Twilio.CURRENT` instead of recording sid to reference current active recording.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCallRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCallRecordingUpdateCallRecordingRequest;
use \OpenAPI\OpenAPI\Models\Shared\CallRecordingEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCallRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCallRecordingRequest();
    $request->accountSid = 'ea';
    $request->callSid = 'autem';
    $request->requestBody = new UpdateCallRecordingUpdateCallRecordingRequest();
    $request->requestBody->pauseBehavior = 'ipsam';
    $request->requestBody->status = CallRecordingEnumStatusEnum::COMPLETED;
    $request->sid = 'laudantium';

    $requestSecurity = new UpdateCallRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateCallRecording($request, $requestSecurity);

    if ($response->apiV2010AccountCallCallRecording !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConference

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConferenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConferenceUpdateConferenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceEnumUpdateStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConferenceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConferenceRequest();
    $request->accountSid = 'corporis';
    $request->requestBody = new UpdateConferenceUpdateConferenceRequest();
    $request->requestBody->announceMethod = UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum::DELETE;
    $request->requestBody->announceUrl = 'https://severe-supper.com';
    $request->requestBody->status = ConferenceEnumUpdateStatusEnum::COMPLETED;
    $request->sid = 'quia';

    $requestSecurity = new UpdateConferenceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateConference($request, $requestSecurity);

    if ($response->apiV2010AccountConference !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConferenceRecording

Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConferenceRecordingRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConferenceRecordingUpdateConferenceRecordingRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConferenceRecordingEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConferenceRecordingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConferenceRecordingRequest();
    $request->accountSid = 'quidem';
    $request->conferenceSid = 'fuga';
    $request->requestBody = new UpdateConferenceRecordingUpdateConferenceRecordingRequest();
    $request->requestBody->pauseBehavior = 'repudiandae';
    $request->requestBody->status = ConferenceRecordingEnumStatusEnum::IN_PROGRESS;
    $request->sid = 'expedita';

    $requestSecurity = new UpdateConferenceRecordingSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateConferenceRecording($request, $requestSecurity);

    if ($response->apiV2010AccountConferenceConferenceRecording !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConnectApp

Update a connect-app with the specified parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectAppUpdateConnectAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectAppEnumPermissionEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectAppSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConnectAppRequest();
    $request->accountSid = 'officiis';
    $request->requestBody = new UpdateConnectAppUpdateConnectAppRequest();
    $request->requestBody->authorizeRedirectUrl = 'http://terrific-jumbo.name';
    $request->requestBody->companyName = 'odit';
    $request->requestBody->deauthorizeCallbackMethod = UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum::HEAD;
    $request->requestBody->deauthorizeCallbackUrl = 'http://petty-tweezers.biz';
    $request->requestBody->description = 'recusandae';
    $request->requestBody->friendlyName = 'similique';
    $request->requestBody->homepageUrl = 'http://required-fellow.com';
    $request->requestBody->permissions = [
        ConnectAppEnumPermissionEnum::GET_ALL,
        ConnectAppEnumPermissionEnum::POST_ALL,
        ConnectAppEnumPermissionEnum::POST_ALL,
    ];
    $request->sid = 'fugit';

    $requestSecurity = new UpdateConnectAppSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateConnectApp($request, $requestSecurity);

    if ($response->apiV2010AccountConnectApp !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIncomingPhoneNumber

Update an incoming-phone-number instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIncomingPhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest;
use \OpenAPI\OpenAPI\Models\Shared\IncomingPhoneNumberEnumEmergencyStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\IncomingPhoneNumberEnumVoiceReceiveModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIncomingPhoneNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIncomingPhoneNumberRequest();
    $request->accountSid = 'numquam';
    $request->requestBody = new UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest();
    $request->requestBody->accountSid = 'numquam';
    $request->requestBody->addressSid = 'nesciunt';
    $request->requestBody->apiVersion = 'at';
    $request->requestBody->bundleSid = 'officia';
    $request->requestBody->emergencyAddressSid = 'dignissimos';
    $request->requestBody->emergencyStatus = IncomingPhoneNumberEnumEmergencyStatusEnum::INACTIVE;
    $request->requestBody->friendlyName = 'necessitatibus';
    $request->requestBody->identitySid = 'corporis';
    $request->requestBody->smsApplicationSid = 'qui';
    $request->requestBody->smsFallbackMethod = UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum::PUT;
    $request->requestBody->smsFallbackUrl = 'https://official-exploration.net';
    $request->requestBody->smsMethod = UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum::GET;
    $request->requestBody->smsUrl = 'http://intrepid-shift.info';
    $request->requestBody->statusCallback = 'http://grounded-efficiency.org';
    $request->requestBody->statusCallbackMethod = UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum::DELETE;
    $request->requestBody->trunkSid = 'tempore';
    $request->requestBody->voiceApplicationSid = 'aperiam';
    $request->requestBody->voiceCallerIdLookup = false;
    $request->requestBody->voiceFallbackMethod = UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum::PUT;
    $request->requestBody->voiceFallbackUrl = 'http://flawed-local.name';
    $request->requestBody->voiceMethod = UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum::POST;
    $request->requestBody->voiceReceiveMode = IncomingPhoneNumberEnumVoiceReceiveModeEnum::FAX;
    $request->requestBody->voiceUrl = 'http://stable-practitioner.info';
    $request->sid = 'est';

    $requestSecurity = new UpdateIncomingPhoneNumberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateIncomingPhoneNumber($request, $requestSecurity);

    if ($response->apiV2010AccountIncomingPhoneNumber !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateKey

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateKeyUpdateKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateKeyRequest();
    $request->accountSid = 'impedit';
    $request->requestBody = new UpdateKeyUpdateKeyRequest();
    $request->requestBody->friendlyName = 'delectus';
    $request->sid = 'tempore';

    $requestSecurity = new UpdateKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateKey($request, $requestSecurity);

    if ($response->apiV2010AccountKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMember

Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMemberUpdateMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMemberUpdateMemberRequestMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMemberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMemberRequest();
    $request->accountSid = 'vero';
    $request->callSid = 'odit';
    $request->queueSid = 'repellat';
    $request->requestBody = new UpdateMemberUpdateMemberRequest();
    $request->requestBody->method = UpdateMemberUpdateMemberRequestMethodEnum::DELETE;
    $request->requestBody->url = 'http://instructive-ash.info';

    $requestSecurity = new UpdateMemberSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateMember($request, $requestSecurity);

    if ($response->apiV2010AccountQueueMember !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMessage

To redact a message-body from a post-flight message record, post to the message instance resource with an empty body

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMessageRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMessageUpdateMessageRequest;
use \OpenAPI\OpenAPI\Models\Shared\MessageEnumUpdateStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMessageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMessageRequest();
    $request->accountSid = 'minima';
    $request->requestBody = new UpdateMessageUpdateMessageRequest();
    $request->requestBody->body = 'in';
    $request->requestBody->status = MessageEnumUpdateStatusEnum::CANCELED;
    $request->sid = 'ducimus';

    $requestSecurity = new UpdateMessageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateMessage($request, $requestSecurity);

    if ($response->apiV2010AccountMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOutgoingCallerId

Updates the caller-id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOutgoingCallerIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOutgoingCallerIdUpdateOutgoingCallerIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOutgoingCallerIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOutgoingCallerIdRequest();
    $request->accountSid = 'excepturi';
    $request->requestBody = new UpdateOutgoingCallerIdUpdateOutgoingCallerIdRequest();
    $request->requestBody->friendlyName = 'dolores';
    $request->sid = 'error';

    $requestSecurity = new UpdateOutgoingCallerIdSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateOutgoingCallerId($request, $requestSecurity);

    if ($response->apiV2010AccountOutgoingCallerId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateParticipant

Update the properties of the participant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateParticipantUpdateParticipantRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateParticipantUpdateParticipantRequestHoldMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateParticipantUpdateParticipantRequestWaitMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateParticipantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateParticipantRequest();
    $request->accountSid = 'veritatis';
    $request->callSid = 'ducimus';
    $request->conferenceSid = 'voluptate';
    $request->requestBody = new UpdateParticipantUpdateParticipantRequest();
    $request->requestBody->announceMethod = UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum::DELETE;
    $request->requestBody->announceUrl = 'https://plastic-sac.info';
    $request->requestBody->beepOnExit = false;
    $request->requestBody->callSidToCoach = 'quaerat';
    $request->requestBody->coaching = false;
    $request->requestBody->endConferenceOnExit = false;
    $request->requestBody->hold = false;
    $request->requestBody->holdMethod = UpdateParticipantUpdateParticipantRequestHoldMethodEnum::POST;
    $request->requestBody->holdUrl = 'https://striped-program.info';
    $request->requestBody->muted = false;
    $request->requestBody->waitMethod = UpdateParticipantUpdateParticipantRequestWaitMethodEnum::POST;
    $request->requestBody->waitUrl = 'http://familiar-bag.name';

    $requestSecurity = new UpdateParticipantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateParticipant($request, $requestSecurity);

    if ($response->apiV2010AccountConferenceParticipant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePayments

update an instance of payments with different phases of payment flows.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePaymentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePaymentsUpdatePaymentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaymentsEnumCaptureEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentsEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePaymentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePaymentsRequest();
    $request->accountSid = 'vero';
    $request->callSid = 'sequi';
    $request->requestBody = new UpdatePaymentsUpdatePaymentsRequest();
    $request->requestBody->capture = PaymentsEnumCaptureEnum::BANK_ACCOUNT_NUMBER;
    $request->requestBody->idempotencyKey = 'cum';
    $request->requestBody->status = PaymentsEnumStatusEnum::COMPLETE;
    $request->requestBody->statusCallback = 'https://gleaming-piglet.biz';
    $request->sid = 'nam';

    $requestSecurity = new UpdatePaymentsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updatePayments($request, $requestSecurity);

    if ($response->apiV2010AccountCallPayments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateQueue

Update the queue with the new parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateQueueRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateQueueUpdateQueueRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateQueueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateQueueRequest();
    $request->accountSid = 'dicta';
    $request->requestBody = new UpdateQueueUpdateQueueRequest();
    $request->requestBody->friendlyName = 'consequuntur';
    $request->requestBody->maxSize = 899867;
    $request->sid = 'nobis';

    $requestSecurity = new UpdateQueueSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateQueue($request, $requestSecurity);

    if ($response->apiV2010AccountQueue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateShortCode

Update a short code with the following parameters

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateShortCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateShortCodeUpdateShortCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateShortCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateShortCodeRequest();
    $request->accountSid = 'ipsa';
    $request->requestBody = new UpdateShortCodeUpdateShortCodeRequest();
    $request->requestBody->apiVersion = 'ducimus';
    $request->requestBody->friendlyName = 'maiores';
    $request->requestBody->smsFallbackMethod = UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum::HEAD;
    $request->requestBody->smsFallbackUrl = 'http://hoarse-sub.net';
    $request->requestBody->smsMethod = UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum::PATCH;
    $request->requestBody->smsUrl = 'https://handy-encirclement.info';
    $request->sid = 'doloribus';

    $requestSecurity = new UpdateShortCodeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateShortCode($request, $requestSecurity);

    if ($response->apiV2010AccountShortCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSigningKey

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSigningKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSigningKeyUpdateSigningKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSigningKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSigningKeyRequest();
    $request->accountSid = 'eligendi';
    $request->requestBody = new UpdateSigningKeyUpdateSigningKeyRequest();
    $request->requestBody->friendlyName = 'sint';
    $request->sid = 'enim';

    $requestSecurity = new UpdateSigningKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSigningKey($request, $requestSecurity);

    if ($response->apiV2010AccountSigningKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSipCredential

Update a credential resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSipCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSipCredentialUpdateSipCredentialRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSipCredentialSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSipCredentialRequest();
    $request->accountSid = 'hic';
    $request->credentialListSid = 'animi';
    $request->requestBody = new UpdateSipCredentialUpdateSipCredentialRequest();
    $request->requestBody->password = 'quas';
    $request->sid = 'totam';

    $requestSecurity = new UpdateSipCredentialSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSipCredential($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipCredentialListSipCredential !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSipCredentialList

Update a Credential List

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSipCredentialListRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSipCredentialListUpdateSipCredentialListRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSipCredentialListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSipCredentialListRequest();
    $request->accountSid = 'molestias';
    $request->requestBody = new UpdateSipCredentialListUpdateSipCredentialListRequest();
    $request->requestBody->friendlyName = 'odio';
    $request->sid = 'eaque';

    $requestSecurity = new UpdateSipCredentialListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSipCredentialList($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipCredentialList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSipDomain

Update the attributes of a domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSipDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSipDomainUpdateSipDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSipDomainSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSipDomainRequest();
    $request->accountSid = 'saepe';
    $request->requestBody = new UpdateSipDomainUpdateSipDomainRequest();
    $request->requestBody->byocTrunkSid = 'architecto';
    $request->requestBody->domainName = 'quos';
    $request->requestBody->emergencyCallerSid = 'iste';
    $request->requestBody->emergencyCallingEnabled = false;
    $request->requestBody->friendlyName = 'assumenda';
    $request->requestBody->secure = false;
    $request->requestBody->sipRegistration = false;
    $request->requestBody->voiceFallbackMethod = UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum::PUT;
    $request->requestBody->voiceFallbackUrl = 'https://euphoric-aquarium.org';
    $request->requestBody->voiceMethod = UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum::PUT;
    $request->requestBody->voiceStatusCallbackMethod = UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum::PUT;
    $request->requestBody->voiceStatusCallbackUrl = 'http://enraged-thorn.name';
    $request->requestBody->voiceUrl = 'http://glum-falling-out.net';
    $request->sid = 'architecto';

    $requestSecurity = new UpdateSipDomainSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSipDomain($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipDomain !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSipIpAccessControlList

Rename an IpAccessControlList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSipIpAccessControlListRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSipIpAccessControlListUpdateSipIpAccessControlListRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSipIpAccessControlListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSipIpAccessControlListRequest();
    $request->accountSid = 'cupiditate';
    $request->requestBody = new UpdateSipIpAccessControlListUpdateSipIpAccessControlListRequest();
    $request->requestBody->friendlyName = 'molestiae';
    $request->sid = 'eligendi';

    $requestSecurity = new UpdateSipIpAccessControlListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSipIpAccessControlList($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipIpAccessControlList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSipIpAddress

Update an IpAddress resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSipIpAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSipIpAddressUpdateSipIpAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSipIpAddressSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSipIpAddressRequest();
    $request->accountSid = 'possimus';
    $request->ipAccessControlListSid = 'non';
    $request->requestBody = new UpdateSipIpAddressUpdateSipIpAddressRequest();
    $request->requestBody->cidrPrefixLength = 298187;
    $request->requestBody->friendlyName = 'itaque';
    $request->requestBody->ipAddress = 'sed';
    $request->sid = 'asperiores';

    $requestSecurity = new UpdateSipIpAddressSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSipIpAddress($request, $requestSecurity);

    if ($response->apiV2010AccountSipSipIpAccessControlListSipIpAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSiprec

Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiprecRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiprecUpdateSiprecRequest;
use \OpenAPI\OpenAPI\Models\Shared\SiprecEnumUpdateStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiprecSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSiprecRequest();
    $request->accountSid = 'veniam';
    $request->callSid = 'consequuntur';
    $request->requestBody = new UpdateSiprecUpdateSiprecRequest();
    $request->requestBody->status = SiprecEnumUpdateStatusEnum::STOPPED;
    $request->sid = 'facere';

    $requestSecurity = new UpdateSiprecSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSiprec($request, $requestSecurity);

    if ($response->apiV2010AccountCallSiprec !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStream

Stop a Stream using either the SID of the Stream resource or the `name` used when creating the resource

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStreamUpdateStreamRequest;
use \OpenAPI\OpenAPI\Models\Shared\StreamEnumUpdateStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStreamSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStreamRequest();
    $request->accountSid = 'laudantium';
    $request->callSid = 'odit';
    $request->requestBody = new UpdateStreamUpdateStreamRequest();
    $request->requestBody->status = StreamEnumUpdateStatusEnum::STOPPED;
    $request->sid = 'pariatur';

    $requestSecurity = new UpdateStreamSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateStream($request, $requestSecurity);

    if ($response->apiV2010AccountCallStream !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUsageTrigger

Update an instance of a usage trigger

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUsageTriggerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUsageTriggerUpdateUsageTriggerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUsageTriggerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUsageTriggerRequest();
    $request->accountSid = 'amet';
    $request->requestBody = new UpdateUsageTriggerUpdateUsageTriggerRequest();
    $request->requestBody->callbackMethod = UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum::POST;
    $request->requestBody->callbackUrl = 'http://esteemed-publishing.net';
    $request->requestBody->friendlyName = 'nisi';
    $request->sid = 'voluptatibus';

    $requestSecurity = new UpdateUsageTriggerSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateUsageTrigger($request, $requestSecurity);

    if ($response->apiV2010AccountUsageUsageTrigger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
