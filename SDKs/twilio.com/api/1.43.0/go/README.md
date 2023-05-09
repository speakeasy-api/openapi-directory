# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/api/1.43.0/go
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
    res, err := s.CreateAccount(ctx, operations.CreateAccountCreateAccountRequest{
        FriendlyName: sdk.String("corrupti"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateAccount](docs/sdk/README.md#createaccount) - Create a new Twilio Subaccount from the account making the request
* [CreateAddress](docs/sdk/README.md#createaddress)
* [CreateApplication](docs/sdk/README.md#createapplication) - Create a new application within your account
* [CreateCall](docs/sdk/README.md#createcall) - Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections
* [CreateCallFeedbackSummary](docs/sdk/README.md#createcallfeedbacksummary) - Create a FeedbackSummary resource for a call
* [CreateCallRecording](docs/sdk/README.md#createcallrecording) - Create a recording for the call
* [CreateIncomingPhoneNumber](docs/sdk/README.md#createincomingphonenumber) - Purchase a phone-number for the account.
* [CreateIncomingPhoneNumberAssignedAddOn](docs/sdk/README.md#createincomingphonenumberassignedaddon) - Assign an Add-on installation to the Number specified.
* [CreateIncomingPhoneNumberLocal](docs/sdk/README.md#createincomingphonenumberlocal)
* [CreateIncomingPhoneNumberMobile](docs/sdk/README.md#createincomingphonenumbermobile)
* [CreateIncomingPhoneNumberTollFree](docs/sdk/README.md#createincomingphonenumbertollfree)
* [CreateMessage](docs/sdk/README.md#createmessage) - Send a message from the account used to make the request
* [CreateMessageFeedback](docs/sdk/README.md#createmessagefeedback)
* [CreateNewKey](docs/sdk/README.md#createnewkey)
* [CreateNewSigningKey](docs/sdk/README.md#createnewsigningkey) - Create a new Signing Key for the account making the request.
* [CreateParticipant](docs/sdk/README.md#createparticipant)
* [CreatePayments](docs/sdk/README.md#createpayments) - create an instance of payments. This will start a new payments session
* [CreateQueue](docs/sdk/README.md#createqueue) - Create a queue
* [CreateSipAuthCallsCredentialListMapping](docs/sdk/README.md#createsipauthcallscredentiallistmapping) - Create a new credential list mapping resource
* [CreateSipAuthCallsIPAccessControlListMapping](docs/sdk/README.md#createsipauthcallsipaccesscontrollistmapping) - Create a new IP Access Control List mapping
* [CreateSipAuthRegistrationsCredentialListMapping](docs/sdk/README.md#createsipauthregistrationscredentiallistmapping) - Create a new credential list mapping resource
* [CreateSipCredential](docs/sdk/README.md#createsipcredential) - Create a new credential resource.
* [CreateSipCredentialList](docs/sdk/README.md#createsipcredentiallist) - Create a Credential List
* [CreateSipCredentialListMapping](docs/sdk/README.md#createsipcredentiallistmapping) - Create a CredentialListMapping resource for an account.
* [CreateSipDomain](docs/sdk/README.md#createsipdomain) - Create a new Domain
* [CreateSipIPAccessControlList](docs/sdk/README.md#createsipipaccesscontrollist) - Create a new IpAccessControlList resource
* [CreateSipIPAccessControlListMapping](docs/sdk/README.md#createsipipaccesscontrollistmapping) - Create a new IpAccessControlListMapping resource.
* [CreateSipIPAddress](docs/sdk/README.md#createsipipaddress) - Create a new IpAddress resource.
* [CreateSiprec](docs/sdk/README.md#createsiprec) - Create a Siprec
* [CreateStream](docs/sdk/README.md#createstream) - Create a Stream
* [CreateToken](docs/sdk/README.md#createtoken) - Create a new token for ICE servers
* [CreateUsageTrigger](docs/sdk/README.md#createusagetrigger) - Create a new UsageTrigger
* [CreateUserDefinedMessage](docs/sdk/README.md#createuserdefinedmessage) - Create a new User Defined Message for the given Call SID.
* [CreateUserDefinedMessageSubscription](docs/sdk/README.md#createuserdefinedmessagesubscription) - Subscribe to User Defined Messages for a given Call SID.
* [CreateValidationRequest](docs/sdk/README.md#createvalidationrequest)
* [DeleteAddress](docs/sdk/README.md#deleteaddress)
* [DeleteApplication](docs/sdk/README.md#deleteapplication) - Delete the application by the specified application sid
* [DeleteCall](docs/sdk/README.md#deletecall) - Delete a Call record from your account. Once the record is deleted, it will no longer appear in the API and Account Portal logs.
* [DeleteCallFeedbackSummary](docs/sdk/README.md#deletecallfeedbacksummary) - Delete a FeedbackSummary resource from a call
* [DeleteCallRecording](docs/sdk/README.md#deletecallrecording) - Delete a recording from your account
* [DeleteConferenceRecording](docs/sdk/README.md#deleteconferencerecording) - Delete a recording from your account
* [DeleteConnectApp](docs/sdk/README.md#deleteconnectapp) - Delete an instance of a connect-app
* [DeleteIncomingPhoneNumber](docs/sdk/README.md#deleteincomingphonenumber) - Delete a phone-numbers belonging to the account used to make the request.
* [DeleteIncomingPhoneNumberAssignedAddOn](docs/sdk/README.md#deleteincomingphonenumberassignedaddon) - Remove the assignment of an Add-on installation from the Number specified.
* [DeleteKey](docs/sdk/README.md#deletekey)
* [DeleteMedia](docs/sdk/README.md#deletemedia) - Delete media from your account. Once delete, you will no longer be billed
* [DeleteMessage](docs/sdk/README.md#deletemessage) - Deletes a message record from your account
* [DeleteOutgoingCallerID](docs/sdk/README.md#deleteoutgoingcallerid) - Delete the caller-id specified from the account
* [DeleteParticipant](docs/sdk/README.md#deleteparticipant) - Kick a participant from a given conference
* [DeleteQueue](docs/sdk/README.md#deletequeue) - Remove an empty queue
* [DeleteRecording](docs/sdk/README.md#deleterecording) - Delete a recording from your account
* [DeleteRecordingAddOnResult](docs/sdk/README.md#deleterecordingaddonresult) - Delete a result and purge all associated Payloads
* [DeleteRecordingAddOnResultPayload](docs/sdk/README.md#deleterecordingaddonresultpayload) - Delete a payload from the result along with all associated Data
* [DeleteRecordingTranscription](docs/sdk/README.md#deleterecordingtranscription)
* [DeleteSigningKey](docs/sdk/README.md#deletesigningkey)
* [DeleteSipAuthCallsCredentialListMapping](docs/sdk/README.md#deletesipauthcallscredentiallistmapping) - Delete a credential list mapping from the requested domain
* [DeleteSipAuthCallsIPAccessControlListMapping](docs/sdk/README.md#deletesipauthcallsipaccesscontrollistmapping) - Delete an IP Access Control List mapping from the requested domain
* [DeleteSipAuthRegistrationsCredentialListMapping](docs/sdk/README.md#deletesipauthregistrationscredentiallistmapping) - Delete a credential list mapping from the requested domain
* [DeleteSipCredential](docs/sdk/README.md#deletesipcredential) - Delete a credential resource.
* [DeleteSipCredentialList](docs/sdk/README.md#deletesipcredentiallist) - Delete a Credential List
* [DeleteSipCredentialListMapping](docs/sdk/README.md#deletesipcredentiallistmapping) - Delete a CredentialListMapping resource from an account.
* [DeleteSipDomain](docs/sdk/README.md#deletesipdomain) - Delete an instance of a Domain
* [DeleteSipIPAccessControlList](docs/sdk/README.md#deletesipipaccesscontrollist) - Delete an IpAccessControlList from the requested account
* [DeleteSipIPAccessControlListMapping](docs/sdk/README.md#deletesipipaccesscontrollistmapping) - Delete an IpAccessControlListMapping resource.
* [DeleteSipIPAddress](docs/sdk/README.md#deletesipipaddress) - Delete an IpAddress resource.
* [DeleteTranscription](docs/sdk/README.md#deletetranscription) - Delete a transcription from the account used to make the request
* [DeleteUsageTrigger](docs/sdk/README.md#deleteusagetrigger)
* [DeleteUserDefinedMessageSubscription](docs/sdk/README.md#deleteuserdefinedmessagesubscription) - Delete a specific User Defined Message Subscription.
* [FetchAccount](docs/sdk/README.md#fetchaccount) - Fetch the account specified by the provided Account Sid
* [FetchAddress](docs/sdk/README.md#fetchaddress)
* [FetchApplication](docs/sdk/README.md#fetchapplication) - Fetch the application specified by the provided sid
* [FetchAuthorizedConnectApp](docs/sdk/README.md#fetchauthorizedconnectapp) - Fetch an instance of an authorized-connect-app
* [FetchAvailablePhoneNumberCountry](docs/sdk/README.md#fetchavailablephonenumbercountry)
* [FetchBalance](docs/sdk/README.md#fetchbalance) - Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected immediately. Child accounts do not contain balance information
* [FetchCall](docs/sdk/README.md#fetchcall) - Fetch the call specified by the provided Call SID
* [FetchCallFeedback](docs/sdk/README.md#fetchcallfeedback) - Fetch a Feedback resource from a call
* [FetchCallFeedbackSummary](docs/sdk/README.md#fetchcallfeedbacksummary) - Fetch a FeedbackSummary resource from a call
* [FetchCallNotification](docs/sdk/README.md#fetchcallnotification)
* [FetchCallRecording](docs/sdk/README.md#fetchcallrecording) - Fetch an instance of a recording for a call
* [FetchConference](docs/sdk/README.md#fetchconference) - Fetch an instance of a conference
* [FetchConferenceRecording](docs/sdk/README.md#fetchconferencerecording) - Fetch an instance of a recording for a call
* [FetchConnectApp](docs/sdk/README.md#fetchconnectapp) - Fetch an instance of a connect-app
* [FetchIncomingPhoneNumber](docs/sdk/README.md#fetchincomingphonenumber) - Fetch an incoming-phone-number belonging to the account used to make the request.
* [FetchIncomingPhoneNumberAssignedAddOn](docs/sdk/README.md#fetchincomingphonenumberassignedaddon) - Fetch an instance of an Add-on installation currently assigned to this Number.
* [FetchIncomingPhoneNumberAssignedAddOnExtension](docs/sdk/README.md#fetchincomingphonenumberassignedaddonextension) - Fetch an instance of an Extension for the Assigned Add-on.
* [FetchKey](docs/sdk/README.md#fetchkey)
* [FetchMedia](docs/sdk/README.md#fetchmedia) - Fetch a single media instance belonging to the account used to make the request
* [FetchMember](docs/sdk/README.md#fetchmember) - Fetch a specific member from the queue
* [FetchMessage](docs/sdk/README.md#fetchmessage) - Fetch a message belonging to the account used to make the request
* [FetchNotification](docs/sdk/README.md#fetchnotification) - Fetch a notification belonging to the account used to make the request
* [FetchOutgoingCallerID](docs/sdk/README.md#fetchoutgoingcallerid) - Fetch an outgoing-caller-id belonging to the account used to make the request
* [FetchParticipant](docs/sdk/README.md#fetchparticipant) - Fetch an instance of a participant
* [FetchQueue](docs/sdk/README.md#fetchqueue) - Fetch an instance of a queue identified by the QueueSid
* [FetchRecording](docs/sdk/README.md#fetchrecording) - Fetch an instance of a recording
* [FetchRecordingAddOnResult](docs/sdk/README.md#fetchrecordingaddonresult) - Fetch an instance of an AddOnResult
* [FetchRecordingAddOnResultPayload](docs/sdk/README.md#fetchrecordingaddonresultpayload) - Fetch an instance of a result payload
* [FetchRecordingTranscription](docs/sdk/README.md#fetchrecordingtranscription)
* [FetchShortCode](docs/sdk/README.md#fetchshortcode) - Fetch an instance of a short code
* [FetchSigningKey](docs/sdk/README.md#fetchsigningkey)
* [FetchSipAuthCallsCredentialListMapping](docs/sdk/README.md#fetchsipauthcallscredentiallistmapping) - Fetch a specific instance of a credential list mapping
* [FetchSipAuthCallsIPAccessControlListMapping](docs/sdk/README.md#fetchsipauthcallsipaccesscontrollistmapping) - Fetch a specific instance of an IP Access Control List mapping
* [FetchSipAuthRegistrationsCredentialListMapping](docs/sdk/README.md#fetchsipauthregistrationscredentiallistmapping) - Fetch a specific instance of a credential list mapping
* [FetchSipCredential](docs/sdk/README.md#fetchsipcredential) - Fetch a single credential.
* [FetchSipCredentialList](docs/sdk/README.md#fetchsipcredentiallist) - Get a Credential List
* [FetchSipCredentialListMapping](docs/sdk/README.md#fetchsipcredentiallistmapping) - Fetch a single CredentialListMapping resource from an account.
* [FetchSipDomain](docs/sdk/README.md#fetchsipdomain) - Fetch an instance of a Domain
* [FetchSipIPAccessControlList](docs/sdk/README.md#fetchsipipaccesscontrollist) - Fetch a specific instance of an IpAccessControlList
* [FetchSipIPAccessControlListMapping](docs/sdk/README.md#fetchsipipaccesscontrollistmapping) - Fetch an IpAccessControlListMapping resource.
* [FetchSipIPAddress](docs/sdk/README.md#fetchsipipaddress) - Read one IpAddress resource.
* [FetchTranscription](docs/sdk/README.md#fetchtranscription) - Fetch an instance of a Transcription
* [FetchUsageTrigger](docs/sdk/README.md#fetchusagetrigger) - Fetch and instance of a usage-trigger
* [ListAccount](docs/sdk/README.md#listaccount) - Retrieves a collection of Accounts belonging to the account used to make the request
* [ListAddress](docs/sdk/README.md#listaddress)
* [ListApplication](docs/sdk/README.md#listapplication) - Retrieve a list of applications representing an application within the requesting account
* [ListAuthorizedConnectApp](docs/sdk/README.md#listauthorizedconnectapp) - Retrieve a list of authorized-connect-apps belonging to the account used to make the request
* [ListAvailablePhoneNumberCountry](docs/sdk/README.md#listavailablephonenumbercountry)
* [ListAvailablePhoneNumberLocal](docs/sdk/README.md#listavailablephonenumberlocal)
* [ListAvailablePhoneNumberMachineToMachine](docs/sdk/README.md#listavailablephonenumbermachinetomachine)
* [ListAvailablePhoneNumberMobile](docs/sdk/README.md#listavailablephonenumbermobile)
* [ListAvailablePhoneNumberNational](docs/sdk/README.md#listavailablephonenumbernational)
* [ListAvailablePhoneNumberSharedCost](docs/sdk/README.md#listavailablephonenumbersharedcost)
* [ListAvailablePhoneNumberTollFree](docs/sdk/README.md#listavailablephonenumbertollfree)
* [ListAvailablePhoneNumberVoip](docs/sdk/README.md#listavailablephonenumbervoip)
* [ListCall](docs/sdk/README.md#listcall) - Retrieves a collection of calls made to and from your account
* [ListCallEvent](docs/sdk/README.md#listcallevent) - Retrieve a list of all events for a call.
* [ListCallNotification](docs/sdk/README.md#listcallnotification)
* [ListCallRecording](docs/sdk/README.md#listcallrecording) - Retrieve a list of recordings belonging to the call used to make the request
* [ListConference](docs/sdk/README.md#listconference) - Retrieve a list of conferences belonging to the account used to make the request
* [ListConferenceRecording](docs/sdk/README.md#listconferencerecording) - Retrieve a list of recordings belonging to the call used to make the request
* [ListConnectApp](docs/sdk/README.md#listconnectapp) - Retrieve a list of connect-apps belonging to the account used to make the request
* [ListDependentPhoneNumber](docs/sdk/README.md#listdependentphonenumber)
* [ListIncomingPhoneNumber](docs/sdk/README.md#listincomingphonenumber) - Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.
* [ListIncomingPhoneNumberAssignedAddOn](docs/sdk/README.md#listincomingphonenumberassignedaddon) - Retrieve a list of Add-on installations currently assigned to this Number.
* [ListIncomingPhoneNumberAssignedAddOnExtension](docs/sdk/README.md#listincomingphonenumberassignedaddonextension) - Retrieve a list of Extensions for the Assigned Add-on.
* [ListIncomingPhoneNumberLocal](docs/sdk/README.md#listincomingphonenumberlocal)
* [ListIncomingPhoneNumberMobile](docs/sdk/README.md#listincomingphonenumbermobile)
* [ListIncomingPhoneNumberTollFree](docs/sdk/README.md#listincomingphonenumbertollfree)
* [ListKey](docs/sdk/README.md#listkey)
* [ListMedia](docs/sdk/README.md#listmedia) - Retrieve a list of Media resources belonging to the account used to make the request
* [ListMember](docs/sdk/README.md#listmember) - Retrieve the members of the queue
* [ListMessage](docs/sdk/README.md#listmessage) - Retrieve a list of messages belonging to the account used to make the request
* [ListNotification](docs/sdk/README.md#listnotification) - Retrieve a list of notifications belonging to the account used to make the request
* [ListOutgoingCallerID](docs/sdk/README.md#listoutgoingcallerid) - Retrieve a list of outgoing-caller-ids belonging to the account used to make the request
* [ListParticipant](docs/sdk/README.md#listparticipant) - Retrieve a list of participants belonging to the account used to make the request
* [ListQueue](docs/sdk/README.md#listqueue) - Retrieve a list of queues belonging to the account used to make the request
* [ListRecording](docs/sdk/README.md#listrecording) - Retrieve a list of recordings belonging to the account used to make the request
* [ListRecordingAddOnResult](docs/sdk/README.md#listrecordingaddonresult) - Retrieve a list of results belonging to the recording
* [ListRecordingAddOnResultPayload](docs/sdk/README.md#listrecordingaddonresultpayload) - Retrieve a list of payloads belonging to the AddOnResult
* [ListRecordingTranscription](docs/sdk/README.md#listrecordingtranscription)
* [ListShortCode](docs/sdk/README.md#listshortcode) - Retrieve a list of short-codes belonging to the account used to make the request
* [ListSigningKey](docs/sdk/README.md#listsigningkey)
* [ListSipAuthCallsCredentialListMapping](docs/sdk/README.md#listsipauthcallscredentiallistmapping) - Retrieve a list of credential list mappings belonging to the domain used in the request
* [ListSipAuthCallsIPAccessControlListMapping](docs/sdk/README.md#listsipauthcallsipaccesscontrollistmapping) - Retrieve a list of IP Access Control List mappings belonging to the domain used in the request
* [ListSipAuthRegistrationsCredentialListMapping](docs/sdk/README.md#listsipauthregistrationscredentiallistmapping) - Retrieve a list of credential list mappings belonging to the domain used in the request
* [ListSipCredential](docs/sdk/README.md#listsipcredential) - Retrieve a list of credentials.
* [ListSipCredentialList](docs/sdk/README.md#listsipcredentiallist) - Get All Credential Lists
* [ListSipCredentialListMapping](docs/sdk/README.md#listsipcredentiallistmapping) - Read multiple CredentialListMapping resources from an account.
* [ListSipDomain](docs/sdk/README.md#listsipdomain) - Retrieve a list of domains belonging to the account used to make the request
* [ListSipIPAccessControlList](docs/sdk/README.md#listsipipaccesscontrollist) - Retrieve a list of IpAccessControlLists that belong to the account used to make the request
* [ListSipIPAccessControlListMapping](docs/sdk/README.md#listsipipaccesscontrollistmapping) - Retrieve a list of IpAccessControlListMapping resources.
* [ListSipIPAddress](docs/sdk/README.md#listsipipaddress) - Read multiple IpAddress resources.
* [ListTranscription](docs/sdk/README.md#listtranscription) - Retrieve a list of transcriptions belonging to the account used to make the request
* [ListUsageRecord](docs/sdk/README.md#listusagerecord) - Retrieve a list of usage-records belonging to the account used to make the request
* [ListUsageRecordAllTime](docs/sdk/README.md#listusagerecordalltime)
* [ListUsageRecordDaily](docs/sdk/README.md#listusagerecorddaily)
* [ListUsageRecordLastMonth](docs/sdk/README.md#listusagerecordlastmonth)
* [ListUsageRecordMonthly](docs/sdk/README.md#listusagerecordmonthly)
* [ListUsageRecordThisMonth](docs/sdk/README.md#listusagerecordthismonth)
* [ListUsageRecordToday](docs/sdk/README.md#listusagerecordtoday)
* [ListUsageRecordYearly](docs/sdk/README.md#listusagerecordyearly)
* [ListUsageRecordYesterday](docs/sdk/README.md#listusagerecordyesterday)
* [ListUsageTrigger](docs/sdk/README.md#listusagetrigger) - Retrieve a list of usage-triggers belonging to the account used to make the request
* [UpdateAccount](docs/sdk/README.md#updateaccount) - Modify the properties of a given Account
* [UpdateAddress](docs/sdk/README.md#updateaddress)
* [UpdateApplication](docs/sdk/README.md#updateapplication) - Updates the application's properties
* [UpdateCall](docs/sdk/README.md#updatecall) - Initiates a call redirect or terminates a call
* [UpdateCallFeedback](docs/sdk/README.md#updatecallfeedback) - Update a Feedback resource for a call
* [UpdateCallRecording](docs/sdk/README.md#updatecallrecording) - Changes the status of the recording to paused, stopped, or in-progress. Note: Pass `Twilio.CURRENT` instead of recording sid to reference current active recording.
* [UpdateConference](docs/sdk/README.md#updateconference)
* [UpdateConferenceRecording](docs/sdk/README.md#updateconferencerecording) - Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.
* [UpdateConnectApp](docs/sdk/README.md#updateconnectapp) - Update a connect-app with the specified parameters
* [UpdateIncomingPhoneNumber](docs/sdk/README.md#updateincomingphonenumber) - Update an incoming-phone-number instance.
* [UpdateKey](docs/sdk/README.md#updatekey)
* [UpdateMember](docs/sdk/README.md#updatemember) - Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL
* [UpdateMessage](docs/sdk/README.md#updatemessage) - To redact a message-body from a post-flight message record, post to the message instance resource with an empty body
* [UpdateOutgoingCallerID](docs/sdk/README.md#updateoutgoingcallerid) - Updates the caller-id
* [UpdateParticipant](docs/sdk/README.md#updateparticipant) - Update the properties of the participant
* [UpdatePayments](docs/sdk/README.md#updatepayments) - update an instance of payments with different phases of payment flows.
* [UpdateQueue](docs/sdk/README.md#updatequeue) - Update the queue with the new parameters
* [UpdateShortCode](docs/sdk/README.md#updateshortcode) - Update a short code with the following parameters
* [UpdateSigningKey](docs/sdk/README.md#updatesigningkey)
* [UpdateSipCredential](docs/sdk/README.md#updatesipcredential) - Update a credential resource.
* [UpdateSipCredentialList](docs/sdk/README.md#updatesipcredentiallist) - Update a Credential List
* [UpdateSipDomain](docs/sdk/README.md#updatesipdomain) - Update the attributes of a domain
* [UpdateSipIPAccessControlList](docs/sdk/README.md#updatesipipaccesscontrollist) - Rename an IpAccessControlList
* [UpdateSipIPAddress](docs/sdk/README.md#updatesipipaddress) - Update an IpAddress resource.
* [UpdateSiprec](docs/sdk/README.md#updatesiprec) - Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource
* [UpdateStream](docs/sdk/README.md#updatestream) - Stop a Stream using either the SID of the Stream resource or the `name` used when creating the resource
* [UpdateUsageTrigger](docs/sdk/README.md#updateusagetrigger) - Update an instance of a usage trigger
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
