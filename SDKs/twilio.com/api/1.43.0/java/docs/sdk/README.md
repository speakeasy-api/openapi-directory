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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccountCreateAccountRequest;
import org.openapis.openapi.models.operations.CreateAccountResponse;
import org.openapis.openapi.models.operations.CreateAccountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAccountCreateAccountRequest req = new CreateAccountCreateAccountRequest() {{
                friendlyName = "quibusdam";
            }};            

            CreateAccountResponse res = sdk.sdk.createAccount(req, new CreateAccountSecurity("unde", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010Account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAddress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAddressCreateAddressRequest;
import org.openapis.openapi.models.operations.CreateAddressRequest;
import org.openapis.openapi.models.operations.CreateAddressResponse;
import org.openapis.openapi.models.operations.CreateAddressSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAddressRequest req = new CreateAddressRequest("corrupti") {{
                requestBody = new CreateAddressCreateAddressRequest("illum", "vel", "error", "deserunt", "suscipit", "iure") {{
                    autoCorrectAddress = false;
                    emergencyEnabled = false;
                    friendlyName = "magnam";
                    streetSecondary = "debitis";
                }};;
            }};            

            CreateAddressResponse res = sdk.sdk.createAddress(req, new CreateAddressSecurity("ipsa", "delectus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createApplication

Create a new application within your account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApplicationCreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateApplicationCreateApplicationRequestSmsMethodEnum;
import org.openapis.openapi.models.operations.CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateApplicationCreateApplicationRequestVoiceMethodEnum;
import org.openapis.openapi.models.operations.CreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateApplicationResponse;
import org.openapis.openapi.models.operations.CreateApplicationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateApplicationRequest req = new CreateApplicationRequest("tempora") {{
                requestBody = new CreateApplicationCreateApplicationRequest() {{
                    apiVersion = "suscipit";
                    friendlyName = "molestiae";
                    messageStatusCallback = "https://studious-lynx.info";
                    publicApplicationConnectEnabled = false;
                    smsFallbackMethod = CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum.PATCH;
                    smsFallbackUrl = "http://velvety-spiderling.com";
                    smsMethod = CreateApplicationCreateApplicationRequestSmsMethodEnum.POST;
                    smsStatusCallback = "http://previous-algorithm.info";
                    smsUrl = "https://well-informed-screamer.com";
                    statusCallback = "https://trim-wheat.info";
                    statusCallbackMethod = CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum.PUT;
                    voiceCallerIdLookup = false;
                    voiceFallbackMethod = CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum.PUT;
                    voiceFallbackUrl = "http://meager-seabass.net";
                    voiceMethod = CreateApplicationCreateApplicationRequestVoiceMethodEnum.HEAD;
                    voiceUrl = "https://posh-muffin.com";
                }};;
            }};            

            CreateApplicationResponse res = sdk.sdk.createApplication(req, new CreateApplicationSecurity("deleniti", "hic") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountApplication != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCall

Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCallCreateCallRequest;
import org.openapis.openapi.models.operations.CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateCallCreateCallRequestFallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateCallCreateCallRequestMethodEnum;
import org.openapis.openapi.models.operations.CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateCallCreateCallRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateCallRequest;
import org.openapis.openapi.models.operations.CreateCallResponse;
import org.openapis.openapi.models.operations.CreateCallSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCallRequest req = new CreateCallRequest("optio") {{
                requestBody = new CreateCallCreateCallRequest("totam", "beatae") {{
                    applicationSid = "commodi";
                    asyncAmd = "molestiae";
                    asyncAmdStatusCallback = "http://dental-schedule.net";
                    asyncAmdStatusCallbackMethod = CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum.POST;
                    byoc = "ipsum";
                    callReason = "excepturi";
                    callToken = "aspernatur";
                    callerId = "perferendis";
                    fallbackMethod = CreateCallCreateCallRequestFallbackMethodEnum.GET;
                    fallbackUrl = "https://crazy-ophthalmologist.biz";
                    machineDetection = "natus";
                    machineDetectionSilenceTimeout = 386489L;
                    machineDetectionSpeechEndThreshold = 943749L;
                    machineDetectionSpeechThreshold = 902599L;
                    machineDetectionTimeout = 681820L;
                    method = CreateCallCreateCallRequestMethodEnum.POST;
                    record = false;
                    recordingChannels = "corporis";
                    recordingStatusCallback = "iste";
                    recordingStatusCallbackEvent = new String[]{{
                        add("saepe"),
                        add("quidem"),
                    }};
                    recordingStatusCallbackMethod = CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum.HEAD;
                    recordingTrack = "ipsa";
                    sendDigits = "reiciendis";
                    sipAuthPassword = "est";
                    sipAuthUsername = "mollitia";
                    statusCallback = "https://deadly-corsage.info";
                    statusCallbackEvent = new String[]{{
                        add("nobis"),
                    }};
                    statusCallbackMethod = CreateCallCreateCallRequestStatusCallbackMethodEnum.GET;
                    timeLimit = 607831L;
                    timeout = 363711L;
                    trim = "minima";
                    twiml = "excepturi";
                    url = "http://insidious-parole.org";
                }};;
            }};            

            CreateCallResponse res = sdk.sdk.createCall(req, new CreateCallSecurity("sapiente", "architecto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountCall != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCallFeedbackSummary

Create a FeedbackSummary resource for a call

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest;
import org.openapis.openapi.models.operations.CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateCallFeedbackSummaryRequest;
import org.openapis.openapi.models.operations.CreateCallFeedbackSummaryResponse;
import org.openapis.openapi.models.operations.CreateCallFeedbackSummarySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCallFeedbackSummaryRequest req = new CreateCallFeedbackSummaryRequest("mollitia") {{
                requestBody = new CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest(LocalDate.parse("2022-05-14"), LocalDate.parse("2022-01-02")) {{
                    includeSubaccounts = false;
                    statusCallback = "https://oily-desk.info";
                    statusCallbackMethod = CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum.POST;
                }};;
            }};            

            CreateCallFeedbackSummaryResponse res = sdk.sdk.createCallFeedbackSummary(req, new CreateCallFeedbackSummarySecurity("molestiae", "velit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountCallCallFeedbackSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCallRecording

Create a recording for the call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCallRecordingCreateCallRecordingRequest;
import org.openapis.openapi.models.operations.CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateCallRecordingRequest;
import org.openapis.openapi.models.operations.CreateCallRecordingResponse;
import org.openapis.openapi.models.operations.CreateCallRecordingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCallRecordingRequest req = new CreateCallRecordingRequest("error", "quia") {{
                requestBody = new CreateCallRecordingCreateCallRecordingRequest() {{
                    recordingChannels = "quis";
                    recordingStatusCallback = "http://quixotic-physics.biz";
                    recordingStatusCallbackEvent = new String[]{{
                        add("quo"),
                    }};
                    recordingStatusCallbackMethod = CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum.GET;
                    recordingTrack = "tenetur";
                    trim = "ipsam";
                }};;
            }};            

            CreateCallRecordingResponse res = sdk.sdk.createCallRecording(req, new CreateCallRecordingSecurity("id", "possimus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountCallCallRecording != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createIncomingPhoneNumber

Purchase a phone-number for the account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberRequest;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberResponse;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberSecurity;
import org.openapis.openapi.models.shared.IncomingPhoneNumberEnumEmergencyStatusEnum;
import org.openapis.openapi.models.shared.IncomingPhoneNumberEnumVoiceReceiveModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateIncomingPhoneNumberRequest req = new CreateIncomingPhoneNumberRequest("aut") {{
                requestBody = new CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest() {{
                    addressSid = "quasi";
                    apiVersion = "error";
                    areaCode = "temporibus";
                    bundleSid = "laborum";
                    emergencyAddressSid = "quasi";
                    emergencyStatus = IncomingPhoneNumberEnumEmergencyStatusEnum.INACTIVE;
                    friendlyName = "voluptatibus";
                    identitySid = "vero";
                    phoneNumber = "nihil";
                    smsApplicationSid = "praesentium";
                    smsFallbackMethod = CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnum.DELETE;
                    smsFallbackUrl = "http://overcooked-impairment.net";
                    smsMethod = CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnum.HEAD;
                    smsUrl = "http://insubstantial-dramaturge.org";
                    statusCallback = "http://grown-edge.info";
                    statusCallbackMethod = CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnum.HEAD;
                    trunkSid = "harum";
                    voiceApplicationSid = "enim";
                    voiceCallerIdLookup = false;
                    voiceFallbackMethod = CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnum.DELETE;
                    voiceFallbackUrl = "http://utilized-bank.biz";
                    voiceMethod = CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnum.PUT;
                    voiceReceiveMode = IncomingPhoneNumberEnumVoiceReceiveModeEnum.FAX;
                    voiceUrl = "https://treasured-dirt.name";
                }};;
            }};            

            CreateIncomingPhoneNumberResponse res = sdk.sdk.createIncomingPhoneNumber(req, new CreateIncomingPhoneNumberSecurity("rem", "voluptates") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountIncomingPhoneNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createIncomingPhoneNumberAssignedAddOn

Assign an Add-on installation to the Number specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberAssignedAddOnRequest;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberAssignedAddOnResponse;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberAssignedAddOnSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateIncomingPhoneNumberAssignedAddOnRequest req = new CreateIncomingPhoneNumberAssignedAddOnRequest("quasi", "repudiandae") {{
                requestBody = new CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest("sint");;
            }};            

            CreateIncomingPhoneNumberAssignedAddOnResponse res = sdk.sdk.createIncomingPhoneNumberAssignedAddOn(req, new CreateIncomingPhoneNumberAssignedAddOnSecurity("veritatis", "itaque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createIncomingPhoneNumberLocal

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberLocalRequest;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberLocalResponse;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberLocalSecurity;
import org.openapis.openapi.models.shared.IncomingPhoneNumberLocalEnumEmergencyStatusEnum;
import org.openapis.openapi.models.shared.IncomingPhoneNumberLocalEnumVoiceReceiveModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateIncomingPhoneNumberLocalRequest req = new CreateIncomingPhoneNumberLocalRequest("incidunt") {{
                requestBody = new CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest("enim") {{
                    addressSid = "consequatur";
                    apiVersion = "est";
                    bundleSid = "quibusdam";
                    emergencyAddressSid = "explicabo";
                    emergencyStatus = IncomingPhoneNumberLocalEnumEmergencyStatusEnum.INACTIVE;
                    friendlyName = "distinctio";
                    identitySid = "quibusdam";
                    smsApplicationSid = "labore";
                    smsFallbackMethod = CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnum.GET;
                    smsFallbackUrl = "http://hungry-nanoparticle.name";
                    smsMethod = CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnum.HEAD;
                    smsUrl = "http://svelte-frosting.com";
                    statusCallback = "http://rapid-moat.biz";
                    statusCallbackMethod = CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnum.PUT;
                    trunkSid = "tempore";
                    voiceApplicationSid = "labore";
                    voiceCallerIdLookup = false;
                    voiceFallbackMethod = CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnum.DELETE;
                    voiceFallbackUrl = "http://excellent-roll.name";
                    voiceMethod = CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnum.POST;
                    voiceReceiveMode = IncomingPhoneNumberLocalEnumVoiceReceiveModeEnum.FAX;
                    voiceUrl = "https://nonstop-pate.biz";
                }};;
            }};            

            CreateIncomingPhoneNumberLocalResponse res = sdk.sdk.createIncomingPhoneNumberLocal(req, new CreateIncomingPhoneNumberLocalSecurity("debitis", "a") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createIncomingPhoneNumberMobile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberMobileRequest;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberMobileResponse;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberMobileSecurity;
import org.openapis.openapi.models.shared.IncomingPhoneNumberMobileEnumEmergencyStatusEnum;
import org.openapis.openapi.models.shared.IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateIncomingPhoneNumberMobileRequest req = new CreateIncomingPhoneNumberMobileRequest("dolorum") {{
                requestBody = new CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest("in") {{
                    addressSid = "in";
                    apiVersion = "illum";
                    bundleSid = "maiores";
                    emergencyAddressSid = "rerum";
                    emergencyStatus = IncomingPhoneNumberMobileEnumEmergencyStatusEnum.ACTIVE;
                    friendlyName = "magnam";
                    identitySid = "cumque";
                    smsApplicationSid = "facere";
                    smsFallbackMethod = CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum.POST;
                    smsFallbackUrl = "http://quizzical-synergy.biz";
                    smsMethod = CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum.PATCH;
                    smsUrl = "http://uncomfortable-wait.net";
                    statusCallback = "https://scornful-pike.name";
                    statusCallbackMethod = CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum.PATCH;
                    trunkSid = "sapiente";
                    voiceApplicationSid = "amet";
                    voiceCallerIdLookup = false;
                    voiceFallbackMethod = CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum.PATCH;
                    voiceFallbackUrl = "http://impressive-outfit.name";
                    voiceMethod = CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum.POST;
                    voiceReceiveMode = IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum.VOICE;
                    voiceUrl = "http://formal-racist.name";
                }};;
            }};            

            CreateIncomingPhoneNumberMobileResponse res = sdk.sdk.createIncomingPhoneNumberMobile(req, new CreateIncomingPhoneNumberMobileSecurity("labore", "labore") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createIncomingPhoneNumberTollFree

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberTollFreeRequest;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberTollFreeResponse;
import org.openapis.openapi.models.operations.CreateIncomingPhoneNumberTollFreeSecurity;
import org.openapis.openapi.models.shared.IncomingPhoneNumberTollFreeEnumEmergencyStatusEnum;
import org.openapis.openapi.models.shared.IncomingPhoneNumberTollFreeEnumVoiceReceiveModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateIncomingPhoneNumberTollFreeRequest req = new CreateIncomingPhoneNumberTollFreeRequest("suscipit") {{
                requestBody = new CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest("natus") {{
                    addressSid = "nobis";
                    apiVersion = "eum";
                    bundleSid = "vero";
                    emergencyAddressSid = "aspernatur";
                    emergencyStatus = IncomingPhoneNumberTollFreeEnumEmergencyStatusEnum.ACTIVE;
                    friendlyName = "magnam";
                    identitySid = "et";
                    smsApplicationSid = "excepturi";
                    smsFallbackMethod = CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnum.POST;
                    smsFallbackUrl = "https://murky-monotheism.com";
                    smsMethod = CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnum.PATCH;
                    smsUrl = "https://private-examiner.info";
                    statusCallback = "http://unlucky-cell.info";
                    statusCallbackMethod = CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnum.HEAD;
                    trunkSid = "iure";
                    voiceApplicationSid = "doloribus";
                    voiceCallerIdLookup = false;
                    voiceFallbackMethod = CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnum.DELETE;
                    voiceFallbackUrl = "http://straight-manager.net";
                    voiceMethod = CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnum.POST;
                    voiceReceiveMode = IncomingPhoneNumberTollFreeEnumVoiceReceiveModeEnum.VOICE;
                    voiceUrl = "http://vacant-flexibility.net";
                }};;
            }};            

            CreateIncomingPhoneNumberTollFreeResponse res = sdk.sdk.createIncomingPhoneNumberTollFree(req, new CreateIncomingPhoneNumberTollFreeSecurity("nihil", "repellat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMessage

Send a message from the account used to make the request

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMessageCreateMessageRequest;
import org.openapis.openapi.models.operations.CreateMessageRequest;
import org.openapis.openapi.models.operations.CreateMessageResponse;
import org.openapis.openapi.models.operations.CreateMessageSecurity;
import org.openapis.openapi.models.shared.MessageEnumAddressRetentionEnum;
import org.openapis.openapi.models.shared.MessageEnumContentRetentionEnum;
import org.openapis.openapi.models.shared.MessageEnumScheduleTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMessageRequest req = new CreateMessageRequest("quibusdam") {{
                requestBody = new CreateMessageCreateMessageRequest("sed") {{
                    addressRetention = MessageEnumAddressRetentionEnum.RETAIN;
                    applicationSid = "saepe";
                    attempt = 868126L;
                    body = "accusantium";
                    contentRetention = MessageEnumContentRetentionEnum.RETAIN;
                    contentSid = "consequuntur";
                    contentVariables = "praesentium";
                    forceDelivery = false;
                    from = "natus";
                    maxPrice = 1668.47;
                    mediaUrl = new String[]{{
                        add("https://these-subroutine.net"),
                    }};
                    messagingServiceSid = "ea";
                    persistentAction = new String[]{{
                        add("odit"),
                        add("ea"),
                        add("accusantium"),
                    }};
                    provideFeedback = false;
                    scheduleType = MessageEnumScheduleTypeEnum.FIXED;
                    sendAsMms = false;
                    sendAt = OffsetDateTime.parse("2022-01-07T08:38:36.147Z");
                    shortenUrls = false;
                    smartEncoded = false;
                    statusCallback = "https://harmonious-in-joke.info";
                    validityPeriod = 722056L;
                }};;
            }};            

            CreateMessageResponse res = sdk.sdk.createMessage(req, new CreateMessageSecurity("eaque", "pariatur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMessageFeedback

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMessageFeedbackCreateMessageFeedbackRequest;
import org.openapis.openapi.models.operations.CreateMessageFeedbackRequest;
import org.openapis.openapi.models.operations.CreateMessageFeedbackResponse;
import org.openapis.openapi.models.operations.CreateMessageFeedbackSecurity;
import org.openapis.openapi.models.shared.MessageFeedbackEnumOutcomeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMessageFeedbackRequest req = new CreateMessageFeedbackRequest("nemo", "voluptatibus") {{
                requestBody = new CreateMessageFeedbackCreateMessageFeedbackRequest() {{
                    outcome = MessageFeedbackEnumOutcomeEnum.CONFIRMED;
                }};;
            }};            

            CreateMessageFeedbackResponse res = sdk.sdk.createMessageFeedback(req, new CreateMessageFeedbackSecurity("fugiat", "amet") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountMessageMessageFeedback != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNewKey

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNewKeyCreateNewKeyRequest;
import org.openapis.openapi.models.operations.CreateNewKeyRequest;
import org.openapis.openapi.models.operations.CreateNewKeyResponse;
import org.openapis.openapi.models.operations.CreateNewKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateNewKeyRequest req = new CreateNewKeyRequest("aut") {{
                requestBody = new CreateNewKeyCreateNewKeyRequest() {{
                    friendlyName = "cumque";
                }};;
            }};            

            CreateNewKeyResponse res = sdk.sdk.createNewKey(req, new CreateNewKeySecurity("corporis", "hic") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountNewKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNewSigningKey

Create a new Signing Key for the account making the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNewSigningKeyCreateNewSigningKeyRequest;
import org.openapis.openapi.models.operations.CreateNewSigningKeyRequest;
import org.openapis.openapi.models.operations.CreateNewSigningKeyResponse;
import org.openapis.openapi.models.operations.CreateNewSigningKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateNewSigningKeyRequest req = new CreateNewSigningKeyRequest("libero") {{
                requestBody = new CreateNewSigningKeyCreateNewSigningKeyRequest() {{
                    friendlyName = "nobis";
                }};;
            }};            

            CreateNewSigningKeyResponse res = sdk.sdk.createNewSigningKey(req, new CreateNewSigningKeySecurity("dolores", "quis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountNewSigningKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createParticipant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateParticipantCreateParticipantRequest;
import org.openapis.openapi.models.operations.CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateParticipantCreateParticipantRequestWaitMethodEnum;
import org.openapis.openapi.models.operations.CreateParticipantRequest;
import org.openapis.openapi.models.operations.CreateParticipantResponse;
import org.openapis.openapi.models.operations.CreateParticipantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateParticipantRequest req = new CreateParticipantRequest("totam", "dignissimos") {{
                requestBody = new CreateParticipantCreateParticipantRequest("eaque", "quis") {{
                    amdStatusCallback = "http://definite-airspace.biz";
                    amdStatusCallbackMethod = CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum.PUT;
                    beep = "quam";
                    byoc = "dolor";
                    callReason = "vero";
                    callSidToCoach = "nostrum";
                    callerId = "hic";
                    coaching = false;
                    conferenceRecord = "recusandae";
                    conferenceRecordingStatusCallback = "https://rotten-noir.com";
                    conferenceRecordingStatusCallbackEvent = new String[]{{
                        add("consequuntur"),
                        add("blanditiis"),
                        add("error"),
                        add("eaque"),
                    }};
                    conferenceRecordingStatusCallbackMethod = CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum.PATCH;
                    conferenceStatusCallback = "https://enraged-wrench.org";
                    conferenceStatusCallbackEvent = new String[]{{
                        add("iste"),
                        add("dolorum"),
                    }};
                    conferenceStatusCallbackMethod = CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum.PATCH;
                    conferenceTrim = "pariatur";
                    earlyMedia = false;
                    endConferenceOnExit = false;
                    jitterBufferSize = "provident";
                    label = "nobis";
                    machineDetection = "libero";
                    machineDetectionSilenceTimeout = 964490L;
                    machineDetectionSpeechEndThreshold = 311945L;
                    machineDetectionSpeechThreshold = 554242L;
                    machineDetectionTimeout = 398221L;
                    maxParticipants = 212390L;
                    muted = false;
                    record = false;
                    recordingChannels = "dolorem";
                    recordingStatusCallback = "http://dental-cravat.org";
                    recordingStatusCallbackEvent = new String[]{{
                        add("cum"),
                        add("voluptate"),
                        add("dignissimos"),
                    }};
                    recordingStatusCallbackMethod = CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum.DELETE;
                    recordingTrack = "amet";
                    region = "dolorum";
                    sipAuthPassword = "numquam";
                    sipAuthUsername = "veritatis";
                    startConferenceOnEnter = false;
                    statusCallback = "http://awesome-horde.info";
                    statusCallbackEvent = new String[]{{
                        add("accusamus"),
                        add("quidem"),
                    }};
                    statusCallbackMethod = CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum.DELETE;
                    timeLimit = 377752L;
                    timeout = 617658L;
                    waitMethod = CreateParticipantCreateParticipantRequestWaitMethodEnum.GET;
                    waitUrl = "https://alert-stir-fry.com";
                }};;
            }};            

            CreateParticipantResponse res = sdk.sdk.createParticipant(req, new CreateParticipantSecurity("soluta", "dolorum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountConferenceParticipant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPayments

create an instance of payments. This will start a new payments session

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePaymentsCreatePaymentsRequest;
import org.openapis.openapi.models.operations.CreatePaymentsRequest;
import org.openapis.openapi.models.operations.CreatePaymentsResponse;
import org.openapis.openapi.models.operations.CreatePaymentsSecurity;
import org.openapis.openapi.models.shared.PaymentsEnumBankAccountTypeEnum;
import org.openapis.openapi.models.shared.PaymentsEnumPaymentMethodEnum;
import org.openapis.openapi.models.shared.PaymentsEnumTokenTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreatePaymentsRequest req = new CreatePaymentsRequest("iusto", "voluptate") {{
                requestBody = new CreatePaymentsCreatePaymentsRequest("dolorum", "https://overlooked-terminal.net") {{
                    bankAccountType = PaymentsEnumBankAccountTypeEnum.COMMERCIAL_CHECKING;
                    chargeAmount = 4694.97;
                    currency = "ipsum";
                    description = "voluptate";
                    input = "id";
                    minPostalCodeLength = 906418L;
                    parameter = "eius";
                    paymentConnector = "aspernatur";
                    paymentMethod = PaymentsEnumPaymentMethodEnum.CREDIT_CARD;
                    postalCode = false;
                    securityCode = false;
                    timeout = 229219L;
                    tokenType = PaymentsEnumTokenTypeEnum.REUSABLE;
                    validCardTypes = "accusamus";
                }};;
            }};            

            CreatePaymentsResponse res = sdk.sdk.createPayments(req, new CreatePaymentsSecurity("ad", "saepe") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountCallPayments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createQueue

Create a queue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateQueueCreateQueueRequest;
import org.openapis.openapi.models.operations.CreateQueueRequest;
import org.openapis.openapi.models.operations.CreateQueueResponse;
import org.openapis.openapi.models.operations.CreateQueueSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateQueueRequest req = new CreateQueueRequest("suscipit") {{
                requestBody = new CreateQueueCreateQueueRequest("deserunt") {{
                    maxSize = 588317L;
                }};;
            }};            

            CreateQueueResponse res = sdk.sdk.createQueue(req, new CreateQueueSecurity("minima", "repellendus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountQueue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSipAuthCallsCredentialListMapping

Create a new credential list mapping resource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest;
import org.openapis.openapi.models.operations.CreateSipAuthCallsCredentialListMappingRequest;
import org.openapis.openapi.models.operations.CreateSipAuthCallsCredentialListMappingResponse;
import org.openapis.openapi.models.operations.CreateSipAuthCallsCredentialListMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSipAuthCallsCredentialListMappingRequest req = new CreateSipAuthCallsCredentialListMappingRequest("totam", "similique") {{
                requestBody = new CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest("alias");;
            }};            

            CreateSipAuthCallsCredentialListMappingResponse res = sdk.sdk.createSipAuthCallsCredentialListMapping(req, new CreateSipAuthCallsCredentialListMappingSecurity("at", "quaerat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSipAuthCallsIpAccessControlListMapping

Create a new IP Access Control List mapping

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSipAuthCallsIpAccessControlListMappingCreateSipAuthCallsIpAccessControlListMappingRequest;
import org.openapis.openapi.models.operations.CreateSipAuthCallsIpAccessControlListMappingRequest;
import org.openapis.openapi.models.operations.CreateSipAuthCallsIpAccessControlListMappingResponse;
import org.openapis.openapi.models.operations.CreateSipAuthCallsIpAccessControlListMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSipAuthCallsIpAccessControlListMappingRequest req = new CreateSipAuthCallsIpAccessControlListMappingRequest("tempora", "vel") {{
                requestBody = new CreateSipAuthCallsIpAccessControlListMappingCreateSipAuthCallsIpAccessControlListMappingRequest("quod");;
            }};            

            CreateSipAuthCallsIpAccessControlListMappingResponse res = sdk.sdk.createSipAuthCallsIpAccessControlListMapping(req, new CreateSipAuthCallsIpAccessControlListMappingSecurity("officiis", "qui") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSipAuthRegistrationsCredentialListMapping

Create a new credential list mapping resource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest;
import org.openapis.openapi.models.operations.CreateSipAuthRegistrationsCredentialListMappingRequest;
import org.openapis.openapi.models.operations.CreateSipAuthRegistrationsCredentialListMappingResponse;
import org.openapis.openapi.models.operations.CreateSipAuthRegistrationsCredentialListMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSipAuthRegistrationsCredentialListMappingRequest req = new CreateSipAuthRegistrationsCredentialListMappingRequest("dolorum", "a") {{
                requestBody = new CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest("esse");;
            }};            

            CreateSipAuthRegistrationsCredentialListMappingResponse res = sdk.sdk.createSipAuthRegistrationsCredentialListMapping(req, new CreateSipAuthRegistrationsCredentialListMappingSecurity("harum", "iusto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSipCredential

Create a new credential resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSipCredentialCreateSipCredentialRequest;
import org.openapis.openapi.models.operations.CreateSipCredentialRequest;
import org.openapis.openapi.models.operations.CreateSipCredentialResponse;
import org.openapis.openapi.models.operations.CreateSipCredentialSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSipCredentialRequest req = new CreateSipCredentialRequest("ipsum", "quisquam") {{
                requestBody = new CreateSipCredentialCreateSipCredentialRequest("tenetur", "amet");;
            }};            

            CreateSipCredentialResponse res = sdk.sdk.createSipCredential(req, new CreateSipCredentialSecurity("tempore", "accusamus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipCredentialListSipCredential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSipCredentialList

Create a Credential List

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSipCredentialListCreateSipCredentialListRequest;
import org.openapis.openapi.models.operations.CreateSipCredentialListRequest;
import org.openapis.openapi.models.operations.CreateSipCredentialListResponse;
import org.openapis.openapi.models.operations.CreateSipCredentialListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSipCredentialListRequest req = new CreateSipCredentialListRequest("numquam") {{
                requestBody = new CreateSipCredentialListCreateSipCredentialListRequest("enim");;
            }};            

            CreateSipCredentialListResponse res = sdk.sdk.createSipCredentialList(req, new CreateSipCredentialListSecurity("dolorem", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipCredentialList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSipCredentialListMapping

Create a CredentialListMapping resource for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSipCredentialListMappingCreateSipCredentialListMappingRequest;
import org.openapis.openapi.models.operations.CreateSipCredentialListMappingRequest;
import org.openapis.openapi.models.operations.CreateSipCredentialListMappingResponse;
import org.openapis.openapi.models.operations.CreateSipCredentialListMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSipCredentialListMappingRequest req = new CreateSipCredentialListMappingRequest("totam", "nihil") {{
                requestBody = new CreateSipCredentialListMappingCreateSipCredentialListMappingRequest("sit");;
            }};            

            CreateSipCredentialListMappingResponse res = sdk.sdk.createSipCredentialListMapping(req, new CreateSipCredentialListMappingSecurity("expedita", "neque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipDomainSipCredentialListMapping != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSipDomain

Create a new Domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSipDomainCreateSipDomainRequest;
import org.openapis.openapi.models.operations.CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateSipDomainCreateSipDomainRequestVoiceMethodEnum;
import org.openapis.openapi.models.operations.CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateSipDomainRequest;
import org.openapis.openapi.models.operations.CreateSipDomainResponse;
import org.openapis.openapi.models.operations.CreateSipDomainSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSipDomainRequest req = new CreateSipDomainRequest("sed") {{
                requestBody = new CreateSipDomainCreateSipDomainRequest("vel") {{
                    byocTrunkSid = "libero";
                    emergencyCallerSid = "voluptas";
                    emergencyCallingEnabled = false;
                    friendlyName = "deserunt";
                    secure = false;
                    sipRegistration = false;
                    voiceFallbackMethod = CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnum.POST;
                    voiceFallbackUrl = "http://feline-communicant.name";
                    voiceMethod = CreateSipDomainCreateSipDomainRequestVoiceMethodEnum.PUT;
                    voiceStatusCallbackMethod = CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnum.DELETE;
                    voiceStatusCallbackUrl = "https://circular-polarisation.name";
                    voiceUrl = "http://compassionate-cob.net";
                }};;
            }};            

            CreateSipDomainResponse res = sdk.sdk.createSipDomain(req, new CreateSipDomainSecurity("facilis", "aliquid") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipDomain != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSipIpAccessControlList

Create a new IpAccessControlList resource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSipIpAccessControlListCreateSipIpAccessControlListRequest;
import org.openapis.openapi.models.operations.CreateSipIpAccessControlListRequest;
import org.openapis.openapi.models.operations.CreateSipIpAccessControlListResponse;
import org.openapis.openapi.models.operations.CreateSipIpAccessControlListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSipIpAccessControlListRequest req = new CreateSipIpAccessControlListRequest("quam") {{
                requestBody = new CreateSipIpAccessControlListCreateSipIpAccessControlListRequest("molestias");;
            }};            

            CreateSipIpAccessControlListResponse res = sdk.sdk.createSipIpAccessControlList(req, new CreateSipIpAccessControlListSecurity("temporibus", "qui") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipIpAccessControlList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSipIpAccessControlListMapping

Create a new IpAccessControlListMapping resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest;
import org.openapis.openapi.models.operations.CreateSipIpAccessControlListMappingRequest;
import org.openapis.openapi.models.operations.CreateSipIpAccessControlListMappingResponse;
import org.openapis.openapi.models.operations.CreateSipIpAccessControlListMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSipIpAccessControlListMappingRequest req = new CreateSipIpAccessControlListMappingRequest("neque", "fugit") {{
                requestBody = new CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest("magni");;
            }};            

            CreateSipIpAccessControlListMappingResponse res = sdk.sdk.createSipIpAccessControlListMapping(req, new CreateSipIpAccessControlListMappingSecurity("odio", "sunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipDomainSipIpAccessControlListMapping != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSipIpAddress

Create a new IpAddress resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSipIpAddressCreateSipIpAddressRequest;
import org.openapis.openapi.models.operations.CreateSipIpAddressRequest;
import org.openapis.openapi.models.operations.CreateSipIpAddressResponse;
import org.openapis.openapi.models.operations.CreateSipIpAddressSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSipIpAddressRequest req = new CreateSipIpAddressRequest("ullam", "nam") {{
                requestBody = new CreateSipIpAddressCreateSipIpAddressRequest("hic", "voluptatem") {{
                    cidrPrefixLength = 765326L;
                }};;
            }};            

            CreateSipIpAddressResponse res = sdk.sdk.createSipIpAddress(req, new CreateSipIpAddressSecurity("soluta", "nobis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipIpAccessControlListSipIpAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSiprec

Create a Siprec

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSiprecCreateSiprecRequest;
import org.openapis.openapi.models.operations.CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateSiprecRequest;
import org.openapis.openapi.models.operations.CreateSiprecResponse;
import org.openapis.openapi.models.operations.CreateSiprecSecurity;
import org.openapis.openapi.models.shared.SiprecEnumTrackEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSiprecRequest req = new CreateSiprecRequest("et", "saepe") {{
                requestBody = new CreateSiprecCreateSiprecRequest() {{
                    connectorName = "ipsum";
                    name = "Gayle Lueilwitz";
                    parameter1Name = "aperiam";
                    parameter1Value = "delectus";
                    parameter10Name = "dolorem";
                    parameter10Value = "dolore";
                    parameter11Name = "labore";
                    parameter11Value = "adipisci";
                    parameter12Name = "dolorum";
                    parameter12Value = "architecto";
                    parameter13Name = "quae";
                    parameter13Value = "aut";
                    parameter14Name = "quas";
                    parameter14Value = "itaque";
                    parameter15Name = "consequatur";
                    parameter15Value = "est";
                    parameter16Name = "repellendus";
                    parameter16Value = "porro";
                    parameter17Name = "doloribus";
                    parameter17Value = "ut";
                    parameter18Name = "facilis";
                    parameter18Value = "cupiditate";
                    parameter19Name = "qui";
                    parameter19Value = "quae";
                    parameter2Name = "laudantium";
                    parameter2Value = "odio";
                    parameter20Name = "occaecati";
                    parameter20Value = "voluptatibus";
                    parameter21Name = "quisquam";
                    parameter21Value = "vero";
                    parameter22Name = "omnis";
                    parameter22Value = "quis";
                    parameter23Name = "ipsum";
                    parameter23Value = "delectus";
                    parameter24Name = "voluptate";
                    parameter24Value = "consectetur";
                    parameter25Name = "vero";
                    parameter25Value = "tenetur";
                    parameter26Name = "dignissimos";
                    parameter26Value = "hic";
                    parameter27Name = "distinctio";
                    parameter27Value = "quod";
                    parameter28Name = "odio";
                    parameter28Value = "similique";
                    parameter29Name = "facilis";
                    parameter29Value = "vero";
                    parameter3Name = "ducimus";
                    parameter3Value = "dolore";
                    parameter30Name = "quibusdam";
                    parameter30Value = "illum";
                    parameter31Name = "sequi";
                    parameter31Value = "natus";
                    parameter32Name = "impedit";
                    parameter32Value = "aut";
                    parameter33Name = "voluptatibus";
                    parameter33Value = "exercitationem";
                    parameter34Name = "nulla";
                    parameter34Value = "fugit";
                    parameter35Name = "porro";
                    parameter35Value = "maiores";
                    parameter36Name = "doloribus";
                    parameter36Value = "iusto";
                    parameter37Name = "eligendi";
                    parameter37Value = "ducimus";
                    parameter38Name = "alias";
                    parameter38Value = "officia";
                    parameter39Name = "tempora";
                    parameter39Value = "ipsam";
                    parameter4Name = "ea";
                    parameter4Value = "aspernatur";
                    parameter40Name = "vel";
                    parameter40Value = "possimus";
                    parameter41Name = "magnam";
                    parameter41Value = "ratione";
                    parameter42Name = "ex";
                    parameter42Value = "laudantium";
                    parameter43Name = "dicta";
                    parameter43Value = "dolor";
                    parameter44Name = "maiores";
                    parameter44Value = "quasi";
                    parameter45Name = "ex";
                    parameter45Value = "nulla";
                    parameter46Name = "excepturi";
                    parameter46Value = "voluptatibus";
                    parameter47Name = "nostrum";
                    parameter47Value = "sapiente";
                    parameter48Name = "quisquam";
                    parameter48Value = "saepe";
                    parameter49Name = "ea";
                    parameter49Value = "impedit";
                    parameter5Name = "corporis";
                    parameter5Value = "veniam";
                    parameter50Name = "aliquid";
                    parameter50Value = "inventore";
                    parameter51Name = "magnam";
                    parameter51Value = "ea";
                    parameter52Name = "quo";
                    parameter52Value = "consectetur";
                    parameter53Name = "recusandae";
                    parameter53Value = "aspernatur";
                    parameter54Name = "minima";
                    parameter54Value = "eaque";
                    parameter55Name = "a";
                    parameter55Value = "libero";
                    parameter56Name = "aut";
                    parameter56Value = "aut";
                    parameter57Name = "deleniti";
                    parameter57Value = "impedit";
                    parameter58Name = "aliquam";
                    parameter58Value = "fugit";
                    parameter59Name = "accusamus";
                    parameter59Value = "inventore";
                    parameter6Name = "non";
                    parameter6Value = "et";
                    parameter60Name = "dolorum";
                    parameter60Value = "laborum";
                    parameter61Name = "placeat";
                    parameter61Value = "velit";
                    parameter62Name = "eum";
                    parameter62Value = "autem";
                    parameter63Name = "nobis";
                    parameter63Value = "quas";
                    parameter64Name = "assumenda";
                    parameter64Value = "nulla";
                    parameter65Name = "voluptas";
                    parameter65Value = "libero";
                    parameter66Name = "quasi";
                    parameter66Value = "tempora";
                    parameter67Name = "numquam";
                    parameter67Value = "explicabo";
                    parameter68Name = "provident";
                    parameter68Value = "ipsa";
                    parameter69Name = "molestiae";
                    parameter69Value = "magnam";
                    parameter7Name = "odio";
                    parameter7Value = "eius";
                    parameter70Name = "esse";
                    parameter70Value = "esse";
                    parameter71Name = "rem";
                    parameter71Value = "fuga";
                    parameter72Name = "reprehenderit";
                    parameter72Value = "quidem";
                    parameter73Name = "fugiat";
                    parameter73Value = "ut";
                    parameter74Name = "eum";
                    parameter74Value = "suscipit";
                    parameter75Name = "assumenda";
                    parameter75Value = "eos";
                    parameter76Name = "praesentium";
                    parameter76Value = "quisquam";
                    parameter77Name = "veritatis";
                    parameter77Value = "ipsa";
                    parameter78Name = "id";
                    parameter78Value = "quidem";
                    parameter79Name = "neque";
                    parameter79Value = "quo";
                    parameter8Name = "illum";
                    parameter8Value = "quo";
                    parameter80Name = "fuga";
                    parameter80Value = "eius";
                    parameter81Name = "eos";
                    parameter81Value = "voluptas";
                    parameter82Name = "ab";
                    parameter82Value = "cupiditate";
                    parameter83Name = "consequatur";
                    parameter83Value = "tempora";
                    parameter84Name = "debitis";
                    parameter84Value = "ipsam";
                    parameter85Name = "aspernatur";
                    parameter85Value = "sequi";
                    parameter86Name = "quo";
                    parameter86Value = "esse";
                    parameter87Name = "recusandae";
                    parameter87Value = "aperiam";
                    parameter88Name = "distinctio";
                    parameter88Value = "quod";
                    parameter89Name = "dignissimos";
                    parameter89Value = "inventore";
                    parameter9Name = "nihil";
                    parameter9Value = "totam";
                    parameter90Name = "accusamus";
                    parameter90Value = "aliquam";
                    parameter91Name = "odio";
                    parameter91Value = "occaecati";
                    parameter92Name = "commodi";
                    parameter92Value = "sapiente";
                    parameter93Name = "dolores";
                    parameter93Value = "deserunt";
                    parameter94Name = "molestiae";
                    parameter94Value = "accusantium";
                    parameter95Name = "porro";
                    parameter95Value = "eum";
                    parameter96Name = "quas";
                    parameter96Value = "praesentium";
                    parameter97Name = "consequuntur";
                    parameter97Value = "deleniti";
                    parameter98Name = "fugit";
                    parameter98Value = "fuga";
                    parameter99Name = "mollitia";
                    parameter99Value = "incidunt";
                    statusCallback = "https://colorless-experimentation.info";
                    statusCallbackMethod = CreateSiprecCreateSiprecRequestStatusCallbackMethodEnum.HEAD;
                    track = SiprecEnumTrackEnum.BOTH_TRACKS;
                }};;
            }};            

            CreateSiprecResponse res = sdk.sdk.createSiprec(req, new CreateSiprecSecurity("consequuntur", "ratione") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountCallSiprec != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createStream

Create a Stream

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStreamCreateStreamRequest;
import org.openapis.openapi.models.operations.CreateStreamCreateStreamRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateStreamRequest;
import org.openapis.openapi.models.operations.CreateStreamResponse;
import org.openapis.openapi.models.operations.CreateStreamSecurity;
import org.openapis.openapi.models.shared.StreamEnumTrackEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateStreamRequest req = new CreateStreamRequest("explicabo", "saepe") {{
                requestBody = new CreateStreamCreateStreamRequest("https://monumental-bolero.info") {{
                    name = "Sheldon Boehm";
                    parameter1Name = "nam";
                    parameter1Value = "vero";
                    parameter10Name = "aliquid";
                    parameter10Value = "quasi";
                    parameter11Name = "saepe";
                    parameter11Value = "vel";
                    parameter12Name = "harum";
                    parameter12Value = "molestiae";
                    parameter13Name = "rerum";
                    parameter13Value = "occaecati";
                    parameter14Name = "minima";
                    parameter14Value = "distinctio";
                    parameter15Name = "eligendi";
                    parameter15Value = "sit";
                    parameter16Name = "culpa";
                    parameter16Value = "tempore";
                    parameter17Name = "adipisci";
                    parameter17Value = "cumque";
                    parameter18Name = "consequuntur";
                    parameter18Value = "consequatur";
                    parameter19Name = "minus";
                    parameter19Value = "quaerat";
                    parameter2Name = "sapiente";
                    parameter2Value = "consectetur";
                    parameter20Name = "esse";
                    parameter20Value = "blanditiis";
                    parameter21Name = "provident";
                    parameter21Value = "a";
                    parameter22Name = "nulla";
                    parameter22Value = "quas";
                    parameter23Name = "esse";
                    parameter23Value = "quasi";
                    parameter24Name = "a";
                    parameter24Value = "error";
                    parameter25Name = "sint";
                    parameter25Value = "pariatur";
                    parameter26Name = "possimus";
                    parameter26Value = "quia";
                    parameter27Name = "eveniet";
                    parameter27Value = "asperiores";
                    parameter28Name = "facere";
                    parameter28Value = "veritatis";
                    parameter29Name = "consequuntur";
                    parameter29Value = "quasi";
                    parameter3Name = "similique";
                    parameter3Value = "culpa";
                    parameter30Name = "aliquid";
                    parameter30Value = "tenetur";
                    parameter31Name = "quae";
                    parameter31Value = "earum";
                    parameter32Name = "vel";
                    parameter32Value = "in";
                    parameter33Name = "eius";
                    parameter33Value = "libero";
                    parameter34Name = "illum";
                    parameter34Value = "soluta";
                    parameter35Name = "accusantium";
                    parameter35Value = "aliquam";
                    parameter36Name = "sapiente";
                    parameter36Value = "dicta";
                    parameter37Name = "ullam";
                    parameter37Value = "reprehenderit";
                    parameter38Name = "ullam";
                    parameter38Value = "nisi";
                    parameter39Name = "aut";
                    parameter39Value = "voluptatum";
                    parameter4Name = "qui";
                    parameter4Value = "quibusdam";
                    parameter40Name = "ex";
                    parameter40Value = "deleniti";
                    parameter41Name = "itaque";
                    parameter41Value = "dolorum";
                    parameter42Name = "architecto";
                    parameter42Value = "omnis";
                    parameter43Name = "tenetur";
                    parameter43Value = "quasi";
                    parameter44Name = "at";
                    parameter44Value = "et";
                    parameter45Name = "voluptate";
                    parameter45Value = "ipsa";
                    parameter46Name = "minima";
                    parameter46Value = "veritatis";
                    parameter47Name = "consectetur";
                    parameter47Value = "adipisci";
                    parameter48Name = "iste";
                    parameter48Value = "temporibus";
                    parameter49Name = "accusantium";
                    parameter49Value = "rem";
                    parameter5Name = "aut";
                    parameter5Value = "laudantium";
                    parameter50Name = "eum";
                    parameter50Value = "mollitia";
                    parameter51Name = "ab";
                    parameter51Value = "corrupti";
                    parameter52Name = "non";
                    parameter52Value = "voluptatem";
                    parameter53Name = "dolor";
                    parameter53Value = "occaecati";
                    parameter54Name = "numquam";
                    parameter54Value = "impedit";
                    parameter55Name = "explicabo";
                    parameter55Value = "voluptas";
                    parameter56Name = "aut";
                    parameter56Value = "dignissimos";
                    parameter57Name = "dicta";
                    parameter57Value = "maiores";
                    parameter58Name = "natus";
                    parameter58Value = "velit";
                    parameter59Name = "voluptatibus";
                    parameter59Value = "voluptas";
                    parameter6Name = "asperiores";
                    parameter6Value = "aperiam";
                    parameter60Name = "ea";
                    parameter60Value = "quaerat";
                    parameter61Name = "consequuntur";
                    parameter61Value = "repellendus";
                    parameter62Name = "officia";
                    parameter62Value = "maxime";
                    parameter63Name = "dignissimos";
                    parameter63Value = "officia";
                    parameter64Name = "asperiores";
                    parameter64Value = "nemo";
                    parameter65Name = "quae";
                    parameter65Value = "quaerat";
                    parameter66Name = "porro";
                    parameter66Value = "quod";
                    parameter67Name = "labore";
                    parameter67Value = "ab";
                    parameter68Name = "adipisci";
                    parameter68Value = "fuga";
                    parameter69Name = "id";
                    parameter69Value = "suscipit";
                    parameter7Name = "velit";
                    parameter7Value = "culpa";
                    parameter70Name = "est";
                    parameter70Value = "recusandae";
                    parameter71Name = "totam";
                    parameter71Value = "fugiat";
                    parameter72Name = "vel";
                    parameter72Value = "ducimus";
                    parameter73Name = "quos";
                    parameter73Value = "vel";
                    parameter74Name = "labore";
                    parameter74Value = "possimus";
                    parameter75Name = "facilis";
                    parameter75Value = "cum";
                    parameter76Name = "commodi";
                    parameter76Value = "in";
                    parameter77Name = "corporis";
                    parameter77Value = "reiciendis";
                    parameter78Name = "assumenda";
                    parameter78Value = "nemo";
                    parameter79Name = "recusandae";
                    parameter79Value = "aliquid";
                    parameter8Name = "aperiam";
                    parameter8Value = "cum";
                    parameter80Name = "consectetur";
                    parameter80Value = "in";
                    parameter81Name = "exercitationem";
                    parameter81Value = "earum";
                    parameter82Name = "facere";
                    parameter82Value = "numquam";
                    parameter83Name = "doloribus";
                    parameter83Value = "suscipit";
                    parameter84Name = "reiciendis";
                    parameter84Value = "quidem";
                    parameter85Name = "saepe";
                    parameter85Value = "necessitatibus";
                    parameter86Name = "dolore";
                    parameter86Value = "sunt";
                    parameter87Name = "asperiores";
                    parameter87Value = "adipisci";
                    parameter88Name = "non";
                    parameter88Value = "amet";
                    parameter89Name = "beatae";
                    parameter89Value = "dignissimos";
                    parameter9Name = "a";
                    parameter9Value = "debitis";
                    parameter90Name = "consectetur";
                    parameter90Value = "corporis";
                    parameter91Name = "harum";
                    parameter91Value = "laboriosam";
                    parameter92Name = "ipsa";
                    parameter92Value = "voluptates";
                    parameter93Name = "libero";
                    parameter93Value = "vitae";
                    parameter94Name = "accusamus";
                    parameter94Value = "similique";
                    parameter95Name = "tempora";
                    parameter95Value = "aspernatur";
                    parameter96Name = "voluptas";
                    parameter96Value = "voluptas";
                    parameter97Name = "voluptas";
                    parameter97Value = "minima";
                    parameter98Name = "nobis";
                    parameter98Value = "dolorum";
                    parameter99Name = "adipisci";
                    parameter99Value = "minus";
                    statusCallback = "http://lovely-illegal.biz";
                    statusCallbackMethod = CreateStreamCreateStreamRequestStatusCallbackMethodEnum.GET;
                    track = StreamEnumTrackEnum.BOTH_TRACKS;
                }};;
            }};            

            CreateStreamResponse res = sdk.sdk.createStream(req, new CreateStreamSecurity("temporibus", "ullam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountCallStream != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createToken

Create a new token for ICE servers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTokenCreateTokenRequest;
import org.openapis.openapi.models.operations.CreateTokenRequest;
import org.openapis.openapi.models.operations.CreateTokenResponse;
import org.openapis.openapi.models.operations.CreateTokenSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateTokenRequest req = new CreateTokenRequest("adipisci") {{
                requestBody = new CreateTokenCreateTokenRequest() {{
                    ttl = 738391L;
                }};;
            }};            

            CreateTokenResponse res = sdk.sdk.createToken(req, new CreateTokenSecurity("blanditiis", "quas") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUsageTrigger

Create a new UsageTrigger

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUsageTriggerCreateUsageTriggerRequest;
import org.openapis.openapi.models.operations.CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateUsageTriggerRequest;
import org.openapis.openapi.models.operations.CreateUsageTriggerResponse;
import org.openapis.openapi.models.operations.CreateUsageTriggerSecurity;
import org.openapis.openapi.models.shared.UsageTriggerEnumRecurringEnum;
import org.openapis.openapi.models.shared.UsageTriggerEnumTriggerFieldEnum;
import org.openapis.openapi.models.shared.UsageTriggerEnumUsageCategoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateUsageTriggerRequest req = new CreateUsageTriggerRequest("hic") {{
                requestBody = new CreateUsageTriggerCreateUsageTriggerRequest("http://polite-maybe.org", "totam", UsageTriggerEnumUsageCategoryEnum.WIRELESS_USAGE_DATA_INTERNATIONAL_ROAMING_CANADA) {{
                    callbackMethod = CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnum.POST;
                    friendlyName = "nobis";
                    recurring = UsageTriggerEnumRecurringEnum.DAILY;
                    triggerBy = UsageTriggerEnumTriggerFieldEnum.PRICE;
                }};;
            }};            

            CreateUsageTriggerResponse res = sdk.sdk.createUsageTrigger(req, new CreateUsageTriggerSecurity("sed", "reiciendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountUsageUsageTrigger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUserDefinedMessage

Create a new User Defined Message for the given Call SID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUserDefinedMessageCreateUserDefinedMessageRequest;
import org.openapis.openapi.models.operations.CreateUserDefinedMessageRequest;
import org.openapis.openapi.models.operations.CreateUserDefinedMessageResponse;
import org.openapis.openapi.models.operations.CreateUserDefinedMessageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateUserDefinedMessageRequest req = new CreateUserDefinedMessageRequest("explicabo", "asperiores") {{
                requestBody = new CreateUserDefinedMessageCreateUserDefinedMessageRequest("facilis") {{
                    idempotencyKey = "voluptate";
                }};;
            }};            

            CreateUserDefinedMessageResponse res = sdk.sdk.createUserDefinedMessage(req, new CreateUserDefinedMessageSecurity("expedita", "ab") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountCallUserDefinedMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUserDefinedMessageSubscription

Subscribe to User Defined Messages for a given Call SID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest;
import org.openapis.openapi.models.operations.CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum;
import org.openapis.openapi.models.operations.CreateUserDefinedMessageSubscriptionRequest;
import org.openapis.openapi.models.operations.CreateUserDefinedMessageSubscriptionResponse;
import org.openapis.openapi.models.operations.CreateUserDefinedMessageSubscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateUserDefinedMessageSubscriptionRequest req = new CreateUserDefinedMessageSubscriptionRequest("iste", "dolore") {{
                requestBody = new CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest("https://criminal-id.info") {{
                    idempotencyKey = "quidem";
                    method = CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum.HEAD;
                }};;
            }};            

            CreateUserDefinedMessageSubscriptionResponse res = sdk.sdk.createUserDefinedMessageSubscription(req, new CreateUserDefinedMessageSubscriptionSecurity("voluptas", "unde") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountCallUserDefinedMessageSubscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createValidationRequest

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateValidationRequestCreateValidationRequestRequest;
import org.openapis.openapi.models.operations.CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateValidationRequestRequest;
import org.openapis.openapi.models.operations.CreateValidationRequestResponse;
import org.openapis.openapi.models.operations.CreateValidationRequestSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateValidationRequestRequest req = new CreateValidationRequestRequest("architecto") {{
                requestBody = new CreateValidationRequestCreateValidationRequestRequest("suscipit") {{
                    callDelay = 960257L;
                    extension = "debitis";
                    friendlyName = "illo";
                    statusCallback = "https://aggressive-mate.org";
                    statusCallbackMethod = CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnum.GET;
                }};;
            }};            

            CreateValidationRequestResponse res = sdk.sdk.createValidationRequest(req, new CreateValidationRequestSecurity("sed", "provident") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountValidationRequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAddress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAddressRequest;
import org.openapis.openapi.models.operations.DeleteAddressResponse;
import org.openapis.openapi.models.operations.DeleteAddressSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAddressRequest req = new DeleteAddressRequest("eius", "necessitatibus");            

            DeleteAddressResponse res = sdk.sdk.deleteAddress(req, new DeleteAddressSecurity("ipsum", "ea") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApplication

Delete the application by the specified application sid

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApplicationRequest;
import org.openapis.openapi.models.operations.DeleteApplicationResponse;
import org.openapis.openapi.models.operations.DeleteApplicationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApplicationRequest req = new DeleteApplicationRequest("occaecati", "quos");            

            DeleteApplicationResponse res = sdk.sdk.deleteApplication(req, new DeleteApplicationSecurity("voluptatibus", "tempora") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCall

Delete a Call record from your account. Once the record is deleted, it will no longer appear in the API and Account Portal logs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCallRequest;
import org.openapis.openapi.models.operations.DeleteCallResponse;
import org.openapis.openapi.models.operations.DeleteCallSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCallRequest req = new DeleteCallRequest("tempora", "voluptate");            

            DeleteCallResponse res = sdk.sdk.deleteCall(req, new DeleteCallSecurity("reiciendis", "ex") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCallFeedbackSummary

Delete a FeedbackSummary resource from a call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCallFeedbackSummaryRequest;
import org.openapis.openapi.models.operations.DeleteCallFeedbackSummaryResponse;
import org.openapis.openapi.models.operations.DeleteCallFeedbackSummarySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCallFeedbackSummaryRequest req = new DeleteCallFeedbackSummaryRequest("sit", "non");            

            DeleteCallFeedbackSummaryResponse res = sdk.sdk.deleteCallFeedbackSummary(req, new DeleteCallFeedbackSummarySecurity("officiis", "praesentium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCallRecording

Delete a recording from your account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCallRecordingRequest;
import org.openapis.openapi.models.operations.DeleteCallRecordingResponse;
import org.openapis.openapi.models.operations.DeleteCallRecordingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCallRecordingRequest req = new DeleteCallRecordingRequest("facilis", "quaerat", "incidunt");            

            DeleteCallRecordingResponse res = sdk.sdk.deleteCallRecording(req, new DeleteCallRecordingSecurity("ipsam", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConferenceRecording

Delete a recording from your account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConferenceRecordingRequest;
import org.openapis.openapi.models.operations.DeleteConferenceRecordingResponse;
import org.openapis.openapi.models.operations.DeleteConferenceRecordingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteConferenceRecordingRequest req = new DeleteConferenceRecordingRequest("rem", "sit", "nobis");            

            DeleteConferenceRecordingResponse res = sdk.sdk.deleteConferenceRecording(req, new DeleteConferenceRecordingSecurity("error", "veniam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConnectApp

Delete an instance of a connect-app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConnectAppRequest;
import org.openapis.openapi.models.operations.DeleteConnectAppResponse;
import org.openapis.openapi.models.operations.DeleteConnectAppSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteConnectAppRequest req = new DeleteConnectAppRequest("minima", "recusandae");            

            DeleteConnectAppResponse res = sdk.sdk.deleteConnectApp(req, new DeleteConnectAppSecurity("reiciendis", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteIncomingPhoneNumber

Delete a phone-numbers belonging to the account used to make the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIncomingPhoneNumberRequest;
import org.openapis.openapi.models.operations.DeleteIncomingPhoneNumberResponse;
import org.openapis.openapi.models.operations.DeleteIncomingPhoneNumberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteIncomingPhoneNumberRequest req = new DeleteIncomingPhoneNumberRequest("magni", "aperiam");            

            DeleteIncomingPhoneNumberResponse res = sdk.sdk.deleteIncomingPhoneNumber(req, new DeleteIncomingPhoneNumberSecurity("saepe", "numquam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteIncomingPhoneNumberAssignedAddOn

Remove the assignment of an Add-on installation from the Number specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIncomingPhoneNumberAssignedAddOnRequest;
import org.openapis.openapi.models.operations.DeleteIncomingPhoneNumberAssignedAddOnResponse;
import org.openapis.openapi.models.operations.DeleteIncomingPhoneNumberAssignedAddOnSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteIncomingPhoneNumberAssignedAddOnRequest req = new DeleteIncomingPhoneNumberAssignedAddOnRequest("veniam", "in", "officiis");            

            DeleteIncomingPhoneNumberAssignedAddOnResponse res = sdk.sdk.deleteIncomingPhoneNumberAssignedAddOn(req, new DeleteIncomingPhoneNumberAssignedAddOnSecurity("beatae", "laudantium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteKey

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteKeyRequest;
import org.openapis.openapi.models.operations.DeleteKeyResponse;
import org.openapis.openapi.models.operations.DeleteKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteKeyRequest req = new DeleteKeyRequest("exercitationem", "praesentium");            

            DeleteKeyResponse res = sdk.sdk.deleteKey(req, new DeleteKeySecurity("cum", "laboriosam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMedia

Delete media from your account. Once delete, you will no longer be billed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMediaRequest;
import org.openapis.openapi.models.operations.DeleteMediaResponse;
import org.openapis.openapi.models.operations.DeleteMediaSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMediaRequest req = new DeleteMediaRequest("dolorum", "voluptatum", "error");            

            DeleteMediaResponse res = sdk.sdk.deleteMedia(req, new DeleteMediaSecurity("hic", "expedita") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMessage

Deletes a message record from your account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMessageRequest;
import org.openapis.openapi.models.operations.DeleteMessageResponse;
import org.openapis.openapi.models.operations.DeleteMessageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMessageRequest req = new DeleteMessageRequest("debitis", "neque");            

            DeleteMessageResponse res = sdk.sdk.deleteMessage(req, new DeleteMessageSecurity("dolorum", "nostrum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOutgoingCallerId

Delete the caller-id specified from the account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOutgoingCallerIdRequest;
import org.openapis.openapi.models.operations.DeleteOutgoingCallerIdResponse;
import org.openapis.openapi.models.operations.DeleteOutgoingCallerIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteOutgoingCallerIdRequest req = new DeleteOutgoingCallerIdRequest("officia", "dolorum");            

            DeleteOutgoingCallerIdResponse res = sdk.sdk.deleteOutgoingCallerId(req, new DeleteOutgoingCallerIdSecurity("corrupti", "accusamus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteParticipant

Kick a participant from a given conference

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteParticipantRequest;
import org.openapis.openapi.models.operations.DeleteParticipantResponse;
import org.openapis.openapi.models.operations.DeleteParticipantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteParticipantRequest req = new DeleteParticipantRequest("tempora", "atque", "fugit");            

            DeleteParticipantResponse res = sdk.sdk.deleteParticipant(req, new DeleteParticipantSecurity("ut", "fugiat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteQueue

Remove an empty queue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteQueueRequest;
import org.openapis.openapi.models.operations.DeleteQueueResponse;
import org.openapis.openapi.models.operations.DeleteQueueSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteQueueRequest req = new DeleteQueueRequest("voluptatem", "culpa");            

            DeleteQueueResponse res = sdk.sdk.deleteQueue(req, new DeleteQueueSecurity("expedita", "magnam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRecording

Delete a recording from your account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRecordingRequest;
import org.openapis.openapi.models.operations.DeleteRecordingResponse;
import org.openapis.openapi.models.operations.DeleteRecordingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRecordingRequest req = new DeleteRecordingRequest("consequatur", "esse");            

            DeleteRecordingResponse res = sdk.sdk.deleteRecording(req, new DeleteRecordingSecurity("ipsam", "sit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRecordingAddOnResult

Delete a result and purge all associated Payloads

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRecordingAddOnResultRequest;
import org.openapis.openapi.models.operations.DeleteRecordingAddOnResultResponse;
import org.openapis.openapi.models.operations.DeleteRecordingAddOnResultSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRecordingAddOnResultRequest req = new DeleteRecordingAddOnResultRequest("voluptatum", "quas", "repudiandae");            

            DeleteRecordingAddOnResultResponse res = sdk.sdk.deleteRecordingAddOnResult(req, new DeleteRecordingAddOnResultSecurity("corporis", "et") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRecordingAddOnResultPayload

Delete a payload from the result along with all associated Data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRecordingAddOnResultPayloadRequest;
import org.openapis.openapi.models.operations.DeleteRecordingAddOnResultPayloadResponse;
import org.openapis.openapi.models.operations.DeleteRecordingAddOnResultPayloadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRecordingAddOnResultPayloadRequest req = new DeleteRecordingAddOnResultPayloadRequest("blanditiis", "ex", "sed", "sit");            

            DeleteRecordingAddOnResultPayloadResponse res = sdk.sdk.deleteRecordingAddOnResultPayload(req, new DeleteRecordingAddOnResultPayloadSecurity("vel", "nostrum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRecordingTranscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRecordingTranscriptionRequest;
import org.openapis.openapi.models.operations.DeleteRecordingTranscriptionResponse;
import org.openapis.openapi.models.operations.DeleteRecordingTranscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRecordingTranscriptionRequest req = new DeleteRecordingTranscriptionRequest("saepe", "error", "consequatur");            

            DeleteRecordingTranscriptionResponse res = sdk.sdk.deleteRecordingTranscription(req, new DeleteRecordingTranscriptionSecurity("incidunt", "reiciendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSigningKey

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSigningKeyRequest;
import org.openapis.openapi.models.operations.DeleteSigningKeyResponse;
import org.openapis.openapi.models.operations.DeleteSigningKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSigningKeyRequest req = new DeleteSigningKeyRequest("dolorem", "harum");            

            DeleteSigningKeyResponse res = sdk.sdk.deleteSigningKey(req, new DeleteSigningKeySecurity("dicta", "architecto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSipAuthCallsCredentialListMapping

Delete a credential list mapping from the requested domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSipAuthCallsCredentialListMappingRequest;
import org.openapis.openapi.models.operations.DeleteSipAuthCallsCredentialListMappingResponse;
import org.openapis.openapi.models.operations.DeleteSipAuthCallsCredentialListMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSipAuthCallsCredentialListMappingRequest req = new DeleteSipAuthCallsCredentialListMappingRequest("occaecati", "labore", "quidem");            

            DeleteSipAuthCallsCredentialListMappingResponse res = sdk.sdk.deleteSipAuthCallsCredentialListMapping(req, new DeleteSipAuthCallsCredentialListMappingSecurity("atque", "laborum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSipAuthCallsIpAccessControlListMapping

Delete an IP Access Control List mapping from the requested domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSipAuthCallsIpAccessControlListMappingRequest;
import org.openapis.openapi.models.operations.DeleteSipAuthCallsIpAccessControlListMappingResponse;
import org.openapis.openapi.models.operations.DeleteSipAuthCallsIpAccessControlListMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSipAuthCallsIpAccessControlListMappingRequest req = new DeleteSipAuthCallsIpAccessControlListMappingRequest("nam", "tenetur", "laboriosam");            

            DeleteSipAuthCallsIpAccessControlListMappingResponse res = sdk.sdk.deleteSipAuthCallsIpAccessControlListMapping(req, new DeleteSipAuthCallsIpAccessControlListMappingSecurity("alias", "amet") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSipAuthRegistrationsCredentialListMapping

Delete a credential list mapping from the requested domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSipAuthRegistrationsCredentialListMappingRequest;
import org.openapis.openapi.models.operations.DeleteSipAuthRegistrationsCredentialListMappingResponse;
import org.openapis.openapi.models.operations.DeleteSipAuthRegistrationsCredentialListMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSipAuthRegistrationsCredentialListMappingRequest req = new DeleteSipAuthRegistrationsCredentialListMappingRequest("deserunt", "voluptate", "unde");            

            DeleteSipAuthRegistrationsCredentialListMappingResponse res = sdk.sdk.deleteSipAuthRegistrationsCredentialListMapping(req, new DeleteSipAuthRegistrationsCredentialListMappingSecurity("reiciendis", "provident") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSipCredential

Delete a credential resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSipCredentialRequest;
import org.openapis.openapi.models.operations.DeleteSipCredentialResponse;
import org.openapis.openapi.models.operations.DeleteSipCredentialSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSipCredentialRequest req = new DeleteSipCredentialRequest("repellendus", "delectus", "voluptates");            

            DeleteSipCredentialResponse res = sdk.sdk.deleteSipCredential(req, new DeleteSipCredentialSecurity("perferendis", "est") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSipCredentialList

Delete a Credential List

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSipCredentialListRequest;
import org.openapis.openapi.models.operations.DeleteSipCredentialListResponse;
import org.openapis.openapi.models.operations.DeleteSipCredentialListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSipCredentialListRequest req = new DeleteSipCredentialListRequest("quidem", "reprehenderit");            

            DeleteSipCredentialListResponse res = sdk.sdk.deleteSipCredentialList(req, new DeleteSipCredentialListSecurity("facere", "fuga") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSipCredentialListMapping

Delete a CredentialListMapping resource from an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSipCredentialListMappingRequest;
import org.openapis.openapi.models.operations.DeleteSipCredentialListMappingResponse;
import org.openapis.openapi.models.operations.DeleteSipCredentialListMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSipCredentialListMappingRequest req = new DeleteSipCredentialListMappingRequest("praesentium", "mollitia", "veniam");            

            DeleteSipCredentialListMappingResponse res = sdk.sdk.deleteSipCredentialListMapping(req, new DeleteSipCredentialListMappingSecurity("voluptatem", "quisquam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSipDomain

Delete an instance of a Domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSipDomainRequest;
import org.openapis.openapi.models.operations.DeleteSipDomainResponse;
import org.openapis.openapi.models.operations.DeleteSipDomainSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSipDomainRequest req = new DeleteSipDomainRequest("repudiandae", "quasi");            

            DeleteSipDomainResponse res = sdk.sdk.deleteSipDomain(req, new DeleteSipDomainSecurity("atque", "reprehenderit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSipIpAccessControlList

Delete an IpAccessControlList from the requested account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSipIpAccessControlListRequest;
import org.openapis.openapi.models.operations.DeleteSipIpAccessControlListResponse;
import org.openapis.openapi.models.operations.DeleteSipIpAccessControlListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSipIpAccessControlListRequest req = new DeleteSipIpAccessControlListRequest("asperiores", "totam");            

            DeleteSipIpAccessControlListResponse res = sdk.sdk.deleteSipIpAccessControlList(req, new DeleteSipIpAccessControlListSecurity("suscipit", "quidem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSipIpAccessControlListMapping

Delete an IpAccessControlListMapping resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSipIpAccessControlListMappingRequest;
import org.openapis.openapi.models.operations.DeleteSipIpAccessControlListMappingResponse;
import org.openapis.openapi.models.operations.DeleteSipIpAccessControlListMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSipIpAccessControlListMappingRequest req = new DeleteSipIpAccessControlListMappingRequest("maxime", "et", "esse");            

            DeleteSipIpAccessControlListMappingResponse res = sdk.sdk.deleteSipIpAccessControlListMapping(req, new DeleteSipIpAccessControlListMappingSecurity("amet", "assumenda") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSipIpAddress

Delete an IpAddress resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSipIpAddressRequest;
import org.openapis.openapi.models.operations.DeleteSipIpAddressResponse;
import org.openapis.openapi.models.operations.DeleteSipIpAddressSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSipIpAddressRequest req = new DeleteSipIpAddressRequest("ea", "atque", "error");            

            DeleteSipIpAddressResponse res = sdk.sdk.deleteSipIpAddress(req, new DeleteSipIpAddressSecurity("officiis", "officiis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTranscription

Delete a transcription from the account used to make the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTranscriptionRequest;
import org.openapis.openapi.models.operations.DeleteTranscriptionResponse;
import org.openapis.openapi.models.operations.DeleteTranscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTranscriptionRequest req = new DeleteTranscriptionRequest("accusamus", "natus");            

            DeleteTranscriptionResponse res = sdk.sdk.deleteTranscription(req, new DeleteTranscriptionSecurity("minima", "aspernatur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUsageTrigger

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsageTriggerRequest;
import org.openapis.openapi.models.operations.DeleteUsageTriggerResponse;
import org.openapis.openapi.models.operations.DeleteUsageTriggerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUsageTriggerRequest req = new DeleteUsageTriggerRequest("ex", "maiores");            

            DeleteUsageTriggerResponse res = sdk.sdk.deleteUsageTrigger(req, new DeleteUsageTriggerSecurity("corrupti", "at") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUserDefinedMessageSubscription

Delete a specific User Defined Message Subscription.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserDefinedMessageSubscriptionRequest;
import org.openapis.openapi.models.operations.DeleteUserDefinedMessageSubscriptionResponse;
import org.openapis.openapi.models.operations.DeleteUserDefinedMessageSubscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUserDefinedMessageSubscriptionRequest req = new DeleteUserDefinedMessageSubscriptionRequest("error", "blanditiis", "suscipit");            

            DeleteUserDefinedMessageSubscriptionResponse res = sdk.sdk.deleteUserDefinedMessageSubscription(req, new DeleteUserDefinedMessageSubscriptionSecurity("repudiandae", "atque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchAccount

Fetch the account specified by the provided Account Sid

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchAccountRequest;
import org.openapis.openapi.models.operations.FetchAccountResponse;
import org.openapis.openapi.models.operations.FetchAccountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAccountRequest req = new FetchAccountRequest("atque");            

            FetchAccountResponse res = sdk.sdk.fetchAccount(req, new FetchAccountSecurity("sunt", "recusandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010Account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchAddress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchAddressRequest;
import org.openapis.openapi.models.operations.FetchAddressResponse;
import org.openapis.openapi.models.operations.FetchAddressSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAddressRequest req = new FetchAddressRequest("dolorum", "repellendus");            

            FetchAddressResponse res = sdk.sdk.fetchAddress(req, new FetchAddressSecurity("labore", "reiciendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchApplication

Fetch the application specified by the provided sid

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchApplicationRequest;
import org.openapis.openapi.models.operations.FetchApplicationResponse;
import org.openapis.openapi.models.operations.FetchApplicationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchApplicationRequest req = new FetchApplicationRequest("doloremque", "repudiandae");            

            FetchApplicationResponse res = sdk.sdk.fetchApplication(req, new FetchApplicationSecurity("dicta", "accusantium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountApplication != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchAuthorizedConnectApp

Fetch an instance of an authorized-connect-app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchAuthorizedConnectAppRequest;
import org.openapis.openapi.models.operations.FetchAuthorizedConnectAppResponse;
import org.openapis.openapi.models.operations.FetchAuthorizedConnectAppSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAuthorizedConnectAppRequest req = new FetchAuthorizedConnectAppRequest("beatae", "dolores");            

            FetchAuthorizedConnectAppResponse res = sdk.sdk.fetchAuthorizedConnectApp(req, new FetchAuthorizedConnectAppSecurity("enim", "laboriosam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountAuthorizedConnectApp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchAvailablePhoneNumberCountry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchAvailablePhoneNumberCountryRequest;
import org.openapis.openapi.models.operations.FetchAvailablePhoneNumberCountryResponse;
import org.openapis.openapi.models.operations.FetchAvailablePhoneNumberCountrySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAvailablePhoneNumberCountryRequest req = new FetchAvailablePhoneNumberCountryRequest("velit", "a");            

            FetchAvailablePhoneNumberCountryResponse res = sdk.sdk.fetchAvailablePhoneNumberCountry(req, new FetchAvailablePhoneNumberCountrySecurity("molestias", "magnam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountAvailablePhoneNumberCountry != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchBalance

Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected immediately. Child accounts do not contain balance information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchBalanceRequest;
import org.openapis.openapi.models.operations.FetchBalanceResponse;
import org.openapis.openapi.models.operations.FetchBalanceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchBalanceRequest req = new FetchBalanceRequest("saepe");            

            FetchBalanceResponse res = sdk.sdk.fetchBalance(req, new FetchBalanceSecurity("consequuntur", "occaecati") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountBalance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchCall

Fetch the call specified by the provided Call SID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCallRequest;
import org.openapis.openapi.models.operations.FetchCallResponse;
import org.openapis.openapi.models.operations.FetchCallSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCallRequest req = new FetchCallRequest("officiis", "perspiciatis");            

            FetchCallResponse res = sdk.sdk.fetchCall(req, new FetchCallSecurity("in", "adipisci") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountCall != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchCallFeedback

Fetch a Feedback resource from a call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCallFeedbackRequest;
import org.openapis.openapi.models.operations.FetchCallFeedbackResponse;
import org.openapis.openapi.models.operations.FetchCallFeedbackSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCallFeedbackRequest req = new FetchCallFeedbackRequest("eveniet", "occaecati");            

            FetchCallFeedbackResponse res = sdk.sdk.fetchCallFeedback(req, new FetchCallFeedbackSecurity("consequuntur", "fugit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountCallCallFeedback != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchCallFeedbackSummary

Fetch a FeedbackSummary resource from a call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCallFeedbackSummaryRequest;
import org.openapis.openapi.models.operations.FetchCallFeedbackSummaryResponse;
import org.openapis.openapi.models.operations.FetchCallFeedbackSummarySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCallFeedbackSummaryRequest req = new FetchCallFeedbackSummaryRequest("id", "quis");            

            FetchCallFeedbackSummaryResponse res = sdk.sdk.fetchCallFeedbackSummary(req, new FetchCallFeedbackSummarySecurity("reprehenderit", "error") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountCallCallFeedbackSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchCallNotification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCallNotificationRequest;
import org.openapis.openapi.models.operations.FetchCallNotificationResponse;
import org.openapis.openapi.models.operations.FetchCallNotificationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCallNotificationRequest req = new FetchCallNotificationRequest("illo", "corporis", "quidem");            

            FetchCallNotificationResponse res = sdk.sdk.fetchCallNotification(req, new FetchCallNotificationSecurity("eveniet", "non") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountCallCallNotificationInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchCallRecording

Fetch an instance of a recording for a call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCallRecordingRequest;
import org.openapis.openapi.models.operations.FetchCallRecordingResponse;
import org.openapis.openapi.models.operations.FetchCallRecordingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCallRecordingRequest req = new FetchCallRecordingRequest("vero", "doloremque", "iure");            

            FetchCallRecordingResponse res = sdk.sdk.fetchCallRecording(req, new FetchCallRecordingSecurity("ipsa", "totam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountCallCallRecording != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchConference

Fetch an instance of a conference

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchConferenceRequest;
import org.openapis.openapi.models.operations.FetchConferenceResponse;
import org.openapis.openapi.models.operations.FetchConferenceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchConferenceRequest req = new FetchConferenceRequest("quae", "molestiae");            

            FetchConferenceResponse res = sdk.sdk.fetchConference(req, new FetchConferenceSecurity("eveniet", "qui") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountConference != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchConferenceRecording

Fetch an instance of a recording for a call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchConferenceRecordingRequest;
import org.openapis.openapi.models.operations.FetchConferenceRecordingResponse;
import org.openapis.openapi.models.operations.FetchConferenceRecordingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchConferenceRecordingRequest req = new FetchConferenceRecordingRequest("cum", "iure", "necessitatibus");            

            FetchConferenceRecordingResponse res = sdk.sdk.fetchConferenceRecording(req, new FetchConferenceRecordingSecurity("ratione", "laborum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountConferenceConferenceRecording != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchConnectApp

Fetch an instance of a connect-app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchConnectAppRequest;
import org.openapis.openapi.models.operations.FetchConnectAppResponse;
import org.openapis.openapi.models.operations.FetchConnectAppSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchConnectAppRequest req = new FetchConnectAppRequest("distinctio", "voluptatum");            

            FetchConnectAppResponse res = sdk.sdk.fetchConnectApp(req, new FetchConnectAppSecurity("rem", "aliquam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountConnectApp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchIncomingPhoneNumber

Fetch an incoming-phone-number belonging to the account used to make the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchIncomingPhoneNumberRequest;
import org.openapis.openapi.models.operations.FetchIncomingPhoneNumberResponse;
import org.openapis.openapi.models.operations.FetchIncomingPhoneNumberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchIncomingPhoneNumberRequest req = new FetchIncomingPhoneNumberRequest("ad", "repellat");            

            FetchIncomingPhoneNumberResponse res = sdk.sdk.fetchIncomingPhoneNumber(req, new FetchIncomingPhoneNumberSecurity("alias", "corporis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountIncomingPhoneNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchIncomingPhoneNumberAssignedAddOn

Fetch an instance of an Add-on installation currently assigned to this Number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchIncomingPhoneNumberAssignedAddOnRequest;
import org.openapis.openapi.models.operations.FetchIncomingPhoneNumberAssignedAddOnResponse;
import org.openapis.openapi.models.operations.FetchIncomingPhoneNumberAssignedAddOnSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchIncomingPhoneNumberAssignedAddOnRequest req = new FetchIncomingPhoneNumberAssignedAddOnRequest("perspiciatis", "nihil", "mollitia");            

            FetchIncomingPhoneNumberAssignedAddOnResponse res = sdk.sdk.fetchIncomingPhoneNumberAssignedAddOn(req, new FetchIncomingPhoneNumberAssignedAddOnSecurity("voluptas", "alias") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchIncomingPhoneNumberAssignedAddOnExtension

Fetch an instance of an Extension for the Assigned Add-on.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchIncomingPhoneNumberAssignedAddOnExtensionRequest;
import org.openapis.openapi.models.operations.FetchIncomingPhoneNumberAssignedAddOnExtensionResponse;
import org.openapis.openapi.models.operations.FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchIncomingPhoneNumberAssignedAddOnExtensionRequest req = new FetchIncomingPhoneNumberAssignedAddOnExtensionRequest("maiores", "reiciendis", "dolores", "id");            

            FetchIncomingPhoneNumberAssignedAddOnExtensionResponse res = sdk.sdk.fetchIncomingPhoneNumberAssignedAddOnExtension(req, new FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity("minima", "dolore") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchKey

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchKeyRequest;
import org.openapis.openapi.models.operations.FetchKeyResponse;
import org.openapis.openapi.models.operations.FetchKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchKeyRequest req = new FetchKeyRequest("dolorum", "nesciunt");            

            FetchKeyResponse res = sdk.sdk.fetchKey(req, new FetchKeySecurity("quae", "recusandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchMedia

Fetch a single media instance belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchMediaRequest;
import org.openapis.openapi.models.operations.FetchMediaResponse;
import org.openapis.openapi.models.operations.FetchMediaSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchMediaRequest req = new FetchMediaRequest("omnis", "quaerat", "molestiae");            

            FetchMediaResponse res = sdk.sdk.fetchMedia(req, new FetchMediaSecurity("ex", "ut") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountMessageMedia != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchMember

Fetch a specific member from the queue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchMemberRequest;
import org.openapis.openapi.models.operations.FetchMemberResponse;
import org.openapis.openapi.models.operations.FetchMemberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchMemberRequest req = new FetchMemberRequest("culpa", "adipisci", "debitis");            

            FetchMemberResponse res = sdk.sdk.fetchMember(req, new FetchMemberSecurity("laudantium", "eum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountQueueMember != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchMessage

Fetch a message belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchMessageRequest;
import org.openapis.openapi.models.operations.FetchMessageResponse;
import org.openapis.openapi.models.operations.FetchMessageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchMessageRequest req = new FetchMessageRequest("nemo", "recusandae");            

            FetchMessageResponse res = sdk.sdk.fetchMessage(req, new FetchMessageSecurity("esse", "provident") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchNotification

Fetch a notification belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchNotificationRequest;
import org.openapis.openapi.models.operations.FetchNotificationResponse;
import org.openapis.openapi.models.operations.FetchNotificationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchNotificationRequest req = new FetchNotificationRequest("quis", "eum");            

            FetchNotificationResponse res = sdk.sdk.fetchNotification(req, new FetchNotificationSecurity("reiciendis", "provident") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountNotificationInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchOutgoingCallerId

Fetch an outgoing-caller-id belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchOutgoingCallerIdRequest;
import org.openapis.openapi.models.operations.FetchOutgoingCallerIdResponse;
import org.openapis.openapi.models.operations.FetchOutgoingCallerIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchOutgoingCallerIdRequest req = new FetchOutgoingCallerIdRequest("aspernatur", "ullam");            

            FetchOutgoingCallerIdResponse res = sdk.sdk.fetchOutgoingCallerId(req, new FetchOutgoingCallerIdSecurity("quasi", "animi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountOutgoingCallerId != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchParticipant

Fetch an instance of a participant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchParticipantRequest;
import org.openapis.openapi.models.operations.FetchParticipantResponse;
import org.openapis.openapi.models.operations.FetchParticipantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchParticipantRequest req = new FetchParticipantRequest("nostrum", "mollitia", "provident");            

            FetchParticipantResponse res = sdk.sdk.fetchParticipant(req, new FetchParticipantSecurity("possimus", "animi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountConferenceParticipant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchQueue

Fetch an instance of a queue identified by the QueueSid

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchQueueRequest;
import org.openapis.openapi.models.operations.FetchQueueResponse;
import org.openapis.openapi.models.operations.FetchQueueSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchQueueRequest req = new FetchQueueRequest("ex", "aliquid");            

            FetchQueueResponse res = sdk.sdk.fetchQueue(req, new FetchQueueSecurity("accusantium", "repellat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountQueue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRecording

Fetch an instance of a recording

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRecordingRequest;
import org.openapis.openapi.models.operations.FetchRecordingResponse;
import org.openapis.openapi.models.operations.FetchRecordingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRecordingRequest req = new FetchRecordingRequest("doloribus", "ullam") {{
                includeSoftDeleted = false;
            }};            

            FetchRecordingResponse res = sdk.sdk.fetchRecording(req, new FetchRecordingSecurity("in", "nam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountRecording != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRecordingAddOnResult

Fetch an instance of an AddOnResult

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRecordingAddOnResultRequest;
import org.openapis.openapi.models.operations.FetchRecordingAddOnResultResponse;
import org.openapis.openapi.models.operations.FetchRecordingAddOnResultSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRecordingAddOnResultRequest req = new FetchRecordingAddOnResultRequest("earum", "officia", "laborum");            

            FetchRecordingAddOnResultResponse res = sdk.sdk.fetchRecordingAddOnResult(req, new FetchRecordingAddOnResultSecurity("placeat", "modi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountRecordingRecordingAddOnResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRecordingAddOnResultPayload

Fetch an instance of a result payload

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRecordingAddOnResultPayloadRequest;
import org.openapis.openapi.models.operations.FetchRecordingAddOnResultPayloadResponse;
import org.openapis.openapi.models.operations.FetchRecordingAddOnResultPayloadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRecordingAddOnResultPayloadRequest req = new FetchRecordingAddOnResultPayloadRequest("voluptatibus", "molestias", "officiis", "sapiente");            

            FetchRecordingAddOnResultPayloadResponse res = sdk.sdk.fetchRecordingAddOnResultPayload(req, new FetchRecordingAddOnResultPayloadSecurity("cumque", "vitae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRecordingTranscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRecordingTranscriptionRequest;
import org.openapis.openapi.models.operations.FetchRecordingTranscriptionResponse;
import org.openapis.openapi.models.operations.FetchRecordingTranscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRecordingTranscriptionRequest req = new FetchRecordingTranscriptionRequest("rerum", "tempora", "quis");            

            FetchRecordingTranscriptionResponse res = sdk.sdk.fetchRecordingTranscription(req, new FetchRecordingTranscriptionSecurity("inventore", "fugit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountRecordingRecordingTranscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchShortCode

Fetch an instance of a short code

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchShortCodeRequest;
import org.openapis.openapi.models.operations.FetchShortCodeResponse;
import org.openapis.openapi.models.operations.FetchShortCodeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchShortCodeRequest req = new FetchShortCodeRequest("cumque", "quae");            

            FetchShortCodeResponse res = sdk.sdk.fetchShortCode(req, new FetchShortCodeSecurity("perferendis", "velit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountShortCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSigningKey

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSigningKeyRequest;
import org.openapis.openapi.models.operations.FetchSigningKeyResponse;
import org.openapis.openapi.models.operations.FetchSigningKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSigningKeyRequest req = new FetchSigningKeyRequest("aspernatur", "eum");            

            FetchSigningKeyResponse res = sdk.sdk.fetchSigningKey(req, new FetchSigningKeySecurity("eius", "rem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSigningKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSipAuthCallsCredentialListMapping

Fetch a specific instance of a credential list mapping

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSipAuthCallsCredentialListMappingRequest;
import org.openapis.openapi.models.operations.FetchSipAuthCallsCredentialListMappingResponse;
import org.openapis.openapi.models.operations.FetchSipAuthCallsCredentialListMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSipAuthCallsCredentialListMappingRequest req = new FetchSipAuthCallsCredentialListMappingRequest("at", "impedit", "eos");            

            FetchSipAuthCallsCredentialListMappingResponse res = sdk.sdk.fetchSipAuthCallsCredentialListMapping(req, new FetchSipAuthCallsCredentialListMappingSecurity("sapiente", "eum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSipAuthCallsIpAccessControlListMapping

Fetch a specific instance of an IP Access Control List mapping

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSipAuthCallsIpAccessControlListMappingRequest;
import org.openapis.openapi.models.operations.FetchSipAuthCallsIpAccessControlListMappingResponse;
import org.openapis.openapi.models.operations.FetchSipAuthCallsIpAccessControlListMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSipAuthCallsIpAccessControlListMappingRequest req = new FetchSipAuthCallsIpAccessControlListMappingRequest("dicta", "minima", "beatae");            

            FetchSipAuthCallsIpAccessControlListMappingResponse res = sdk.sdk.fetchSipAuthCallsIpAccessControlListMapping(req, new FetchSipAuthCallsIpAccessControlListMappingSecurity("cupiditate", "provident") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSipAuthRegistrationsCredentialListMapping

Fetch a specific instance of a credential list mapping

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSipAuthRegistrationsCredentialListMappingRequest;
import org.openapis.openapi.models.operations.FetchSipAuthRegistrationsCredentialListMappingResponse;
import org.openapis.openapi.models.operations.FetchSipAuthRegistrationsCredentialListMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSipAuthRegistrationsCredentialListMappingRequest req = new FetchSipAuthRegistrationsCredentialListMappingRequest("earum", "soluta", "hic");            

            FetchSipAuthRegistrationsCredentialListMappingResponse res = sdk.sdk.fetchSipAuthRegistrationsCredentialListMapping(req, new FetchSipAuthRegistrationsCredentialListMappingSecurity("illum", "eaque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSipCredential

Fetch a single credential.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSipCredentialRequest;
import org.openapis.openapi.models.operations.FetchSipCredentialResponse;
import org.openapis.openapi.models.operations.FetchSipCredentialSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSipCredentialRequest req = new FetchSipCredentialRequest("earum", "perspiciatis", "maiores");            

            FetchSipCredentialResponse res = sdk.sdk.fetchSipCredential(req, new FetchSipCredentialSecurity("debitis", "aliquid") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipCredentialListSipCredential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSipCredentialList

Get a Credential List

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSipCredentialListRequest;
import org.openapis.openapi.models.operations.FetchSipCredentialListResponse;
import org.openapis.openapi.models.operations.FetchSipCredentialListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSipCredentialListRequest req = new FetchSipCredentialListRequest("porro", "suscipit");            

            FetchSipCredentialListResponse res = sdk.sdk.fetchSipCredentialList(req, new FetchSipCredentialListSecurity("dolorem", "fugit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipCredentialList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSipCredentialListMapping

Fetch a single CredentialListMapping resource from an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSipCredentialListMappingRequest;
import org.openapis.openapi.models.operations.FetchSipCredentialListMappingResponse;
import org.openapis.openapi.models.operations.FetchSipCredentialListMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSipCredentialListMappingRequest req = new FetchSipCredentialListMappingRequest("cumque", "fuga", "ratione");            

            FetchSipCredentialListMappingResponse res = sdk.sdk.fetchSipCredentialListMapping(req, new FetchSipCredentialListMappingSecurity("animi", "necessitatibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipDomainSipCredentialListMapping != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSipDomain

Fetch an instance of a Domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSipDomainRequest;
import org.openapis.openapi.models.operations.FetchSipDomainResponse;
import org.openapis.openapi.models.operations.FetchSipDomainSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSipDomainRequest req = new FetchSipDomainRequest("nulla", "consequatur");            

            FetchSipDomainResponse res = sdk.sdk.fetchSipDomain(req, new FetchSipDomainSecurity("quasi", "et") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipDomain != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSipIpAccessControlList

Fetch a specific instance of an IpAccessControlList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSipIpAccessControlListRequest;
import org.openapis.openapi.models.operations.FetchSipIpAccessControlListResponse;
import org.openapis.openapi.models.operations.FetchSipIpAccessControlListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSipIpAccessControlListRequest req = new FetchSipIpAccessControlListRequest("ducimus", "natus");            

            FetchSipIpAccessControlListResponse res = sdk.sdk.fetchSipIpAccessControlList(req, new FetchSipIpAccessControlListSecurity("occaecati", "suscipit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipIpAccessControlList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSipIpAccessControlListMapping

Fetch an IpAccessControlListMapping resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSipIpAccessControlListMappingRequest;
import org.openapis.openapi.models.operations.FetchSipIpAccessControlListMappingResponse;
import org.openapis.openapi.models.operations.FetchSipIpAccessControlListMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSipIpAccessControlListMappingRequest req = new FetchSipIpAccessControlListMappingRequest("adipisci", "quasi", "magni");            

            FetchSipIpAccessControlListMappingResponse res = sdk.sdk.fetchSipIpAccessControlListMapping(req, new FetchSipIpAccessControlListMappingSecurity("doloribus", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipDomainSipIpAccessControlListMapping != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSipIpAddress

Read one IpAddress resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSipIpAddressRequest;
import org.openapis.openapi.models.operations.FetchSipIpAddressResponse;
import org.openapis.openapi.models.operations.FetchSipIpAddressSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSipIpAddressRequest req = new FetchSipIpAddressRequest("necessitatibus", "ipsa", "tempora");            

            FetchSipIpAddressResponse res = sdk.sdk.fetchSipIpAddress(req, new FetchSipIpAddressSecurity("nihil", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipIpAccessControlListSipIpAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchTranscription

Fetch an instance of a Transcription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTranscriptionRequest;
import org.openapis.openapi.models.operations.FetchTranscriptionResponse;
import org.openapis.openapi.models.operations.FetchTranscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTranscriptionRequest req = new FetchTranscriptionRequest("dicta", "iusto");            

            FetchTranscriptionResponse res = sdk.sdk.fetchTranscription(req, new FetchTranscriptionSecurity("esse", "praesentium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountTranscription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchUsageTrigger

Fetch and instance of a usage-trigger

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchUsageTriggerRequest;
import org.openapis.openapi.models.operations.FetchUsageTriggerResponse;
import org.openapis.openapi.models.operations.FetchUsageTriggerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchUsageTriggerRequest req = new FetchUsageTriggerRequest("maiores", "reiciendis");            

            FetchUsageTriggerResponse res = sdk.sdk.fetchUsageTrigger(req, new FetchUsageTriggerSecurity("vel", "architecto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountUsageUsageTrigger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAccount

Retrieves a collection of Accounts belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccountRequest;
import org.openapis.openapi.models.operations.ListAccountResponse;
import org.openapis.openapi.models.operations.ListAccountSecurity;
import org.openapis.openapi.models.shared.AccountEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAccountRequest req = new ListAccountRequest() {{
                friendlyName = "fugiat";
                page = 39650L;
                pageSize = 117315L;
                pageToken = "odio";
                status = AccountEnumStatusEnum.ACTIVE;
            }};            

            ListAccountResponse res = sdk.sdk.listAccount(req, new ListAccountSecurity("esse", "ex") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAddress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAddressRequest;
import org.openapis.openapi.models.operations.ListAddressResponse;
import org.openapis.openapi.models.operations.ListAddressSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAddressRequest req = new ListAddressRequest("consectetur") {{
                customerName = "aliquid";
                friendlyName = "ipsa";
                isoCountry = "laborum";
                page = 123844L;
                pageSize = 344718L;
                pageToken = "fugiat";
            }};            

            ListAddressResponse res = sdk.sdk.listAddress(req, new ListAddressSecurity("expedita", "aliquid") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listAddressResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApplication

Retrieve a list of applications representing an application within the requesting account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApplicationRequest;
import org.openapis.openapi.models.operations.ListApplicationResponse;
import org.openapis.openapi.models.operations.ListApplicationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListApplicationRequest req = new ListApplicationRequest("officia") {{
                friendlyName = "suscipit";
                page = 399161L;
                pageSize = 21973L;
                pageToken = "eum";
            }};            

            ListApplicationResponse res = sdk.sdk.listApplication(req, new ListApplicationSecurity("voluptas", "iste") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAuthorizedConnectApp

Retrieve a list of authorized-connect-apps belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAuthorizedConnectAppRequest;
import org.openapis.openapi.models.operations.ListAuthorizedConnectAppResponse;
import org.openapis.openapi.models.operations.ListAuthorizedConnectAppSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAuthorizedConnectAppRequest req = new ListAuthorizedConnectAppRequest("id") {{
                page = 70042L;
                pageSize = 625358L;
                pageToken = "possimus";
            }};            

            ListAuthorizedConnectAppResponse res = sdk.sdk.listAuthorizedConnectApp(req, new ListAuthorizedConnectAppSecurity("voluptates", "mollitia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listAuthorizedConnectAppResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAvailablePhoneNumberCountry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberCountryRequest;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberCountryResponse;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberCountrySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAvailablePhoneNumberCountryRequest req = new ListAvailablePhoneNumberCountryRequest("laborum") {{
                page = 726343L;
                pageSize = 324083L;
                pageToken = "deleniti";
            }};            

            ListAvailablePhoneNumberCountryResponse res = sdk.sdk.listAvailablePhoneNumberCountry(req, new ListAvailablePhoneNumberCountrySecurity("enim", "vitae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listAvailablePhoneNumberCountryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAvailablePhoneNumberLocal

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberLocalRequest;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberLocalResponse;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberLocalSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAvailablePhoneNumberLocalRequest req = new ListAvailablePhoneNumberLocalRequest("repellendus", "ex") {{
                areaCode = 775803L;
                beta = false;
                contains = "ex";
                distance = 281153L;
                excludeAllAddressRequired = false;
                excludeForeignAddressRequired = false;
                excludeLocalAddressRequired = false;
                faxEnabled = false;
                inLata = "ad";
                inLocality = "expedita";
                inPostalCode = "voluptatem";
                inRateCenter = "molestias";
                inRegion = "cum";
                mmsEnabled = false;
                nearLatLong = "aliquid";
                nearNumber = "beatae";
                page = 530860L;
                pageSize = 606308L;
                pageToken = "veritatis";
                smsEnabled = false;
                voiceEnabled = false;
            }};            

            ListAvailablePhoneNumberLocalResponse res = sdk.sdk.listAvailablePhoneNumberLocal(req, new ListAvailablePhoneNumberLocalSecurity("rerum", "est") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listAvailablePhoneNumberLocalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAvailablePhoneNumberMachineToMachine

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberMachineToMachineRequest;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberMachineToMachineResponse;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberMachineToMachineSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAvailablePhoneNumberMachineToMachineRequest req = new ListAvailablePhoneNumberMachineToMachineRequest("culpa", "voluptatem") {{
                areaCode = 959143L;
                beta = false;
                contains = "officiis";
                distance = 103298L;
                excludeAllAddressRequired = false;
                excludeForeignAddressRequired = false;
                excludeLocalAddressRequired = false;
                faxEnabled = false;
                inLata = "fuga";
                inLocality = "pariatur";
                inPostalCode = "debitis";
                inRateCenter = "voluptatem";
                inRegion = "alias";
                mmsEnabled = false;
                nearLatLong = "deleniti";
                nearNumber = "earum";
                page = 404244L;
                pageSize = 958308L;
                pageToken = "rem";
                smsEnabled = false;
                voiceEnabled = false;
            }};            

            ListAvailablePhoneNumberMachineToMachineResponse res = sdk.sdk.listAvailablePhoneNumberMachineToMachine(req, new ListAvailablePhoneNumberMachineToMachineSecurity("minus", "nemo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listAvailablePhoneNumberMachineToMachineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAvailablePhoneNumberMobile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberMobileRequest;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberMobileResponse;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberMobileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAvailablePhoneNumberMobileRequest req = new ListAvailablePhoneNumberMobileRequest("asperiores", "ratione") {{
                areaCode = 355225L;
                beta = false;
                contains = "perferendis";
                distance = 848341L;
                excludeAllAddressRequired = false;
                excludeForeignAddressRequired = false;
                excludeLocalAddressRequired = false;
                faxEnabled = false;
                inLata = "totam";
                inLocality = "impedit";
                inPostalCode = "quibusdam";
                inRateCenter = "nam";
                inRegion = "ipsam";
                mmsEnabled = false;
                nearLatLong = "culpa";
                nearNumber = "dolor";
                page = 307376L;
                pageSize = 80532L;
                pageToken = "deleniti";
                smsEnabled = false;
                voiceEnabled = false;
            }};            

            ListAvailablePhoneNumberMobileResponse res = sdk.sdk.listAvailablePhoneNumberMobile(req, new ListAvailablePhoneNumberMobileSecurity("veritatis", "tempora") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listAvailablePhoneNumberMobileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAvailablePhoneNumberNational

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberNationalRequest;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberNationalResponse;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberNationalSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAvailablePhoneNumberNationalRequest req = new ListAvailablePhoneNumberNationalRequest("dolor", "consequatur") {{
                areaCode = 100014L;
                beta = false;
                contains = "sit";
                distance = 265039L;
                excludeAllAddressRequired = false;
                excludeForeignAddressRequired = false;
                excludeLocalAddressRequired = false;
                faxEnabled = false;
                inLata = "fugit";
                inLocality = "ab";
                inPostalCode = "laudantium";
                inRateCenter = "quae";
                inRegion = "dolor";
                mmsEnabled = false;
                nearLatLong = "fugiat";
                nearNumber = "ipsam";
                page = 162120L;
                pageSize = 55107L;
                pageToken = "quas";
                smsEnabled = false;
                voiceEnabled = false;
            }};            

            ListAvailablePhoneNumberNationalResponse res = sdk.sdk.listAvailablePhoneNumberNational(req, new ListAvailablePhoneNumberNationalSecurity("eveniet", "impedit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listAvailablePhoneNumberNationalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAvailablePhoneNumberSharedCost

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberSharedCostRequest;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberSharedCostResponse;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberSharedCostSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAvailablePhoneNumberSharedCostRequest req = new ListAvailablePhoneNumberSharedCostRequest("officiis", "esse") {{
                areaCode = 897277L;
                beta = false;
                contains = "sed";
                distance = 332191L;
                excludeAllAddressRequired = false;
                excludeForeignAddressRequired = false;
                excludeLocalAddressRequired = false;
                faxEnabled = false;
                inLata = "nesciunt";
                inLocality = "expedita";
                inPostalCode = "eum";
                inRateCenter = "vel";
                inRegion = "voluptatum";
                mmsEnabled = false;
                nearLatLong = "magnam";
                nearNumber = "exercitationem";
                page = 70410L;
                pageSize = 781480L;
                pageToken = "autem";
                smsEnabled = false;
                voiceEnabled = false;
            }};            

            ListAvailablePhoneNumberSharedCostResponse res = sdk.sdk.listAvailablePhoneNumberSharedCost(req, new ListAvailablePhoneNumberSharedCostSecurity("nobis", "laboriosam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listAvailablePhoneNumberSharedCostResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAvailablePhoneNumberTollFree

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberTollFreeRequest;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberTollFreeResponse;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberTollFreeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAvailablePhoneNumberTollFreeRequest req = new ListAvailablePhoneNumberTollFreeRequest("recusandae", "consequuntur") {{
                areaCode = 28952L;
                beta = false;
                contains = "exercitationem";
                distance = 895692L;
                excludeAllAddressRequired = false;
                excludeForeignAddressRequired = false;
                excludeLocalAddressRequired = false;
                faxEnabled = false;
                inLata = "quasi";
                inLocality = "nisi";
                inPostalCode = "at";
                inRateCenter = "vero";
                inRegion = "est";
                mmsEnabled = false;
                nearLatLong = "harum";
                nearNumber = "sequi";
                page = 987349L;
                pageSize = 918092L;
                pageToken = "optio";
                smsEnabled = false;
                voiceEnabled = false;
            }};            

            ListAvailablePhoneNumberTollFreeResponse res = sdk.sdk.listAvailablePhoneNumberTollFree(req, new ListAvailablePhoneNumberTollFreeSecurity("occaecati", "nemo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listAvailablePhoneNumberTollFreeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAvailablePhoneNumberVoip

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberVoipRequest;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberVoipResponse;
import org.openapis.openapi.models.operations.ListAvailablePhoneNumberVoipSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAvailablePhoneNumberVoipRequest req = new ListAvailablePhoneNumberVoipRequest("voluptate", "blanditiis") {{
                areaCode = 642352L;
                beta = false;
                contains = "voluptas";
                distance = 254025L;
                excludeAllAddressRequired = false;
                excludeForeignAddressRequired = false;
                excludeLocalAddressRequired = false;
                faxEnabled = false;
                inLata = "nemo";
                inLocality = "quos";
                inPostalCode = "eius";
                inRateCenter = "aspernatur";
                inRegion = "ducimus";
                mmsEnabled = false;
                nearLatLong = "nesciunt";
                nearNumber = "fuga";
                page = 514054L;
                pageSize = 277340L;
                pageToken = "quasi";
                smsEnabled = false;
                voiceEnabled = false;
            }};            

            ListAvailablePhoneNumberVoipResponse res = sdk.sdk.listAvailablePhoneNumberVoip(req, new ListAvailablePhoneNumberVoipSecurity("rem", "fugiat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listAvailablePhoneNumberVoipResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCall

Retrieves a collection of calls made to and from your account

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCallRequest;
import org.openapis.openapi.models.operations.ListCallResponse;
import org.openapis.openapi.models.operations.ListCallSecurity;
import org.openapis.openapi.models.shared.CallEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCallRequest req = new ListCallRequest("dicta") {{
                endTime = OffsetDateTime.parse("2022-11-03T15:45:18.212Z");
                endTimeLessThan = OffsetDateTime.parse("2022-12-14T21:58:33.872Z");
                endTimeGreaterThan = OffsetDateTime.parse("2021-01-22T08:47:06.543Z");
                from = "soluta";
                page = 3860L;
                pageSize = 608989L;
                pageToken = "eos";
                parentCallSid = "occaecati";
                startTime = OffsetDateTime.parse("2022-08-29T19:51:14.645Z");
                startTimeLessThan = OffsetDateTime.parse("2022-04-25T11:28:06.253Z");
                startTimeGreaterThan = OffsetDateTime.parse("2020-01-27T09:38:54.834Z");
                status = CallEnumStatusEnum.FAILED;
                to = "omnis";
            }};            

            ListCallResponse res = sdk.sdk.listCall(req, new ListCallSecurity("delectus", "minima") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listCallResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCallEvent

Retrieve a list of all events for a call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCallEventRequest;
import org.openapis.openapi.models.operations.ListCallEventResponse;
import org.openapis.openapi.models.operations.ListCallEventSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCallEventRequest req = new ListCallEventRequest("praesentium", "maxime") {{
                page = 300403L;
                pageSize = 836364L;
                pageToken = "quos";
            }};            

            ListCallEventResponse res = sdk.sdk.listCallEvent(req, new ListCallEventSecurity("commodi", "itaque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listCallEventResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCallNotification

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCallNotificationRequest;
import org.openapis.openapi.models.operations.ListCallNotificationResponse;
import org.openapis.openapi.models.operations.ListCallNotificationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCallNotificationRequest req = new ListCallNotificationRequest("commodi", "totam") {{
                log = 936618L;
                messageDate = LocalDate.parse("2022-04-12");
                messageDateLessThan = LocalDate.parse("2022-11-25");
                messageDateGreaterThan = LocalDate.parse("2022-07-29");
                page = 1383L;
                pageSize = 93894L;
                pageToken = "non";
            }};            

            ListCallNotificationResponse res = sdk.sdk.listCallNotification(req, new ListCallNotificationSecurity("maiores", "enim") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listCallNotificationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCallRecording

Retrieve a list of recordings belonging to the call used to make the request

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCallRecordingRequest;
import org.openapis.openapi.models.operations.ListCallRecordingResponse;
import org.openapis.openapi.models.operations.ListCallRecordingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCallRecordingRequest req = new ListCallRecordingRequest("sint", "nulla") {{
                dateCreated = LocalDate.parse("2022-01-31");
                dateCreatedLessThan = LocalDate.parse("2022-07-22");
                dateCreatedGreaterThan = LocalDate.parse("2022-04-30");
                page = 571844L;
                pageSize = 880679L;
                pageToken = "impedit";
            }};            

            ListCallRecordingResponse res = sdk.sdk.listCallRecording(req, new ListCallRecordingSecurity("hic", "necessitatibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listCallRecordingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConference

Retrieve a list of conferences belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConferenceRequest;
import org.openapis.openapi.models.operations.ListConferenceResponse;
import org.openapis.openapi.models.operations.ListConferenceSecurity;
import org.openapis.openapi.models.shared.ConferenceEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListConferenceRequest req = new ListConferenceRequest("asperiores") {{
                dateCreated = LocalDate.parse("2022-08-16");
                dateCreatedLessThan = LocalDate.parse("2020-02-08");
                dateCreatedGreaterThan = LocalDate.parse("2022-03-17");
                dateUpdated = LocalDate.parse("2021-08-25");
                dateUpdatedLessThan = LocalDate.parse("2022-10-03");
                dateUpdatedGreaterThan = LocalDate.parse("2022-07-26");
                friendlyName = "impedit";
                page = 166047L;
                pageSize = 746585L;
                pageToken = "repudiandae";
                status = ConferenceEnumStatusEnum.COMPLETED;
            }};            

            ListConferenceResponse res = sdk.sdk.listConference(req, new ListConferenceSecurity("dolore", "iusto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listConferenceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConferenceRecording

Retrieve a list of recordings belonging to the call used to make the request

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConferenceRecordingRequest;
import org.openapis.openapi.models.operations.ListConferenceRecordingResponse;
import org.openapis.openapi.models.operations.ListConferenceRecordingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListConferenceRecordingRequest req = new ListConferenceRecordingRequest("voluptate", "sequi") {{
                dateCreated = LocalDate.parse("2022-10-17");
                dateCreatedLessThan = LocalDate.parse("2021-05-24");
                dateCreatedGreaterThan = LocalDate.parse("2021-09-08");
                page = 139072L;
                pageSize = 974990L;
                pageToken = "vel";
            }};            

            ListConferenceRecordingResponse res = sdk.sdk.listConferenceRecording(req, new ListConferenceRecordingSecurity("magnam", "quibusdam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listConferenceRecordingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConnectApp

Retrieve a list of connect-apps belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConnectAppRequest;
import org.openapis.openapi.models.operations.ListConnectAppResponse;
import org.openapis.openapi.models.operations.ListConnectAppSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListConnectAppRequest req = new ListConnectAppRequest("inventore") {{
                page = 818034L;
                pageSize = 726878L;
                pageToken = "architecto";
            }};            

            ListConnectAppResponse res = sdk.sdk.listConnectApp(req, new ListConnectAppSecurity("voluptatibus", "quia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listConnectAppResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDependentPhoneNumber

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDependentPhoneNumberRequest;
import org.openapis.openapi.models.operations.ListDependentPhoneNumberResponse;
import org.openapis.openapi.models.operations.ListDependentPhoneNumberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDependentPhoneNumberRequest req = new ListDependentPhoneNumberRequest("porro", "aliquam") {{
                page = 247045L;
                pageSize = 75359L;
                pageToken = "accusantium";
            }};            

            ListDependentPhoneNumberResponse res = sdk.sdk.listDependentPhoneNumber(req, new ListDependentPhoneNumberSecurity("vel", "ea") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listDependentPhoneNumberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIncomingPhoneNumber

Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIncomingPhoneNumberRequest;
import org.openapis.openapi.models.operations.ListIncomingPhoneNumberResponse;
import org.openapis.openapi.models.operations.ListIncomingPhoneNumberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListIncomingPhoneNumberRequest req = new ListIncomingPhoneNumberRequest("beatae") {{
                beta = false;
                friendlyName = "vero";
                origin = "excepturi";
                page = 431994L;
                pageSize = 246557L;
                pageToken = "ut";
                phoneNumber = "perspiciatis";
            }};            

            ListIncomingPhoneNumberResponse res = sdk.sdk.listIncomingPhoneNumber(req, new ListIncomingPhoneNumberSecurity("earum", "dicta") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listIncomingPhoneNumberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIncomingPhoneNumberAssignedAddOn

Retrieve a list of Add-on installations currently assigned to this Number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIncomingPhoneNumberAssignedAddOnRequest;
import org.openapis.openapi.models.operations.ListIncomingPhoneNumberAssignedAddOnResponse;
import org.openapis.openapi.models.operations.ListIncomingPhoneNumberAssignedAddOnSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListIncomingPhoneNumberAssignedAddOnRequest req = new ListIncomingPhoneNumberAssignedAddOnRequest("impedit", "voluptatibus") {{
                page = 610987L;
                pageSize = 932562L;
                pageToken = "alias";
            }};            

            ListIncomingPhoneNumberAssignedAddOnResponse res = sdk.sdk.listIncomingPhoneNumberAssignedAddOn(req, new ListIncomingPhoneNumberAssignedAddOnSecurity("nisi", "itaque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listIncomingPhoneNumberAssignedAddOnResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIncomingPhoneNumberAssignedAddOnExtension

Retrieve a list of Extensions for the Assigned Add-on.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIncomingPhoneNumberAssignedAddOnExtensionRequest;
import org.openapis.openapi.models.operations.ListIncomingPhoneNumberAssignedAddOnExtensionResponse;
import org.openapis.openapi.models.operations.ListIncomingPhoneNumberAssignedAddOnExtensionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListIncomingPhoneNumberAssignedAddOnExtensionRequest req = new ListIncomingPhoneNumberAssignedAddOnExtensionRequest("velit", "laborum", "non") {{
                page = 224467L;
                pageSize = 483394L;
                pageToken = "sit";
            }};            

            ListIncomingPhoneNumberAssignedAddOnExtensionResponse res = sdk.sdk.listIncomingPhoneNumberAssignedAddOnExtension(req, new ListIncomingPhoneNumberAssignedAddOnExtensionSecurity("doloremque", "consequatur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listIncomingPhoneNumberAssignedAddOnExtensionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIncomingPhoneNumberLocal

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIncomingPhoneNumberLocalRequest;
import org.openapis.openapi.models.operations.ListIncomingPhoneNumberLocalResponse;
import org.openapis.openapi.models.operations.ListIncomingPhoneNumberLocalSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListIncomingPhoneNumberLocalRequest req = new ListIncomingPhoneNumberLocalRequest("officia") {{
                beta = false;
                friendlyName = "recusandae";
                origin = "ea";
                page = 693153L;
                pageSize = 377406L;
                pageToken = "facilis";
                phoneNumber = "placeat";
            }};            

            ListIncomingPhoneNumberLocalResponse res = sdk.sdk.listIncomingPhoneNumberLocal(req, new ListIncomingPhoneNumberLocalSecurity("perspiciatis", "expedita") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listIncomingPhoneNumberLocalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIncomingPhoneNumberMobile

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIncomingPhoneNumberMobileRequest;
import org.openapis.openapi.models.operations.ListIncomingPhoneNumberMobileResponse;
import org.openapis.openapi.models.operations.ListIncomingPhoneNumberMobileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListIncomingPhoneNumberMobileRequest req = new ListIncomingPhoneNumberMobileRequest("deleniti") {{
                beta = false;
                friendlyName = "a";
                origin = "voluptate";
                page = 351936L;
                pageSize = 600193L;
                pageToken = "necessitatibus";
                phoneNumber = "animi";
            }};            

            ListIncomingPhoneNumberMobileResponse res = sdk.sdk.listIncomingPhoneNumberMobile(req, new ListIncomingPhoneNumberMobileSecurity("impedit", "ipsam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listIncomingPhoneNumberMobileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIncomingPhoneNumberTollFree

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIncomingPhoneNumberTollFreeRequest;
import org.openapis.openapi.models.operations.ListIncomingPhoneNumberTollFreeResponse;
import org.openapis.openapi.models.operations.ListIncomingPhoneNumberTollFreeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListIncomingPhoneNumberTollFreeRequest req = new ListIncomingPhoneNumberTollFreeRequest("corporis") {{
                beta = false;
                friendlyName = "est";
                origin = "error";
                page = 456885L;
                pageSize = 288570L;
                pageToken = "veritatis";
                phoneNumber = "vero";
            }};            

            ListIncomingPhoneNumberTollFreeResponse res = sdk.sdk.listIncomingPhoneNumberTollFree(req, new ListIncomingPhoneNumberTollFreeSecurity("consectetur", "vitae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listIncomingPhoneNumberTollFreeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listKey

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListKeyRequest;
import org.openapis.openapi.models.operations.ListKeyResponse;
import org.openapis.openapi.models.operations.ListKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListKeyRequest req = new ListKeyRequest("inventore") {{
                page = 212434L;
                pageSize = 322017L;
                pageToken = "qui";
            }};            

            ListKeyResponse res = sdk.sdk.listKey(req, new ListKeySecurity("iste", "ex") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMedia

Retrieve a list of Media resources belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMediaRequest;
import org.openapis.openapi.models.operations.ListMediaResponse;
import org.openapis.openapi.models.operations.ListMediaSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListMediaRequest req = new ListMediaRequest("nemo", "soluta") {{
                dateCreated = OffsetDateTime.parse("2021-12-12T08:34:53.101Z");
                dateCreatedLessThan = OffsetDateTime.parse("2022-01-09T23:54:38.052Z");
                dateCreatedGreaterThan = OffsetDateTime.parse("2022-12-31T19:13:01.264Z");
                page = 168042L;
                pageSize = 425402L;
                pageToken = "quae";
            }};            

            ListMediaResponse res = sdk.sdk.listMedia(req, new ListMediaSecurity("quae", "modi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listMediaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMember

Retrieve the members of the queue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMemberRequest;
import org.openapis.openapi.models.operations.ListMemberResponse;
import org.openapis.openapi.models.operations.ListMemberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListMemberRequest req = new ListMemberRequest("neque", "exercitationem") {{
                page = 932394L;
                pageSize = 88248L;
                pageToken = "ipsum";
            }};            

            ListMemberResponse res = sdk.sdk.listMember(req, new ListMemberSecurity("unde", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listMemberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMessage

Retrieve a list of messages belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMessageRequest;
import org.openapis.openapi.models.operations.ListMessageResponse;
import org.openapis.openapi.models.operations.ListMessageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListMessageRequest req = new ListMessageRequest("distinctio") {{
                dateSent = OffsetDateTime.parse("2022-07-12T20:12:10.758Z");
                dateSentLessThan = OffsetDateTime.parse("2022-08-29T02:52:30.806Z");
                dateSentGreaterThan = OffsetDateTime.parse("2021-07-19T02:34:53.264Z");
                from = "dicta";
                page = 663318L;
                pageSize = 727888L;
                pageToken = "fugiat";
                to = "officia";
            }};            

            ListMessageResponse res = sdk.sdk.listMessage(req, new ListMessageSecurity("quos", "placeat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listMessageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNotification

Retrieve a list of notifications belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNotificationRequest;
import org.openapis.openapi.models.operations.ListNotificationResponse;
import org.openapis.openapi.models.operations.ListNotificationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListNotificationRequest req = new ListNotificationRequest("sit") {{
                log = 479385L;
                messageDate = LocalDate.parse("2022-02-01");
                messageDateLessThan = LocalDate.parse("2022-12-13");
                messageDateGreaterThan = LocalDate.parse("2022-06-01");
                page = 755106L;
                pageSize = 715053L;
                pageToken = "voluptatem";
            }};            

            ListNotificationResponse res = sdk.sdk.listNotification(req, new ListNotificationSecurity("autem", "esse") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listNotificationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOutgoingCallerId

Retrieve a list of outgoing-caller-ids belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOutgoingCallerIdRequest;
import org.openapis.openapi.models.operations.ListOutgoingCallerIdResponse;
import org.openapis.openapi.models.operations.ListOutgoingCallerIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListOutgoingCallerIdRequest req = new ListOutgoingCallerIdRequest("dolores") {{
                friendlyName = "assumenda";
                page = 107210L;
                pageSize = 668606L;
                pageToken = "facere";
                phoneNumber = "corrupti";
            }};            

            ListOutgoingCallerIdResponse res = sdk.sdk.listOutgoingCallerId(req, new ListOutgoingCallerIdSecurity("molestiae", "provident") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listOutgoingCallerIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listParticipant

Retrieve a list of participants belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListParticipantRequest;
import org.openapis.openapi.models.operations.ListParticipantResponse;
import org.openapis.openapi.models.operations.ListParticipantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListParticipantRequest req = new ListParticipantRequest("accusamus", "necessitatibus") {{
                coaching = false;
                hold = false;
                muted = false;
                page = 733289L;
                pageSize = 575078L;
                pageToken = "ea";
            }};            

            ListParticipantResponse res = sdk.sdk.listParticipant(req, new ListParticipantSecurity("autem", "ipsam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listParticipantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listQueue

Retrieve a list of queues belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListQueueRequest;
import org.openapis.openapi.models.operations.ListQueueResponse;
import org.openapis.openapi.models.operations.ListQueueSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListQueueRequest req = new ListQueueRequest("rerum") {{
                page = 515638L;
                pageSize = 357207L;
                pageToken = "officiis";
            }};            

            ListQueueResponse res = sdk.sdk.listQueue(req, new ListQueueSecurity("voluptatibus", "cum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listQueueResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRecording

Retrieve a list of recordings belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRecordingRequest;
import org.openapis.openapi.models.operations.ListRecordingResponse;
import org.openapis.openapi.models.operations.ListRecordingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListRecordingRequest req = new ListRecordingRequest("at") {{
                callSid = "alias";
                conferenceSid = "quia";
                dateCreated = OffsetDateTime.parse("2021-08-19T14:07:01.740Z");
                dateCreatedLessThan = OffsetDateTime.parse("2022-11-24T16:37:12.153Z");
                dateCreatedGreaterThan = OffsetDateTime.parse("2021-03-25T19:10:06.582Z");
                includeSoftDeleted = false;
                page = 177005L;
                pageSize = 844854L;
                pageToken = "odio";
            }};            

            ListRecordingResponse res = sdk.sdk.listRecording(req, new ListRecordingSecurity("praesentium", "odit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listRecordingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRecordingAddOnResult

Retrieve a list of results belonging to the recording

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRecordingAddOnResultRequest;
import org.openapis.openapi.models.operations.ListRecordingAddOnResultResponse;
import org.openapis.openapi.models.operations.ListRecordingAddOnResultSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListRecordingAddOnResultRequest req = new ListRecordingAddOnResultRequest("explicabo", "corporis") {{
                page = 621473L;
                pageSize = 937117L;
                pageToken = "adipisci";
            }};            

            ListRecordingAddOnResultResponse res = sdk.sdk.listRecordingAddOnResult(req, new ListRecordingAddOnResultSecurity("recusandae", "similique") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listRecordingAddOnResultResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRecordingAddOnResultPayload

Retrieve a list of payloads belonging to the AddOnResult

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRecordingAddOnResultPayloadRequest;
import org.openapis.openapi.models.operations.ListRecordingAddOnResultPayloadResponse;
import org.openapis.openapi.models.operations.ListRecordingAddOnResultPayloadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListRecordingAddOnResultPayloadRequest req = new ListRecordingAddOnResultPayloadRequest("ut", "quidem", "quis") {{
                page = 106255L;
                pageSize = 600213L;
                pageToken = "molestiae";
            }};            

            ListRecordingAddOnResultPayloadResponse res = sdk.sdk.listRecordingAddOnResultPayload(req, new ListRecordingAddOnResultPayloadSecurity("delectus", "cupiditate") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listRecordingAddOnResultPayloadResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRecordingTranscription

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRecordingTranscriptionRequest;
import org.openapis.openapi.models.operations.ListRecordingTranscriptionResponse;
import org.openapis.openapi.models.operations.ListRecordingTranscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListRecordingTranscriptionRequest req = new ListRecordingTranscriptionRequest("fugit", "numquam") {{
                page = 256916L;
                pageSize = 201010L;
                pageToken = "at";
            }};            

            ListRecordingTranscriptionResponse res = sdk.sdk.listRecordingTranscription(req, new ListRecordingTranscriptionSecurity("officia", "dignissimos") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listRecordingTranscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listShortCode

Retrieve a list of short-codes belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListShortCodeRequest;
import org.openapis.openapi.models.operations.ListShortCodeResponse;
import org.openapis.openapi.models.operations.ListShortCodeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListShortCodeRequest req = new ListShortCodeRequest("optio") {{
                friendlyName = "necessitatibus";
                page = 359111L;
                pageSize = 185518L;
                pageToken = "expedita";
                shortCode = "voluptatum";
            }};            

            ListShortCodeResponse res = sdk.sdk.listShortCode(req, new ListShortCodeSecurity("cupiditate", "minima") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listShortCodeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSigningKey

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSigningKeyRequest;
import org.openapis.openapi.models.operations.ListSigningKeyResponse;
import org.openapis.openapi.models.operations.ListSigningKeySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSigningKeyRequest req = new ListSigningKeyRequest("placeat") {{
                page = 316542L;
                pageSize = 204072L;
                pageToken = "in";
            }};            

            ListSigningKeyResponse res = sdk.sdk.listSigningKey(req, new ListSigningKeySecurity("minus", "eum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSigningKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSipAuthCallsCredentialListMapping

Retrieve a list of credential list mappings belonging to the domain used in the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSipAuthCallsCredentialListMappingRequest;
import org.openapis.openapi.models.operations.ListSipAuthCallsCredentialListMappingResponse;
import org.openapis.openapi.models.operations.ListSipAuthCallsCredentialListMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSipAuthCallsCredentialListMappingRequest req = new ListSipAuthCallsCredentialListMappingRequest("modi", "corporis") {{
                page = 298264L;
                pageSize = 914971L;
                pageToken = "maiores";
            }};            

            ListSipAuthCallsCredentialListMappingResponse res = sdk.sdk.listSipAuthCallsCredentialListMapping(req, new ListSipAuthCallsCredentialListMappingSecurity("tempore", "aperiam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSipAuthCallsCredentialListMappingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSipAuthCallsIpAccessControlListMapping

Retrieve a list of IP Access Control List mappings belonging to the domain used in the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSipAuthCallsIpAccessControlListMappingRequest;
import org.openapis.openapi.models.operations.ListSipAuthCallsIpAccessControlListMappingResponse;
import org.openapis.openapi.models.operations.ListSipAuthCallsIpAccessControlListMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSipAuthCallsIpAccessControlListMappingRequest req = new ListSipAuthCallsIpAccessControlListMappingRequest("libero", "ratione") {{
                page = 289913L;
                pageSize = 520875L;
                pageToken = "occaecati";
            }};            

            ListSipAuthCallsIpAccessControlListMappingResponse res = sdk.sdk.listSipAuthCallsIpAccessControlListMapping(req, new ListSipAuthCallsIpAccessControlListMappingSecurity("voluptas", "quo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSipAuthCallsIpAccessControlListMappingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSipAuthRegistrationsCredentialListMapping

Retrieve a list of credential list mappings belonging to the domain used in the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSipAuthRegistrationsCredentialListMappingRequest;
import org.openapis.openapi.models.operations.ListSipAuthRegistrationsCredentialListMappingResponse;
import org.openapis.openapi.models.operations.ListSipAuthRegistrationsCredentialListMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSipAuthRegistrationsCredentialListMappingRequest req = new ListSipAuthRegistrationsCredentialListMappingRequest("velit", "minus") {{
                page = 684553L;
                pageSize = 344530L;
                pageToken = "est";
            }};            

            ListSipAuthRegistrationsCredentialListMappingResponse res = sdk.sdk.listSipAuthRegistrationsCredentialListMapping(req, new ListSipAuthRegistrationsCredentialListMappingSecurity("impedit", "delectus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSipAuthRegistrationsCredentialListMappingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSipCredential

Retrieve a list of credentials.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSipCredentialRequest;
import org.openapis.openapi.models.operations.ListSipCredentialResponse;
import org.openapis.openapi.models.operations.ListSipCredentialSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSipCredentialRequest req = new ListSipCredentialRequest("tempore", "vero") {{
                page = 141506L;
                pageSize = 997437L;
                pageToken = "pariatur";
            }};            

            ListSipCredentialResponse res = sdk.sdk.listSipCredential(req, new ListSipCredentialSecurity("nemo", "reprehenderit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSipCredentialResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSipCredentialList

Get All Credential Lists

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSipCredentialListRequest;
import org.openapis.openapi.models.operations.ListSipCredentialListResponse;
import org.openapis.openapi.models.operations.ListSipCredentialListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSipCredentialListRequest req = new ListSipCredentialListRequest("aperiam") {{
                page = 486410L;
                pageSize = 325297L;
                pageToken = "in";
            }};            

            ListSipCredentialListResponse res = sdk.sdk.listSipCredentialList(req, new ListSipCredentialListSecurity("ducimus", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSipCredentialListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSipCredentialListMapping

Read multiple CredentialListMapping resources from an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSipCredentialListMappingRequest;
import org.openapis.openapi.models.operations.ListSipCredentialListMappingResponse;
import org.openapis.openapi.models.operations.ListSipCredentialListMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSipCredentialListMappingRequest req = new ListSipCredentialListMappingRequest("dolores", "error") {{
                page = 85076L;
                pageSize = 498180L;
                pageToken = "voluptate";
            }};            

            ListSipCredentialListMappingResponse res = sdk.sdk.listSipCredentialListMapping(req, new ListSipCredentialListMappingSecurity("pariatur", "itaque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSipCredentialListMappingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSipDomain

Retrieve a list of domains belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSipDomainRequest;
import org.openapis.openapi.models.operations.ListSipDomainResponse;
import org.openapis.openapi.models.operations.ListSipDomainSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSipDomainRequest req = new ListSipDomainRequest("similique") {{
                page = 763165L;
                pageSize = 401428L;
                pageToken = "quaerat";
            }};            

            ListSipDomainResponse res = sdk.sdk.listSipDomain(req, new ListSipDomainSecurity("commodi", "officiis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSipDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSipIpAccessControlList

Retrieve a list of IpAccessControlLists that belong to the account used to make the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSipIpAccessControlListRequest;
import org.openapis.openapi.models.operations.ListSipIpAccessControlListResponse;
import org.openapis.openapi.models.operations.ListSipIpAccessControlListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSipIpAccessControlListRequest req = new ListSipIpAccessControlListRequest("placeat") {{
                page = 697274L;
                pageSize = 348192L;
                pageToken = "quam";
            }};            

            ListSipIpAccessControlListResponse res = sdk.sdk.listSipIpAccessControlList(req, new ListSipIpAccessControlListSecurity("dolorem", "modi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSipIpAccessControlListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSipIpAccessControlListMapping

Retrieve a list of IpAccessControlListMapping resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSipIpAccessControlListMappingRequest;
import org.openapis.openapi.models.operations.ListSipIpAccessControlListMappingResponse;
import org.openapis.openapi.models.operations.ListSipIpAccessControlListMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSipIpAccessControlListMappingRequest req = new ListSipIpAccessControlListMappingRequest("ipsa", "sint") {{
                page = 876027L;
                pageSize = 194901L;
                pageToken = "repudiandae";
            }};            

            ListSipIpAccessControlListMappingResponse res = sdk.sdk.listSipIpAccessControlListMapping(req, new ListSipIpAccessControlListMappingSecurity("cum", "dicta") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSipIpAccessControlListMappingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSipIpAddress

Read multiple IpAddress resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSipIpAddressRequest;
import org.openapis.openapi.models.operations.ListSipIpAddressResponse;
import org.openapis.openapi.models.operations.ListSipIpAddressSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSipIpAddressRequest req = new ListSipIpAddressRequest("earum", "veniam") {{
                page = 659268L;
                pageSize = 175372L;
                pageToken = "nam";
            }};            

            ListSipIpAddressResponse res = sdk.sdk.listSipIpAddress(req, new ListSipIpAddressSecurity("dicta", "consequuntur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSipIpAddressResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTranscription

Retrieve a list of transcriptions belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTranscriptionRequest;
import org.openapis.openapi.models.operations.ListTranscriptionResponse;
import org.openapis.openapi.models.operations.ListTranscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListTranscriptionRequest req = new ListTranscriptionRequest("necessitatibus") {{
                page = 748224L;
                pageSize = 56877L;
                pageToken = "ducimus";
            }};            

            ListTranscriptionResponse res = sdk.sdk.listTranscription(req, new ListTranscriptionSecurity("maiores", "veritatis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listTranscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUsageRecord

Retrieve a list of usage-records belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsageRecordRequest;
import org.openapis.openapi.models.operations.ListUsageRecordResponse;
import org.openapis.openapi.models.operations.ListUsageRecordSecurity;
import org.openapis.openapi.models.shared.UsageRecordEnumCategoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUsageRecordRequest req = new ListUsageRecordRequest("quasi") {{
                category = UsageRecordEnumCategoryEnum.MMS_OUTBOUND;
                endDate = LocalDate.parse("2020-10-24");
                includeSubaccounts = false;
                page = 566506L;
                pageSize = 578210L;
                pageToken = "nemo";
                startDate = LocalDate.parse("2022-08-29");
            }};            

            ListUsageRecordResponse res = sdk.sdk.listUsageRecord(req, new ListUsageRecordSecurity("doloribus", "eligendi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUsageRecordResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUsageRecordAllTime

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsageRecordAllTimeRequest;
import org.openapis.openapi.models.operations.ListUsageRecordAllTimeResponse;
import org.openapis.openapi.models.operations.ListUsageRecordAllTimeSecurity;
import org.openapis.openapi.models.shared.UsageRecordAllTimeEnumCategoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUsageRecordAllTimeRequest req = new ListUsageRecordAllTimeRequest("sint") {{
                category = UsageRecordAllTimeEnumCategoryEnum.MARKETPLACE_TWILIO_CALLER_NAME_LOOKUP_US;
                endDate = LocalDate.parse("2021-01-11");
                includeSubaccounts = false;
                page = 559774L;
                pageSize = 517326L;
                pageToken = "molestias";
                startDate = LocalDate.parse("2022-12-13");
            }};            

            ListUsageRecordAllTimeResponse res = sdk.sdk.listUsageRecordAllTime(req, new ListUsageRecordAllTimeSecurity("saepe", "architecto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUsageRecordAllTimeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUsageRecordDaily

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsageRecordDailyRequest;
import org.openapis.openapi.models.operations.ListUsageRecordDailyResponse;
import org.openapis.openapi.models.operations.ListUsageRecordDailySecurity;
import org.openapis.openapi.models.shared.UsageRecordDailyEnumCategoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUsageRecordDailyRequest req = new ListUsageRecordDailyRequest("quos") {{
                category = UsageRecordDailyEnumCategoryEnum.SHORTCODES_VANITY;
                endDate = LocalDate.parse("2020-10-21");
                includeSubaccounts = false;
                page = 725574L;
                pageSize = 244032L;
                pageToken = "doloremque";
                startDate = LocalDate.parse("2020-09-06");
            }};            

            ListUsageRecordDailyResponse res = sdk.sdk.listUsageRecordDaily(req, new ListUsageRecordDailySecurity("cum", "ipsum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUsageRecordDailyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUsageRecordLastMonth

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsageRecordLastMonthRequest;
import org.openapis.openapi.models.operations.ListUsageRecordLastMonthResponse;
import org.openapis.openapi.models.operations.ListUsageRecordLastMonthSecurity;
import org.openapis.openapi.models.shared.UsageRecordLastMonthEnumCategoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUsageRecordLastMonthRequest req = new ListUsageRecordLastMonthRequest("adipisci") {{
                category = UsageRecordLastMonthEnumCategoryEnum.WIRELESS_USAGE_DATA_AFRICA;
                endDate = LocalDate.parse("2022-11-30");
                includeSubaccounts = false;
                page = 339756L;
                pageSize = 333072L;
                pageToken = "libero";
                startDate = LocalDate.parse("2022-06-01");
            }};            

            ListUsageRecordLastMonthResponse res = sdk.sdk.listUsageRecordLastMonth(req, new ListUsageRecordLastMonthSecurity("molestiae", "eligendi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUsageRecordLastMonthResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUsageRecordMonthly

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsageRecordMonthlyRequest;
import org.openapis.openapi.models.operations.ListUsageRecordMonthlyResponse;
import org.openapis.openapi.models.operations.ListUsageRecordMonthlySecurity;
import org.openapis.openapi.models.shared.UsageRecordMonthlyEnumCategoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUsageRecordMonthlyRequest req = new ListUsageRecordMonthlyRequest("possimus") {{
                category = UsageRecordMonthlyEnumCategoryEnum.MARKETPLACE_IBM_WATSON_TONE_ANALYZER;
                endDate = LocalDate.parse("2022-01-25");
                includeSubaccounts = false;
                page = 150935L;
                pageSize = 993002L;
                pageToken = "veniam";
                startDate = LocalDate.parse("2022-03-09");
            }};            

            ListUsageRecordMonthlyResponse res = sdk.sdk.listUsageRecordMonthly(req, new ListUsageRecordMonthlySecurity("laudantium", "odit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUsageRecordMonthlyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUsageRecordThisMonth

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsageRecordThisMonthRequest;
import org.openapis.openapi.models.operations.ListUsageRecordThisMonthResponse;
import org.openapis.openapi.models.operations.ListUsageRecordThisMonthSecurity;
import org.openapis.openapi.models.shared.UsageRecordThisMonthEnumCategoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUsageRecordThisMonthRequest req = new ListUsageRecordThisMonthRequest("pariatur") {{
                category = UsageRecordThisMonthEnumCategoryEnum.MARKETPLACE_DIGITAL_SEGMENT_BUSINESS_INFO;
                endDate = LocalDate.parse("2022-12-06");
                includeSubaccounts = false;
                page = 242637L;
                pageSize = 705710L;
                pageToken = "tempore";
                startDate = LocalDate.parse("2022-01-09");
            }};            

            ListUsageRecordThisMonthResponse res = sdk.sdk.listUsageRecordThisMonth(req, new ListUsageRecordThisMonthSecurity("quaerat", "blanditiis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUsageRecordThisMonthResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUsageRecordToday

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsageRecordTodayRequest;
import org.openapis.openapi.models.operations.ListUsageRecordTodayResponse;
import org.openapis.openapi.models.operations.ListUsageRecordTodaySecurity;
import org.openapis.openapi.models.shared.UsageRecordTodayEnumCategoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUsageRecordTodayRequest req = new ListUsageRecordTodayRequest("distinctio") {{
                category = UsageRecordTodayEnumCategoryEnum.MMS_OUTBOUND_SHORTCODE;
                endDate = LocalDate.parse("2022-08-10");
                includeSubaccounts = false;
                page = 727771L;
                pageSize = 794507L;
                pageToken = "facere";
                startDate = LocalDate.parse("2022-07-26");
            }};            

            ListUsageRecordTodayResponse res = sdk.sdk.listUsageRecordToday(req, new ListUsageRecordTodaySecurity("ad", "voluptatibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUsageRecordTodayResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUsageRecordYearly

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsageRecordYearlyRequest;
import org.openapis.openapi.models.operations.ListUsageRecordYearlyResponse;
import org.openapis.openapi.models.operations.ListUsageRecordYearlySecurity;
import org.openapis.openapi.models.shared.UsageRecordYearlyEnumCategoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUsageRecordYearlyRequest req = new ListUsageRecordYearlyRequest("voluptatibus") {{
                category = UsageRecordYearlyEnumCategoryEnum.GROUP_ROOMS_ENCRYPTED_MEDIA_RECORDED;
                endDate = LocalDate.parse("2022-02-16");
                includeSubaccounts = false;
                page = 700928L;
                pageSize = 179795L;
                pageToken = "reprehenderit";
                startDate = LocalDate.parse("2022-10-17");
            }};            

            ListUsageRecordYearlyResponse res = sdk.sdk.listUsageRecordYearly(req, new ListUsageRecordYearlySecurity("iusto", "est") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUsageRecordYearlyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUsageRecordYesterday

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsageRecordYesterdayRequest;
import org.openapis.openapi.models.operations.ListUsageRecordYesterdayResponse;
import org.openapis.openapi.models.operations.ListUsageRecordYesterdaySecurity;
import org.openapis.openapi.models.shared.UsageRecordYesterdayEnumCategoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUsageRecordYesterdayRequest req = new ListUsageRecordYesterdayRequest("rem") {{
                category = UsageRecordYesterdayEnumCategoryEnum.TURNMEGABYTES_AUSTRALIA;
                endDate = LocalDate.parse("2021-03-10");
                includeSubaccounts = false;
                page = 889448L;
                pageSize = 495617L;
                pageToken = "dolor";
                startDate = LocalDate.parse("2022-05-18");
            }};            

            ListUsageRecordYesterdayResponse res = sdk.sdk.listUsageRecordYesterday(req, new ListUsageRecordYesterdaySecurity("porro", "vitae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUsageRecordYesterdayResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUsageTrigger

Retrieve a list of usage-triggers belonging to the account used to make the request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsageTriggerRequest;
import org.openapis.openapi.models.operations.ListUsageTriggerResponse;
import org.openapis.openapi.models.operations.ListUsageTriggerSecurity;
import org.openapis.openapi.models.shared.UsageTriggerEnumRecurringEnum;
import org.openapis.openapi.models.shared.UsageTriggerEnumTriggerFieldEnum;
import org.openapis.openapi.models.shared.UsageTriggerEnumUsageCategoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUsageTriggerRequest req = new ListUsageTriggerRequest("dignissimos") {{
                page = 458970L;
                pageSize = 854115L;
                pageToken = "ad";
                recurring = UsageTriggerEnumRecurringEnum.DAILY;
                triggerBy = UsageTriggerEnumTriggerFieldEnum.COUNT;
                usageCategory = UsageTriggerEnumUsageCategoryEnum.WIRELESS_USAGE_DATA_POOLED_DOWNLINK;
            }};            

            ListUsageTriggerResponse res = sdk.sdk.listUsageTrigger(req, new ListUsageTriggerSecurity("iusto", "dignissimos") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listUsageTriggerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAccount

Modify the properties of a given Account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAccountRequest;
import org.openapis.openapi.models.operations.UpdateAccountResponse;
import org.openapis.openapi.models.operations.UpdateAccountSecurity;
import org.openapis.openapi.models.operations.UpdateAccountUpdateAccountRequest;
import org.openapis.openapi.models.shared.AccountEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAccountRequest req = new UpdateAccountRequest("libero") {{
                requestBody = new UpdateAccountUpdateAccountRequest() {{
                    friendlyName = "illo";
                    status = AccountEnumStatusEnum.ACTIVE;
                }};;
            }};            

            UpdateAccountResponse res = sdk.sdk.updateAccount(req, new UpdateAccountSecurity("incidunt", "accusamus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010Account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAddress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAddressRequest;
import org.openapis.openapi.models.operations.UpdateAddressResponse;
import org.openapis.openapi.models.operations.UpdateAddressSecurity;
import org.openapis.openapi.models.operations.UpdateAddressUpdateAddressRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAddressRequest req = new UpdateAddressRequest("saepe", "tempore") {{
                requestBody = new UpdateAddressUpdateAddressRequest() {{
                    autoCorrectAddress = false;
                    city = "East Waldo";
                    customerName = "earum";
                    emergencyEnabled = false;
                    friendlyName = "reprehenderit";
                    postalCode = "39714-5028";
                    region = "aliquam";
                    street = "559 Quinten Cove";
                    streetSecondary = "nam";
                }};;
            }};            

            UpdateAddressResponse res = sdk.sdk.updateAddress(req, new UpdateAddressSecurity("expedita", "quas") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateApplication

Updates the application's properties

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateApplicationRequest;
import org.openapis.openapi.models.operations.UpdateApplicationResponse;
import org.openapis.openapi.models.operations.UpdateApplicationSecurity;
import org.openapis.openapi.models.operations.UpdateApplicationUpdateApplicationRequest;
import org.openapis.openapi.models.operations.UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateApplicationUpdateApplicationRequestSmsMethodEnum;
import org.openapis.openapi.models.operations.UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateApplicationUpdateApplicationRequestVoiceMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateApplicationRequest req = new UpdateApplicationRequest("provident", "repudiandae") {{
                requestBody = new UpdateApplicationUpdateApplicationRequest() {{
                    apiVersion = "rerum";
                    friendlyName = "dignissimos";
                    messageStatusCallback = "http://trustworthy-pantologist.org";
                    publicApplicationConnectEnabled = false;
                    smsFallbackMethod = UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum.POST;
                    smsFallbackUrl = "http://immediate-savings.info";
                    smsMethod = UpdateApplicationUpdateApplicationRequestSmsMethodEnum.HEAD;
                    smsStatusCallback = "http://fuzzy-bakeware.biz";
                    smsUrl = "https://lucky-procurement.net";
                    statusCallback = "http://bumpy-butane.name";
                    statusCallbackMethod = UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum.HEAD;
                    voiceCallerIdLookup = false;
                    voiceFallbackMethod = UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum.DELETE;
                    voiceFallbackUrl = "http://elementary-necessity.net";
                    voiceMethod = UpdateApplicationUpdateApplicationRequestVoiceMethodEnum.DELETE;
                    voiceUrl = "https://vague-admire.info";
                }};;
            }};            

            UpdateApplicationResponse res = sdk.sdk.updateApplication(req, new UpdateApplicationSecurity("molestiae", "itaque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountApplication != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCall

Initiates a call redirect or terminates a call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCallRequest;
import org.openapis.openapi.models.operations.UpdateCallResponse;
import org.openapis.openapi.models.operations.UpdateCallSecurity;
import org.openapis.openapi.models.operations.UpdateCallUpdateCallRequest;
import org.openapis.openapi.models.operations.UpdateCallUpdateCallRequestFallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateCallUpdateCallRequestMethodEnum;
import org.openapis.openapi.models.operations.UpdateCallUpdateCallRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.shared.CallEnumUpdateStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCallRequest req = new UpdateCallRequest("facilis", "corrupti") {{
                requestBody = new UpdateCallUpdateCallRequest() {{
                    fallbackMethod = UpdateCallUpdateCallRequestFallbackMethodEnum.HEAD;
                    fallbackUrl = "https://ultimate-cold.name";
                    method = UpdateCallUpdateCallRequestMethodEnum.HEAD;
                    status = CallEnumUpdateStatusEnum.CANCELED;
                    statusCallback = "http://elaborate-camp.org";
                    statusCallbackMethod = UpdateCallUpdateCallRequestStatusCallbackMethodEnum.GET;
                    timeLimit = 582320L;
                    twiml = "atque";
                    url = "http://triangular-duel.net";
                }};;
            }};            

            UpdateCallResponse res = sdk.sdk.updateCall(req, new UpdateCallSecurity("esse", "voluptatem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountCall != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCallFeedback

Update a Feedback resource for a call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCallFeedbackRequest;
import org.openapis.openapi.models.operations.UpdateCallFeedbackResponse;
import org.openapis.openapi.models.operations.UpdateCallFeedbackSecurity;
import org.openapis.openapi.models.operations.UpdateCallFeedbackUpdateCallFeedbackRequest;
import org.openapis.openapi.models.shared.CallFeedbackEnumIssuesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCallFeedbackRequest req = new UpdateCallFeedbackRequest("perferendis", "rerum") {{
                requestBody = new UpdateCallFeedbackUpdateCallFeedbackRequest() {{
                    issue = new org.openapis.openapi.models.shared.CallFeedbackEnumIssuesEnum[]{{
                        add(CallFeedbackEnumIssuesEnum.AUDIO_LATENCY),
                        add(CallFeedbackEnumIssuesEnum.IMPERFECT_AUDIO),
                    }};
                    qualityScore = 998026L;
                }};;
            }};            

            UpdateCallFeedbackResponse res = sdk.sdk.updateCallFeedback(req, new UpdateCallFeedbackSecurity("velit", "porro") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountCallCallFeedback != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCallRecording

Changes the status of the recording to paused, stopped, or in-progress. Note: Pass `Twilio.CURRENT` instead of recording sid to reference current active recording.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCallRecordingRequest;
import org.openapis.openapi.models.operations.UpdateCallRecordingResponse;
import org.openapis.openapi.models.operations.UpdateCallRecordingSecurity;
import org.openapis.openapi.models.operations.UpdateCallRecordingUpdateCallRecordingRequest;
import org.openapis.openapi.models.shared.CallRecordingEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCallRecordingRequest req = new UpdateCallRecordingRequest("provident", "consectetur", "eligendi") {{
                requestBody = new UpdateCallRecordingUpdateCallRecordingRequest(CallRecordingEnumStatusEnum.STOPPED) {{
                    pauseBehavior = "consectetur";
                }};;
            }};            

            UpdateCallRecordingResponse res = sdk.sdk.updateCallRecording(req, new UpdateCallRecordingSecurity("soluta", "natus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountCallCallRecording != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConference

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConferenceRequest;
import org.openapis.openapi.models.operations.UpdateConferenceResponse;
import org.openapis.openapi.models.operations.UpdateConferenceSecurity;
import org.openapis.openapi.models.operations.UpdateConferenceUpdateConferenceRequest;
import org.openapis.openapi.models.operations.UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum;
import org.openapis.openapi.models.shared.ConferenceEnumUpdateStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateConferenceRequest req = new UpdateConferenceRequest("temporibus", "officia") {{
                requestBody = new UpdateConferenceUpdateConferenceRequest() {{
                    announceMethod = UpdateConferenceUpdateConferenceRequestAnnounceMethodEnum.GET;
                    announceUrl = "https://complex-screen.org";
                    status = ConferenceEnumUpdateStatusEnum.COMPLETED;
                }};;
            }};            

            UpdateConferenceResponse res = sdk.sdk.updateConference(req, new UpdateConferenceSecurity("illum", "laborum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountConference != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConferenceRecording

Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConferenceRecordingRequest;
import org.openapis.openapi.models.operations.UpdateConferenceRecordingResponse;
import org.openapis.openapi.models.operations.UpdateConferenceRecordingSecurity;
import org.openapis.openapi.models.operations.UpdateConferenceRecordingUpdateConferenceRecordingRequest;
import org.openapis.openapi.models.shared.ConferenceRecordingEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateConferenceRecordingRequest req = new UpdateConferenceRecordingRequest("dignissimos", "vero", "qui") {{
                requestBody = new UpdateConferenceRecordingUpdateConferenceRecordingRequest(ConferenceRecordingEnumStatusEnum.PAUSED) {{
                    pauseBehavior = "repellat";
                }};;
            }};            

            UpdateConferenceRecordingResponse res = sdk.sdk.updateConferenceRecording(req, new UpdateConferenceRecordingSecurity("explicabo", "explicabo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountConferenceConferenceRecording != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConnectApp

Update a connect-app with the specified parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConnectAppRequest;
import org.openapis.openapi.models.operations.UpdateConnectAppResponse;
import org.openapis.openapi.models.operations.UpdateConnectAppSecurity;
import org.openapis.openapi.models.operations.UpdateConnectAppUpdateConnectAppRequest;
import org.openapis.openapi.models.operations.UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum;
import org.openapis.openapi.models.shared.ConnectAppEnumPermissionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateConnectAppRequest req = new UpdateConnectAppRequest("exercitationem", "nihil") {{
                requestBody = new UpdateConnectAppUpdateConnectAppRequest() {{
                    authorizeRedirectUrl = "http://bewitched-beak.org";
                    companyName = "deserunt";
                    deauthorizeCallbackMethod = UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum.DELETE;
                    deauthorizeCallbackUrl = "http://satisfied-imagination.info";
                    description = "labore";
                    friendlyName = "numquam";
                    homepageUrl = "https://famous-imagination.com";
                    permissions = new org.openapis.openapi.models.shared.ConnectAppEnumPermissionEnum[]{{
                        add(ConnectAppEnumPermissionEnum.POST_ALL),
                        add(ConnectAppEnumPermissionEnum.GET_ALL),
                        add(ConnectAppEnumPermissionEnum.GET_ALL),
                        add(ConnectAppEnumPermissionEnum.POST_ALL),
                    }};
                }};;
            }};            

            UpdateConnectAppResponse res = sdk.sdk.updateConnectApp(req, new UpdateConnectAppSecurity("enim", "voluptate") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountConnectApp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateIncomingPhoneNumber

Update an incoming-phone-number instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateIncomingPhoneNumberRequest;
import org.openapis.openapi.models.operations.UpdateIncomingPhoneNumberResponse;
import org.openapis.openapi.models.operations.UpdateIncomingPhoneNumberSecurity;
import org.openapis.openapi.models.operations.UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest;
import org.openapis.openapi.models.operations.UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum;
import org.openapis.openapi.models.operations.UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum;
import org.openapis.openapi.models.shared.IncomingPhoneNumberEnumEmergencyStatusEnum;
import org.openapis.openapi.models.shared.IncomingPhoneNumberEnumVoiceReceiveModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateIncomingPhoneNumberRequest req = new UpdateIncomingPhoneNumberRequest("similique", "minima") {{
                requestBody = new UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest() {{
                    accountSid = "libero";
                    addressSid = "magnam";
                    apiVersion = "sit";
                    bundleSid = "modi";
                    emergencyAddressSid = "eum";
                    emergencyStatus = IncomingPhoneNumberEnumEmergencyStatusEnum.ACTIVE;
                    friendlyName = "mollitia";
                    identitySid = "dignissimos";
                    smsApplicationSid = "fugiat";
                    smsFallbackMethod = UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum.POST;
                    smsFallbackUrl = "http://gifted-warmth.com";
                    smsMethod = UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum.GET;
                    smsUrl = "http://adolescent-tog.info";
                    statusCallback = "http://expert-polyester.net";
                    statusCallbackMethod = UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum.POST;
                    trunkSid = "consectetur";
                    voiceApplicationSid = "nesciunt";
                    voiceCallerIdLookup = false;
                    voiceFallbackMethod = UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum.GET;
                    voiceFallbackUrl = "https://spotless-calendar.net";
                    voiceMethod = UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum.POST;
                    voiceReceiveMode = IncomingPhoneNumberEnumVoiceReceiveModeEnum.FAX;
                    voiceUrl = "http://rotten-cuff-link.info";
                }};;
            }};            

            UpdateIncomingPhoneNumberResponse res = sdk.sdk.updateIncomingPhoneNumber(req, new UpdateIncomingPhoneNumberSecurity("fuga", "alias") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountIncomingPhoneNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateKey

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateKeyRequest;
import org.openapis.openapi.models.operations.UpdateKeyResponse;
import org.openapis.openapi.models.operations.UpdateKeySecurity;
import org.openapis.openapi.models.operations.UpdateKeyUpdateKeyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateKeyRequest req = new UpdateKeyRequest("rem", "aut") {{
                requestBody = new UpdateKeyUpdateKeyRequest() {{
                    friendlyName = "quos";
                }};;
            }};            

            UpdateKeyResponse res = sdk.sdk.updateKey(req, new UpdateKeySecurity("laudantium", "repellendus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMember

Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMemberRequest;
import org.openapis.openapi.models.operations.UpdateMemberResponse;
import org.openapis.openapi.models.operations.UpdateMemberSecurity;
import org.openapis.openapi.models.operations.UpdateMemberUpdateMemberRequest;
import org.openapis.openapi.models.operations.UpdateMemberUpdateMemberRequestMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateMemberRequest req = new UpdateMemberRequest("veritatis", "quae", "eaque") {{
                requestBody = new UpdateMemberUpdateMemberRequest("https://white-perpendicular.org") {{
                    method = UpdateMemberUpdateMemberRequestMethodEnum.PATCH;
                }};;
            }};            

            UpdateMemberResponse res = sdk.sdk.updateMember(req, new UpdateMemberSecurity("sed", "voluptatem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountQueueMember != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMessage

To redact a message-body from a post-flight message record, post to the message instance resource with an empty body

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMessageRequest;
import org.openapis.openapi.models.operations.UpdateMessageResponse;
import org.openapis.openapi.models.operations.UpdateMessageSecurity;
import org.openapis.openapi.models.operations.UpdateMessageUpdateMessageRequest;
import org.openapis.openapi.models.shared.MessageEnumUpdateStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateMessageRequest req = new UpdateMessageRequest("alias", "eveniet") {{
                requestBody = new UpdateMessageUpdateMessageRequest() {{
                    body = "hic";
                    status = MessageEnumUpdateStatusEnum.CANCELED;
                }};;
            }};            

            UpdateMessageResponse res = sdk.sdk.updateMessage(req, new UpdateMessageSecurity("voluptatem", "incidunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountMessage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOutgoingCallerId

Updates the caller-id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOutgoingCallerIdRequest;
import org.openapis.openapi.models.operations.UpdateOutgoingCallerIdResponse;
import org.openapis.openapi.models.operations.UpdateOutgoingCallerIdSecurity;
import org.openapis.openapi.models.operations.UpdateOutgoingCallerIdUpdateOutgoingCallerIdRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateOutgoingCallerIdRequest req = new UpdateOutgoingCallerIdRequest("qui", "qui") {{
                requestBody = new UpdateOutgoingCallerIdUpdateOutgoingCallerIdRequest() {{
                    friendlyName = "necessitatibus";
                }};;
            }};            

            UpdateOutgoingCallerIdResponse res = sdk.sdk.updateOutgoingCallerId(req, new UpdateOutgoingCallerIdSecurity("harum", "explicabo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountOutgoingCallerId != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateParticipant

Update the properties of the participant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateParticipantRequest;
import org.openapis.openapi.models.operations.UpdateParticipantResponse;
import org.openapis.openapi.models.operations.UpdateParticipantSecurity;
import org.openapis.openapi.models.operations.UpdateParticipantUpdateParticipantRequest;
import org.openapis.openapi.models.operations.UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum;
import org.openapis.openapi.models.operations.UpdateParticipantUpdateParticipantRequestHoldMethodEnum;
import org.openapis.openapi.models.operations.UpdateParticipantUpdateParticipantRequestWaitMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateParticipantRequest req = new UpdateParticipantRequest("beatae", "aliquid", "modi") {{
                requestBody = new UpdateParticipantUpdateParticipantRequest() {{
                    announceMethod = UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum.PUT;
                    announceUrl = "https://negative-path.net";
                    beepOnExit = false;
                    callSidToCoach = "totam";
                    coaching = false;
                    endConferenceOnExit = false;
                    hold = false;
                    holdMethod = UpdateParticipantUpdateParticipantRequestHoldMethodEnum.GET;
                    holdUrl = "http://imaginative-schema.info";
                    muted = false;
                    waitMethod = UpdateParticipantUpdateParticipantRequestWaitMethodEnum.HEAD;
                    waitUrl = "http://wicked-zebrafish.org";
                }};;
            }};            

            UpdateParticipantResponse res = sdk.sdk.updateParticipant(req, new UpdateParticipantSecurity("laborum", "natus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountConferenceParticipant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePayments

update an instance of payments with different phases of payment flows.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePaymentsRequest;
import org.openapis.openapi.models.operations.UpdatePaymentsResponse;
import org.openapis.openapi.models.operations.UpdatePaymentsSecurity;
import org.openapis.openapi.models.operations.UpdatePaymentsUpdatePaymentsRequest;
import org.openapis.openapi.models.shared.PaymentsEnumCaptureEnum;
import org.openapis.openapi.models.shared.PaymentsEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePaymentsRequest req = new UpdatePaymentsRequest("accusamus", "doloremque", "nisi") {{
                requestBody = new UpdatePaymentsUpdatePaymentsRequest("rerum", "https://upright-derivation.name") {{
                    capture = PaymentsEnumCaptureEnum.PAYMENT_CARD_NUMBER;
                    status = PaymentsEnumStatusEnum.COMPLETE;
                }};;
            }};            

            UpdatePaymentsResponse res = sdk.sdk.updatePayments(req, new UpdatePaymentsSecurity("quisquam", "dicta") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountCallPayments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateQueue

Update the queue with the new parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateQueueRequest;
import org.openapis.openapi.models.operations.UpdateQueueResponse;
import org.openapis.openapi.models.operations.UpdateQueueSecurity;
import org.openapis.openapi.models.operations.UpdateQueueUpdateQueueRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateQueueRequest req = new UpdateQueueRequest("voluptatibus", "eligendi") {{
                requestBody = new UpdateQueueUpdateQueueRequest() {{
                    friendlyName = "quae";
                    maxSize = 885022L;
                }};;
            }};            

            UpdateQueueResponse res = sdk.sdk.updateQueue(req, new UpdateQueueSecurity("architecto", "architecto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountQueue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateShortCode

Update a short code with the following parameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateShortCodeRequest;
import org.openapis.openapi.models.operations.UpdateShortCodeResponse;
import org.openapis.openapi.models.operations.UpdateShortCodeSecurity;
import org.openapis.openapi.models.operations.UpdateShortCodeUpdateShortCodeRequest;
import org.openapis.openapi.models.operations.UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateShortCodeRequest req = new UpdateShortCodeRequest("enim", "optio") {{
                requestBody = new UpdateShortCodeUpdateShortCodeRequest() {{
                    apiVersion = "rem";
                    friendlyName = "perferendis";
                    smsFallbackMethod = UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnum.PUT;
                    smsFallbackUrl = "https://well-documented-order.com";
                    smsMethod = UpdateShortCodeUpdateShortCodeRequestSmsMethodEnum.PATCH;
                    smsUrl = "http://flustered-disaster.org";
                }};;
            }};            

            UpdateShortCodeResponse res = sdk.sdk.updateShortCode(req, new UpdateShortCodeSecurity("maxime", "modi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountShortCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSigningKey

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSigningKeyRequest;
import org.openapis.openapi.models.operations.UpdateSigningKeyResponse;
import org.openapis.openapi.models.operations.UpdateSigningKeySecurity;
import org.openapis.openapi.models.operations.UpdateSigningKeyUpdateSigningKeyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSigningKeyRequest req = new UpdateSigningKeyRequest("consequuntur", "assumenda") {{
                requestBody = new UpdateSigningKeyUpdateSigningKeyRequest() {{
                    friendlyName = "vero";
                }};;
            }};            

            UpdateSigningKeyResponse res = sdk.sdk.updateSigningKey(req, new UpdateSigningKeySecurity("doloribus", "impedit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSigningKey != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSipCredential

Update a credential resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSipCredentialRequest;
import org.openapis.openapi.models.operations.UpdateSipCredentialResponse;
import org.openapis.openapi.models.operations.UpdateSipCredentialSecurity;
import org.openapis.openapi.models.operations.UpdateSipCredentialUpdateSipCredentialRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSipCredentialRequest req = new UpdateSipCredentialRequest("porro", "accusamus", "totam") {{
                requestBody = new UpdateSipCredentialUpdateSipCredentialRequest() {{
                    password = "reiciendis";
                }};;
            }};            

            UpdateSipCredentialResponse res = sdk.sdk.updateSipCredential(req, new UpdateSipCredentialSecurity("ab", "sint") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipCredentialListSipCredential != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSipCredentialList

Update a Credential List

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSipCredentialListRequest;
import org.openapis.openapi.models.operations.UpdateSipCredentialListResponse;
import org.openapis.openapi.models.operations.UpdateSipCredentialListSecurity;
import org.openapis.openapi.models.operations.UpdateSipCredentialListUpdateSipCredentialListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSipCredentialListRequest req = new UpdateSipCredentialListRequest("nihil", "esse") {{
                requestBody = new UpdateSipCredentialListUpdateSipCredentialListRequest("iure");;
            }};            

            UpdateSipCredentialListResponse res = sdk.sdk.updateSipCredentialList(req, new UpdateSipCredentialListSecurity("odio", "nesciunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipCredentialList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSipDomain

Update the attributes of a domain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSipDomainRequest;
import org.openapis.openapi.models.operations.UpdateSipDomainResponse;
import org.openapis.openapi.models.operations.UpdateSipDomainSecurity;
import org.openapis.openapi.models.operations.UpdateSipDomainUpdateSipDomainRequest;
import org.openapis.openapi.models.operations.UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum;
import org.openapis.openapi.models.operations.UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSipDomainRequest req = new UpdateSipDomainRequest("debitis", "vel") {{
                requestBody = new UpdateSipDomainUpdateSipDomainRequest() {{
                    byocTrunkSid = "neque";
                    domainName = "corporis";
                    emergencyCallerSid = "voluptas";
                    emergencyCallingEnabled = false;
                    friendlyName = "consequuntur";
                    secure = false;
                    sipRegistration = false;
                    voiceFallbackMethod = UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum.PATCH;
                    voiceFallbackUrl = "http://same-dime.com";
                    voiceMethod = UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum.PATCH;
                    voiceStatusCallbackMethod = UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum.DELETE;
                    voiceStatusCallbackUrl = "http://giving-tic.biz";
                    voiceUrl = "https://free-melatonin.org";
                }};;
            }};            

            UpdateSipDomainResponse res = sdk.sdk.updateSipDomain(req, new UpdateSipDomainSecurity("fugiat", "est") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipDomain != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSipIpAccessControlList

Rename an IpAccessControlList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSipIpAccessControlListRequest;
import org.openapis.openapi.models.operations.UpdateSipIpAccessControlListResponse;
import org.openapis.openapi.models.operations.UpdateSipIpAccessControlListSecurity;
import org.openapis.openapi.models.operations.UpdateSipIpAccessControlListUpdateSipIpAccessControlListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSipIpAccessControlListRequest req = new UpdateSipIpAccessControlListRequest("delectus", "velit") {{
                requestBody = new UpdateSipIpAccessControlListUpdateSipIpAccessControlListRequest("vitae");;
            }};            

            UpdateSipIpAccessControlListResponse res = sdk.sdk.updateSipIpAccessControlList(req, new UpdateSipIpAccessControlListSecurity("nesciunt", "similique") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipIpAccessControlList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSipIpAddress

Update an IpAddress resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSipIpAddressRequest;
import org.openapis.openapi.models.operations.UpdateSipIpAddressResponse;
import org.openapis.openapi.models.operations.UpdateSipIpAddressSecurity;
import org.openapis.openapi.models.operations.UpdateSipIpAddressUpdateSipIpAddressRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSipIpAddressRequest req = new UpdateSipIpAddressRequest("illo", "repellat", "nemo") {{
                requestBody = new UpdateSipIpAddressUpdateSipIpAddressRequest() {{
                    cidrPrefixLength = 987890L;
                    friendlyName = "possimus";
                    ipAddress = "unde";
                }};;
            }};            

            UpdateSipIpAddressResponse res = sdk.sdk.updateSipIpAddress(req, new UpdateSipIpAddressSecurity("incidunt", "explicabo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountSipSipIpAccessControlListSipIpAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSiprec

Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSiprecRequest;
import org.openapis.openapi.models.operations.UpdateSiprecResponse;
import org.openapis.openapi.models.operations.UpdateSiprecSecurity;
import org.openapis.openapi.models.operations.UpdateSiprecUpdateSiprecRequest;
import org.openapis.openapi.models.shared.SiprecEnumUpdateStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSiprecRequest req = new UpdateSiprecRequest("ipsam", "cupiditate", "optio") {{
                requestBody = new UpdateSiprecUpdateSiprecRequest(SiprecEnumUpdateStatusEnum.STOPPED);;
            }};            

            UpdateSiprecResponse res = sdk.sdk.updateSiprec(req, new UpdateSiprecSecurity("alias", "quidem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountCallSiprec != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateStream

Stop a Stream using either the SID of the Stream resource or the `name` used when creating the resource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateStreamRequest;
import org.openapis.openapi.models.operations.UpdateStreamResponse;
import org.openapis.openapi.models.operations.UpdateStreamSecurity;
import org.openapis.openapi.models.operations.UpdateStreamUpdateStreamRequest;
import org.openapis.openapi.models.shared.StreamEnumUpdateStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateStreamRequest req = new UpdateStreamRequest("nesciunt", "commodi", "sapiente") {{
                requestBody = new UpdateStreamUpdateStreamRequest(StreamEnumUpdateStatusEnum.STOPPED);;
            }};            

            UpdateStreamResponse res = sdk.sdk.updateStream(req, new UpdateStreamSecurity("consequuntur", "veniam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountCallStream != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUsageTrigger

Update an instance of a usage trigger

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUsageTriggerRequest;
import org.openapis.openapi.models.operations.UpdateUsageTriggerResponse;
import org.openapis.openapi.models.operations.UpdateUsageTriggerSecurity;
import org.openapis.openapi.models.operations.UpdateUsageTriggerUpdateUsageTriggerRequest;
import org.openapis.openapi.models.operations.UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateUsageTriggerRequest req = new UpdateUsageTriggerRequest("debitis", "officia") {{
                requestBody = new UpdateUsageTriggerUpdateUsageTriggerRequest() {{
                    callbackMethod = UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum.PATCH;
                    callbackUrl = "http://extraneous-vanadyl.biz";
                    friendlyName = "libero";
                }};;
            }};            

            UpdateUsageTriggerResponse res = sdk.sdk.updateUsageTrigger(req, new UpdateUsageTriggerSecurity("in", "minima") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010AccountUsageUsageTrigger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
