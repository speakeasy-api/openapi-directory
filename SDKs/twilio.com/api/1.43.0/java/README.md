# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
                friendlyName = "corrupti";
            }};            

            CreateAccountResponse res = sdk.createAccount(req, new CreateAccountSecurity("provident", "distinctio") {{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createAccount](docs/sdk/README.md#createaccount) - Create a new Twilio Subaccount from the account making the request
* [createAddress](docs/sdk/README.md#createaddress)
* [createApplication](docs/sdk/README.md#createapplication) - Create a new application within your account
* [createCall](docs/sdk/README.md#createcall) - Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections
* [createCallFeedbackSummary](docs/sdk/README.md#createcallfeedbacksummary) - Create a FeedbackSummary resource for a call
* [createCallRecording](docs/sdk/README.md#createcallrecording) - Create a recording for the call
* [createIncomingPhoneNumber](docs/sdk/README.md#createincomingphonenumber) - Purchase a phone-number for the account.
* [createIncomingPhoneNumberAssignedAddOn](docs/sdk/README.md#createincomingphonenumberassignedaddon) - Assign an Add-on installation to the Number specified.
* [createIncomingPhoneNumberLocal](docs/sdk/README.md#createincomingphonenumberlocal)
* [createIncomingPhoneNumberMobile](docs/sdk/README.md#createincomingphonenumbermobile)
* [createIncomingPhoneNumberTollFree](docs/sdk/README.md#createincomingphonenumbertollfree)
* [createMessage](docs/sdk/README.md#createmessage) - Send a message from the account used to make the request
* [createMessageFeedback](docs/sdk/README.md#createmessagefeedback)
* [createNewKey](docs/sdk/README.md#createnewkey)
* [createNewSigningKey](docs/sdk/README.md#createnewsigningkey) - Create a new Signing Key for the account making the request.
* [createParticipant](docs/sdk/README.md#createparticipant)
* [createPayments](docs/sdk/README.md#createpayments) - create an instance of payments. This will start a new payments session
* [createQueue](docs/sdk/README.md#createqueue) - Create a queue
* [createSipAuthCallsCredentialListMapping](docs/sdk/README.md#createsipauthcallscredentiallistmapping) - Create a new credential list mapping resource
* [createSipAuthCallsIpAccessControlListMapping](docs/sdk/README.md#createsipauthcallsipaccesscontrollistmapping) - Create a new IP Access Control List mapping
* [createSipAuthRegistrationsCredentialListMapping](docs/sdk/README.md#createsipauthregistrationscredentiallistmapping) - Create a new credential list mapping resource
* [createSipCredential](docs/sdk/README.md#createsipcredential) - Create a new credential resource.
* [createSipCredentialList](docs/sdk/README.md#createsipcredentiallist) - Create a Credential List
* [createSipCredentialListMapping](docs/sdk/README.md#createsipcredentiallistmapping) - Create a CredentialListMapping resource for an account.
* [createSipDomain](docs/sdk/README.md#createsipdomain) - Create a new Domain
* [createSipIpAccessControlList](docs/sdk/README.md#createsipipaccesscontrollist) - Create a new IpAccessControlList resource
* [createSipIpAccessControlListMapping](docs/sdk/README.md#createsipipaccesscontrollistmapping) - Create a new IpAccessControlListMapping resource.
* [createSipIpAddress](docs/sdk/README.md#createsipipaddress) - Create a new IpAddress resource.
* [createSiprec](docs/sdk/README.md#createsiprec) - Create a Siprec
* [createStream](docs/sdk/README.md#createstream) - Create a Stream
* [createToken](docs/sdk/README.md#createtoken) - Create a new token for ICE servers
* [createUsageTrigger](docs/sdk/README.md#createusagetrigger) - Create a new UsageTrigger
* [createUserDefinedMessage](docs/sdk/README.md#createuserdefinedmessage) - Create a new User Defined Message for the given Call SID.
* [createUserDefinedMessageSubscription](docs/sdk/README.md#createuserdefinedmessagesubscription) - Subscribe to User Defined Messages for a given Call SID.
* [createValidationRequest](docs/sdk/README.md#createvalidationrequest)
* [deleteAddress](docs/sdk/README.md#deleteaddress)
* [deleteApplication](docs/sdk/README.md#deleteapplication) - Delete the application by the specified application sid
* [deleteCall](docs/sdk/README.md#deletecall) - Delete a Call record from your account. Once the record is deleted, it will no longer appear in the API and Account Portal logs.
* [deleteCallFeedbackSummary](docs/sdk/README.md#deletecallfeedbacksummary) - Delete a FeedbackSummary resource from a call
* [deleteCallRecording](docs/sdk/README.md#deletecallrecording) - Delete a recording from your account
* [deleteConferenceRecording](docs/sdk/README.md#deleteconferencerecording) - Delete a recording from your account
* [deleteConnectApp](docs/sdk/README.md#deleteconnectapp) - Delete an instance of a connect-app
* [deleteIncomingPhoneNumber](docs/sdk/README.md#deleteincomingphonenumber) - Delete a phone-numbers belonging to the account used to make the request.
* [deleteIncomingPhoneNumberAssignedAddOn](docs/sdk/README.md#deleteincomingphonenumberassignedaddon) - Remove the assignment of an Add-on installation from the Number specified.
* [deleteKey](docs/sdk/README.md#deletekey)
* [deleteMedia](docs/sdk/README.md#deletemedia) - Delete media from your account. Once delete, you will no longer be billed
* [deleteMessage](docs/sdk/README.md#deletemessage) - Deletes a message record from your account
* [deleteOutgoingCallerId](docs/sdk/README.md#deleteoutgoingcallerid) - Delete the caller-id specified from the account
* [deleteParticipant](docs/sdk/README.md#deleteparticipant) - Kick a participant from a given conference
* [deleteQueue](docs/sdk/README.md#deletequeue) - Remove an empty queue
* [deleteRecording](docs/sdk/README.md#deleterecording) - Delete a recording from your account
* [deleteRecordingAddOnResult](docs/sdk/README.md#deleterecordingaddonresult) - Delete a result and purge all associated Payloads
* [deleteRecordingAddOnResultPayload](docs/sdk/README.md#deleterecordingaddonresultpayload) - Delete a payload from the result along with all associated Data
* [deleteRecordingTranscription](docs/sdk/README.md#deleterecordingtranscription)
* [deleteSigningKey](docs/sdk/README.md#deletesigningkey)
* [deleteSipAuthCallsCredentialListMapping](docs/sdk/README.md#deletesipauthcallscredentiallistmapping) - Delete a credential list mapping from the requested domain
* [deleteSipAuthCallsIpAccessControlListMapping](docs/sdk/README.md#deletesipauthcallsipaccesscontrollistmapping) - Delete an IP Access Control List mapping from the requested domain
* [deleteSipAuthRegistrationsCredentialListMapping](docs/sdk/README.md#deletesipauthregistrationscredentiallistmapping) - Delete a credential list mapping from the requested domain
* [deleteSipCredential](docs/sdk/README.md#deletesipcredential) - Delete a credential resource.
* [deleteSipCredentialList](docs/sdk/README.md#deletesipcredentiallist) - Delete a Credential List
* [deleteSipCredentialListMapping](docs/sdk/README.md#deletesipcredentiallistmapping) - Delete a CredentialListMapping resource from an account.
* [deleteSipDomain](docs/sdk/README.md#deletesipdomain) - Delete an instance of a Domain
* [deleteSipIpAccessControlList](docs/sdk/README.md#deletesipipaccesscontrollist) - Delete an IpAccessControlList from the requested account
* [deleteSipIpAccessControlListMapping](docs/sdk/README.md#deletesipipaccesscontrollistmapping) - Delete an IpAccessControlListMapping resource.
* [deleteSipIpAddress](docs/sdk/README.md#deletesipipaddress) - Delete an IpAddress resource.
* [deleteTranscription](docs/sdk/README.md#deletetranscription) - Delete a transcription from the account used to make the request
* [deleteUsageTrigger](docs/sdk/README.md#deleteusagetrigger)
* [deleteUserDefinedMessageSubscription](docs/sdk/README.md#deleteuserdefinedmessagesubscription) - Delete a specific User Defined Message Subscription.
* [fetchAccount](docs/sdk/README.md#fetchaccount) - Fetch the account specified by the provided Account Sid
* [fetchAddress](docs/sdk/README.md#fetchaddress)
* [fetchApplication](docs/sdk/README.md#fetchapplication) - Fetch the application specified by the provided sid
* [fetchAuthorizedConnectApp](docs/sdk/README.md#fetchauthorizedconnectapp) - Fetch an instance of an authorized-connect-app
* [fetchAvailablePhoneNumberCountry](docs/sdk/README.md#fetchavailablephonenumbercountry)
* [fetchBalance](docs/sdk/README.md#fetchbalance) - Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected immediately. Child accounts do not contain balance information
* [fetchCall](docs/sdk/README.md#fetchcall) - Fetch the call specified by the provided Call SID
* [fetchCallFeedback](docs/sdk/README.md#fetchcallfeedback) - Fetch a Feedback resource from a call
* [fetchCallFeedbackSummary](docs/sdk/README.md#fetchcallfeedbacksummary) - Fetch a FeedbackSummary resource from a call
* [fetchCallNotification](docs/sdk/README.md#fetchcallnotification)
* [fetchCallRecording](docs/sdk/README.md#fetchcallrecording) - Fetch an instance of a recording for a call
* [fetchConference](docs/sdk/README.md#fetchconference) - Fetch an instance of a conference
* [fetchConferenceRecording](docs/sdk/README.md#fetchconferencerecording) - Fetch an instance of a recording for a call
* [fetchConnectApp](docs/sdk/README.md#fetchconnectapp) - Fetch an instance of a connect-app
* [fetchIncomingPhoneNumber](docs/sdk/README.md#fetchincomingphonenumber) - Fetch an incoming-phone-number belonging to the account used to make the request.
* [fetchIncomingPhoneNumberAssignedAddOn](docs/sdk/README.md#fetchincomingphonenumberassignedaddon) - Fetch an instance of an Add-on installation currently assigned to this Number.
* [fetchIncomingPhoneNumberAssignedAddOnExtension](docs/sdk/README.md#fetchincomingphonenumberassignedaddonextension) - Fetch an instance of an Extension for the Assigned Add-on.
* [fetchKey](docs/sdk/README.md#fetchkey)
* [fetchMedia](docs/sdk/README.md#fetchmedia) - Fetch a single media instance belonging to the account used to make the request
* [fetchMember](docs/sdk/README.md#fetchmember) - Fetch a specific member from the queue
* [fetchMessage](docs/sdk/README.md#fetchmessage) - Fetch a message belonging to the account used to make the request
* [fetchNotification](docs/sdk/README.md#fetchnotification) - Fetch a notification belonging to the account used to make the request
* [fetchOutgoingCallerId](docs/sdk/README.md#fetchoutgoingcallerid) - Fetch an outgoing-caller-id belonging to the account used to make the request
* [fetchParticipant](docs/sdk/README.md#fetchparticipant) - Fetch an instance of a participant
* [fetchQueue](docs/sdk/README.md#fetchqueue) - Fetch an instance of a queue identified by the QueueSid
* [fetchRecording](docs/sdk/README.md#fetchrecording) - Fetch an instance of a recording
* [fetchRecordingAddOnResult](docs/sdk/README.md#fetchrecordingaddonresult) - Fetch an instance of an AddOnResult
* [fetchRecordingAddOnResultPayload](docs/sdk/README.md#fetchrecordingaddonresultpayload) - Fetch an instance of a result payload
* [fetchRecordingTranscription](docs/sdk/README.md#fetchrecordingtranscription)
* [fetchShortCode](docs/sdk/README.md#fetchshortcode) - Fetch an instance of a short code
* [fetchSigningKey](docs/sdk/README.md#fetchsigningkey)
* [fetchSipAuthCallsCredentialListMapping](docs/sdk/README.md#fetchsipauthcallscredentiallistmapping) - Fetch a specific instance of a credential list mapping
* [fetchSipAuthCallsIpAccessControlListMapping](docs/sdk/README.md#fetchsipauthcallsipaccesscontrollistmapping) - Fetch a specific instance of an IP Access Control List mapping
* [fetchSipAuthRegistrationsCredentialListMapping](docs/sdk/README.md#fetchsipauthregistrationscredentiallistmapping) - Fetch a specific instance of a credential list mapping
* [fetchSipCredential](docs/sdk/README.md#fetchsipcredential) - Fetch a single credential.
* [fetchSipCredentialList](docs/sdk/README.md#fetchsipcredentiallist) - Get a Credential List
* [fetchSipCredentialListMapping](docs/sdk/README.md#fetchsipcredentiallistmapping) - Fetch a single CredentialListMapping resource from an account.
* [fetchSipDomain](docs/sdk/README.md#fetchsipdomain) - Fetch an instance of a Domain
* [fetchSipIpAccessControlList](docs/sdk/README.md#fetchsipipaccesscontrollist) - Fetch a specific instance of an IpAccessControlList
* [fetchSipIpAccessControlListMapping](docs/sdk/README.md#fetchsipipaccesscontrollistmapping) - Fetch an IpAccessControlListMapping resource.
* [fetchSipIpAddress](docs/sdk/README.md#fetchsipipaddress) - Read one IpAddress resource.
* [fetchTranscription](docs/sdk/README.md#fetchtranscription) - Fetch an instance of a Transcription
* [fetchUsageTrigger](docs/sdk/README.md#fetchusagetrigger) - Fetch and instance of a usage-trigger
* [listAccount](docs/sdk/README.md#listaccount) - Retrieves a collection of Accounts belonging to the account used to make the request
* [listAddress](docs/sdk/README.md#listaddress)
* [listApplication](docs/sdk/README.md#listapplication) - Retrieve a list of applications representing an application within the requesting account
* [listAuthorizedConnectApp](docs/sdk/README.md#listauthorizedconnectapp) - Retrieve a list of authorized-connect-apps belonging to the account used to make the request
* [listAvailablePhoneNumberCountry](docs/sdk/README.md#listavailablephonenumbercountry)
* [listAvailablePhoneNumberLocal](docs/sdk/README.md#listavailablephonenumberlocal)
* [listAvailablePhoneNumberMachineToMachine](docs/sdk/README.md#listavailablephonenumbermachinetomachine)
* [listAvailablePhoneNumberMobile](docs/sdk/README.md#listavailablephonenumbermobile)
* [listAvailablePhoneNumberNational](docs/sdk/README.md#listavailablephonenumbernational)
* [listAvailablePhoneNumberSharedCost](docs/sdk/README.md#listavailablephonenumbersharedcost)
* [listAvailablePhoneNumberTollFree](docs/sdk/README.md#listavailablephonenumbertollfree)
* [listAvailablePhoneNumberVoip](docs/sdk/README.md#listavailablephonenumbervoip)
* [listCall](docs/sdk/README.md#listcall) - Retrieves a collection of calls made to and from your account
* [listCallEvent](docs/sdk/README.md#listcallevent) - Retrieve a list of all events for a call.
* [listCallNotification](docs/sdk/README.md#listcallnotification)
* [listCallRecording](docs/sdk/README.md#listcallrecording) - Retrieve a list of recordings belonging to the call used to make the request
* [listConference](docs/sdk/README.md#listconference) - Retrieve a list of conferences belonging to the account used to make the request
* [listConferenceRecording](docs/sdk/README.md#listconferencerecording) - Retrieve a list of recordings belonging to the call used to make the request
* [listConnectApp](docs/sdk/README.md#listconnectapp) - Retrieve a list of connect-apps belonging to the account used to make the request
* [listDependentPhoneNumber](docs/sdk/README.md#listdependentphonenumber)
* [listIncomingPhoneNumber](docs/sdk/README.md#listincomingphonenumber) - Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.
* [listIncomingPhoneNumberAssignedAddOn](docs/sdk/README.md#listincomingphonenumberassignedaddon) - Retrieve a list of Add-on installations currently assigned to this Number.
* [listIncomingPhoneNumberAssignedAddOnExtension](docs/sdk/README.md#listincomingphonenumberassignedaddonextension) - Retrieve a list of Extensions for the Assigned Add-on.
* [listIncomingPhoneNumberLocal](docs/sdk/README.md#listincomingphonenumberlocal)
* [listIncomingPhoneNumberMobile](docs/sdk/README.md#listincomingphonenumbermobile)
* [listIncomingPhoneNumberTollFree](docs/sdk/README.md#listincomingphonenumbertollfree)
* [listKey](docs/sdk/README.md#listkey)
* [listMedia](docs/sdk/README.md#listmedia) - Retrieve a list of Media resources belonging to the account used to make the request
* [listMember](docs/sdk/README.md#listmember) - Retrieve the members of the queue
* [listMessage](docs/sdk/README.md#listmessage) - Retrieve a list of messages belonging to the account used to make the request
* [listNotification](docs/sdk/README.md#listnotification) - Retrieve a list of notifications belonging to the account used to make the request
* [listOutgoingCallerId](docs/sdk/README.md#listoutgoingcallerid) - Retrieve a list of outgoing-caller-ids belonging to the account used to make the request
* [listParticipant](docs/sdk/README.md#listparticipant) - Retrieve a list of participants belonging to the account used to make the request
* [listQueue](docs/sdk/README.md#listqueue) - Retrieve a list of queues belonging to the account used to make the request
* [listRecording](docs/sdk/README.md#listrecording) - Retrieve a list of recordings belonging to the account used to make the request
* [listRecordingAddOnResult](docs/sdk/README.md#listrecordingaddonresult) - Retrieve a list of results belonging to the recording
* [listRecordingAddOnResultPayload](docs/sdk/README.md#listrecordingaddonresultpayload) - Retrieve a list of payloads belonging to the AddOnResult
* [listRecordingTranscription](docs/sdk/README.md#listrecordingtranscription)
* [listShortCode](docs/sdk/README.md#listshortcode) - Retrieve a list of short-codes belonging to the account used to make the request
* [listSigningKey](docs/sdk/README.md#listsigningkey)
* [listSipAuthCallsCredentialListMapping](docs/sdk/README.md#listsipauthcallscredentiallistmapping) - Retrieve a list of credential list mappings belonging to the domain used in the request
* [listSipAuthCallsIpAccessControlListMapping](docs/sdk/README.md#listsipauthcallsipaccesscontrollistmapping) - Retrieve a list of IP Access Control List mappings belonging to the domain used in the request
* [listSipAuthRegistrationsCredentialListMapping](docs/sdk/README.md#listsipauthregistrationscredentiallistmapping) - Retrieve a list of credential list mappings belonging to the domain used in the request
* [listSipCredential](docs/sdk/README.md#listsipcredential) - Retrieve a list of credentials.
* [listSipCredentialList](docs/sdk/README.md#listsipcredentiallist) - Get All Credential Lists
* [listSipCredentialListMapping](docs/sdk/README.md#listsipcredentiallistmapping) - Read multiple CredentialListMapping resources from an account.
* [listSipDomain](docs/sdk/README.md#listsipdomain) - Retrieve a list of domains belonging to the account used to make the request
* [listSipIpAccessControlList](docs/sdk/README.md#listsipipaccesscontrollist) - Retrieve a list of IpAccessControlLists that belong to the account used to make the request
* [listSipIpAccessControlListMapping](docs/sdk/README.md#listsipipaccesscontrollistmapping) - Retrieve a list of IpAccessControlListMapping resources.
* [listSipIpAddress](docs/sdk/README.md#listsipipaddress) - Read multiple IpAddress resources.
* [listTranscription](docs/sdk/README.md#listtranscription) - Retrieve a list of transcriptions belonging to the account used to make the request
* [listUsageRecord](docs/sdk/README.md#listusagerecord) - Retrieve a list of usage-records belonging to the account used to make the request
* [listUsageRecordAllTime](docs/sdk/README.md#listusagerecordalltime)
* [listUsageRecordDaily](docs/sdk/README.md#listusagerecorddaily)
* [listUsageRecordLastMonth](docs/sdk/README.md#listusagerecordlastmonth)
* [listUsageRecordMonthly](docs/sdk/README.md#listusagerecordmonthly)
* [listUsageRecordThisMonth](docs/sdk/README.md#listusagerecordthismonth)
* [listUsageRecordToday](docs/sdk/README.md#listusagerecordtoday)
* [listUsageRecordYearly](docs/sdk/README.md#listusagerecordyearly)
* [listUsageRecordYesterday](docs/sdk/README.md#listusagerecordyesterday)
* [listUsageTrigger](docs/sdk/README.md#listusagetrigger) - Retrieve a list of usage-triggers belonging to the account used to make the request
* [updateAccount](docs/sdk/README.md#updateaccount) - Modify the properties of a given Account
* [updateAddress](docs/sdk/README.md#updateaddress)
* [updateApplication](docs/sdk/README.md#updateapplication) - Updates the application's properties
* [updateCall](docs/sdk/README.md#updatecall) - Initiates a call redirect or terminates a call
* [updateCallFeedback](docs/sdk/README.md#updatecallfeedback) - Update a Feedback resource for a call
* [updateCallRecording](docs/sdk/README.md#updatecallrecording) - Changes the status of the recording to paused, stopped, or in-progress. Note: Pass `Twilio.CURRENT` instead of recording sid to reference current active recording.
* [updateConference](docs/sdk/README.md#updateconference)
* [updateConferenceRecording](docs/sdk/README.md#updateconferencerecording) - Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.
* [updateConnectApp](docs/sdk/README.md#updateconnectapp) - Update a connect-app with the specified parameters
* [updateIncomingPhoneNumber](docs/sdk/README.md#updateincomingphonenumber) - Update an incoming-phone-number instance.
* [updateKey](docs/sdk/README.md#updatekey)
* [updateMember](docs/sdk/README.md#updatemember) - Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL
* [updateMessage](docs/sdk/README.md#updatemessage) - To redact a message-body from a post-flight message record, post to the message instance resource with an empty body
* [updateOutgoingCallerId](docs/sdk/README.md#updateoutgoingcallerid) - Updates the caller-id
* [updateParticipant](docs/sdk/README.md#updateparticipant) - Update the properties of the participant
* [updatePayments](docs/sdk/README.md#updatepayments) - update an instance of payments with different phases of payment flows.
* [updateQueue](docs/sdk/README.md#updatequeue) - Update the queue with the new parameters
* [updateShortCode](docs/sdk/README.md#updateshortcode) - Update a short code with the following parameters
* [updateSigningKey](docs/sdk/README.md#updatesigningkey)
* [updateSipCredential](docs/sdk/README.md#updatesipcredential) - Update a credential resource.
* [updateSipCredentialList](docs/sdk/README.md#updatesipcredentiallist) - Update a Credential List
* [updateSipDomain](docs/sdk/README.md#updatesipdomain) - Update the attributes of a domain
* [updateSipIpAccessControlList](docs/sdk/README.md#updatesipipaccesscontrollist) - Rename an IpAccessControlList
* [updateSipIpAddress](docs/sdk/README.md#updatesipipaddress) - Update an IpAddress resource.
* [updateSiprec](docs/sdk/README.md#updatesiprec) - Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource
* [updateStream](docs/sdk/README.md#updatestream) - Stop a Stream using either the SID of the Stream resource or the `name` used when creating the resource
* [updateUsageTrigger](docs/sdk/README.md#updateusagetrigger) - Update an instance of a usage trigger
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
