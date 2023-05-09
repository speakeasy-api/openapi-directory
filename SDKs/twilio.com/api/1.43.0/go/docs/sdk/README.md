# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateAccount](#createaccount) - Create a new Twilio Subaccount from the account making the request
* [CreateAddress](#createaddress)
* [CreateApplication](#createapplication) - Create a new application within your account
* [CreateCall](#createcall) - Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections
* [CreateCallFeedbackSummary](#createcallfeedbacksummary) - Create a FeedbackSummary resource for a call
* [CreateCallRecording](#createcallrecording) - Create a recording for the call
* [CreateIncomingPhoneNumber](#createincomingphonenumber) - Purchase a phone-number for the account.
* [CreateIncomingPhoneNumberAssignedAddOn](#createincomingphonenumberassignedaddon) - Assign an Add-on installation to the Number specified.
* [CreateIncomingPhoneNumberLocal](#createincomingphonenumberlocal)
* [CreateIncomingPhoneNumberMobile](#createincomingphonenumbermobile)
* [CreateIncomingPhoneNumberTollFree](#createincomingphonenumbertollfree)
* [CreateMessage](#createmessage) - Send a message from the account used to make the request
* [CreateMessageFeedback](#createmessagefeedback)
* [CreateNewKey](#createnewkey)
* [CreateNewSigningKey](#createnewsigningkey) - Create a new Signing Key for the account making the request.
* [CreateParticipant](#createparticipant)
* [CreatePayments](#createpayments) - create an instance of payments. This will start a new payments session
* [CreateQueue](#createqueue) - Create a queue
* [CreateSipAuthCallsCredentialListMapping](#createsipauthcallscredentiallistmapping) - Create a new credential list mapping resource
* [CreateSipAuthCallsIPAccessControlListMapping](#createsipauthcallsipaccesscontrollistmapping) - Create a new IP Access Control List mapping
* [CreateSipAuthRegistrationsCredentialListMapping](#createsipauthregistrationscredentiallistmapping) - Create a new credential list mapping resource
* [CreateSipCredential](#createsipcredential) - Create a new credential resource.
* [CreateSipCredentialList](#createsipcredentiallist) - Create a Credential List
* [CreateSipCredentialListMapping](#createsipcredentiallistmapping) - Create a CredentialListMapping resource for an account.
* [CreateSipDomain](#createsipdomain) - Create a new Domain
* [CreateSipIPAccessControlList](#createsipipaccesscontrollist) - Create a new IpAccessControlList resource
* [CreateSipIPAccessControlListMapping](#createsipipaccesscontrollistmapping) - Create a new IpAccessControlListMapping resource.
* [CreateSipIPAddress](#createsipipaddress) - Create a new IpAddress resource.
* [CreateSiprec](#createsiprec) - Create a Siprec
* [CreateStream](#createstream) - Create a Stream
* [CreateToken](#createtoken) - Create a new token for ICE servers
* [CreateUsageTrigger](#createusagetrigger) - Create a new UsageTrigger
* [CreateUserDefinedMessage](#createuserdefinedmessage) - Create a new User Defined Message for the given Call SID.
* [CreateUserDefinedMessageSubscription](#createuserdefinedmessagesubscription) - Subscribe to User Defined Messages for a given Call SID.
* [CreateValidationRequest](#createvalidationrequest)
* [DeleteAddress](#deleteaddress)
* [DeleteApplication](#deleteapplication) - Delete the application by the specified application sid
* [DeleteCall](#deletecall) - Delete a Call record from your account. Once the record is deleted, it will no longer appear in the API and Account Portal logs.
* [DeleteCallFeedbackSummary](#deletecallfeedbacksummary) - Delete a FeedbackSummary resource from a call
* [DeleteCallRecording](#deletecallrecording) - Delete a recording from your account
* [DeleteConferenceRecording](#deleteconferencerecording) - Delete a recording from your account
* [DeleteConnectApp](#deleteconnectapp) - Delete an instance of a connect-app
* [DeleteIncomingPhoneNumber](#deleteincomingphonenumber) - Delete a phone-numbers belonging to the account used to make the request.
* [DeleteIncomingPhoneNumberAssignedAddOn](#deleteincomingphonenumberassignedaddon) - Remove the assignment of an Add-on installation from the Number specified.
* [DeleteKey](#deletekey)
* [DeleteMedia](#deletemedia) - Delete media from your account. Once delete, you will no longer be billed
* [DeleteMessage](#deletemessage) - Deletes a message record from your account
* [DeleteOutgoingCallerID](#deleteoutgoingcallerid) - Delete the caller-id specified from the account
* [DeleteParticipant](#deleteparticipant) - Kick a participant from a given conference
* [DeleteQueue](#deletequeue) - Remove an empty queue
* [DeleteRecording](#deleterecording) - Delete a recording from your account
* [DeleteRecordingAddOnResult](#deleterecordingaddonresult) - Delete a result and purge all associated Payloads
* [DeleteRecordingAddOnResultPayload](#deleterecordingaddonresultpayload) - Delete a payload from the result along with all associated Data
* [DeleteRecordingTranscription](#deleterecordingtranscription)
* [DeleteSigningKey](#deletesigningkey)
* [DeleteSipAuthCallsCredentialListMapping](#deletesipauthcallscredentiallistmapping) - Delete a credential list mapping from the requested domain
* [DeleteSipAuthCallsIPAccessControlListMapping](#deletesipauthcallsipaccesscontrollistmapping) - Delete an IP Access Control List mapping from the requested domain
* [DeleteSipAuthRegistrationsCredentialListMapping](#deletesipauthregistrationscredentiallistmapping) - Delete a credential list mapping from the requested domain
* [DeleteSipCredential](#deletesipcredential) - Delete a credential resource.
* [DeleteSipCredentialList](#deletesipcredentiallist) - Delete a Credential List
* [DeleteSipCredentialListMapping](#deletesipcredentiallistmapping) - Delete a CredentialListMapping resource from an account.
* [DeleteSipDomain](#deletesipdomain) - Delete an instance of a Domain
* [DeleteSipIPAccessControlList](#deletesipipaccesscontrollist) - Delete an IpAccessControlList from the requested account
* [DeleteSipIPAccessControlListMapping](#deletesipipaccesscontrollistmapping) - Delete an IpAccessControlListMapping resource.
* [DeleteSipIPAddress](#deletesipipaddress) - Delete an IpAddress resource.
* [DeleteTranscription](#deletetranscription) - Delete a transcription from the account used to make the request
* [DeleteUsageTrigger](#deleteusagetrigger)
* [DeleteUserDefinedMessageSubscription](#deleteuserdefinedmessagesubscription) - Delete a specific User Defined Message Subscription.
* [FetchAccount](#fetchaccount) - Fetch the account specified by the provided Account Sid
* [FetchAddress](#fetchaddress)
* [FetchApplication](#fetchapplication) - Fetch the application specified by the provided sid
* [FetchAuthorizedConnectApp](#fetchauthorizedconnectapp) - Fetch an instance of an authorized-connect-app
* [FetchAvailablePhoneNumberCountry](#fetchavailablephonenumbercountry)
* [FetchBalance](#fetchbalance) - Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected immediately. Child accounts do not contain balance information
* [FetchCall](#fetchcall) - Fetch the call specified by the provided Call SID
* [FetchCallFeedback](#fetchcallfeedback) - Fetch a Feedback resource from a call
* [FetchCallFeedbackSummary](#fetchcallfeedbacksummary) - Fetch a FeedbackSummary resource from a call
* [FetchCallNotification](#fetchcallnotification)
* [FetchCallRecording](#fetchcallrecording) - Fetch an instance of a recording for a call
* [FetchConference](#fetchconference) - Fetch an instance of a conference
* [FetchConferenceRecording](#fetchconferencerecording) - Fetch an instance of a recording for a call
* [FetchConnectApp](#fetchconnectapp) - Fetch an instance of a connect-app
* [FetchIncomingPhoneNumber](#fetchincomingphonenumber) - Fetch an incoming-phone-number belonging to the account used to make the request.
* [FetchIncomingPhoneNumberAssignedAddOn](#fetchincomingphonenumberassignedaddon) - Fetch an instance of an Add-on installation currently assigned to this Number.
* [FetchIncomingPhoneNumberAssignedAddOnExtension](#fetchincomingphonenumberassignedaddonextension) - Fetch an instance of an Extension for the Assigned Add-on.
* [FetchKey](#fetchkey)
* [FetchMedia](#fetchmedia) - Fetch a single media instance belonging to the account used to make the request
* [FetchMember](#fetchmember) - Fetch a specific member from the queue
* [FetchMessage](#fetchmessage) - Fetch a message belonging to the account used to make the request
* [FetchNotification](#fetchnotification) - Fetch a notification belonging to the account used to make the request
* [FetchOutgoingCallerID](#fetchoutgoingcallerid) - Fetch an outgoing-caller-id belonging to the account used to make the request
* [FetchParticipant](#fetchparticipant) - Fetch an instance of a participant
* [FetchQueue](#fetchqueue) - Fetch an instance of a queue identified by the QueueSid
* [FetchRecording](#fetchrecording) - Fetch an instance of a recording
* [FetchRecordingAddOnResult](#fetchrecordingaddonresult) - Fetch an instance of an AddOnResult
* [FetchRecordingAddOnResultPayload](#fetchrecordingaddonresultpayload) - Fetch an instance of a result payload
* [FetchRecordingTranscription](#fetchrecordingtranscription)
* [FetchShortCode](#fetchshortcode) - Fetch an instance of a short code
* [FetchSigningKey](#fetchsigningkey)
* [FetchSipAuthCallsCredentialListMapping](#fetchsipauthcallscredentiallistmapping) - Fetch a specific instance of a credential list mapping
* [FetchSipAuthCallsIPAccessControlListMapping](#fetchsipauthcallsipaccesscontrollistmapping) - Fetch a specific instance of an IP Access Control List mapping
* [FetchSipAuthRegistrationsCredentialListMapping](#fetchsipauthregistrationscredentiallistmapping) - Fetch a specific instance of a credential list mapping
* [FetchSipCredential](#fetchsipcredential) - Fetch a single credential.
* [FetchSipCredentialList](#fetchsipcredentiallist) - Get a Credential List
* [FetchSipCredentialListMapping](#fetchsipcredentiallistmapping) - Fetch a single CredentialListMapping resource from an account.
* [FetchSipDomain](#fetchsipdomain) - Fetch an instance of a Domain
* [FetchSipIPAccessControlList](#fetchsipipaccesscontrollist) - Fetch a specific instance of an IpAccessControlList
* [FetchSipIPAccessControlListMapping](#fetchsipipaccesscontrollistmapping) - Fetch an IpAccessControlListMapping resource.
* [FetchSipIPAddress](#fetchsipipaddress) - Read one IpAddress resource.
* [FetchTranscription](#fetchtranscription) - Fetch an instance of a Transcription
* [FetchUsageTrigger](#fetchusagetrigger) - Fetch and instance of a usage-trigger
* [ListAccount](#listaccount) - Retrieves a collection of Accounts belonging to the account used to make the request
* [ListAddress](#listaddress)
* [ListApplication](#listapplication) - Retrieve a list of applications representing an application within the requesting account
* [ListAuthorizedConnectApp](#listauthorizedconnectapp) - Retrieve a list of authorized-connect-apps belonging to the account used to make the request
* [ListAvailablePhoneNumberCountry](#listavailablephonenumbercountry)
* [ListAvailablePhoneNumberLocal](#listavailablephonenumberlocal)
* [ListAvailablePhoneNumberMachineToMachine](#listavailablephonenumbermachinetomachine)
* [ListAvailablePhoneNumberMobile](#listavailablephonenumbermobile)
* [ListAvailablePhoneNumberNational](#listavailablephonenumbernational)
* [ListAvailablePhoneNumberSharedCost](#listavailablephonenumbersharedcost)
* [ListAvailablePhoneNumberTollFree](#listavailablephonenumbertollfree)
* [ListAvailablePhoneNumberVoip](#listavailablephonenumbervoip)
* [ListCall](#listcall) - Retrieves a collection of calls made to and from your account
* [ListCallEvent](#listcallevent) - Retrieve a list of all events for a call.
* [ListCallNotification](#listcallnotification)
* [ListCallRecording](#listcallrecording) - Retrieve a list of recordings belonging to the call used to make the request
* [ListConference](#listconference) - Retrieve a list of conferences belonging to the account used to make the request
* [ListConferenceRecording](#listconferencerecording) - Retrieve a list of recordings belonging to the call used to make the request
* [ListConnectApp](#listconnectapp) - Retrieve a list of connect-apps belonging to the account used to make the request
* [ListDependentPhoneNumber](#listdependentphonenumber)
* [ListIncomingPhoneNumber](#listincomingphonenumber) - Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.
* [ListIncomingPhoneNumberAssignedAddOn](#listincomingphonenumberassignedaddon) - Retrieve a list of Add-on installations currently assigned to this Number.
* [ListIncomingPhoneNumberAssignedAddOnExtension](#listincomingphonenumberassignedaddonextension) - Retrieve a list of Extensions for the Assigned Add-on.
* [ListIncomingPhoneNumberLocal](#listincomingphonenumberlocal)
* [ListIncomingPhoneNumberMobile](#listincomingphonenumbermobile)
* [ListIncomingPhoneNumberTollFree](#listincomingphonenumbertollfree)
* [ListKey](#listkey)
* [ListMedia](#listmedia) - Retrieve a list of Media resources belonging to the account used to make the request
* [ListMember](#listmember) - Retrieve the members of the queue
* [ListMessage](#listmessage) - Retrieve a list of messages belonging to the account used to make the request
* [ListNotification](#listnotification) - Retrieve a list of notifications belonging to the account used to make the request
* [ListOutgoingCallerID](#listoutgoingcallerid) - Retrieve a list of outgoing-caller-ids belonging to the account used to make the request
* [ListParticipant](#listparticipant) - Retrieve a list of participants belonging to the account used to make the request
* [ListQueue](#listqueue) - Retrieve a list of queues belonging to the account used to make the request
* [ListRecording](#listrecording) - Retrieve a list of recordings belonging to the account used to make the request
* [ListRecordingAddOnResult](#listrecordingaddonresult) - Retrieve a list of results belonging to the recording
* [ListRecordingAddOnResultPayload](#listrecordingaddonresultpayload) - Retrieve a list of payloads belonging to the AddOnResult
* [ListRecordingTranscription](#listrecordingtranscription)
* [ListShortCode](#listshortcode) - Retrieve a list of short-codes belonging to the account used to make the request
* [ListSigningKey](#listsigningkey)
* [ListSipAuthCallsCredentialListMapping](#listsipauthcallscredentiallistmapping) - Retrieve a list of credential list mappings belonging to the domain used in the request
* [ListSipAuthCallsIPAccessControlListMapping](#listsipauthcallsipaccesscontrollistmapping) - Retrieve a list of IP Access Control List mappings belonging to the domain used in the request
* [ListSipAuthRegistrationsCredentialListMapping](#listsipauthregistrationscredentiallistmapping) - Retrieve a list of credential list mappings belonging to the domain used in the request
* [ListSipCredential](#listsipcredential) - Retrieve a list of credentials.
* [ListSipCredentialList](#listsipcredentiallist) - Get All Credential Lists
* [ListSipCredentialListMapping](#listsipcredentiallistmapping) - Read multiple CredentialListMapping resources from an account.
* [ListSipDomain](#listsipdomain) - Retrieve a list of domains belonging to the account used to make the request
* [ListSipIPAccessControlList](#listsipipaccesscontrollist) - Retrieve a list of IpAccessControlLists that belong to the account used to make the request
* [ListSipIPAccessControlListMapping](#listsipipaccesscontrollistmapping) - Retrieve a list of IpAccessControlListMapping resources.
* [ListSipIPAddress](#listsipipaddress) - Read multiple IpAddress resources.
* [ListTranscription](#listtranscription) - Retrieve a list of transcriptions belonging to the account used to make the request
* [ListUsageRecord](#listusagerecord) - Retrieve a list of usage-records belonging to the account used to make the request
* [ListUsageRecordAllTime](#listusagerecordalltime)
* [ListUsageRecordDaily](#listusagerecorddaily)
* [ListUsageRecordLastMonth](#listusagerecordlastmonth)
* [ListUsageRecordMonthly](#listusagerecordmonthly)
* [ListUsageRecordThisMonth](#listusagerecordthismonth)
* [ListUsageRecordToday](#listusagerecordtoday)
* [ListUsageRecordYearly](#listusagerecordyearly)
* [ListUsageRecordYesterday](#listusagerecordyesterday)
* [ListUsageTrigger](#listusagetrigger) - Retrieve a list of usage-triggers belonging to the account used to make the request
* [UpdateAccount](#updateaccount) - Modify the properties of a given Account
* [UpdateAddress](#updateaddress)
* [UpdateApplication](#updateapplication) - Updates the application's properties
* [UpdateCall](#updatecall) - Initiates a call redirect or terminates a call
* [UpdateCallFeedback](#updatecallfeedback) - Update a Feedback resource for a call
* [UpdateCallRecording](#updatecallrecording) - Changes the status of the recording to paused, stopped, or in-progress. Note: Pass `Twilio.CURRENT` instead of recording sid to reference current active recording.
* [UpdateConference](#updateconference)
* [UpdateConferenceRecording](#updateconferencerecording) - Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.
* [UpdateConnectApp](#updateconnectapp) - Update a connect-app with the specified parameters
* [UpdateIncomingPhoneNumber](#updateincomingphonenumber) - Update an incoming-phone-number instance.
* [UpdateKey](#updatekey)
* [UpdateMember](#updatemember) - Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL
* [UpdateMessage](#updatemessage) - To redact a message-body from a post-flight message record, post to the message instance resource with an empty body
* [UpdateOutgoingCallerID](#updateoutgoingcallerid) - Updates the caller-id
* [UpdateParticipant](#updateparticipant) - Update the properties of the participant
* [UpdatePayments](#updatepayments) - update an instance of payments with different phases of payment flows.
* [UpdateQueue](#updatequeue) - Update the queue with the new parameters
* [UpdateShortCode](#updateshortcode) - Update a short code with the following parameters
* [UpdateSigningKey](#updatesigningkey)
* [UpdateSipCredential](#updatesipcredential) - Update a credential resource.
* [UpdateSipCredentialList](#updatesipcredentiallist) - Update a Credential List
* [UpdateSipDomain](#updatesipdomain) - Update the attributes of a domain
* [UpdateSipIPAccessControlList](#updatesipipaccesscontrollist) - Rename an IpAccessControlList
* [UpdateSipIPAddress](#updatesipipaddress) - Update an IpAddress resource.
* [UpdateSiprec](#updatesiprec) - Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource
* [UpdateStream](#updatestream) - Stop a Stream using either the SID of the Stream resource or the `name` used when creating the resource
* [UpdateUsageTrigger](#updateusagetrigger) - Update an instance of a usage trigger

## CreateAccount

Create a new Twilio Subaccount from the account making the request

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
    res, err := s.SDK.CreateAccount(ctx, operations.CreateAccountCreateAccountRequest{
        FriendlyName: sdk.String("provident"),
    }, operations.CreateAccountSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010Account != nil {
        // handle response
    }
}
```

## CreateAddress

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
    res, err := s.SDK.CreateAddress(ctx, operations.CreateAddressRequest{
        AccountSid: "distinctio",
        RequestBody: &operations.CreateAddressCreateAddressRequest{
            AutoCorrectAddress: sdk.Bool(false),
            City: "New Orleans",
            CustomerName: "nulla",
            EmergencyEnabled: sdk.Bool(false),
            FriendlyName: sdk.String("corrupti"),
            IsoCountry: "illum",
            PostalCode: "66342",
            Region: "debitis",
            Street: "92347 Lehner Lights",
            StreetSecondary: sdk.String("excepturi"),
        },
    }, operations.CreateAddressSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountAddress != nil {
        // handle response
    }
}
```

## CreateApplication

Create a new application within your account

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
    res, err := s.SDK.CreateApplication(ctx, operations.CreateApplicationRequest{
        AccountSid: "nisi",
        RequestBody: &operations.CreateApplicationCreateApplicationRequest{
            APIVersion: sdk.String("recusandae"),
            FriendlyName: sdk.String("temporibus"),
            MessageStatusCallback: sdk.String("http://gloomy-blanket.name"),
            PublicApplicationConnectEnabled: sdk.Bool(false),
            SmsFallbackMethod: operations.CreateApplicationCreateApplicationRequestSmsFallbackMethodEnumHead.ToPointer(),
            SmsFallbackURL: sdk.String("http://sympathetic-viewer.net"),
            SmsMethod: operations.CreateApplicationCreateApplicationRequestSmsMethodEnumHead.ToPointer(),
            SmsStatusCallback: sdk.String("https://trim-wheat.info"),
            SmsURL: sdk.String("https://starry-initialise.name"),
            StatusCallback: sdk.String("https://rash-butcher.net"),
            StatusCallbackMethod: operations.CreateApplicationCreateApplicationRequestStatusCallbackMethodEnumPatch.ToPointer(),
            VoiceCallerIDLookup: sdk.Bool(false),
            VoiceFallbackMethod: operations.CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnumPatch.ToPointer(),
            VoiceFallbackURL: sdk.String("http://miserly-usage.net"),
            VoiceMethod: operations.CreateApplicationCreateApplicationRequestVoiceMethodEnumPatch.ToPointer(),
            VoiceURL: sdk.String("http://immense-investor.biz"),
        },
    }, operations.CreateApplicationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountApplication != nil {
        // handle response
    }
}
```

## CreateCall

Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections

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
    res, err := s.SDK.CreateCall(ctx, operations.CreateCallRequest{
        AccountSid: "qui",
        RequestBody: &operations.CreateCallCreateCallRequest{
            ApplicationSid: sdk.String("impedit"),
            AsyncAmd: sdk.String("cum"),
            AsyncAmdStatusCallback: sdk.String("http://dull-mister.com"),
            AsyncAmdStatusCallbackMethod: operations.CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnumHead.ToPointer(),
            Byoc: sdk.String("ad"),
            CallReason: sdk.String("natus"),
            CallToken: sdk.String("sed"),
            CallerID: sdk.String("iste"),
            FallbackMethod: operations.CreateCallCreateCallRequestFallbackMethodEnumGet.ToPointer(),
            FallbackURL: sdk.String("https://hoarse-upper.org"),
            From: "fuga",
            MachineDetection: sdk.String("in"),
            MachineDetectionSilenceTimeout: sdk.Int64(359508),
            MachineDetectionSpeechEndThreshold: sdk.Int64(613064),
            MachineDetectionSpeechThreshold: sdk.Int64(437032),
            MachineDetectionTimeout: sdk.Int64(902349),
            Method: operations.CreateCallCreateCallRequestMethodEnumPut.ToPointer(),
            Record: sdk.Bool(false),
            RecordingChannels: sdk.String("architecto"),
            RecordingStatusCallback: sdk.String("ipsa"),
            RecordingStatusCallbackEvent: []string{
                "est",
                "mollitia",
                "laborum",
                "dolores",
            },
            RecordingStatusCallbackMethod: operations.CreateCallCreateCallRequestRecordingStatusCallbackMethodEnumGet.ToPointer(),
            RecordingTrack: sdk.String("corporis"),
            SendDigits: sdk.String("explicabo"),
            SipAuthPassword: sdk.String("nobis"),
            SipAuthUsername: sdk.String("enim"),
            StatusCallback: sdk.String("https://gummy-expedition.name"),
            StatusCallbackEvent: []string{
                "iure",
            },
            StatusCallbackMethod: operations.CreateCallCreateCallRequestStatusCallbackMethodEnumPatch.ToPointer(),
            TimeLimit: sdk.Int64(988374),
            Timeout: sdk.Int64(958950),
            To: "architecto",
            Trim: sdk.String("mollitia"),
            Twiml: sdk.String("dolorem"),
            URL: sdk.String("https://curly-yellow.name"),
        },
    }, operations.CreateCallSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountCall != nil {
        // handle response
    }
}
```

## CreateCallFeedbackSummary

Create a FeedbackSummary resource for a call

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateCallFeedbackSummary(ctx, operations.CreateCallFeedbackSummaryRequest{
        AccountSid: "occaecati",
        RequestBody: &operations.CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest{
            EndDate: types.MustDateFromString("2022-08-02"),
            IncludeSubaccounts: sdk.Bool(false),
            StartDate: types.MustDateFromString("2022-07-11"),
            StatusCallback: sdk.String("http://physical-chord.info"),
            StatusCallbackMethod: operations.CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnumHead.ToPointer(),
        },
    }, operations.CreateCallFeedbackSummarySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountCallCallFeedbackSummary != nil {
        // handle response
    }
}
```

## CreateCallRecording

Create a recording for the call

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
    res, err := s.SDK.CreateCallRecording(ctx, operations.CreateCallRecordingRequest{
        AccountSid: "laborum",
        CallSid: "animi",
        RequestBody: &operations.CreateCallRecordingCreateCallRecordingRequest{
            RecordingChannels: sdk.String("enim"),
            RecordingStatusCallback: sdk.String("http://sophisticated-conifer.org"),
            RecordingStatusCallbackEvent: []string{
                "id",
                "possimus",
            },
            RecordingStatusCallbackMethod: operations.CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnumHead.ToPointer(),
            RecordingTrack: sdk.String("quasi"),
            Trim: sdk.String("error"),
        },
    }, operations.CreateCallRecordingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountCallCallRecording != nil {
        // handle response
    }
}
```

## CreateIncomingPhoneNumber

Purchase a phone-number for the account.

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
    res, err := s.SDK.CreateIncomingPhoneNumber(ctx, operations.CreateIncomingPhoneNumberRequest{
        AccountSid: "temporibus",
        RequestBody: &operations.CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequest{
            AddressSid: sdk.String("laborum"),
            APIVersion: sdk.String("quasi"),
            AreaCode: sdk.String("reiciendis"),
            BundleSid: sdk.String("voluptatibus"),
            EmergencyAddressSid: sdk.String("vero"),
            EmergencyStatus: shared.IncomingPhoneNumberEnumEmergencyStatusEnumActive.ToPointer(),
            FriendlyName: sdk.String("praesentium"),
            IdentitySid: sdk.String("voluptatibus"),
            PhoneNumber: sdk.String("ipsa"),
            SmsApplicationSid: sdk.String("omnis"),
            SmsFallbackMethod: operations.CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsFallbackMethodEnumPost.ToPointer(),
            SmsFallbackURL: sdk.String("https://agile-arch-rival.info"),
            SmsMethod: operations.CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestSmsMethodEnumGet.ToPointer(),
            SmsURL: sdk.String("https://clear-forage.biz"),
            StatusCallback: sdk.String("http://classic-presidency.biz"),
            StatusCallbackMethod: operations.CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestStatusCallbackMethodEnumDelete.ToPointer(),
            TrunkSid: sdk.String("commodi"),
            VoiceApplicationSid: sdk.String("repudiandae"),
            VoiceCallerIDLookup: sdk.Bool(false),
            VoiceFallbackMethod: operations.CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceFallbackMethodEnumHead.ToPointer(),
            VoiceFallbackURL: sdk.String("http://repentant-minnow.name"),
            VoiceMethod: operations.CreateIncomingPhoneNumberCreateIncomingPhoneNumberRequestVoiceMethodEnumDelete.ToPointer(),
            VoiceReceiveMode: shared.IncomingPhoneNumberEnumVoiceReceiveModeEnumVoice.ToPointer(),
            VoiceURL: sdk.String("https://meaty-tortoise.com"),
        },
    }, operations.CreateIncomingPhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountIncomingPhoneNumber != nil {
        // handle response
    }
}
```

## CreateIncomingPhoneNumberAssignedAddOn

Assign an Add-on installation to the Number specified.

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
    res, err := s.SDK.CreateIncomingPhoneNumberAssignedAddOn(ctx, operations.CreateIncomingPhoneNumberAssignedAddOnRequest{
        AccountSid: "repudiandae",
        RequestBody: &operations.CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest{
            InstalledAddOnSid: "sint",
        },
        ResourceSid: "veritatis",
    }, operations.CreateIncomingPhoneNumberAssignedAddOnSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn != nil {
        // handle response
    }
}
```

## CreateIncomingPhoneNumberLocal

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
    res, err := s.SDK.CreateIncomingPhoneNumberLocal(ctx, operations.CreateIncomingPhoneNumberLocalRequest{
        AccountSid: "itaque",
        RequestBody: &operations.CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequest{
            AddressSid: sdk.String("incidunt"),
            APIVersion: sdk.String("enim"),
            BundleSid: sdk.String("consequatur"),
            EmergencyAddressSid: sdk.String("est"),
            EmergencyStatus: shared.IncomingPhoneNumberLocalEnumEmergencyStatusEnumInactive.ToPointer(),
            FriendlyName: sdk.String("explicabo"),
            IdentitySid: sdk.String("deserunt"),
            PhoneNumber: "distinctio",
            SmsApplicationSid: sdk.String("quibusdam"),
            SmsFallbackMethod: operations.CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsFallbackMethodEnumGet.ToPointer(),
            SmsFallbackURL: sdk.String("http://delightful-graph.name"),
            SmsMethod: operations.CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestSmsMethodEnumPatch.ToPointer(),
            SmsURL: sdk.String("http://damp-sousaphone.info"),
            StatusCallback: sdk.String("http://costly-poncho.name"),
            StatusCallbackMethod: operations.CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestStatusCallbackMethodEnumGet.ToPointer(),
            TrunkSid: sdk.String("facilis"),
            VoiceApplicationSid: sdk.String("tempore"),
            VoiceCallerIDLookup: sdk.Bool(false),
            VoiceFallbackMethod: operations.CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceFallbackMethodEnumGet.ToPointer(),
            VoiceFallbackURL: sdk.String("https://infantile-demur.net"),
            VoiceMethod: operations.CreateIncomingPhoneNumberLocalCreateIncomingPhoneNumberLocalRequestVoiceMethodEnumPatch.ToPointer(),
            VoiceReceiveMode: shared.IncomingPhoneNumberLocalEnumVoiceReceiveModeEnumVoice.ToPointer(),
            VoiceURL: sdk.String("https://unlined-mole.name"),
        },
    }, operations.CreateIncomingPhoneNumberLocalSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal != nil {
        // handle response
    }
}
```

## CreateIncomingPhoneNumberMobile

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
    res, err := s.SDK.CreateIncomingPhoneNumberMobile(ctx, operations.CreateIncomingPhoneNumberMobileRequest{
        AccountSid: "dolor",
        RequestBody: &operations.CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest{
            AddressSid: sdk.String("debitis"),
            APIVersion: sdk.String("a"),
            BundleSid: sdk.String("dolorum"),
            EmergencyAddressSid: sdk.String("in"),
            EmergencyStatus: shared.IncomingPhoneNumberMobileEnumEmergencyStatusEnumActive.ToPointer(),
            FriendlyName: sdk.String("illum"),
            IdentitySid: sdk.String("maiores"),
            PhoneNumber: "rerum",
            SmsApplicationSid: sdk.String("dicta"),
            SmsFallbackMethod: operations.CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnumGet.ToPointer(),
            SmsFallbackURL: sdk.String("https://stupendous-handmaiden.info"),
            SmsMethod: operations.CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnumPut.ToPointer(),
            SmsURL: sdk.String("https://exemplary-mover.biz"),
            StatusCallback: sdk.String("https://white-printing.name"),
            StatusCallbackMethod: operations.CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnumPut.ToPointer(),
            TrunkSid: sdk.String("id"),
            VoiceApplicationSid: sdk.String("blanditiis"),
            VoiceCallerIDLookup: sdk.Bool(false),
            VoiceFallbackMethod: operations.CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnumPatch.ToPointer(),
            VoiceFallbackURL: sdk.String("https://embarrassed-peacock.info"),
            VoiceMethod: operations.CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnumPost.ToPointer(),
            VoiceReceiveMode: shared.IncomingPhoneNumberMobileEnumVoiceReceiveModeEnumFax.ToPointer(),
            VoiceURL: sdk.String("https://lame-alcohol.info"),
        },
    }, operations.CreateIncomingPhoneNumberMobileSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile != nil {
        // handle response
    }
}
```

## CreateIncomingPhoneNumberTollFree

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
    res, err := s.SDK.CreateIncomingPhoneNumberTollFree(ctx, operations.CreateIncomingPhoneNumberTollFreeRequest{
        AccountSid: "magnam",
        RequestBody: &operations.CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequest{
            AddressSid: sdk.String("distinctio"),
            APIVersion: sdk.String("id"),
            BundleSid: sdk.String("labore"),
            EmergencyAddressSid: sdk.String("labore"),
            EmergencyStatus: shared.IncomingPhoneNumberTollFreeEnumEmergencyStatusEnumActive.ToPointer(),
            FriendlyName: sdk.String("natus"),
            IdentitySid: sdk.String("nobis"),
            PhoneNumber: "eum",
            SmsApplicationSid: sdk.String("vero"),
            SmsFallbackMethod: operations.CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsFallbackMethodEnumHead.ToPointer(),
            SmsFallbackURL: sdk.String("http://foolhardy-bolero.name"),
            SmsMethod: operations.CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestSmsMethodEnumPost.ToPointer(),
            SmsURL: sdk.String("https://murky-monotheism.com"),
            StatusCallback: sdk.String("https://wide-eyed-perspective.biz"),
            StatusCallbackMethod: operations.CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestStatusCallbackMethodEnumPost.ToPointer(),
            TrunkSid: sdk.String("dolor"),
            VoiceApplicationSid: sdk.String("necessitatibus"),
            VoiceCallerIDLookup: sdk.Bool(false),
            VoiceFallbackMethod: operations.CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceFallbackMethodEnumHead.ToPointer(),
            VoiceFallbackURL: sdk.String("http://bumpy-hosiery.org"),
            VoiceMethod: operations.CreateIncomingPhoneNumberTollFreeCreateIncomingPhoneNumberTollFreeRequestVoiceMethodEnumDelete.ToPointer(),
            VoiceReceiveMode: shared.IncomingPhoneNumberTollFreeEnumVoiceReceiveModeEnumVoice.ToPointer(),
            VoiceURL: sdk.String("https://miserly-pruner.info"),
        },
    }, operations.CreateIncomingPhoneNumberTollFreeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree != nil {
        // handle response
    }
}
```

## CreateMessage

Send a message from the account used to make the request

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateMessage(ctx, operations.CreateMessageRequest{
        AccountSid: "architecto",
        RequestBody: &operations.CreateMessageCreateMessageRequest{
            AddressRetention: shared.MessageEnumAddressRetentionEnumRetain.ToPointer(),
            ApplicationSid: sdk.String("architecto"),
            Attempt: sdk.Int64(919483),
            Body: sdk.String("ullam"),
            ContentRetention: shared.MessageEnumContentRetentionEnumRetain.ToPointer(),
            ContentSid: sdk.String("expedita"),
            ContentVariables: sdk.String("nihil"),
            ForceDelivery: sdk.Bool(false),
            From: sdk.String("repellat"),
            MaxPrice: sdk.Float64(8411.4),
            MediaURL: []string{
                "https://triangular-apprehension.com",
            },
            MessagingServiceSid: sdk.String("praesentium"),
            PersistentAction: []string{
                "magni",
                "sunt",
                "quo",
            },
            ProvideFeedback: sdk.Bool(false),
            ScheduleType: shared.MessageEnumScheduleTypeEnumFixed.ToPointer(),
            SendAsMms: sdk.Bool(false),
            SendAt: types.MustTimeFromString("2020-05-28T21:33:10.895Z"),
            ShortenUrls: sdk.Bool(false),
            SmartEncoded: sdk.Bool(false),
            StatusCallback: sdk.String("https://imaginary-mix.com"),
            To: "ea",
            ValidityPeriod: sdk.Int64(33222),
        },
    }, operations.CreateMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountMessage != nil {
        // handle response
    }
}
```

## CreateMessageFeedback

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
    res, err := s.SDK.CreateMessageFeedback(ctx, operations.CreateMessageFeedbackRequest{
        AccountSid: "ab",
        MessageSid: "maiores",
        RequestBody: &operations.CreateMessageFeedbackCreateMessageFeedbackRequest{
            Outcome: shared.MessageFeedbackEnumOutcomeEnumUnconfirmed.ToPointer(),
        },
    }, operations.CreateMessageFeedbackSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountMessageMessageFeedback != nil {
        // handle response
    }
}
```

## CreateNewKey

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
    res, err := s.SDK.CreateNewKey(ctx, operations.CreateNewKeyRequest{
        AccountSid: "ipsam",
        RequestBody: &operations.CreateNewKeyCreateNewKeyRequest{
            FriendlyName: sdk.String("voluptate"),
        },
    }, operations.CreateNewKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountNewKey != nil {
        // handle response
    }
}
```

## CreateNewSigningKey

Create a new Signing Key for the account making the request.

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
    res, err := s.SDK.CreateNewSigningKey(ctx, operations.CreateNewSigningKeyRequest{
        AccountSid: "autem",
        RequestBody: &operations.CreateNewSigningKeyCreateNewSigningKeyRequest{
            FriendlyName: sdk.String("nam"),
        },
    }, operations.CreateNewSigningKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountNewSigningKey != nil {
        // handle response
    }
}
```

## CreateParticipant

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
    res, err := s.SDK.CreateParticipant(ctx, operations.CreateParticipantRequest{
        AccountSid: "eaque",
        ConferenceSid: "pariatur",
        RequestBody: &operations.CreateParticipantCreateParticipantRequest{
            AmdStatusCallback: sdk.String("http://wise-airbag.org"),
            AmdStatusCallbackMethod: operations.CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnumGet.ToPointer(),
            Beep: sdk.String("aut"),
            Byoc: sdk.String("cumque"),
            CallReason: sdk.String("corporis"),
            CallSidToCoach: sdk.String("hic"),
            CallerID: sdk.String("libero"),
            Coaching: sdk.Bool(false),
            ConferenceRecord: sdk.String("nobis"),
            ConferenceRecordingStatusCallback: sdk.String("http://glum-locality.info"),
            ConferenceRecordingStatusCallbackEvent: []string{
                "quis",
            },
            ConferenceRecordingStatusCallbackMethod: operations.CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnumGet.ToPointer(),
            ConferenceStatusCallback: sdk.String("http://aggravating-clogs.net"),
            ConferenceStatusCallbackEvent: []string{
                "dolor",
                "vero",
            },
            ConferenceStatusCallbackMethod: operations.CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnumPost.ToPointer(),
            ConferenceTrim: sdk.String("hic"),
            EarlyMedia: sdk.Bool(false),
            EndConferenceOnExit: sdk.Bool(false),
            From: "recusandae",
            JitterBufferSize: sdk.String("omnis"),
            Label: sdk.String("facilis"),
            MachineDetection: sdk.String("perspiciatis"),
            MachineDetectionSilenceTimeout: sdk.Int64(31838),
            MachineDetectionSpeechEndThreshold: sdk.Int64(783645),
            MachineDetectionSpeechThreshold: sdk.Int64(164694),
            MachineDetectionTimeout: sdk.Int64(500026),
            MaxParticipants: sdk.Int64(621479),
            Muted: sdk.Bool(false),
            Record: sdk.Bool(false),
            RecordingChannels: sdk.String("eaque"),
            RecordingStatusCallback: sdk.String("https://right-damage.org"),
            RecordingStatusCallbackEvent: []string{
                "modi",
                "iste",
                "dolorum",
                "deleniti",
            },
            RecordingStatusCallbackMethod: operations.CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnumDelete.ToPointer(),
            RecordingTrack: sdk.String("provident"),
            Region: sdk.String("nobis"),
            SipAuthPassword: sdk.String("libero"),
            SipAuthUsername: sdk.String("delectus"),
            StartConferenceOnEnter: sdk.Bool(false),
            StatusCallback: sdk.String("http://mysterious-grass.biz"),
            StatusCallbackEvent: []string{
                "dolor",
            },
            StatusCallbackMethod: operations.CreateParticipantCreateParticipantRequestStatusCallbackMethodEnumGet.ToPointer(),
            TimeLimit: sdk.Int64(218749),
            Timeout: sdk.Int64(944373),
            To: "excepturi",
            WaitMethod: operations.CreateParticipantCreateParticipantRequestWaitMethodEnumPut.ToPointer(),
            WaitURL: sdk.String("http://limping-washbasin.biz"),
        },
    }, operations.CreateParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountConferenceParticipant != nil {
        // handle response
    }
}
```

## CreatePayments

create an instance of payments. This will start a new payments session

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
    res, err := s.SDK.CreatePayments(ctx, operations.CreatePaymentsRequest{
        AccountSid: "dolorum",
        CallSid: "numquam",
        RequestBody: &operations.CreatePaymentsCreatePaymentsRequest{
            BankAccountType: shared.PaymentsEnumBankAccountTypeEnumConsumerChecking.ToPointer(),
            ChargeAmount: sdk.Float64(580.29),
            Currency: sdk.String("ipsa"),
            Description: sdk.String("iure"),
            IdempotencyKey: "odio",
            Input: sdk.String("quaerat"),
            MinPostalCodeLength: sdk.Int64(881005),
            Parameter: sdk.String("quidem"),
            PaymentConnector: sdk.String("voluptatibus"),
            PaymentMethod: shared.PaymentsEnumPaymentMethodEnumCreditCard.ToPointer(),
            PostalCode: sdk.Bool(false),
            SecurityCode: sdk.Bool(false),
            StatusCallback: "https://definite-marines.com",
            Timeout: sdk.Int64(854614),
            TokenType: shared.PaymentsEnumTokenTypeEnumOneTime.ToPointer(),
            ValidCardTypes: sdk.String("soluta"),
        },
    }, operations.CreatePaymentsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountCallPayments != nil {
        // handle response
    }
}
```

## CreateQueue

Create a queue

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
    res, err := s.SDK.CreateQueue(ctx, operations.CreateQueueRequest{
        AccountSid: "dolorum",
        RequestBody: &operations.CreateQueueCreateQueueRequest{
            FriendlyName: "iusto",
            MaxSize: sdk.Int64(453697),
        },
    }, operations.CreateQueueSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountQueue != nil {
        // handle response
    }
}
```

## CreateSipAuthCallsCredentialListMapping

Create a new credential list mapping resource

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
    res, err := s.SDK.CreateSipAuthCallsCredentialListMapping(ctx, operations.CreateSipAuthCallsCredentialListMappingRequest{
        AccountSid: "dolorum",
        DomainSid: "deleniti",
        RequestBody: &operations.CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest{
            CredentialListSid: "omnis",
        },
    }, operations.CreateSipAuthCallsCredentialListMappingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping != nil {
        // handle response
    }
}
```

## CreateSipAuthCallsIPAccessControlListMapping

Create a new IP Access Control List mapping

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
    res, err := s.SDK.CreateSipAuthCallsIPAccessControlListMapping(ctx, operations.CreateSipAuthCallsIPAccessControlListMappingRequest{
        AccountSid: "necessitatibus",
        DomainSid: "distinctio",
        RequestBody: &operations.CreateSipAuthCallsIPAccessControlListMappingCreateSipAuthCallsIPAccessControlListMappingRequest{
            IPAccessControlListSid: "asperiores",
        },
    }, operations.CreateSipAuthCallsIPAccessControlListMappingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIPAccessControlListMapping != nil {
        // handle response
    }
}
```

## CreateSipAuthRegistrationsCredentialListMapping

Create a new credential list mapping resource

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
    res, err := s.SDK.CreateSipAuthRegistrationsCredentialListMapping(ctx, operations.CreateSipAuthRegistrationsCredentialListMappingRequest{
        AccountSid: "nihil",
        DomainSid: "ipsum",
        RequestBody: &operations.CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest{
            CredentialListSid: "voluptate",
        },
    }, operations.CreateSipAuthRegistrationsCredentialListMappingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping != nil {
        // handle response
    }
}
```

## CreateSipCredential

Create a new credential resource.

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
    res, err := s.SDK.CreateSipCredential(ctx, operations.CreateSipCredentialRequest{
        AccountSid: "id",
        CredentialListSid: "saepe",
        RequestBody: &operations.CreateSipCredentialCreateSipCredentialRequest{
            Password: "eius",
            Username: "Brigitte75",
        },
    }, operations.CreateSipCredentialSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipCredentialListSipCredential != nil {
        // handle response
    }
}
```

## CreateSipCredentialList

Create a Credential List

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
    res, err := s.SDK.CreateSipCredentialList(ctx, operations.CreateSipCredentialListRequest{
        AccountSid: "accusamus",
        RequestBody: &operations.CreateSipCredentialListCreateSipCredentialListRequest{
            FriendlyName: "ad",
        },
    }, operations.CreateSipCredentialListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipCredentialList != nil {
        // handle response
    }
}
```

## CreateSipCredentialListMapping

Create a CredentialListMapping resource for an account.

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
    res, err := s.SDK.CreateSipCredentialListMapping(ctx, operations.CreateSipCredentialListMappingRequest{
        AccountSid: "saepe",
        DomainSid: "suscipit",
        RequestBody: &operations.CreateSipCredentialListMappingCreateSipCredentialListMappingRequest{
            CredentialListSid: "deserunt",
        },
    }, operations.CreateSipCredentialListMappingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipDomainSipCredentialListMapping != nil {
        // handle response
    }
}
```

## CreateSipDomain

Create a new Domain

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
    res, err := s.SDK.CreateSipDomain(ctx, operations.CreateSipDomainRequest{
        AccountSid: "provident",
        RequestBody: &operations.CreateSipDomainCreateSipDomainRequest{
            ByocTrunkSid: sdk.String("minima"),
            DomainName: "repellendus",
            EmergencyCallerSid: sdk.String("totam"),
            EmergencyCallingEnabled: sdk.Bool(false),
            FriendlyName: sdk.String("similique"),
            Secure: sdk.Bool(false),
            SipRegistration: sdk.Bool(false),
            VoiceFallbackMethod: operations.CreateSipDomainCreateSipDomainRequestVoiceFallbackMethodEnumHead.ToPointer(),
            VoiceFallbackURL: sdk.String("https://frightening-diving.info"),
            VoiceMethod: operations.CreateSipDomainCreateSipDomainRequestVoiceMethodEnumPut.ToPointer(),
            VoiceStatusCallbackMethod: operations.CreateSipDomainCreateSipDomainRequestVoiceStatusCallbackMethodEnumDelete.ToPointer(),
            VoiceStatusCallbackURL: sdk.String("http://raw-venue.info"),
            VoiceURL: sdk.String("https://left-cousin.net"),
        },
    }, operations.CreateSipDomainSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipDomain != nil {
        // handle response
    }
}
```

## CreateSipIPAccessControlList

Create a new IpAccessControlList resource

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
    res, err := s.SDK.CreateSipIPAccessControlList(ctx, operations.CreateSipIPAccessControlListRequest{
        AccountSid: "tenetur",
        RequestBody: &operations.CreateSipIPAccessControlListCreateSipIPAccessControlListRequest{
            FriendlyName: "amet",
        },
    }, operations.CreateSipIPAccessControlListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipIPAccessControlList != nil {
        // handle response
    }
}
```

## CreateSipIPAccessControlListMapping

Create a new IpAccessControlListMapping resource.

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
    res, err := s.SDK.CreateSipIPAccessControlListMapping(ctx, operations.CreateSipIPAccessControlListMappingRequest{
        AccountSid: "tempore",
        DomainSid: "accusamus",
        RequestBody: &operations.CreateSipIPAccessControlListMappingCreateSipIPAccessControlListMappingRequest{
            IPAccessControlListSid: "numquam",
        },
    }, operations.CreateSipIPAccessControlListMappingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipDomainSipIPAccessControlListMapping != nil {
        // handle response
    }
}
```

## CreateSipIPAddress

Create a new IpAddress resource.

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
    res, err := s.SDK.CreateSipIPAddress(ctx, operations.CreateSipIPAddressRequest{
        AccountSid: "enim",
        IPAccessControlListSid: "dolorem",
        RequestBody: &operations.CreateSipIPAddressCreateSipIPAddressRequest{
            CidrPrefixLength: sdk.Int64(957451),
            FriendlyName: "totam",
            IPAddress: "nihil",
        },
    }, operations.CreateSipIPAddressSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipIPAccessControlListSipIPAddress != nil {
        // handle response
    }
}
```

## CreateSiprec

Create a Siprec

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
    res, err := s.SDK.CreateSiprec(ctx, operations.CreateSiprecRequest{
        AccountSid: "sit",
        CallSid: "expedita",
        RequestBody: &operations.CreateSiprecCreateSiprecRequest{
            ConnectorName: sdk.String("neque"),
            Name: sdk.String("Gina Renner"),
            Parameter1Name: sdk.String("quam"),
            Parameter1Value: sdk.String("ipsum"),
            Parameter10Name: sdk.String("incidunt"),
            Parameter10Value: sdk.String("qui"),
            Parameter11Name: sdk.String("cupiditate"),
            Parameter11Value: sdk.String("maxime"),
            Parameter12Name: sdk.String("pariatur"),
            Parameter12Value: sdk.String("soluta"),
            Parameter13Name: sdk.String("dicta"),
            Parameter13Value: sdk.String("laborum"),
            Parameter14Name: sdk.String("totam"),
            Parameter14Value: sdk.String("incidunt"),
            Parameter15Name: sdk.String("aspernatur"),
            Parameter15Value: sdk.String("dolores"),
            Parameter16Name: sdk.String("distinctio"),
            Parameter16Value: sdk.String("facilis"),
            Parameter17Name: sdk.String("aliquid"),
            Parameter17Value: sdk.String("quam"),
            Parameter18Name: sdk.String("molestias"),
            Parameter18Value: sdk.String("temporibus"),
            Parameter19Name: sdk.String("qui"),
            Parameter19Value: sdk.String("neque"),
            Parameter2Name: sdk.String("fugit"),
            Parameter2Value: sdk.String("magni"),
            Parameter20Name: sdk.String("odio"),
            Parameter20Value: sdk.String("sunt"),
            Parameter21Name: sdk.String("ullam"),
            Parameter21Value: sdk.String("nam"),
            Parameter22Name: sdk.String("hic"),
            Parameter22Value: sdk.String("voluptatem"),
            Parameter23Name: sdk.String("cumque"),
            Parameter23Value: sdk.String("soluta"),
            Parameter24Name: sdk.String("nobis"),
            Parameter24Value: sdk.String("et"),
            Parameter25Name: sdk.String("saepe"),
            Parameter25Value: sdk.String("ipsum"),
            Parameter26Name: sdk.String("veritatis"),
            Parameter26Value: sdk.String("nobis"),
            Parameter27Name: sdk.String("quos"),
            Parameter27Value: sdk.String("tempore"),
            Parameter28Name: sdk.String("cupiditate"),
            Parameter28Value: sdk.String("aperiam"),
            Parameter29Name: sdk.String("delectus"),
            Parameter29Value: sdk.String("dolorem"),
            Parameter3Name: sdk.String("dolore"),
            Parameter3Value: sdk.String("labore"),
            Parameter30Name: sdk.String("adipisci"),
            Parameter30Value: sdk.String("dolorum"),
            Parameter31Name: sdk.String("architecto"),
            Parameter31Value: sdk.String("quae"),
            Parameter32Name: sdk.String("aut"),
            Parameter32Value: sdk.String("quas"),
            Parameter33Name: sdk.String("itaque"),
            Parameter33Value: sdk.String("consequatur"),
            Parameter34Name: sdk.String("est"),
            Parameter34Value: sdk.String("repellendus"),
            Parameter35Name: sdk.String("porro"),
            Parameter35Value: sdk.String("doloribus"),
            Parameter36Name: sdk.String("ut"),
            Parameter36Value: sdk.String("facilis"),
            Parameter37Name: sdk.String("cupiditate"),
            Parameter37Value: sdk.String("qui"),
            Parameter38Name: sdk.String("quae"),
            Parameter38Value: sdk.String("laudantium"),
            Parameter39Name: sdk.String("odio"),
            Parameter39Value: sdk.String("occaecati"),
            Parameter4Name: sdk.String("voluptatibus"),
            Parameter4Value: sdk.String("quisquam"),
            Parameter40Name: sdk.String("vero"),
            Parameter40Value: sdk.String("omnis"),
            Parameter41Name: sdk.String("quis"),
            Parameter41Value: sdk.String("ipsum"),
            Parameter42Name: sdk.String("delectus"),
            Parameter42Value: sdk.String("voluptate"),
            Parameter43Name: sdk.String("consectetur"),
            Parameter43Value: sdk.String("vero"),
            Parameter44Name: sdk.String("tenetur"),
            Parameter44Value: sdk.String("dignissimos"),
            Parameter45Name: sdk.String("hic"),
            Parameter45Value: sdk.String("distinctio"),
            Parameter46Name: sdk.String("quod"),
            Parameter46Value: sdk.String("odio"),
            Parameter47Name: sdk.String("similique"),
            Parameter47Value: sdk.String("facilis"),
            Parameter48Name: sdk.String("vero"),
            Parameter48Value: sdk.String("ducimus"),
            Parameter49Name: sdk.String("dolore"),
            Parameter49Value: sdk.String("quibusdam"),
            Parameter5Name: sdk.String("illum"),
            Parameter5Value: sdk.String("sequi"),
            Parameter50Name: sdk.String("natus"),
            Parameter50Value: sdk.String("impedit"),
            Parameter51Name: sdk.String("aut"),
            Parameter51Value: sdk.String("voluptatibus"),
            Parameter52Name: sdk.String("exercitationem"),
            Parameter52Value: sdk.String("nulla"),
            Parameter53Name: sdk.String("fugit"),
            Parameter53Value: sdk.String("porro"),
            Parameter54Name: sdk.String("maiores"),
            Parameter54Value: sdk.String("doloribus"),
            Parameter55Name: sdk.String("iusto"),
            Parameter55Value: sdk.String("eligendi"),
            Parameter56Name: sdk.String("ducimus"),
            Parameter56Value: sdk.String("alias"),
            Parameter57Name: sdk.String("officia"),
            Parameter57Value: sdk.String("tempora"),
            Parameter58Name: sdk.String("ipsam"),
            Parameter58Value: sdk.String("ea"),
            Parameter59Name: sdk.String("aspernatur"),
            Parameter59Value: sdk.String("vel"),
            Parameter6Name: sdk.String("possimus"),
            Parameter6Value: sdk.String("magnam"),
            Parameter60Name: sdk.String("ratione"),
            Parameter60Value: sdk.String("ex"),
            Parameter61Name: sdk.String("laudantium"),
            Parameter61Value: sdk.String("dicta"),
            Parameter62Name: sdk.String("dolor"),
            Parameter62Value: sdk.String("maiores"),
            Parameter63Name: sdk.String("quasi"),
            Parameter63Value: sdk.String("ex"),
            Parameter64Name: sdk.String("nulla"),
            Parameter64Value: sdk.String("excepturi"),
            Parameter65Name: sdk.String("voluptatibus"),
            Parameter65Value: sdk.String("nostrum"),
            Parameter66Name: sdk.String("sapiente"),
            Parameter66Value: sdk.String("quisquam"),
            Parameter67Name: sdk.String("saepe"),
            Parameter67Value: sdk.String("ea"),
            Parameter68Name: sdk.String("impedit"),
            Parameter68Value: sdk.String("corporis"),
            Parameter69Name: sdk.String("veniam"),
            Parameter69Value: sdk.String("aliquid"),
            Parameter7Name: sdk.String("inventore"),
            Parameter7Value: sdk.String("magnam"),
            Parameter70Name: sdk.String("ea"),
            Parameter70Value: sdk.String("quo"),
            Parameter71Name: sdk.String("consectetur"),
            Parameter71Value: sdk.String("recusandae"),
            Parameter72Name: sdk.String("aspernatur"),
            Parameter72Value: sdk.String("minima"),
            Parameter73Name: sdk.String("eaque"),
            Parameter73Value: sdk.String("a"),
            Parameter74Name: sdk.String("libero"),
            Parameter74Value: sdk.String("aut"),
            Parameter75Name: sdk.String("aut"),
            Parameter75Value: sdk.String("deleniti"),
            Parameter76Name: sdk.String("impedit"),
            Parameter76Value: sdk.String("aliquam"),
            Parameter77Name: sdk.String("fugit"),
            Parameter77Value: sdk.String("accusamus"),
            Parameter78Name: sdk.String("inventore"),
            Parameter78Value: sdk.String("non"),
            Parameter79Name: sdk.String("et"),
            Parameter79Value: sdk.String("dolorum"),
            Parameter8Name: sdk.String("laborum"),
            Parameter8Value: sdk.String("placeat"),
            Parameter80Name: sdk.String("velit"),
            Parameter80Value: sdk.String("eum"),
            Parameter81Name: sdk.String("autem"),
            Parameter81Value: sdk.String("nobis"),
            Parameter82Name: sdk.String("quas"),
            Parameter82Value: sdk.String("assumenda"),
            Parameter83Name: sdk.String("nulla"),
            Parameter83Value: sdk.String("voluptas"),
            Parameter84Name: sdk.String("libero"),
            Parameter84Value: sdk.String("quasi"),
            Parameter85Name: sdk.String("tempora"),
            Parameter85Value: sdk.String("numquam"),
            Parameter86Name: sdk.String("explicabo"),
            Parameter86Value: sdk.String("provident"),
            Parameter87Name: sdk.String("ipsa"),
            Parameter87Value: sdk.String("molestiae"),
            Parameter88Name: sdk.String("magnam"),
            Parameter88Value: sdk.String("odio"),
            Parameter89Name: sdk.String("eius"),
            Parameter89Value: sdk.String("esse"),
            Parameter9Name: sdk.String("esse"),
            Parameter9Value: sdk.String("rem"),
            Parameter90Name: sdk.String("fuga"),
            Parameter90Value: sdk.String("reprehenderit"),
            Parameter91Name: sdk.String("quidem"),
            Parameter91Value: sdk.String("fugiat"),
            Parameter92Name: sdk.String("ut"),
            Parameter92Value: sdk.String("eum"),
            Parameter93Name: sdk.String("suscipit"),
            Parameter93Value: sdk.String("assumenda"),
            Parameter94Name: sdk.String("eos"),
            Parameter94Value: sdk.String("praesentium"),
            Parameter95Name: sdk.String("quisquam"),
            Parameter95Value: sdk.String("veritatis"),
            Parameter96Name: sdk.String("ipsa"),
            Parameter96Value: sdk.String("id"),
            Parameter97Name: sdk.String("quidem"),
            Parameter97Value: sdk.String("neque"),
            Parameter98Name: sdk.String("quo"),
            Parameter98Value: sdk.String("illum"),
            Parameter99Name: sdk.String("quo"),
            Parameter99Value: sdk.String("fuga"),
            StatusCallback: sdk.String("http://defiant-gain.com"),
            StatusCallbackMethod: operations.CreateSiprecCreateSiprecRequestStatusCallbackMethodEnumPatch.ToPointer(),
            Track: shared.SiprecEnumTrackEnumInboundTrack.ToPointer(),
        },
    }, operations.CreateSiprecSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountCallSiprec != nil {
        // handle response
    }
}
```

## CreateStream

Create a Stream

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
    res, err := s.SDK.CreateStream(ctx, operations.CreateStreamRequest{
        AccountSid: "tempora",
        CallSid: "debitis",
        RequestBody: &operations.CreateStreamCreateStreamRequest{
            Name: sdk.String("Kelly Donnelly"),
            Parameter1Name: sdk.String("recusandae"),
            Parameter1Value: sdk.String("aperiam"),
            Parameter10Name: sdk.String("distinctio"),
            Parameter10Value: sdk.String("quod"),
            Parameter11Name: sdk.String("dignissimos"),
            Parameter11Value: sdk.String("inventore"),
            Parameter12Name: sdk.String("nihil"),
            Parameter12Value: sdk.String("totam"),
            Parameter13Name: sdk.String("accusamus"),
            Parameter13Value: sdk.String("aliquam"),
            Parameter14Name: sdk.String("odio"),
            Parameter14Value: sdk.String("occaecati"),
            Parameter15Name: sdk.String("commodi"),
            Parameter15Value: sdk.String("sapiente"),
            Parameter16Name: sdk.String("dolores"),
            Parameter16Value: sdk.String("deserunt"),
            Parameter17Name: sdk.String("molestiae"),
            Parameter17Value: sdk.String("accusantium"),
            Parameter18Name: sdk.String("porro"),
            Parameter18Value: sdk.String("eum"),
            Parameter19Name: sdk.String("quas"),
            Parameter19Value: sdk.String("praesentium"),
            Parameter2Name: sdk.String("consequuntur"),
            Parameter2Value: sdk.String("deleniti"),
            Parameter20Name: sdk.String("fugit"),
            Parameter20Value: sdk.String("fuga"),
            Parameter21Name: sdk.String("mollitia"),
            Parameter21Value: sdk.String("incidunt"),
            Parameter22Name: sdk.String("atque"),
            Parameter22Value: sdk.String("explicabo"),
            Parameter23Name: sdk.String("minima"),
            Parameter23Value: sdk.String("nisi"),
            Parameter24Name: sdk.String("fugit"),
            Parameter24Value: sdk.String("sapiente"),
            Parameter25Name: sdk.String("consequuntur"),
            Parameter25Value: sdk.String("ratione"),
            Parameter26Name: sdk.String("explicabo"),
            Parameter26Value: sdk.String("saepe"),
            Parameter27Name: sdk.String("occaecati"),
            Parameter27Value: sdk.String("atque"),
            Parameter28Name: sdk.String("et"),
            Parameter28Value: sdk.String("esse"),
            Parameter29Name: sdk.String("eveniet"),
            Parameter29Value: sdk.String("accusamus"),
            Parameter3Name: sdk.String("veritatis"),
            Parameter3Value: sdk.String("esse"),
            Parameter30Name: sdk.String("quod"),
            Parameter30Value: sdk.String("nam"),
            Parameter31Name: sdk.String("vero"),
            Parameter31Value: sdk.String("aliquid"),
            Parameter32Name: sdk.String("quasi"),
            Parameter32Value: sdk.String("saepe"),
            Parameter33Name: sdk.String("vel"),
            Parameter33Value: sdk.String("harum"),
            Parameter34Name: sdk.String("molestiae"),
            Parameter34Value: sdk.String("rerum"),
            Parameter35Name: sdk.String("occaecati"),
            Parameter35Value: sdk.String("minima"),
            Parameter36Name: sdk.String("distinctio"),
            Parameter36Value: sdk.String("eligendi"),
            Parameter37Name: sdk.String("sit"),
            Parameter37Value: sdk.String("culpa"),
            Parameter38Name: sdk.String("tempore"),
            Parameter38Value: sdk.String("adipisci"),
            Parameter39Name: sdk.String("cumque"),
            Parameter39Value: sdk.String("consequuntur"),
            Parameter4Name: sdk.String("consequatur"),
            Parameter4Value: sdk.String("minus"),
            Parameter40Name: sdk.String("quaerat"),
            Parameter40Value: sdk.String("sapiente"),
            Parameter41Name: sdk.String("consectetur"),
            Parameter41Value: sdk.String("esse"),
            Parameter42Name: sdk.String("blanditiis"),
            Parameter42Value: sdk.String("provident"),
            Parameter43Name: sdk.String("a"),
            Parameter43Value: sdk.String("nulla"),
            Parameter44Name: sdk.String("quas"),
            Parameter44Value: sdk.String("esse"),
            Parameter45Name: sdk.String("quasi"),
            Parameter45Value: sdk.String("a"),
            Parameter46Name: sdk.String("error"),
            Parameter46Value: sdk.String("sint"),
            Parameter47Name: sdk.String("pariatur"),
            Parameter47Value: sdk.String("possimus"),
            Parameter48Name: sdk.String("quia"),
            Parameter48Value: sdk.String("eveniet"),
            Parameter49Name: sdk.String("asperiores"),
            Parameter49Value: sdk.String("facere"),
            Parameter5Name: sdk.String("veritatis"),
            Parameter5Value: sdk.String("consequuntur"),
            Parameter50Name: sdk.String("quasi"),
            Parameter50Value: sdk.String("similique"),
            Parameter51Name: sdk.String("culpa"),
            Parameter51Value: sdk.String("aliquid"),
            Parameter52Name: sdk.String("tenetur"),
            Parameter52Value: sdk.String("quae"),
            Parameter53Name: sdk.String("earum"),
            Parameter53Value: sdk.String("vel"),
            Parameter54Name: sdk.String("in"),
            Parameter54Value: sdk.String("eius"),
            Parameter55Name: sdk.String("libero"),
            Parameter55Value: sdk.String("illum"),
            Parameter56Name: sdk.String("soluta"),
            Parameter56Value: sdk.String("accusantium"),
            Parameter57Name: sdk.String("aliquam"),
            Parameter57Value: sdk.String("sapiente"),
            Parameter58Name: sdk.String("dicta"),
            Parameter58Value: sdk.String("ullam"),
            Parameter59Name: sdk.String("reprehenderit"),
            Parameter59Value: sdk.String("ullam"),
            Parameter6Name: sdk.String("nisi"),
            Parameter6Value: sdk.String("aut"),
            Parameter60Name: sdk.String("voluptatum"),
            Parameter60Value: sdk.String("qui"),
            Parameter61Name: sdk.String("quibusdam"),
            Parameter61Value: sdk.String("ex"),
            Parameter62Name: sdk.String("deleniti"),
            Parameter62Value: sdk.String("itaque"),
            Parameter63Name: sdk.String("dolorum"),
            Parameter63Value: sdk.String("architecto"),
            Parameter64Name: sdk.String("omnis"),
            Parameter64Value: sdk.String("tenetur"),
            Parameter65Name: sdk.String("quasi"),
            Parameter65Value: sdk.String("at"),
            Parameter66Name: sdk.String("et"),
            Parameter66Value: sdk.String("voluptate"),
            Parameter67Name: sdk.String("ipsa"),
            Parameter67Value: sdk.String("minima"),
            Parameter68Name: sdk.String("veritatis"),
            Parameter68Value: sdk.String("consectetur"),
            Parameter69Name: sdk.String("adipisci"),
            Parameter69Value: sdk.String("iste"),
            Parameter7Name: sdk.String("temporibus"),
            Parameter7Value: sdk.String("accusantium"),
            Parameter70Name: sdk.String("rem"),
            Parameter70Value: sdk.String("aut"),
            Parameter71Name: sdk.String("laudantium"),
            Parameter71Value: sdk.String("eum"),
            Parameter72Name: sdk.String("mollitia"),
            Parameter72Value: sdk.String("ab"),
            Parameter73Name: sdk.String("corrupti"),
            Parameter73Value: sdk.String("non"),
            Parameter74Name: sdk.String("voluptatem"),
            Parameter74Value: sdk.String("dolor"),
            Parameter75Name: sdk.String("occaecati"),
            Parameter75Value: sdk.String("numquam"),
            Parameter76Name: sdk.String("impedit"),
            Parameter76Value: sdk.String("explicabo"),
            Parameter77Name: sdk.String("voluptas"),
            Parameter77Value: sdk.String("aut"),
            Parameter78Name: sdk.String("dignissimos"),
            Parameter78Value: sdk.String("dicta"),
            Parameter79Name: sdk.String("maiores"),
            Parameter79Value: sdk.String("natus"),
            Parameter8Name: sdk.String("velit"),
            Parameter8Value: sdk.String("voluptatibus"),
            Parameter80Name: sdk.String("voluptas"),
            Parameter80Value: sdk.String("asperiores"),
            Parameter81Name: sdk.String("aperiam"),
            Parameter81Value: sdk.String("ea"),
            Parameter82Name: sdk.String("quaerat"),
            Parameter82Value: sdk.String("consequuntur"),
            Parameter83Name: sdk.String("repellendus"),
            Parameter83Value: sdk.String("officia"),
            Parameter84Name: sdk.String("maxime"),
            Parameter84Value: sdk.String("dignissimos"),
            Parameter85Name: sdk.String("officia"),
            Parameter85Value: sdk.String("asperiores"),
            Parameter86Name: sdk.String("nemo"),
            Parameter86Value: sdk.String("quae"),
            Parameter87Name: sdk.String("quaerat"),
            Parameter87Value: sdk.String("porro"),
            Parameter88Name: sdk.String("quod"),
            Parameter88Value: sdk.String("labore"),
            Parameter89Name: sdk.String("ab"),
            Parameter89Value: sdk.String("adipisci"),
            Parameter9Name: sdk.String("fuga"),
            Parameter9Value: sdk.String("id"),
            Parameter90Name: sdk.String("suscipit"),
            Parameter90Value: sdk.String("velit"),
            Parameter91Name: sdk.String("culpa"),
            Parameter91Value: sdk.String("est"),
            Parameter92Name: sdk.String("recusandae"),
            Parameter92Value: sdk.String("totam"),
            Parameter93Name: sdk.String("fugiat"),
            Parameter93Value: sdk.String("vel"),
            Parameter94Name: sdk.String("ducimus"),
            Parameter94Value: sdk.String("quos"),
            Parameter95Name: sdk.String("vel"),
            Parameter95Value: sdk.String("labore"),
            Parameter96Name: sdk.String("possimus"),
            Parameter96Value: sdk.String("facilis"),
            Parameter97Name: sdk.String("cum"),
            Parameter97Value: sdk.String("commodi"),
            Parameter98Name: sdk.String("in"),
            Parameter98Value: sdk.String("corporis"),
            Parameter99Name: sdk.String("reiciendis"),
            Parameter99Value: sdk.String("assumenda"),
            StatusCallback: sdk.String("http://vast-grape.com"),
            StatusCallbackMethod: operations.CreateStreamCreateStreamRequestStatusCallbackMethodEnumPut.ToPointer(),
            Track: shared.StreamEnumTrackEnumInboundTrack.ToPointer(),
            URL: "http://gray-twig.net",
        },
    }, operations.CreateStreamSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountCallStream != nil {
        // handle response
    }
}
```

## CreateToken

Create a new token for ICE servers

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
    res, err := s.SDK.CreateToken(ctx, operations.CreateTokenRequest{
        AccountSid: "numquam",
        RequestBody: &operations.CreateTokenCreateTokenRequest{
            TTL: sdk.Int64(985492),
        },
    }, operations.CreateTokenSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountToken != nil {
        // handle response
    }
}
```

## CreateUsageTrigger

Create a new UsageTrigger

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
    res, err := s.SDK.CreateUsageTrigger(ctx, operations.CreateUsageTriggerRequest{
        AccountSid: "suscipit",
        RequestBody: &operations.CreateUsageTriggerCreateUsageTriggerRequest{
            CallbackMethod: operations.CreateUsageTriggerCreateUsageTriggerRequestCallbackMethodEnumDelete.ToPointer(),
            CallbackURL: "https://untimely-termite.biz",
            FriendlyName: sdk.String("sunt"),
            Recurring: shared.UsageTriggerEnumRecurringEnumAlltime.ToPointer(),
            TriggerBy: shared.UsageTriggerEnumTriggerFieldEnumCount.ToPointer(),
            TriggerValue: "non",
            UsageCategory: shared.UsageTriggerEnumUsageCategoryEnumMarketplaceDigitalSegmentBusinessInfo,
        },
    }, operations.CreateUsageTriggerSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountUsageUsageTrigger != nil {
        // handle response
    }
}
```

## CreateUserDefinedMessage

Create a new User Defined Message for the given Call SID.

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
    res, err := s.SDK.CreateUserDefinedMessage(ctx, operations.CreateUserDefinedMessageRequest{
        AccountSid: "beatae",
        CallSid: "dignissimos",
        RequestBody: &operations.CreateUserDefinedMessageCreateUserDefinedMessageRequest{
            Content: "a",
            IdempotencyKey: sdk.String("debitis"),
        },
    }, operations.CreateUserDefinedMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountCallUserDefinedMessage != nil {
        // handle response
    }
}
```

## CreateUserDefinedMessageSubscription

Subscribe to User Defined Messages for a given Call SID.

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
    res, err := s.SDK.CreateUserDefinedMessageSubscription(ctx, operations.CreateUserDefinedMessageSubscriptionRequest{
        AccountSid: "consectetur",
        CallSid: "corporis",
        RequestBody: &operations.CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest{
            Callback: "https://high-level-backup.org",
            IdempotencyKey: sdk.String("libero"),
            Method: operations.CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnumHead.ToPointer(),
        },
    }, operations.CreateUserDefinedMessageSubscriptionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountCallUserDefinedMessageSubscription != nil {
        // handle response
    }
}
```

## CreateValidationRequest

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
    res, err := s.SDK.CreateValidationRequest(ctx, operations.CreateValidationRequestRequest{
        AccountSid: "accusamus",
        RequestBody: &operations.CreateValidationRequestCreateValidationRequestRequest{
            CallDelay: sdk.Int64(631126),
            Extension: sdk.String("tempora"),
            FriendlyName: sdk.String("aspernatur"),
            PhoneNumber: "voluptas",
            StatusCallback: sdk.String("http://hasty-exocrine.net"),
            StatusCallbackMethod: operations.CreateValidationRequestCreateValidationRequestRequestStatusCallbackMethodEnumPut.ToPointer(),
        },
    }, operations.CreateValidationRequestSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountValidationRequest != nil {
        // handle response
    }
}
```

## DeleteAddress

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
    res, err := s.SDK.DeleteAddress(ctx, operations.DeleteAddressRequest{
        AccountSid: "adipisci",
        Sid: "minus",
    }, operations.DeleteAddressSecurity{
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

## DeleteApplication

Delete the application by the specified application sid

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
    res, err := s.SDK.DeleteApplication(ctx, operations.DeleteApplicationRequest{
        AccountSid: "dolores",
        Sid: "blanditiis",
    }, operations.DeleteApplicationSecurity{
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

## DeleteCall

Delete a Call record from your account. Once the record is deleted, it will no longer appear in the API and Account Portal logs.

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
    res, err := s.SDK.DeleteCall(ctx, operations.DeleteCallRequest{
        AccountSid: "in",
        Sid: "dolore",
    }, operations.DeleteCallSecurity{
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

## DeleteCallFeedbackSummary

Delete a FeedbackSummary resource from a call

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
    res, err := s.SDK.DeleteCallFeedbackSummary(ctx, operations.DeleteCallFeedbackSummaryRequest{
        AccountSid: "aliquam",
        Sid: "officiis",
    }, operations.DeleteCallFeedbackSummarySecurity{
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

## DeleteCallRecording

Delete a recording from your account

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
    res, err := s.SDK.DeleteCallRecording(ctx, operations.DeleteCallRecordingRequest{
        AccountSid: "temporibus",
        CallSid: "ullam",
        Sid: "adipisci",
    }, operations.DeleteCallRecordingSecurity{
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

## DeleteConferenceRecording

Delete a recording from your account

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
    res, err := s.SDK.DeleteConferenceRecording(ctx, operations.DeleteConferenceRecordingRequest{
        AccountSid: "cum",
        ConferenceSid: "blanditiis",
        Sid: "quas",
    }, operations.DeleteConferenceRecordingSecurity{
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

## DeleteConnectApp

Delete an instance of a connect-app

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
    res, err := s.SDK.DeleteConnectApp(ctx, operations.DeleteConnectAppRequest{
        AccountSid: "hic",
        Sid: "nesciunt",
    }, operations.DeleteConnectAppSecurity{
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

## DeleteIncomingPhoneNumber

Delete a phone-numbers belonging to the account used to make the request.

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
    res, err := s.SDK.DeleteIncomingPhoneNumber(ctx, operations.DeleteIncomingPhoneNumberRequest{
        AccountSid: "culpa",
        Sid: "corrupti",
    }, operations.DeleteIncomingPhoneNumberSecurity{
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

## DeleteIncomingPhoneNumberAssignedAddOn

Remove the assignment of an Add-on installation from the Number specified.

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
    res, err := s.SDK.DeleteIncomingPhoneNumberAssignedAddOn(ctx, operations.DeleteIncomingPhoneNumberAssignedAddOnRequest{
        AccountSid: "pariatur",
        ResourceSid: "totam",
        Sid: "hic",
    }, operations.DeleteIncomingPhoneNumberAssignedAddOnSecurity{
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

## DeleteKey

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
    res, err := s.SDK.DeleteKey(ctx, operations.DeleteKeyRequest{
        AccountSid: "exercitationem",
        Sid: "nobis",
    }, operations.DeleteKeySecurity{
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

## DeleteMedia

Delete media from your account. Once delete, you will no longer be billed

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
    res, err := s.SDK.DeleteMedia(ctx, operations.DeleteMediaRequest{
        AccountSid: "sit",
        MessageSid: "rerum",
        Sid: "sed",
    }, operations.DeleteMediaSecurity{
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

## DeleteMessage

Deletes a message record from your account

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
    res, err := s.SDK.DeleteMessage(ctx, operations.DeleteMessageRequest{
        AccountSid: "reiciendis",
        Sid: "explicabo",
    }, operations.DeleteMessageSecurity{
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

## DeleteOutgoingCallerID

Delete the caller-id specified from the account

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
    res, err := s.SDK.DeleteOutgoingCallerID(ctx, operations.DeleteOutgoingCallerIDRequest{
        AccountSid: "asperiores",
        Sid: "facilis",
    }, operations.DeleteOutgoingCallerIDSecurity{
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

## DeleteParticipant

Kick a participant from a given conference

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
    res, err := s.SDK.DeleteParticipant(ctx, operations.DeleteParticipantRequest{
        AccountSid: "voluptate",
        CallSid: "expedita",
        ConferenceSid: "ab",
    }, operations.DeleteParticipantSecurity{
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

## DeleteQueue

Remove an empty queue

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
    res, err := s.SDK.DeleteQueue(ctx, operations.DeleteQueueRequest{
        AccountSid: "iste",
        Sid: "dolore",
    }, operations.DeleteQueueSecurity{
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

## DeleteRecording

Delete a recording from your account

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
    res, err := s.SDK.DeleteRecording(ctx, operations.DeleteRecordingRequest{
        AccountSid: "laborum",
        Sid: "sed",
    }, operations.DeleteRecordingSecurity{
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

## DeleteRecordingAddOnResult

Delete a result and purge all associated Payloads

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
    res, err := s.SDK.DeleteRecordingAddOnResult(ctx, operations.DeleteRecordingAddOnResultRequest{
        AccountSid: "in",
        ReferenceSid: "commodi",
        Sid: "quidem",
    }, operations.DeleteRecordingAddOnResultSecurity{
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

## DeleteRecordingAddOnResultPayload

Delete a payload from the result along with all associated Data

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
    res, err := s.SDK.DeleteRecordingAddOnResultPayload(ctx, operations.DeleteRecordingAddOnResultPayloadRequest{
        AccountSid: "explicabo",
        AddOnResultSid: "voluptas",
        ReferenceSid: "unde",
        Sid: "architecto",
    }, operations.DeleteRecordingAddOnResultPayloadSecurity{
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

## DeleteRecordingTranscription

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
    res, err := s.SDK.DeleteRecordingTranscription(ctx, operations.DeleteRecordingTranscriptionRequest{
        AccountSid: "suscipit",
        RecordingSid: "sapiente",
        Sid: "debitis",
    }, operations.DeleteRecordingTranscriptionSecurity{
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

## DeleteSigningKey

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
    res, err := s.SDK.DeleteSigningKey(ctx, operations.DeleteSigningKeyRequest{
        AccountSid: "illo",
        Sid: "reiciendis",
    }, operations.DeleteSigningKeySecurity{
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

## DeleteSipAuthCallsCredentialListMapping

Delete a credential list mapping from the requested domain

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
    res, err := s.SDK.DeleteSipAuthCallsCredentialListMapping(ctx, operations.DeleteSipAuthCallsCredentialListMappingRequest{
        AccountSid: "perferendis",
        DomainSid: "corrupti",
        Sid: "maiores",
    }, operations.DeleteSipAuthCallsCredentialListMappingSecurity{
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

## DeleteSipAuthCallsIPAccessControlListMapping

Delete an IP Access Control List mapping from the requested domain

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
    res, err := s.SDK.DeleteSipAuthCallsIPAccessControlListMapping(ctx, operations.DeleteSipAuthCallsIPAccessControlListMappingRequest{
        AccountSid: "incidunt",
        DomainSid: "sed",
        Sid: "provident",
    }, operations.DeleteSipAuthCallsIPAccessControlListMappingSecurity{
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

## DeleteSipAuthRegistrationsCredentialListMapping

Delete a credential list mapping from the requested domain

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
    res, err := s.SDK.DeleteSipAuthRegistrationsCredentialListMapping(ctx, operations.DeleteSipAuthRegistrationsCredentialListMappingRequest{
        AccountSid: "eius",
        DomainSid: "necessitatibus",
        Sid: "ipsum",
    }, operations.DeleteSipAuthRegistrationsCredentialListMappingSecurity{
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

## DeleteSipCredential

Delete a credential resource.

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
    res, err := s.SDK.DeleteSipCredential(ctx, operations.DeleteSipCredentialRequest{
        AccountSid: "ea",
        CredentialListSid: "occaecati",
        Sid: "quos",
    }, operations.DeleteSipCredentialSecurity{
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

## DeleteSipCredentialList

Delete a Credential List

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
    res, err := s.SDK.DeleteSipCredentialList(ctx, operations.DeleteSipCredentialListRequest{
        AccountSid: "voluptatibus",
        Sid: "tempora",
    }, operations.DeleteSipCredentialListSecurity{
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

## DeleteSipCredentialListMapping

Delete a CredentialListMapping resource from an account.

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
    res, err := s.SDK.DeleteSipCredentialListMapping(ctx, operations.DeleteSipCredentialListMappingRequest{
        AccountSid: "tempora",
        DomainSid: "voluptate",
        Sid: "reiciendis",
    }, operations.DeleteSipCredentialListMappingSecurity{
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

## DeleteSipDomain

Delete an instance of a Domain

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
    res, err := s.SDK.DeleteSipDomain(ctx, operations.DeleteSipDomainRequest{
        AccountSid: "ex",
        Sid: "sit",
    }, operations.DeleteSipDomainSecurity{
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

## DeleteSipIPAccessControlList

Delete an IpAccessControlList from the requested account

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
    res, err := s.SDK.DeleteSipIPAccessControlList(ctx, operations.DeleteSipIPAccessControlListRequest{
        AccountSid: "non",
        Sid: "officiis",
    }, operations.DeleteSipIPAccessControlListSecurity{
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

## DeleteSipIPAccessControlListMapping

Delete an IpAccessControlListMapping resource.

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
    res, err := s.SDK.DeleteSipIPAccessControlListMapping(ctx, operations.DeleteSipIPAccessControlListMappingRequest{
        AccountSid: "praesentium",
        DomainSid: "facilis",
        Sid: "quaerat",
    }, operations.DeleteSipIPAccessControlListMappingSecurity{
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

## DeleteSipIPAddress

Delete an IpAddress resource.

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
    res, err := s.SDK.DeleteSipIPAddress(ctx, operations.DeleteSipIPAddressRequest{
        AccountSid: "incidunt",
        IPAccessControlListSid: "ipsam",
        Sid: "debitis",
    }, operations.DeleteSipIPAddressSecurity{
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

## DeleteTranscription

Delete a transcription from the account used to make the request

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
    res, err := s.SDK.DeleteTranscription(ctx, operations.DeleteTranscriptionRequest{
        AccountSid: "rem",
        Sid: "sit",
    }, operations.DeleteTranscriptionSecurity{
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

## DeleteUsageTrigger

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
    res, err := s.SDK.DeleteUsageTrigger(ctx, operations.DeleteUsageTriggerRequest{
        AccountSid: "nobis",
        Sid: "error",
    }, operations.DeleteUsageTriggerSecurity{
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

## DeleteUserDefinedMessageSubscription

Delete a specific User Defined Message Subscription.

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
    res, err := s.SDK.DeleteUserDefinedMessageSubscription(ctx, operations.DeleteUserDefinedMessageSubscriptionRequest{
        AccountSid: "veniam",
        CallSid: "minima",
        Sid: "recusandae",
    }, operations.DeleteUserDefinedMessageSubscriptionSecurity{
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

## FetchAccount

Fetch the account specified by the provided Account Sid

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
    res, err := s.SDK.FetchAccount(ctx, operations.FetchAccountRequest{
        Sid: "reiciendis",
    }, operations.FetchAccountSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010Account != nil {
        // handle response
    }
}
```

## FetchAddress

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
    res, err := s.SDK.FetchAddress(ctx, operations.FetchAddressRequest{
        AccountSid: "nulla",
        Sid: "magni",
    }, operations.FetchAddressSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountAddress != nil {
        // handle response
    }
}
```

## FetchApplication

Fetch the application specified by the provided sid

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
    res, err := s.SDK.FetchApplication(ctx, operations.FetchApplicationRequest{
        AccountSid: "aperiam",
        Sid: "saepe",
    }, operations.FetchApplicationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountApplication != nil {
        // handle response
    }
}
```

## FetchAuthorizedConnectApp

Fetch an instance of an authorized-connect-app

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
    res, err := s.SDK.FetchAuthorizedConnectApp(ctx, operations.FetchAuthorizedConnectAppRequest{
        AccountSid: "numquam",
        ConnectAppSid: "veniam",
    }, operations.FetchAuthorizedConnectAppSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountAuthorizedConnectApp != nil {
        // handle response
    }
}
```

## FetchAvailablePhoneNumberCountry

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
    res, err := s.SDK.FetchAvailablePhoneNumberCountry(ctx, operations.FetchAvailablePhoneNumberCountryRequest{
        AccountSid: "in",
        CountryCode: "officiis",
    }, operations.FetchAvailablePhoneNumberCountrySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountAvailablePhoneNumberCountry != nil {
        // handle response
    }
}
```

## FetchBalance

Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected immediately. Child accounts do not contain balance information

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
    res, err := s.SDK.FetchBalance(ctx, operations.FetchBalanceRequest{
        AccountSid: "beatae",
    }, operations.FetchBalanceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountBalance != nil {
        // handle response
    }
}
```

## FetchCall

Fetch the call specified by the provided Call SID

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
    res, err := s.SDK.FetchCall(ctx, operations.FetchCallRequest{
        AccountSid: "laudantium",
        Sid: "exercitationem",
    }, operations.FetchCallSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountCall != nil {
        // handle response
    }
}
```

## FetchCallFeedback

Fetch a Feedback resource from a call

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
    res, err := s.SDK.FetchCallFeedback(ctx, operations.FetchCallFeedbackRequest{
        AccountSid: "praesentium",
        CallSid: "cum",
    }, operations.FetchCallFeedbackSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountCallCallFeedback != nil {
        // handle response
    }
}
```

## FetchCallFeedbackSummary

Fetch a FeedbackSummary resource from a call

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
    res, err := s.SDK.FetchCallFeedbackSummary(ctx, operations.FetchCallFeedbackSummaryRequest{
        AccountSid: "laboriosam",
        Sid: "dolorum",
    }, operations.FetchCallFeedbackSummarySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountCallCallFeedbackSummary != nil {
        // handle response
    }
}
```

## FetchCallNotification

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
    res, err := s.SDK.FetchCallNotification(ctx, operations.FetchCallNotificationRequest{
        AccountSid: "voluptatum",
        CallSid: "error",
        Sid: "hic",
    }, operations.FetchCallNotificationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountCallCallNotificationInstance != nil {
        // handle response
    }
}
```

## FetchCallRecording

Fetch an instance of a recording for a call

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
    res, err := s.SDK.FetchCallRecording(ctx, operations.FetchCallRecordingRequest{
        AccountSid: "expedita",
        CallSid: "debitis",
        Sid: "neque",
    }, operations.FetchCallRecordingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountCallCallRecording != nil {
        // handle response
    }
}
```

## FetchConference

Fetch an instance of a conference

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
    res, err := s.SDK.FetchConference(ctx, operations.FetchConferenceRequest{
        AccountSid: "dolorum",
        Sid: "nostrum",
    }, operations.FetchConferenceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountConference != nil {
        // handle response
    }
}
```

## FetchConferenceRecording

Fetch an instance of a recording for a call

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
    res, err := s.SDK.FetchConferenceRecording(ctx, operations.FetchConferenceRecordingRequest{
        AccountSid: "officia",
        ConferenceSid: "dolorum",
        Sid: "corrupti",
    }, operations.FetchConferenceRecordingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountConferenceConferenceRecording != nil {
        // handle response
    }
}
```

## FetchConnectApp

Fetch an instance of a connect-app

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
    res, err := s.SDK.FetchConnectApp(ctx, operations.FetchConnectAppRequest{
        AccountSid: "accusamus",
        Sid: "tempora",
    }, operations.FetchConnectAppSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountConnectApp != nil {
        // handle response
    }
}
```

## FetchIncomingPhoneNumber

Fetch an incoming-phone-number belonging to the account used to make the request.

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
    res, err := s.SDK.FetchIncomingPhoneNumber(ctx, operations.FetchIncomingPhoneNumberRequest{
        AccountSid: "atque",
        Sid: "fugit",
    }, operations.FetchIncomingPhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountIncomingPhoneNumber != nil {
        // handle response
    }
}
```

## FetchIncomingPhoneNumberAssignedAddOn

Fetch an instance of an Add-on installation currently assigned to this Number.

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
    res, err := s.SDK.FetchIncomingPhoneNumberAssignedAddOn(ctx, operations.FetchIncomingPhoneNumberAssignedAddOnRequest{
        AccountSid: "ut",
        ResourceSid: "fugiat",
        Sid: "voluptatem",
    }, operations.FetchIncomingPhoneNumberAssignedAddOnSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn != nil {
        // handle response
    }
}
```

## FetchIncomingPhoneNumberAssignedAddOnExtension

Fetch an instance of an Extension for the Assigned Add-on.

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
    res, err := s.SDK.FetchIncomingPhoneNumberAssignedAddOnExtension(ctx, operations.FetchIncomingPhoneNumberAssignedAddOnExtensionRequest{
        AccountSid: "culpa",
        AssignedAddOnSid: "expedita",
        ResourceSid: "magnam",
        Sid: "consequatur",
    }, operations.FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension != nil {
        // handle response
    }
}
```

## FetchKey

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
    res, err := s.SDK.FetchKey(ctx, operations.FetchKeyRequest{
        AccountSid: "esse",
        Sid: "ipsam",
    }, operations.FetchKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountKey != nil {
        // handle response
    }
}
```

## FetchMedia

Fetch a single media instance belonging to the account used to make the request

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
    res, err := s.SDK.FetchMedia(ctx, operations.FetchMediaRequest{
        AccountSid: "sit",
        MessageSid: "voluptatum",
        Sid: "quas",
    }, operations.FetchMediaSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountMessageMedia != nil {
        // handle response
    }
}
```

## FetchMember

Fetch a specific member from the queue

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
    res, err := s.SDK.FetchMember(ctx, operations.FetchMemberRequest{
        AccountSid: "repudiandae",
        CallSid: "corporis",
        QueueSid: "et",
    }, operations.FetchMemberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountQueueMember != nil {
        // handle response
    }
}
```

## FetchMessage

Fetch a message belonging to the account used to make the request

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
    res, err := s.SDK.FetchMessage(ctx, operations.FetchMessageRequest{
        AccountSid: "blanditiis",
        Sid: "ex",
    }, operations.FetchMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountMessage != nil {
        // handle response
    }
}
```

## FetchNotification

Fetch a notification belonging to the account used to make the request

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
    res, err := s.SDK.FetchNotification(ctx, operations.FetchNotificationRequest{
        AccountSid: "sed",
        Sid: "sit",
    }, operations.FetchNotificationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountNotificationInstance != nil {
        // handle response
    }
}
```

## FetchOutgoingCallerID

Fetch an outgoing-caller-id belonging to the account used to make the request

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
    res, err := s.SDK.FetchOutgoingCallerID(ctx, operations.FetchOutgoingCallerIDRequest{
        AccountSid: "vel",
        Sid: "nostrum",
    }, operations.FetchOutgoingCallerIDSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountOutgoingCallerID != nil {
        // handle response
    }
}
```

## FetchParticipant

Fetch an instance of a participant

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
    res, err := s.SDK.FetchParticipant(ctx, operations.FetchParticipantRequest{
        AccountSid: "saepe",
        CallSid: "error",
        ConferenceSid: "consequatur",
    }, operations.FetchParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountConferenceParticipant != nil {
        // handle response
    }
}
```

## FetchQueue

Fetch an instance of a queue identified by the QueueSid

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
    res, err := s.SDK.FetchQueue(ctx, operations.FetchQueueRequest{
        AccountSid: "incidunt",
        Sid: "reiciendis",
    }, operations.FetchQueueSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountQueue != nil {
        // handle response
    }
}
```

## FetchRecording

Fetch an instance of a recording

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
    res, err := s.SDK.FetchRecording(ctx, operations.FetchRecordingRequest{
        AccountSid: "dolorem",
        IncludeSoftDeleted: sdk.Bool(false),
        Sid: "harum",
    }, operations.FetchRecordingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountRecording != nil {
        // handle response
    }
}
```

## FetchRecordingAddOnResult

Fetch an instance of an AddOnResult

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
    res, err := s.SDK.FetchRecordingAddOnResult(ctx, operations.FetchRecordingAddOnResultRequest{
        AccountSid: "dicta",
        ReferenceSid: "architecto",
        Sid: "occaecati",
    }, operations.FetchRecordingAddOnResultSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountRecordingRecordingAddOnResult != nil {
        // handle response
    }
}
```

## FetchRecordingAddOnResultPayload

Fetch an instance of a result payload

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
    res, err := s.SDK.FetchRecordingAddOnResultPayload(ctx, operations.FetchRecordingAddOnResultPayloadRequest{
        AccountSid: "labore",
        AddOnResultSid: "quidem",
        ReferenceSid: "atque",
        Sid: "laborum",
    }, operations.FetchRecordingAddOnResultPayloadSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload != nil {
        // handle response
    }
}
```

## FetchRecordingTranscription

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
    res, err := s.SDK.FetchRecordingTranscription(ctx, operations.FetchRecordingTranscriptionRequest{
        AccountSid: "nam",
        RecordingSid: "tenetur",
        Sid: "laboriosam",
    }, operations.FetchRecordingTranscriptionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountRecordingRecordingTranscription != nil {
        // handle response
    }
}
```

## FetchShortCode

Fetch an instance of a short code

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
    res, err := s.SDK.FetchShortCode(ctx, operations.FetchShortCodeRequest{
        AccountSid: "alias",
        Sid: "amet",
    }, operations.FetchShortCodeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountShortCode != nil {
        // handle response
    }
}
```

## FetchSigningKey

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
    res, err := s.SDK.FetchSigningKey(ctx, operations.FetchSigningKeyRequest{
        AccountSid: "deserunt",
        Sid: "voluptate",
    }, operations.FetchSigningKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSigningKey != nil {
        // handle response
    }
}
```

## FetchSipAuthCallsCredentialListMapping

Fetch a specific instance of a credential list mapping

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
    res, err := s.SDK.FetchSipAuthCallsCredentialListMapping(ctx, operations.FetchSipAuthCallsCredentialListMappingRequest{
        AccountSid: "unde",
        DomainSid: "reiciendis",
        Sid: "provident",
    }, operations.FetchSipAuthCallsCredentialListMappingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping != nil {
        // handle response
    }
}
```

## FetchSipAuthCallsIPAccessControlListMapping

Fetch a specific instance of an IP Access Control List mapping

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
    res, err := s.SDK.FetchSipAuthCallsIPAccessControlListMapping(ctx, operations.FetchSipAuthCallsIPAccessControlListMappingRequest{
        AccountSid: "repellendus",
        DomainSid: "delectus",
        Sid: "voluptates",
    }, operations.FetchSipAuthCallsIPAccessControlListMappingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIPAccessControlListMapping != nil {
        // handle response
    }
}
```

## FetchSipAuthRegistrationsCredentialListMapping

Fetch a specific instance of a credential list mapping

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
    res, err := s.SDK.FetchSipAuthRegistrationsCredentialListMapping(ctx, operations.FetchSipAuthRegistrationsCredentialListMappingRequest{
        AccountSid: "perferendis",
        DomainSid: "est",
        Sid: "quidem",
    }, operations.FetchSipAuthRegistrationsCredentialListMappingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping != nil {
        // handle response
    }
}
```

## FetchSipCredential

Fetch a single credential.

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
    res, err := s.SDK.FetchSipCredential(ctx, operations.FetchSipCredentialRequest{
        AccountSid: "reprehenderit",
        CredentialListSid: "facere",
        Sid: "fuga",
    }, operations.FetchSipCredentialSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipCredentialListSipCredential != nil {
        // handle response
    }
}
```

## FetchSipCredentialList

Get a Credential List

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
    res, err := s.SDK.FetchSipCredentialList(ctx, operations.FetchSipCredentialListRequest{
        AccountSid: "praesentium",
        Sid: "mollitia",
    }, operations.FetchSipCredentialListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipCredentialList != nil {
        // handle response
    }
}
```

## FetchSipCredentialListMapping

Fetch a single CredentialListMapping resource from an account.

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
    res, err := s.SDK.FetchSipCredentialListMapping(ctx, operations.FetchSipCredentialListMappingRequest{
        AccountSid: "veniam",
        DomainSid: "voluptatem",
        Sid: "quisquam",
    }, operations.FetchSipCredentialListMappingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipDomainSipCredentialListMapping != nil {
        // handle response
    }
}
```

## FetchSipDomain

Fetch an instance of a Domain

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
    res, err := s.SDK.FetchSipDomain(ctx, operations.FetchSipDomainRequest{
        AccountSid: "repudiandae",
        Sid: "quasi",
    }, operations.FetchSipDomainSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipDomain != nil {
        // handle response
    }
}
```

## FetchSipIPAccessControlList

Fetch a specific instance of an IpAccessControlList

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
    res, err := s.SDK.FetchSipIPAccessControlList(ctx, operations.FetchSipIPAccessControlListRequest{
        AccountSid: "atque",
        Sid: "reprehenderit",
    }, operations.FetchSipIPAccessControlListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipIPAccessControlList != nil {
        // handle response
    }
}
```

## FetchSipIPAccessControlListMapping

Fetch an IpAccessControlListMapping resource.

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
    res, err := s.SDK.FetchSipIPAccessControlListMapping(ctx, operations.FetchSipIPAccessControlListMappingRequest{
        AccountSid: "asperiores",
        DomainSid: "totam",
        Sid: "suscipit",
    }, operations.FetchSipIPAccessControlListMappingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipDomainSipIPAccessControlListMapping != nil {
        // handle response
    }
}
```

## FetchSipIPAddress

Read one IpAddress resource.

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
    res, err := s.SDK.FetchSipIPAddress(ctx, operations.FetchSipIPAddressRequest{
        AccountSid: "quidem",
        IPAccessControlListSid: "maxime",
        Sid: "et",
    }, operations.FetchSipIPAddressSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipIPAccessControlListSipIPAddress != nil {
        // handle response
    }
}
```

## FetchTranscription

Fetch an instance of a Transcription

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
    res, err := s.SDK.FetchTranscription(ctx, operations.FetchTranscriptionRequest{
        AccountSid: "esse",
        Sid: "amet",
    }, operations.FetchTranscriptionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountTranscription != nil {
        // handle response
    }
}
```

## FetchUsageTrigger

Fetch and instance of a usage-trigger

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
    res, err := s.SDK.FetchUsageTrigger(ctx, operations.FetchUsageTriggerRequest{
        AccountSid: "assumenda",
        Sid: "ea",
    }, operations.FetchUsageTriggerSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountUsageUsageTrigger != nil {
        // handle response
    }
}
```

## ListAccount

Retrieves a collection of Accounts belonging to the account used to make the request

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
    res, err := s.SDK.ListAccount(ctx, operations.ListAccountRequest{
        FriendlyName: sdk.String("atque"),
        Page: sdk.Int64(623295),
        PageSize: sdk.Int64(887265),
        PageToken: sdk.String("officiis"),
        Status: shared.AccountEnumStatusEnumClosed.ToPointer(),
    }, operations.ListAccountSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountResponse != nil {
        // handle response
    }
}
```

## ListAddress

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
    res, err := s.SDK.ListAddress(ctx, operations.ListAddressRequest{
        AccountSid: "natus",
        CustomerName: sdk.String("minima"),
        FriendlyName: sdk.String("aspernatur"),
        IsoCountry: sdk.String("ex"),
        Page: sdk.Int64(980581),
        PageSize: sdk.Int64(544647),
        PageToken: sdk.String("at"),
    }, operations.ListAddressSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAddressResponse != nil {
        // handle response
    }
}
```

## ListApplication

Retrieve a list of applications representing an application within the requesting account

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
    res, err := s.SDK.ListApplication(ctx, operations.ListApplicationRequest{
        AccountSid: "error",
        FriendlyName: sdk.String("blanditiis"),
        Page: sdk.Int64(379356),
        PageSize: sdk.Int64(922348),
        PageToken: sdk.String("atque"),
    }, operations.ListApplicationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListApplicationResponse != nil {
        // handle response
    }
}
```

## ListAuthorizedConnectApp

Retrieve a list of authorized-connect-apps belonging to the account used to make the request

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
    res, err := s.SDK.ListAuthorizedConnectApp(ctx, operations.ListAuthorizedConnectAppRequest{
        AccountSid: "atque",
        Page: sdk.Int64(120919),
        PageSize: sdk.Int64(923306),
        PageToken: sdk.String("dolorum"),
    }, operations.ListAuthorizedConnectAppSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuthorizedConnectAppResponse != nil {
        // handle response
    }
}
```

## ListAvailablePhoneNumberCountry

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
    res, err := s.SDK.ListAvailablePhoneNumberCountry(ctx, operations.ListAvailablePhoneNumberCountryRequest{
        AccountSid: "repellendus",
        Page: sdk.Int64(287119),
        PageSize: sdk.Int64(968287),
        PageToken: sdk.String("doloremque"),
    }, operations.ListAvailablePhoneNumberCountrySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAvailablePhoneNumberCountryResponse != nil {
        // handle response
    }
}
```

## ListAvailablePhoneNumberLocal

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
    res, err := s.SDK.ListAvailablePhoneNumberLocal(ctx, operations.ListAvailablePhoneNumberLocalRequest{
        AccountSid: "repudiandae",
        AreaCode: sdk.Int64(116098),
        Beta: sdk.Bool(false),
        Contains: sdk.String("accusantium"),
        CountryCode: "beatae",
        Distance: sdk.Int64(174772),
        ExcludeAllAddressRequired: sdk.Bool(false),
        ExcludeForeignAddressRequired: sdk.Bool(false),
        ExcludeLocalAddressRequired: sdk.Bool(false),
        FaxEnabled: sdk.Bool(false),
        InLata: sdk.String("enim"),
        InLocality: sdk.String("laboriosam"),
        InPostalCode: sdk.String("velit"),
        InRateCenter: sdk.String("a"),
        InRegion: sdk.String("molestias"),
        MmsEnabled: sdk.Bool(false),
        NearLatLong: sdk.String("magnam"),
        NearNumber: sdk.String("saepe"),
        Page: sdk.Int64(160467),
        PageSize: sdk.Int64(580107),
        PageToken: sdk.String("officiis"),
        SmsEnabled: sdk.Bool(false),
        VoiceEnabled: sdk.Bool(false),
    }, operations.ListAvailablePhoneNumberLocalSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAvailablePhoneNumberLocalResponse != nil {
        // handle response
    }
}
```

## ListAvailablePhoneNumberMachineToMachine

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
    res, err := s.SDK.ListAvailablePhoneNumberMachineToMachine(ctx, operations.ListAvailablePhoneNumberMachineToMachineRequest{
        AccountSid: "perspiciatis",
        AreaCode: sdk.Int64(446394),
        Beta: sdk.Bool(false),
        Contains: sdk.String("adipisci"),
        CountryCode: "eveniet",
        Distance: sdk.Int64(580887),
        ExcludeAllAddressRequired: sdk.Bool(false),
        ExcludeForeignAddressRequired: sdk.Bool(false),
        ExcludeLocalAddressRequired: sdk.Bool(false),
        FaxEnabled: sdk.Bool(false),
        InLata: sdk.String("consequuntur"),
        InLocality: sdk.String("fugit"),
        InPostalCode: sdk.String("id"),
        InRateCenter: sdk.String("quis"),
        InRegion: sdk.String("reprehenderit"),
        MmsEnabled: sdk.Bool(false),
        NearLatLong: sdk.String("error"),
        NearNumber: sdk.String("illo"),
        Page: sdk.Int64(361306),
        PageSize: sdk.Int64(696463),
        PageToken: sdk.String("eveniet"),
        SmsEnabled: sdk.Bool(false),
        VoiceEnabled: sdk.Bool(false),
    }, operations.ListAvailablePhoneNumberMachineToMachineSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAvailablePhoneNumberMachineToMachineResponse != nil {
        // handle response
    }
}
```

## ListAvailablePhoneNumberMobile

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
    res, err := s.SDK.ListAvailablePhoneNumberMobile(ctx, operations.ListAvailablePhoneNumberMobileRequest{
        AccountSid: "non",
        AreaCode: sdk.Int64(878493),
        Beta: sdk.Bool(false),
        Contains: sdk.String("doloremque"),
        CountryCode: "iure",
        Distance: sdk.Int64(59944),
        ExcludeAllAddressRequired: sdk.Bool(false),
        ExcludeForeignAddressRequired: sdk.Bool(false),
        ExcludeLocalAddressRequired: sdk.Bool(false),
        FaxEnabled: sdk.Bool(false),
        InLata: sdk.String("totam"),
        InLocality: sdk.String("quae"),
        InPostalCode: sdk.String("molestiae"),
        InRateCenter: sdk.String("eveniet"),
        InRegion: sdk.String("qui"),
        MmsEnabled: sdk.Bool(false),
        NearLatLong: sdk.String("cum"),
        NearNumber: sdk.String("iure"),
        Page: sdk.Int64(898063),
        PageSize: sdk.Int64(187552),
        PageToken: sdk.String("laborum"),
        SmsEnabled: sdk.Bool(false),
        VoiceEnabled: sdk.Bool(false),
    }, operations.ListAvailablePhoneNumberMobileSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAvailablePhoneNumberMobileResponse != nil {
        // handle response
    }
}
```

## ListAvailablePhoneNumberNational

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
    res, err := s.SDK.ListAvailablePhoneNumberNational(ctx, operations.ListAvailablePhoneNumberNationalRequest{
        AccountSid: "distinctio",
        AreaCode: sdk.Int64(528940),
        Beta: sdk.Bool(false),
        Contains: sdk.String("rem"),
        CountryCode: "aliquam",
        Distance: sdk.Int64(320565),
        ExcludeAllAddressRequired: sdk.Bool(false),
        ExcludeForeignAddressRequired: sdk.Bool(false),
        ExcludeLocalAddressRequired: sdk.Bool(false),
        FaxEnabled: sdk.Bool(false),
        InLata: sdk.String("repellat"),
        InLocality: sdk.String("alias"),
        InPostalCode: sdk.String("corporis"),
        InRateCenter: sdk.String("perspiciatis"),
        InRegion: sdk.String("nihil"),
        MmsEnabled: sdk.Bool(false),
        NearLatLong: sdk.String("mollitia"),
        NearNumber: sdk.String("voluptas"),
        Page: sdk.Int64(5189),
        PageSize: sdk.Int64(979527),
        PageToken: sdk.String("reiciendis"),
        SmsEnabled: sdk.Bool(false),
        VoiceEnabled: sdk.Bool(false),
    }, operations.ListAvailablePhoneNumberNationalSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAvailablePhoneNumberNationalResponse != nil {
        // handle response
    }
}
```

## ListAvailablePhoneNumberSharedCost

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
    res, err := s.SDK.ListAvailablePhoneNumberSharedCost(ctx, operations.ListAvailablePhoneNumberSharedCostRequest{
        AccountSid: "dolores",
        AreaCode: sdk.Int64(663866),
        Beta: sdk.Bool(false),
        Contains: sdk.String("minima"),
        CountryCode: "dolore",
        Distance: sdk.Int64(680349),
        ExcludeAllAddressRequired: sdk.Bool(false),
        ExcludeForeignAddressRequired: sdk.Bool(false),
        ExcludeLocalAddressRequired: sdk.Bool(false),
        FaxEnabled: sdk.Bool(false),
        InLata: sdk.String("nesciunt"),
        InLocality: sdk.String("quae"),
        InPostalCode: sdk.String("recusandae"),
        InRateCenter: sdk.String("omnis"),
        InRegion: sdk.String("quaerat"),
        MmsEnabled: sdk.Bool(false),
        NearLatLong: sdk.String("molestiae"),
        NearNumber: sdk.String("ex"),
        Page: sdk.Int64(284000),
        PageSize: sdk.Int64(633062),
        PageToken: sdk.String("adipisci"),
        SmsEnabled: sdk.Bool(false),
        VoiceEnabled: sdk.Bool(false),
    }, operations.ListAvailablePhoneNumberSharedCostSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAvailablePhoneNumberSharedCostResponse != nil {
        // handle response
    }
}
```

## ListAvailablePhoneNumberTollFree

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
    res, err := s.SDK.ListAvailablePhoneNumberTollFree(ctx, operations.ListAvailablePhoneNumberTollFreeRequest{
        AccountSid: "debitis",
        AreaCode: sdk.Int64(514513),
        Beta: sdk.Bool(false),
        Contains: sdk.String("eum"),
        CountryCode: "nemo",
        Distance: sdk.Int64(928219),
        ExcludeAllAddressRequired: sdk.Bool(false),
        ExcludeForeignAddressRequired: sdk.Bool(false),
        ExcludeLocalAddressRequired: sdk.Bool(false),
        FaxEnabled: sdk.Bool(false),
        InLata: sdk.String("esse"),
        InLocality: sdk.String("provident"),
        InPostalCode: sdk.String("quis"),
        InRateCenter: sdk.String("eum"),
        InRegion: sdk.String("reiciendis"),
        MmsEnabled: sdk.Bool(false),
        NearLatLong: sdk.String("provident"),
        NearNumber: sdk.String("aspernatur"),
        Page: sdk.Int64(354506),
        PageSize: sdk.Int64(96804),
        PageToken: sdk.String("animi"),
        SmsEnabled: sdk.Bool(false),
        VoiceEnabled: sdk.Bool(false),
    }, operations.ListAvailablePhoneNumberTollFreeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAvailablePhoneNumberTollFreeResponse != nil {
        // handle response
    }
}
```

## ListAvailablePhoneNumberVoip

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
    res, err := s.SDK.ListAvailablePhoneNumberVoip(ctx, operations.ListAvailablePhoneNumberVoipRequest{
        AccountSid: "nostrum",
        AreaCode: sdk.Int64(652309),
        Beta: sdk.Bool(false),
        Contains: sdk.String("provident"),
        CountryCode: "possimus",
        Distance: sdk.Int64(659177),
        ExcludeAllAddressRequired: sdk.Bool(false),
        ExcludeForeignAddressRequired: sdk.Bool(false),
        ExcludeLocalAddressRequired: sdk.Bool(false),
        FaxEnabled: sdk.Bool(false),
        InLata: sdk.String("ex"),
        InLocality: sdk.String("aliquid"),
        InPostalCode: sdk.String("accusantium"),
        InRateCenter: sdk.String("repellat"),
        InRegion: sdk.String("doloribus"),
        MmsEnabled: sdk.Bool(false),
        NearLatLong: sdk.String("ullam"),
        NearNumber: sdk.String("in"),
        Page: sdk.Int64(721407),
        PageSize: sdk.Int64(937636),
        PageToken: sdk.String("officia"),
        SmsEnabled: sdk.Bool(false),
        VoiceEnabled: sdk.Bool(false),
    }, operations.ListAvailablePhoneNumberVoipSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAvailablePhoneNumberVoipResponse != nil {
        // handle response
    }
}
```

## ListCall

Retrieves a collection of calls made to and from your account

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListCall(ctx, operations.ListCallRequest{
        AccountSid: "laborum",
        EndTime: types.MustTimeFromString("2022-03-14T23:12:21.252Z"),
        EndTimeLessThan: types.MustTimeFromString("2021-04-23T08:23:19.189Z"),
        EndTimeGreaterThan: types.MustTimeFromString("2020-02-18T03:48:05.478Z"),
        From: sdk.String("cumque"),
        Page: sdk.Int64(113486),
        PageSize: sdk.Int64(698249),
        PageToken: sdk.String("tempora"),
        ParentCallSid: sdk.String("quis"),
        StartTime: types.MustTimeFromString("2022-11-08T02:16:26.757Z"),
        StartTimeLessThan: types.MustTimeFromString("2022-10-24T09:55:31.770Z"),
        StartTimeGreaterThan: types.MustTimeFromString("2022-10-04T16:56:27.065Z"),
        Status: shared.CallEnumStatusEnumRinging.ToPointer(),
        To: sdk.String("eum"),
    }, operations.ListCallSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCallResponse != nil {
        // handle response
    }
}
```

## ListCallEvent

Retrieve a list of all events for a call.

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
    res, err := s.SDK.ListCallEvent(ctx, operations.ListCallEventRequest{
        AccountSid: "eius",
        CallSid: "rem",
        Page: sdk.Int64(871083),
        PageSize: sdk.Int64(773084),
        PageToken: sdk.String("eos"),
    }, operations.ListCallEventSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCallEventResponse != nil {
        // handle response
    }
}
```

## ListCallNotification

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListCallNotification(ctx, operations.ListCallNotificationRequest{
        AccountSid: "sapiente",
        CallSid: "eum",
        Log: sdk.Int64(117320),
        MessageDate: types.MustDateFromString("2022-11-22"),
        MessageDateLessThan: types.MustDateFromString("2021-10-27"),
        MessageDateGreaterThan: types.MustDateFromString("2020-10-06"),
        Page: sdk.Int64(940782),
        PageSize: sdk.Int64(848151),
        PageToken: sdk.String("eaque"),
    }, operations.ListCallNotificationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCallNotificationResponse != nil {
        // handle response
    }
}
```

## ListCallRecording

Retrieve a list of recordings belonging to the call used to make the request

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListCallRecording(ctx, operations.ListCallRecordingRequest{
        AccountSid: "earum",
        CallSid: "perspiciatis",
        DateCreated: types.MustDateFromString("2020-04-29"),
        DateCreatedLessThan: types.MustDateFromString("2022-03-21"),
        DateCreatedGreaterThan: types.MustDateFromString("2022-10-15"),
        Page: sdk.Int64(147808),
        PageSize: sdk.Int64(764995),
        PageToken: sdk.String("fuga"),
    }, operations.ListCallRecordingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCallRecordingResponse != nil {
        // handle response
    }
}
```

## ListConference

Retrieve a list of conferences belonging to the account used to make the request

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListConference(ctx, operations.ListConferenceRequest{
        AccountSid: "ratione",
        DateCreated: types.MustDateFromString("2021-03-15"),
        DateCreatedLessThan: types.MustDateFromString("2022-12-22"),
        DateCreatedGreaterThan: types.MustDateFromString("2022-11-29"),
        DateUpdated: types.MustDateFromString("2022-05-19"),
        DateUpdatedLessThan: types.MustDateFromString("2022-03-27"),
        DateUpdatedGreaterThan: types.MustDateFromString("2022-11-26"),
        FriendlyName: sdk.String("magni"),
        Page: sdk.Int64(984934),
        PageSize: sdk.Int64(859581),
        PageToken: sdk.String("necessitatibus"),
        Status: shared.ConferenceEnumStatusEnumInit.ToPointer(),
    }, operations.ListConferenceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConferenceResponse != nil {
        // handle response
    }
}
```

## ListConferenceRecording

Retrieve a list of recordings belonging to the call used to make the request

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListConferenceRecording(ctx, operations.ListConferenceRecordingRequest{
        AccountSid: "tempora",
        ConferenceSid: "nihil",
        DateCreated: types.MustDateFromString("2022-11-19"),
        DateCreatedLessThan: types.MustDateFromString("2022-07-18"),
        DateCreatedGreaterThan: types.MustDateFromString("2021-01-15"),
        Page: sdk.Int64(967260),
        PageSize: sdk.Int64(423706),
        PageToken: sdk.String("architecto"),
    }, operations.ListConferenceRecordingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConferenceRecordingResponse != nil {
        // handle response
    }
}
```

## ListConnectApp

Retrieve a list of connect-apps belonging to the account used to make the request

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
    res, err := s.SDK.ListConnectApp(ctx, operations.ListConnectAppRequest{
        AccountSid: "fugiat",
        Page: sdk.Int64(39650),
        PageSize: sdk.Int64(117315),
        PageToken: sdk.String("odio"),
    }, operations.ListConnectAppSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectAppResponse != nil {
        // handle response
    }
}
```

## ListDependentPhoneNumber

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
    res, err := s.SDK.ListDependentPhoneNumber(ctx, operations.ListDependentPhoneNumberRequest{
        AccountSid: "tempora",
        AddressSid: "esse",
        Page: sdk.Int64(403793),
        PageSize: sdk.Int64(235263),
        PageToken: sdk.String("aliquid"),
    }, operations.ListDependentPhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDependentPhoneNumberResponse != nil {
        // handle response
    }
}
```

## ListIncomingPhoneNumber

Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.

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
    res, err := s.SDK.ListIncomingPhoneNumber(ctx, operations.ListIncomingPhoneNumberRequest{
        AccountSid: "ipsa",
        Beta: sdk.Bool(false),
        FriendlyName: sdk.String("laborum"),
        Origin: sdk.String("sunt"),
        Page: sdk.Int64(344718),
        PageSize: sdk.Int64(856756),
        PageToken: sdk.String("expedita"),
        PhoneNumber: sdk.String("aliquid"),
    }, operations.ListIncomingPhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIncomingPhoneNumberResponse != nil {
        // handle response
    }
}
```

## ListIncomingPhoneNumberAssignedAddOn

Retrieve a list of Add-on installations currently assigned to this Number.

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
    res, err := s.SDK.ListIncomingPhoneNumberAssignedAddOn(ctx, operations.ListIncomingPhoneNumberAssignedAddOnRequest{
        AccountSid: "officia",
        Page: sdk.Int64(381397),
        PageSize: sdk.Int64(399161),
        PageToken: sdk.String("perferendis"),
        ResourceSid: "eum",
    }, operations.ListIncomingPhoneNumberAssignedAddOnSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIncomingPhoneNumberAssignedAddOnResponse != nil {
        // handle response
    }
}
```

## ListIncomingPhoneNumberAssignedAddOnExtension

Retrieve a list of Extensions for the Assigned Add-on.

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
    res, err := s.SDK.ListIncomingPhoneNumberAssignedAddOnExtension(ctx, operations.ListIncomingPhoneNumberAssignedAddOnExtensionRequest{
        AccountSid: "voluptas",
        AssignedAddOnSid: "iste",
        Page: sdk.Int64(661607),
        PageSize: sdk.Int64(70042),
        PageToken: sdk.String("error"),
        ResourceSid: "possimus",
    }, operations.ListIncomingPhoneNumberAssignedAddOnExtensionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIncomingPhoneNumberAssignedAddOnExtensionResponse != nil {
        // handle response
    }
}
```

## ListIncomingPhoneNumberLocal

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
    res, err := s.SDK.ListIncomingPhoneNumberLocal(ctx, operations.ListIncomingPhoneNumberLocalRequest{
        AccountSid: "voluptates",
        Beta: sdk.Bool(false),
        FriendlyName: sdk.String("mollitia"),
        Origin: sdk.String("laborum"),
        Page: sdk.Int64(726343),
        PageSize: sdk.Int64(324083),
        PageToken: sdk.String("deleniti"),
        PhoneNumber: sdk.String("enim"),
    }, operations.ListIncomingPhoneNumberLocalSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIncomingPhoneNumberLocalResponse != nil {
        // handle response
    }
}
```

## ListIncomingPhoneNumberMobile

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
    res, err := s.SDK.ListIncomingPhoneNumberMobile(ctx, operations.ListIncomingPhoneNumberMobileRequest{
        AccountSid: "vitae",
        Beta: sdk.Bool(false),
        FriendlyName: sdk.String("repellendus"),
        Origin: sdk.String("ex"),
        Page: sdk.Int64(775803),
        PageSize: sdk.Int64(405373),
        PageToken: sdk.String("ut"),
        PhoneNumber: sdk.String("ad"),
    }, operations.ListIncomingPhoneNumberMobileSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIncomingPhoneNumberMobileResponse != nil {
        // handle response
    }
}
```

## ListIncomingPhoneNumberTollFree

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
    res, err := s.SDK.ListIncomingPhoneNumberTollFree(ctx, operations.ListIncomingPhoneNumberTollFreeRequest{
        AccountSid: "expedita",
        Beta: sdk.Bool(false),
        FriendlyName: sdk.String("voluptatem"),
        Origin: sdk.String("molestias"),
        Page: sdk.Int64(737254),
        PageSize: sdk.Int64(399660),
        PageToken: sdk.String("beatae"),
        PhoneNumber: sdk.String("voluptatum"),
    }, operations.ListIncomingPhoneNumberTollFreeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIncomingPhoneNumberTollFreeResponse != nil {
        // handle response
    }
}
```

## ListKey

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
    res, err := s.SDK.ListKey(ctx, operations.ListKeyRequest{
        AccountSid: "omnis",
        Page: sdk.Int64(85233),
        PageSize: sdk.Int64(703218),
        PageToken: sdk.String("est"),
    }, operations.ListKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListKeyResponse != nil {
        // handle response
    }
}
```

## ListMedia

Retrieve a list of Media resources belonging to the account used to make the request

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListMedia(ctx, operations.ListMediaRequest{
        AccountSid: "culpa",
        DateCreated: types.MustTimeFromString("2022-01-15T21:54:49.962Z"),
        DateCreatedLessThan: types.MustTimeFromString("2022-09-09T21:19:27.244Z"),
        DateCreatedGreaterThan: types.MustTimeFromString("2021-04-07T23:13:52.948Z"),
        MessageSid: "debitis",
        Page: sdk.Int64(29190),
        PageSize: sdk.Int64(1207),
        PageToken: sdk.String("deleniti"),
    }, operations.ListMediaSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMediaResponse != nil {
        // handle response
    }
}
```

## ListMember

Retrieve the members of the queue

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
    res, err := s.SDK.ListMember(ctx, operations.ListMemberRequest{
        AccountSid: "earum",
        Page: sdk.Int64(404244),
        PageSize: sdk.Int64(958308),
        PageToken: sdk.String("rem"),
        QueueSid: "minus",
    }, operations.ListMemberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMemberResponse != nil {
        // handle response
    }
}
```

## ListMessage

Retrieve a list of messages belonging to the account used to make the request

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListMessage(ctx, operations.ListMessageRequest{
        AccountSid: "nemo",
        DateSent: types.MustTimeFromString("2022-06-06T07:54:04.224Z"),
        DateSentLessThan: types.MustTimeFromString("2022-12-25T00:28:59.319Z"),
        DateSentGreaterThan: types.MustTimeFromString("2021-06-12T15:01:22.390Z"),
        From: sdk.String("impedit"),
        Page: sdk.Int64(842777),
        PageSize: sdk.Int64(720528),
        PageToken: sdk.String("ipsam"),
        To: sdk.String("culpa"),
    }, operations.ListMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMessageResponse != nil {
        // handle response
    }
}
```

## ListNotification

Retrieve a list of notifications belonging to the account used to make the request

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListNotification(ctx, operations.ListNotificationRequest{
        AccountSid: "dolor",
        Log: sdk.Int64(307376),
        MessageDate: types.MustDateFromString("2022-06-18"),
        MessageDateLessThan: types.MustDateFromString("2022-09-22"),
        MessageDateGreaterThan: types.MustDateFromString("2022-12-28"),
        Page: sdk.Int64(100014),
        PageSize: sdk.Int64(24944),
        PageToken: sdk.String("modi"),
    }, operations.ListNotificationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNotificationResponse != nil {
        // handle response
    }
}
```

## ListOutgoingCallerID

Retrieve a list of outgoing-caller-ids belonging to the account used to make the request

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
    res, err := s.SDK.ListOutgoingCallerID(ctx, operations.ListOutgoingCallerIDRequest{
        AccountSid: "fugit",
        FriendlyName: sdk.String("ab"),
        Page: sdk.Int64(513760),
        PageSize: sdk.Int64(65604),
        PageToken: sdk.String("dolor"),
        PhoneNumber: sdk.String("fugiat"),
    }, operations.ListOutgoingCallerIDSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOutgoingCallerIDResponse != nil {
        // handle response
    }
}
```

## ListParticipant

Retrieve a list of participants belonging to the account used to make the request

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
    res, err := s.SDK.ListParticipant(ctx, operations.ListParticipantRequest{
        AccountSid: "ipsam",
        Coaching: sdk.Bool(false),
        ConferenceSid: "consequuntur",
        Hold: sdk.Bool(false),
        Muted: sdk.Bool(false),
        Page: sdk.Int64(55107),
        PageSize: sdk.Int64(559682),
        PageToken: sdk.String("eveniet"),
    }, operations.ListParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListParticipantResponse != nil {
        // handle response
    }
}
```

## ListQueue

Retrieve a list of queues belonging to the account used to make the request

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
    res, err := s.SDK.ListQueue(ctx, operations.ListQueueRequest{
        AccountSid: "impedit",
        Page: sdk.Int64(884952),
        PageSize: sdk.Int64(456410),
        PageToken: sdk.String("necessitatibus"),
    }, operations.ListQueueSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListQueueResponse != nil {
        // handle response
    }
}
```

## ListRecording

Retrieve a list of recordings belonging to the account used to make the request

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListRecording(ctx, operations.ListRecordingRequest{
        AccountSid: "sed",
        CallSid: sdk.String("veniam"),
        ConferenceSid: sdk.String("nesciunt"),
        DateCreated: types.MustTimeFromString("2022-02-18T22:06:59.614Z"),
        DateCreatedLessThan: types.MustTimeFromString("2022-06-22T04:40:09.209Z"),
        DateCreatedGreaterThan: types.MustTimeFromString("2022-08-26T10:54:10.191Z"),
        IncludeSoftDeleted: sdk.Bool(false),
        Page: sdk.Int64(70410),
        PageSize: sdk.Int64(781480),
        PageToken: sdk.String("autem"),
    }, operations.ListRecordingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRecordingResponse != nil {
        // handle response
    }
}
```

## ListRecordingAddOnResult

Retrieve a list of results belonging to the recording

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
    res, err := s.SDK.ListRecordingAddOnResult(ctx, operations.ListRecordingAddOnResultRequest{
        AccountSid: "nobis",
        Page: sdk.Int64(388319),
        PageSize: sdk.Int64(927212),
        PageToken: sdk.String("consequuntur"),
        ReferenceSid: "voluptatem",
    }, operations.ListRecordingAddOnResultSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRecordingAddOnResultResponse != nil {
        // handle response
    }
}
```

## ListRecordingAddOnResultPayload

Retrieve a list of payloads belonging to the AddOnResult

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
    res, err := s.SDK.ListRecordingAddOnResultPayload(ctx, operations.ListRecordingAddOnResultPayloadRequest{
        AccountSid: "exercitationem",
        AddOnResultSid: "necessitatibus",
        Page: sdk.Int64(95619),
        PageSize: sdk.Int64(392569),
        PageToken: sdk.String("at"),
        ReferenceSid: "vero",
    }, operations.ListRecordingAddOnResultPayloadSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRecordingAddOnResultPayloadResponse != nil {
        // handle response
    }
}
```

## ListRecordingTranscription

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
    res, err := s.SDK.ListRecordingTranscription(ctx, operations.ListRecordingTranscriptionRequest{
        AccountSid: "est",
        Page: sdk.Int64(690785),
        PageSize: sdk.Int64(192718),
        PageToken: sdk.String("doloribus"),
        RecordingSid: "repudiandae",
    }, operations.ListRecordingTranscriptionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRecordingTranscriptionResponse != nil {
        // handle response
    }
}
```

## ListShortCode

Retrieve a list of short-codes belonging to the account used to make the request

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
    res, err := s.SDK.ListShortCode(ctx, operations.ListShortCodeRequest{
        AccountSid: "optio",
        FriendlyName: sdk.String("occaecati"),
        Page: sdk.Int64(364544),
        PageSize: sdk.Int64(455898),
        PageToken: sdk.String("blanditiis"),
        ShortCode: sdk.String("officia"),
    }, operations.ListShortCodeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListShortCodeResponse != nil {
        // handle response
    }
}
```

## ListSigningKey

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
    res, err := s.SDK.ListSigningKey(ctx, operations.ListSigningKeyRequest{
        AccountSid: "voluptas",
        Page: sdk.Int64(254025),
        PageSize: sdk.Int64(364912),
        PageToken: sdk.String("quos"),
    }, operations.ListSigningKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSigningKeyResponse != nil {
        // handle response
    }
}
```

## ListSipAuthCallsCredentialListMapping

Retrieve a list of credential list mappings belonging to the domain used in the request

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
    res, err := s.SDK.ListSipAuthCallsCredentialListMapping(ctx, operations.ListSipAuthCallsCredentialListMappingRequest{
        AccountSid: "eius",
        DomainSid: "aspernatur",
        Page: sdk.Int64(495970),
        PageSize: sdk.Int64(200516),
        PageToken: sdk.String("fuga"),
    }, operations.ListSipAuthCallsCredentialListMappingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSipAuthCallsCredentialListMappingResponse != nil {
        // handle response
    }
}
```

## ListSipAuthCallsIPAccessControlListMapping

Retrieve a list of IP Access Control List mappings belonging to the domain used in the request

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
    res, err := s.SDK.ListSipAuthCallsIPAccessControlListMapping(ctx, operations.ListSipAuthCallsIPAccessControlListMappingRequest{
        AccountSid: "laudantium",
        DomainSid: "incidunt",
        Page: sdk.Int64(97493),
        PageSize: sdk.Int64(524380),
        PageToken: sdk.String("fugiat"),
    }, operations.ListSipAuthCallsIPAccessControlListMappingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSipAuthCallsIPAccessControlListMappingResponse != nil {
        // handle response
    }
}
```

## ListSipAuthRegistrationsCredentialListMapping

Retrieve a list of credential list mappings belonging to the domain used in the request

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
    res, err := s.SDK.ListSipAuthRegistrationsCredentialListMapping(ctx, operations.ListSipAuthRegistrationsCredentialListMappingRequest{
        AccountSid: "dicta",
        DomainSid: "nisi",
        Page: sdk.Int64(159845),
        PageSize: sdk.Int64(233078),
        PageToken: sdk.String("aperiam"),
    }, operations.ListSipAuthRegistrationsCredentialListMappingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSipAuthRegistrationsCredentialListMappingResponse != nil {
        // handle response
    }
}
```

## ListSipCredential

Retrieve a list of credentials.

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
    res, err := s.SDK.ListSipCredential(ctx, operations.ListSipCredentialRequest{
        AccountSid: "cupiditate",
        CredentialListSid: "reiciendis",
        Page: sdk.Int64(746837),
        PageSize: sdk.Int64(3860),
        PageToken: sdk.String("omnis"),
    }, operations.ListSipCredentialSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSipCredentialResponse != nil {
        // handle response
    }
}
```

## ListSipCredentialList

Get All Credential Lists

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
    res, err := s.SDK.ListSipCredentialList(ctx, operations.ListSipCredentialListRequest{
        AccountSid: "eos",
        Page: sdk.Int64(579011),
        PageSize: sdk.Int64(612867),
        PageToken: sdk.String("magni"),
    }, operations.ListSipCredentialListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSipCredentialListResponse != nil {
        // handle response
    }
}
```

## ListSipCredentialListMapping

Read multiple CredentialListMapping resources from an account.

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
    res, err := s.SDK.ListSipCredentialListMapping(ctx, operations.ListSipCredentialListMappingRequest{
        AccountSid: "inventore",
        DomainSid: "fuga",
        Page: sdk.Int64(881897),
        PageSize: sdk.Int64(976802),
        PageToken: sdk.String("distinctio"),
    }, operations.ListSipCredentialListMappingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSipCredentialListMappingResponse != nil {
        // handle response
    }
}
```

## ListSipDomain

Retrieve a list of domains belonging to the account used to make the request

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
    res, err := s.SDK.ListSipDomain(ctx, operations.ListSipDomainRequest{
        AccountSid: "omnis",
        Page: sdk.Int64(966390),
        PageSize: sdk.Int64(328379),
        PageToken: sdk.String("praesentium"),
    }, operations.ListSipDomainSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSipDomainResponse != nil {
        // handle response
    }
}
```

## ListSipIPAccessControlList

Retrieve a list of IpAccessControlLists that belong to the account used to make the request

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
    res, err := s.SDK.ListSipIPAccessControlList(ctx, operations.ListSipIPAccessControlListRequest{
        AccountSid: "maxime",
        Page: sdk.Int64(300403),
        PageSize: sdk.Int64(836364),
        PageToken: sdk.String("quos"),
    }, operations.ListSipIPAccessControlListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSipIPAccessControlListResponse != nil {
        // handle response
    }
}
```

## ListSipIPAccessControlListMapping

Retrieve a list of IpAccessControlListMapping resources.

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
    res, err := s.SDK.ListSipIPAccessControlListMapping(ctx, operations.ListSipIPAccessControlListMappingRequest{
        AccountSid: "commodi",
        DomainSid: "itaque",
        Page: sdk.Int64(415608),
        PageSize: sdk.Int64(520761),
        PageToken: sdk.String("earum"),
    }, operations.ListSipIPAccessControlListMappingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSipIPAccessControlListMappingResponse != nil {
        // handle response
    }
}
```

## ListSipIPAddress

Read multiple IpAddress resources.

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
    res, err := s.SDK.ListSipIPAddress(ctx, operations.ListSipIPAddressRequest{
        AccountSid: "modi",
        IPAccessControlListSid: "nam",
        Page: sdk.Int64(877399),
        PageSize: sdk.Int64(32901),
        PageToken: sdk.String("ipsam"),
    }, operations.ListSipIPAddressSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSipIPAddressResponse != nil {
        // handle response
    }
}
```

## ListTranscription

Retrieve a list of transcriptions belonging to the account used to make the request

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
    res, err := s.SDK.ListTranscription(ctx, operations.ListTranscriptionRequest{
        AccountSid: "vel",
        Page: sdk.Int64(1383),
        PageSize: sdk.Int64(93894),
        PageToken: sdk.String("non"),
    }, operations.ListTranscriptionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTranscriptionResponse != nil {
        // handle response
    }
}
```

## ListUsageRecord

Retrieve a list of usage-records belonging to the account used to make the request

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListUsageRecord(ctx, operations.ListUsageRecordRequest{
        AccountSid: "maiores",
        Category: shared.UsageRecordEnumCategoryEnumMarketplaceTwilioCallerNameLookupUs.ToPointer(),
        EndDate: types.MustDateFromString("2021-04-14"),
        IncludeSubaccounts: sdk.Bool(false),
        Page: sdk.Int64(643678),
        PageSize: sdk.Int64(458503),
        PageToken: sdk.String("nemo"),
        StartDate: types.MustDateFromString("2022-05-02"),
    }, operations.ListUsageRecordSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsageRecordResponse != nil {
        // handle response
    }
}
```

## ListUsageRecordAllTime

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListUsageRecordAllTime(ctx, operations.ListUsageRecordAllTimeRequest{
        AccountSid: "quis",
        Category: shared.UsageRecordAllTimeEnumCategoryEnumRecordingstorage.ToPointer(),
        EndDate: types.MustDateFromString("2020-09-04"),
        IncludeSubaccounts: sdk.Bool(false),
        Page: sdk.Int64(945027),
        PageSize: sdk.Int64(900103),
        PageToken: sdk.String("asperiores"),
        StartDate: types.MustDateFromString("2022-08-16"),
    }, operations.ListUsageRecordAllTimeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsageRecordAllTimeResponse != nil {
        // handle response
    }
}
```

## ListUsageRecordDaily

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListUsageRecordDaily(ctx, operations.ListUsageRecordDailyRequest{
        AccountSid: "debitis",
        Category: shared.UsageRecordDailyEnumCategoryEnumWirelessUsageDataPooledDownlink.ToPointer(),
        EndDate: types.MustDateFromString("2022-03-17"),
        IncludeSubaccounts: sdk.Bool(false),
        Page: sdk.Int64(685478),
        PageSize: sdk.Int64(675689),
        PageToken: sdk.String("consectetur"),
        StartDate: types.MustDateFromString("2022-06-18"),
    }, operations.ListUsageRecordDailySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsageRecordDailyResponse != nil {
        // handle response
    }
}
```

## ListUsageRecordLastMonth

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListUsageRecordLastMonth(ctx, operations.ListUsageRecordLastMonthRequest{
        AccountSid: "ipsum",
        Category: shared.UsageRecordLastMonthEnumCategoryEnumTurnmegabytesJapan.ToPointer(),
        EndDate: types.MustDateFromString("2022-04-03"),
        IncludeSubaccounts: sdk.Bool(false),
        Page: sdk.Int64(922757),
        PageSize: sdk.Int64(721430),
        PageToken: sdk.String("dolore"),
        StartDate: types.MustDateFromString("2022-07-19"),
    }, operations.ListUsageRecordLastMonthSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsageRecordLastMonthResponse != nil {
        // handle response
    }
}
```

## ListUsageRecordMonthly

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListUsageRecordMonthly(ctx, operations.ListUsageRecordMonthlyRequest{
        AccountSid: "sequi",
        Category: shared.UsageRecordMonthlyEnumCategoryEnumProxyActiveSessions.ToPointer(),
        EndDate: types.MustDateFromString("2022-03-22"),
        IncludeSubaccounts: sdk.Bool(false),
        Page: sdk.Int64(535468),
        PageSize: sdk.Int64(844235),
        PageToken: sdk.String("iure"),
        StartDate: types.MustDateFromString("2022-01-10"),
    }, operations.ListUsageRecordMonthlySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsageRecordMonthlyResponse != nil {
        // handle response
    }
}
```

## ListUsageRecordThisMonth

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListUsageRecordThisMonth(ctx, operations.ListUsageRecordThisMonthRequest{
        AccountSid: "vel",
        Category: shared.UsageRecordThisMonthEnumCategoryEnumMarketplaceRemeetingAutomaticSpeechRecognition.ToPointer(),
        EndDate: types.MustDateFromString("2022-10-06"),
        IncludeSubaccounts: sdk.Bool(false),
        Page: sdk.Int64(818034),
        PageSize: sdk.Int64(726878),
        PageToken: sdk.String("architecto"),
        StartDate: types.MustDateFromString("2022-07-13"),
    }, operations.ListUsageRecordThisMonthSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsageRecordThisMonthResponse != nil {
        // handle response
    }
}
```

## ListUsageRecordToday

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListUsageRecordToday(ctx, operations.ListUsageRecordTodayRequest{
        AccountSid: "porro",
        Category: shared.UsageRecordTodayEnumCategoryEnumMarketplaceTcpaDefenseSolutionsBlacklistFeed.ToPointer(),
        EndDate: types.MustDateFromString("2022-12-04"),
        IncludeSubaccounts: sdk.Bool(false),
        Page: sdk.Int64(36561),
        PageSize: sdk.Int64(424663),
        PageToken: sdk.String("ea"),
        StartDate: types.MustDateFromString("2022-02-14"),
    }, operations.ListUsageRecordTodaySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsageRecordTodayResponse != nil {
        // handle response
    }
}
```

## ListUsageRecordYearly

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListUsageRecordYearly(ctx, operations.ListUsageRecordYearlyRequest{
        AccountSid: "excepturi",
        Category: shared.UsageRecordYearlyEnumCategoryEnumPchatUsers.ToPointer(),
        EndDate: types.MustDateFromString("2022-09-19"),
        IncludeSubaccounts: sdk.Bool(false),
        Page: sdk.Int64(596433),
        PageSize: sdk.Int64(935302),
        PageToken: sdk.String("dicta"),
        StartDate: types.MustDateFromString("2020-01-28"),
    }, operations.ListUsageRecordYearlySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsageRecordYearlyResponse != nil {
        // handle response
    }
}
```

## ListUsageRecordYesterday

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListUsageRecordYesterday(ctx, operations.ListUsageRecordYesterdayRequest{
        AccountSid: "iste",
        Category: shared.UsageRecordYesterdayEnumCategoryEnumWirelessUsageDataIndividualAdditionalgb.ToPointer(),
        EndDate: types.MustDateFromString("2022-08-10"),
        IncludeSubaccounts: sdk.Bool(false),
        Page: sdk.Int64(931505),
        PageSize: sdk.Int64(242178),
        PageToken: sdk.String("laborum"),
        StartDate: types.MustDateFromString("2022-10-11"),
    }, operations.ListUsageRecordYesterdaySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsageRecordYesterdayResponse != nil {
        // handle response
    }
}
```

## ListUsageTrigger

Retrieve a list of usage-triggers belonging to the account used to make the request

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
    res, err := s.SDK.ListUsageTrigger(ctx, operations.ListUsageTriggerRequest{
        AccountSid: "iusto",
        Page: sdk.Int64(24753),
        PageSize: sdk.Int64(39992),
        PageToken: sdk.String("consequatur"),
        Recurring: shared.UsageTriggerEnumRecurringEnumYearly.ToPointer(),
        TriggerBy: shared.UsageTriggerEnumTriggerFieldEnumPrice.ToPointer(),
        UsageCategory: shared.UsageTriggerEnumUsageCategoryEnumNotify.ToPointer(),
    }, operations.ListUsageTriggerSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsageTriggerResponse != nil {
        // handle response
    }
}
```

## UpdateAccount

Modify the properties of a given Account

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
    res, err := s.SDK.UpdateAccount(ctx, operations.UpdateAccountRequest{
        RequestBody: &operations.UpdateAccountUpdateAccountRequest{
            FriendlyName: sdk.String("quidem"),
            Status: shared.AccountEnumStatusEnumSuspended.ToPointer(),
        },
        Sid: "facilis",
    }, operations.UpdateAccountSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010Account != nil {
        // handle response
    }
}
```

## UpdateAddress

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
    res, err := s.SDK.UpdateAddress(ctx, operations.UpdateAddressRequest{
        AccountSid: "placeat",
        RequestBody: &operations.UpdateAddressUpdateAddressRequest{
            AutoCorrectAddress: sdk.Bool(false),
            City: sdk.String("Melvinstad"),
            CustomerName: sdk.String("a"),
            EmergencyEnabled: sdk.Bool(false),
            FriendlyName: sdk.String("voluptate"),
            PostalCode: sdk.String("68673"),
            Region: sdk.String("corporis"),
            Street: sdk.String("642 Scotty Falls"),
            StreetSecondary: sdk.String("vitae"),
        },
        Sid: "inventore",
    }, operations.UpdateAddressSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountAddress != nil {
        // handle response
    }
}
```

## UpdateApplication

Updates the application's properties

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
    res, err := s.SDK.UpdateApplication(ctx, operations.UpdateApplicationRequest{
        AccountSid: "dolorem",
        RequestBody: &operations.UpdateApplicationUpdateApplicationRequest{
            APIVersion: sdk.String("ad"),
            FriendlyName: sdk.String("qui"),
            MessageStatusCallback: sdk.String("https://identical-fresco.net"),
            PublicApplicationConnectEnabled: sdk.Bool(false),
            SmsFallbackMethod: operations.UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnumPut.ToPointer(),
            SmsFallbackURL: sdk.String("https://rapid-keyboard.com"),
            SmsMethod: operations.UpdateApplicationUpdateApplicationRequestSmsMethodEnumHead.ToPointer(),
            SmsStatusCallback: sdk.String("http://impure-banker.com"),
            SmsURL: sdk.String("http://distorted-fish.org"),
            StatusCallback: sdk.String("http://dual-nursing.org"),
            StatusCallbackMethod: operations.UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnumPut.ToPointer(),
            VoiceCallerIDLookup: sdk.Bool(false),
            VoiceFallbackMethod: operations.UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnumPut.ToPointer(),
            VoiceFallbackURL: sdk.String("http://cultured-fiberglass.name"),
            VoiceMethod: operations.UpdateApplicationUpdateApplicationRequestVoiceMethodEnumPut.ToPointer(),
            VoiceURL: sdk.String("http://putrid-recipe.org"),
        },
        Sid: "officia",
    }, operations.UpdateApplicationSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountApplication != nil {
        // handle response
    }
}
```

## UpdateCall

Initiates a call redirect or terminates a call

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
    res, err := s.SDK.UpdateCall(ctx, operations.UpdateCallRequest{
        AccountSid: "quos",
        RequestBody: &operations.UpdateCallUpdateCallRequest{
            FallbackMethod: operations.UpdateCallUpdateCallRequestFallbackMethodEnumPut.ToPointer(),
            FallbackURL: sdk.String("http://lavish-back.org"),
            Method: operations.UpdateCallUpdateCallRequestMethodEnumHead.ToPointer(),
            Status: shared.CallEnumUpdateStatusEnumCanceled.ToPointer(),
            StatusCallback: sdk.String("https://flippant-robotics.net"),
            StatusCallbackMethod: operations.UpdateCallUpdateCallRequestStatusCallbackMethodEnumHead.ToPointer(),
            TimeLimit: sdk.Int64(418109),
            Twiml: sdk.String("esse"),
            URL: sdk.String("http://superior-brink.net"),
        },
        Sid: "facere",
    }, operations.UpdateCallSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountCall != nil {
        // handle response
    }
}
```

## UpdateCallFeedback

Update a Feedback resource for a call

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
    res, err := s.SDK.UpdateCallFeedback(ctx, operations.UpdateCallFeedbackRequest{
        AccountSid: "corrupti",
        CallSid: "molestiae",
        RequestBody: &operations.UpdateCallFeedbackUpdateCallFeedbackRequest{
            Issue: []shared.CallFeedbackEnumIssuesEnum{
                shared.CallFeedbackEnumIssuesEnumUnsolicitedCall,
                shared.CallFeedbackEnumIssuesEnumUnsolicitedCall,
                shared.CallFeedbackEnumIssuesEnumOneWayAudio,
            },
            QualityScore: sdk.Int64(575078),
        },
    }, operations.UpdateCallFeedbackSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountCallCallFeedback != nil {
        // handle response
    }
}
```

## UpdateCallRecording

Changes the status of the recording to paused, stopped, or in-progress. Note: Pass `Twilio.CURRENT` instead of recording sid to reference current active recording.

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
    res, err := s.SDK.UpdateCallRecording(ctx, operations.UpdateCallRecordingRequest{
        AccountSid: "ea",
        CallSid: "autem",
        RequestBody: &operations.UpdateCallRecordingUpdateCallRecordingRequest{
            PauseBehavior: sdk.String("ipsam"),
            Status: shared.CallRecordingEnumStatusEnumCompleted,
        },
        Sid: "laudantium",
    }, operations.UpdateCallRecordingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountCallCallRecording != nil {
        // handle response
    }
}
```

## UpdateConference

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
    res, err := s.SDK.UpdateConference(ctx, operations.UpdateConferenceRequest{
        AccountSid: "corporis",
        RequestBody: &operations.UpdateConferenceUpdateConferenceRequest{
            AnnounceMethod: operations.UpdateConferenceUpdateConferenceRequestAnnounceMethodEnumDelete.ToPointer(),
            AnnounceURL: sdk.String("https://severe-supper.com"),
            Status: shared.ConferenceEnumUpdateStatusEnumCompleted.ToPointer(),
        },
        Sid: "quia",
    }, operations.UpdateConferenceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountConference != nil {
        // handle response
    }
}
```

## UpdateConferenceRecording

Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.

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
    res, err := s.SDK.UpdateConferenceRecording(ctx, operations.UpdateConferenceRecordingRequest{
        AccountSid: "quidem",
        ConferenceSid: "fuga",
        RequestBody: &operations.UpdateConferenceRecordingUpdateConferenceRecordingRequest{
            PauseBehavior: sdk.String("repudiandae"),
            Status: shared.ConferenceRecordingEnumStatusEnumInProgress,
        },
        Sid: "expedita",
    }, operations.UpdateConferenceRecordingSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountConferenceConferenceRecording != nil {
        // handle response
    }
}
```

## UpdateConnectApp

Update a connect-app with the specified parameters

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
    res, err := s.SDK.UpdateConnectApp(ctx, operations.UpdateConnectAppRequest{
        AccountSid: "officiis",
        RequestBody: &operations.UpdateConnectAppUpdateConnectAppRequest{
            AuthorizeRedirectURL: sdk.String("http://terrific-jumbo.name"),
            CompanyName: sdk.String("odit"),
            DeauthorizeCallbackMethod: operations.UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnumHead.ToPointer(),
            DeauthorizeCallbackURL: sdk.String("http://petty-tweezers.biz"),
            Description: sdk.String("recusandae"),
            FriendlyName: sdk.String("similique"),
            HomepageURL: sdk.String("http://required-fellow.com"),
            Permissions: []shared.ConnectAppEnumPermissionEnum{
                shared.ConnectAppEnumPermissionEnumGetAll,
                shared.ConnectAppEnumPermissionEnumPostAll,
                shared.ConnectAppEnumPermissionEnumPostAll,
            },
        },
        Sid: "fugit",
    }, operations.UpdateConnectAppSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountConnectApp != nil {
        // handle response
    }
}
```

## UpdateIncomingPhoneNumber

Update an incoming-phone-number instance.

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
    res, err := s.SDK.UpdateIncomingPhoneNumber(ctx, operations.UpdateIncomingPhoneNumberRequest{
        AccountSid: "numquam",
        RequestBody: &operations.UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest{
            AccountSid: sdk.String("numquam"),
            AddressSid: sdk.String("nesciunt"),
            APIVersion: sdk.String("at"),
            BundleSid: sdk.String("officia"),
            EmergencyAddressSid: sdk.String("dignissimos"),
            EmergencyStatus: shared.IncomingPhoneNumberEnumEmergencyStatusEnumInactive.ToPointer(),
            FriendlyName: sdk.String("necessitatibus"),
            IdentitySid: sdk.String("corporis"),
            SmsApplicationSid: sdk.String("qui"),
            SmsFallbackMethod: operations.UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnumPut.ToPointer(),
            SmsFallbackURL: sdk.String("https://official-exploration.net"),
            SmsMethod: operations.UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnumGet.ToPointer(),
            SmsURL: sdk.String("http://intrepid-shift.info"),
            StatusCallback: sdk.String("http://grounded-efficiency.org"),
            StatusCallbackMethod: operations.UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnumDelete.ToPointer(),
            TrunkSid: sdk.String("tempore"),
            VoiceApplicationSid: sdk.String("aperiam"),
            VoiceCallerIDLookup: sdk.Bool(false),
            VoiceFallbackMethod: operations.UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnumPut.ToPointer(),
            VoiceFallbackURL: sdk.String("http://flawed-local.name"),
            VoiceMethod: operations.UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnumPost.ToPointer(),
            VoiceReceiveMode: shared.IncomingPhoneNumberEnumVoiceReceiveModeEnumFax.ToPointer(),
            VoiceURL: sdk.String("http://stable-practitioner.info"),
        },
        Sid: "est",
    }, operations.UpdateIncomingPhoneNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountIncomingPhoneNumber != nil {
        // handle response
    }
}
```

## UpdateKey

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
    res, err := s.SDK.UpdateKey(ctx, operations.UpdateKeyRequest{
        AccountSid: "impedit",
        RequestBody: &operations.UpdateKeyUpdateKeyRequest{
            FriendlyName: sdk.String("delectus"),
        },
        Sid: "tempore",
    }, operations.UpdateKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountKey != nil {
        // handle response
    }
}
```

## UpdateMember

Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL

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
    res, err := s.SDK.UpdateMember(ctx, operations.UpdateMemberRequest{
        AccountSid: "vero",
        CallSid: "odit",
        QueueSid: "repellat",
        RequestBody: &operations.UpdateMemberUpdateMemberRequest{
            Method: operations.UpdateMemberUpdateMemberRequestMethodEnumDelete.ToPointer(),
            URL: "http://instructive-ash.info",
        },
    }, operations.UpdateMemberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountQueueMember != nil {
        // handle response
    }
}
```

## UpdateMessage

To redact a message-body from a post-flight message record, post to the message instance resource with an empty body

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
    res, err := s.SDK.UpdateMessage(ctx, operations.UpdateMessageRequest{
        AccountSid: "minima",
        RequestBody: &operations.UpdateMessageUpdateMessageRequest{
            Body: sdk.String("in"),
            Status: shared.MessageEnumUpdateStatusEnumCanceled.ToPointer(),
        },
        Sid: "ducimus",
    }, operations.UpdateMessageSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountMessage != nil {
        // handle response
    }
}
```

## UpdateOutgoingCallerID

Updates the caller-id

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
    res, err := s.SDK.UpdateOutgoingCallerID(ctx, operations.UpdateOutgoingCallerIDRequest{
        AccountSid: "excepturi",
        RequestBody: &operations.UpdateOutgoingCallerIDUpdateOutgoingCallerIDRequest{
            FriendlyName: sdk.String("dolores"),
        },
        Sid: "error",
    }, operations.UpdateOutgoingCallerIDSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountOutgoingCallerID != nil {
        // handle response
    }
}
```

## UpdateParticipant

Update the properties of the participant

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
    res, err := s.SDK.UpdateParticipant(ctx, operations.UpdateParticipantRequest{
        AccountSid: "veritatis",
        CallSid: "ducimus",
        ConferenceSid: "voluptate",
        RequestBody: &operations.UpdateParticipantUpdateParticipantRequest{
            AnnounceMethod: operations.UpdateParticipantUpdateParticipantRequestAnnounceMethodEnumDelete.ToPointer(),
            AnnounceURL: sdk.String("https://plastic-sac.info"),
            BeepOnExit: sdk.Bool(false),
            CallSidToCoach: sdk.String("quaerat"),
            Coaching: sdk.Bool(false),
            EndConferenceOnExit: sdk.Bool(false),
            Hold: sdk.Bool(false),
            HoldMethod: operations.UpdateParticipantUpdateParticipantRequestHoldMethodEnumPost.ToPointer(),
            HoldURL: sdk.String("https://striped-program.info"),
            Muted: sdk.Bool(false),
            WaitMethod: operations.UpdateParticipantUpdateParticipantRequestWaitMethodEnumPost.ToPointer(),
            WaitURL: sdk.String("http://familiar-bag.name"),
        },
    }, operations.UpdateParticipantSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountConferenceParticipant != nil {
        // handle response
    }
}
```

## UpdatePayments

update an instance of payments with different phases of payment flows.

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
    res, err := s.SDK.UpdatePayments(ctx, operations.UpdatePaymentsRequest{
        AccountSid: "vero",
        CallSid: "sequi",
        RequestBody: &operations.UpdatePaymentsUpdatePaymentsRequest{
            Capture: shared.PaymentsEnumCaptureEnumBankAccountNumber.ToPointer(),
            IdempotencyKey: "cum",
            Status: shared.PaymentsEnumStatusEnumComplete.ToPointer(),
            StatusCallback: "https://gleaming-piglet.biz",
        },
        Sid: "nam",
    }, operations.UpdatePaymentsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountCallPayments != nil {
        // handle response
    }
}
```

## UpdateQueue

Update the queue with the new parameters

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
    res, err := s.SDK.UpdateQueue(ctx, operations.UpdateQueueRequest{
        AccountSid: "dicta",
        RequestBody: &operations.UpdateQueueUpdateQueueRequest{
            FriendlyName: sdk.String("consequuntur"),
            MaxSize: sdk.Int64(899867),
        },
        Sid: "nobis",
    }, operations.UpdateQueueSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountQueue != nil {
        // handle response
    }
}
```

## UpdateShortCode

Update a short code with the following parameters

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
    res, err := s.SDK.UpdateShortCode(ctx, operations.UpdateShortCodeRequest{
        AccountSid: "ipsa",
        RequestBody: &operations.UpdateShortCodeUpdateShortCodeRequest{
            APIVersion: sdk.String("ducimus"),
            FriendlyName: sdk.String("maiores"),
            SmsFallbackMethod: operations.UpdateShortCodeUpdateShortCodeRequestSmsFallbackMethodEnumHead.ToPointer(),
            SmsFallbackURL: sdk.String("http://hoarse-sub.net"),
            SmsMethod: operations.UpdateShortCodeUpdateShortCodeRequestSmsMethodEnumPatch.ToPointer(),
            SmsURL: sdk.String("https://handy-encirclement.info"),
        },
        Sid: "doloribus",
    }, operations.UpdateShortCodeSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountShortCode != nil {
        // handle response
    }
}
```

## UpdateSigningKey

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
    res, err := s.SDK.UpdateSigningKey(ctx, operations.UpdateSigningKeyRequest{
        AccountSid: "eligendi",
        RequestBody: &operations.UpdateSigningKeyUpdateSigningKeyRequest{
            FriendlyName: sdk.String("sint"),
        },
        Sid: "enim",
    }, operations.UpdateSigningKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSigningKey != nil {
        // handle response
    }
}
```

## UpdateSipCredential

Update a credential resource.

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
    res, err := s.SDK.UpdateSipCredential(ctx, operations.UpdateSipCredentialRequest{
        AccountSid: "hic",
        CredentialListSid: "animi",
        RequestBody: &operations.UpdateSipCredentialUpdateSipCredentialRequest{
            Password: sdk.String("quas"),
        },
        Sid: "totam",
    }, operations.UpdateSipCredentialSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipCredentialListSipCredential != nil {
        // handle response
    }
}
```

## UpdateSipCredentialList

Update a Credential List

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
    res, err := s.SDK.UpdateSipCredentialList(ctx, operations.UpdateSipCredentialListRequest{
        AccountSid: "molestias",
        RequestBody: &operations.UpdateSipCredentialListUpdateSipCredentialListRequest{
            FriendlyName: "odio",
        },
        Sid: "eaque",
    }, operations.UpdateSipCredentialListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipCredentialList != nil {
        // handle response
    }
}
```

## UpdateSipDomain

Update the attributes of a domain

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
    res, err := s.SDK.UpdateSipDomain(ctx, operations.UpdateSipDomainRequest{
        AccountSid: "saepe",
        RequestBody: &operations.UpdateSipDomainUpdateSipDomainRequest{
            ByocTrunkSid: sdk.String("architecto"),
            DomainName: sdk.String("quos"),
            EmergencyCallerSid: sdk.String("iste"),
            EmergencyCallingEnabled: sdk.Bool(false),
            FriendlyName: sdk.String("assumenda"),
            Secure: sdk.Bool(false),
            SipRegistration: sdk.Bool(false),
            VoiceFallbackMethod: operations.UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnumPut.ToPointer(),
            VoiceFallbackURL: sdk.String("https://euphoric-aquarium.org"),
            VoiceMethod: operations.UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnumPut.ToPointer(),
            VoiceStatusCallbackMethod: operations.UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnumPut.ToPointer(),
            VoiceStatusCallbackURL: sdk.String("http://enraged-thorn.name"),
            VoiceURL: sdk.String("http://glum-falling-out.net"),
        },
        Sid: "architecto",
    }, operations.UpdateSipDomainSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipDomain != nil {
        // handle response
    }
}
```

## UpdateSipIPAccessControlList

Rename an IpAccessControlList

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
    res, err := s.SDK.UpdateSipIPAccessControlList(ctx, operations.UpdateSipIPAccessControlListRequest{
        AccountSid: "cupiditate",
        RequestBody: &operations.UpdateSipIPAccessControlListUpdateSipIPAccessControlListRequest{
            FriendlyName: "molestiae",
        },
        Sid: "eligendi",
    }, operations.UpdateSipIPAccessControlListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipIPAccessControlList != nil {
        // handle response
    }
}
```

## UpdateSipIPAddress

Update an IpAddress resource.

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
    res, err := s.SDK.UpdateSipIPAddress(ctx, operations.UpdateSipIPAddressRequest{
        AccountSid: "possimus",
        IPAccessControlListSid: "non",
        RequestBody: &operations.UpdateSipIPAddressUpdateSipIPAddressRequest{
            CidrPrefixLength: sdk.Int64(298187),
            FriendlyName: sdk.String("itaque"),
            IPAddress: sdk.String("sed"),
        },
        Sid: "asperiores",
    }, operations.UpdateSipIPAddressSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountSipSipIPAccessControlListSipIPAddress != nil {
        // handle response
    }
}
```

## UpdateSiprec

Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource

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
    res, err := s.SDK.UpdateSiprec(ctx, operations.UpdateSiprecRequest{
        AccountSid: "veniam",
        CallSid: "consequuntur",
        RequestBody: &operations.UpdateSiprecUpdateSiprecRequest{
            Status: shared.SiprecEnumUpdateStatusEnumStopped,
        },
        Sid: "facere",
    }, operations.UpdateSiprecSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountCallSiprec != nil {
        // handle response
    }
}
```

## UpdateStream

Stop a Stream using either the SID of the Stream resource or the `name` used when creating the resource

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
    res, err := s.SDK.UpdateStream(ctx, operations.UpdateStreamRequest{
        AccountSid: "laudantium",
        CallSid: "odit",
        RequestBody: &operations.UpdateStreamUpdateStreamRequest{
            Status: shared.StreamEnumUpdateStatusEnumStopped,
        },
        Sid: "pariatur",
    }, operations.UpdateStreamSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountCallStream != nil {
        // handle response
    }
}
```

## UpdateUsageTrigger

Update an instance of a usage trigger

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
    res, err := s.SDK.UpdateUsageTrigger(ctx, operations.UpdateUsageTriggerRequest{
        AccountSid: "amet",
        RequestBody: &operations.UpdateUsageTriggerUpdateUsageTriggerRequest{
            CallbackMethod: operations.UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnumPost.ToPointer(),
            CallbackURL: sdk.String("http://esteemed-publishing.net"),
            FriendlyName: sdk.String("nisi"),
        },
        Sid: "voluptatibus",
    }, operations.UpdateUsageTriggerSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIV2010AccountUsageUsageTrigger != nil {
        // handle response
    }
}
```
