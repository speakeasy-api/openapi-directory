import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.twilio.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * This is the public Twilio REST API.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Create a new Twilio Subaccount from the account making the request
     */
    createAccount(req: operations.CreateAccountCreateAccountRequest, security: operations.CreateAccountSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateAccountResponse>;
    createAddress(req: operations.CreateAddressRequest, security: operations.CreateAddressSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateAddressResponse>;
    /**
     * Create a new application within your account
     */
    createApplication(req: operations.CreateApplicationRequest, security: operations.CreateApplicationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateApplicationResponse>;
    /**
     * Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections
     */
    createCall(req: operations.CreateCallRequest, security: operations.CreateCallSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateCallResponse>;
    /**
     * Create a FeedbackSummary resource for a call
     */
    createCallFeedbackSummary(req: operations.CreateCallFeedbackSummaryRequest, security: operations.CreateCallFeedbackSummarySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateCallFeedbackSummaryResponse>;
    /**
     * Create a recording for the call
     */
    createCallRecording(req: operations.CreateCallRecordingRequest, security: operations.CreateCallRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateCallRecordingResponse>;
    /**
     * Purchase a phone-number for the account.
     */
    createIncomingPhoneNumber(req: operations.CreateIncomingPhoneNumberRequest, security: operations.CreateIncomingPhoneNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateIncomingPhoneNumberResponse>;
    /**
     * Assign an Add-on installation to the Number specified.
     */
    createIncomingPhoneNumberAssignedAddOn(req: operations.CreateIncomingPhoneNumberAssignedAddOnRequest, security: operations.CreateIncomingPhoneNumberAssignedAddOnSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateIncomingPhoneNumberAssignedAddOnResponse>;
    createIncomingPhoneNumberLocal(req: operations.CreateIncomingPhoneNumberLocalRequest, security: operations.CreateIncomingPhoneNumberLocalSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateIncomingPhoneNumberLocalResponse>;
    createIncomingPhoneNumberMobile(req: operations.CreateIncomingPhoneNumberMobileRequest, security: operations.CreateIncomingPhoneNumberMobileSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateIncomingPhoneNumberMobileResponse>;
    createIncomingPhoneNumberTollFree(req: operations.CreateIncomingPhoneNumberTollFreeRequest, security: operations.CreateIncomingPhoneNumberTollFreeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateIncomingPhoneNumberTollFreeResponse>;
    /**
     * Send a message from the account used to make the request
     */
    createMessage(req: operations.CreateMessageRequest, security: operations.CreateMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateMessageResponse>;
    createMessageFeedback(req: operations.CreateMessageFeedbackRequest, security: operations.CreateMessageFeedbackSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateMessageFeedbackResponse>;
    createNewKey(req: operations.CreateNewKeyRequest, security: operations.CreateNewKeySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateNewKeyResponse>;
    /**
     * Create a new Signing Key for the account making the request.
     */
    createNewSigningKey(req: operations.CreateNewSigningKeyRequest, security: operations.CreateNewSigningKeySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateNewSigningKeyResponse>;
    createParticipant(req: operations.CreateParticipantRequest, security: operations.CreateParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateParticipantResponse>;
    /**
     * create an instance of payments. This will start a new payments session
     */
    createPayments(req: operations.CreatePaymentsRequest, security: operations.CreatePaymentsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreatePaymentsResponse>;
    /**
     * Create a queue
     */
    createQueue(req: operations.CreateQueueRequest, security: operations.CreateQueueSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateQueueResponse>;
    /**
     * Create a new credential list mapping resource
     */
    createSipAuthCallsCredentialListMapping(req: operations.CreateSipAuthCallsCredentialListMappingRequest, security: operations.CreateSipAuthCallsCredentialListMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSipAuthCallsCredentialListMappingResponse>;
    /**
     * Create a new IP Access Control List mapping
     */
    createSipAuthCallsIpAccessControlListMapping(req: operations.CreateSipAuthCallsIpAccessControlListMappingRequest, security: operations.CreateSipAuthCallsIpAccessControlListMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSipAuthCallsIpAccessControlListMappingResponse>;
    /**
     * Create a new credential list mapping resource
     */
    createSipAuthRegistrationsCredentialListMapping(req: operations.CreateSipAuthRegistrationsCredentialListMappingRequest, security: operations.CreateSipAuthRegistrationsCredentialListMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSipAuthRegistrationsCredentialListMappingResponse>;
    /**
     * Create a new credential resource.
     */
    createSipCredential(req: operations.CreateSipCredentialRequest, security: operations.CreateSipCredentialSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSipCredentialResponse>;
    /**
     * Create a Credential List
     */
    createSipCredentialList(req: operations.CreateSipCredentialListRequest, security: operations.CreateSipCredentialListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSipCredentialListResponse>;
    /**
     * Create a CredentialListMapping resource for an account.
     */
    createSipCredentialListMapping(req: operations.CreateSipCredentialListMappingRequest, security: operations.CreateSipCredentialListMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSipCredentialListMappingResponse>;
    /**
     * Create a new Domain
     */
    createSipDomain(req: operations.CreateSipDomainRequest, security: operations.CreateSipDomainSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSipDomainResponse>;
    /**
     * Create a new IpAccessControlList resource
     */
    createSipIpAccessControlList(req: operations.CreateSipIpAccessControlListRequest, security: operations.CreateSipIpAccessControlListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSipIpAccessControlListResponse>;
    /**
     * Create a new IpAccessControlListMapping resource.
     */
    createSipIpAccessControlListMapping(req: operations.CreateSipIpAccessControlListMappingRequest, security: operations.CreateSipIpAccessControlListMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSipIpAccessControlListMappingResponse>;
    /**
     * Create a new IpAddress resource.
     */
    createSipIpAddress(req: operations.CreateSipIpAddressRequest, security: operations.CreateSipIpAddressSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSipIpAddressResponse>;
    /**
     * Create a Siprec
     */
    createSiprec(req: operations.CreateSiprecRequest, security: operations.CreateSiprecSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSiprecResponse>;
    /**
     * Create a Stream
     */
    createStream(req: operations.CreateStreamRequest, security: operations.CreateStreamSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateStreamResponse>;
    /**
     * Create a new token for ICE servers
     */
    createToken(req: operations.CreateTokenRequest, security: operations.CreateTokenSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateTokenResponse>;
    /**
     * Create a new UsageTrigger
     */
    createUsageTrigger(req: operations.CreateUsageTriggerRequest, security: operations.CreateUsageTriggerSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateUsageTriggerResponse>;
    /**
     * Create a new User Defined Message for the given Call SID.
     */
    createUserDefinedMessage(req: operations.CreateUserDefinedMessageRequest, security: operations.CreateUserDefinedMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateUserDefinedMessageResponse>;
    /**
     * Subscribe to User Defined Messages for a given Call SID.
     */
    createUserDefinedMessageSubscription(req: operations.CreateUserDefinedMessageSubscriptionRequest, security: operations.CreateUserDefinedMessageSubscriptionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateUserDefinedMessageSubscriptionResponse>;
    createValidationRequest(req: operations.CreateValidationRequestRequest, security: operations.CreateValidationRequestSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateValidationRequestResponse>;
    deleteAddress(req: operations.DeleteAddressRequest, security: operations.DeleteAddressSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteAddressResponse>;
    /**
     * Delete the application by the specified application sid
     */
    deleteApplication(req: operations.DeleteApplicationRequest, security: operations.DeleteApplicationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationResponse>;
    /**
     * Delete a Call record from your account. Once the record is deleted, it will no longer appear in the API and Account Portal logs.
     */
    deleteCall(req: operations.DeleteCallRequest, security: operations.DeleteCallSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteCallResponse>;
    /**
     * Delete a FeedbackSummary resource from a call
     */
    deleteCallFeedbackSummary(req: operations.DeleteCallFeedbackSummaryRequest, security: operations.DeleteCallFeedbackSummarySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteCallFeedbackSummaryResponse>;
    /**
     * Delete a recording from your account
     */
    deleteCallRecording(req: operations.DeleteCallRecordingRequest, security: operations.DeleteCallRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteCallRecordingResponse>;
    /**
     * Delete a recording from your account
     */
    deleteConferenceRecording(req: operations.DeleteConferenceRecordingRequest, security: operations.DeleteConferenceRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteConferenceRecordingResponse>;
    /**
     * Delete an instance of a connect-app
     */
    deleteConnectApp(req: operations.DeleteConnectAppRequest, security: operations.DeleteConnectAppSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteConnectAppResponse>;
    /**
     * Delete a phone-numbers belonging to the account used to make the request.
     */
    deleteIncomingPhoneNumber(req: operations.DeleteIncomingPhoneNumberRequest, security: operations.DeleteIncomingPhoneNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteIncomingPhoneNumberResponse>;
    /**
     * Remove the assignment of an Add-on installation from the Number specified.
     */
    deleteIncomingPhoneNumberAssignedAddOn(req: operations.DeleteIncomingPhoneNumberAssignedAddOnRequest, security: operations.DeleteIncomingPhoneNumberAssignedAddOnSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteIncomingPhoneNumberAssignedAddOnResponse>;
    deleteKey(req: operations.DeleteKeyRequest, security: operations.DeleteKeySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteKeyResponse>;
    /**
     * Delete media from your account. Once delete, you will no longer be billed
     */
    deleteMedia(req: operations.DeleteMediaRequest, security: operations.DeleteMediaSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteMediaResponse>;
    /**
     * Deletes a message record from your account
     */
    deleteMessage(req: operations.DeleteMessageRequest, security: operations.DeleteMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteMessageResponse>;
    /**
     * Delete the caller-id specified from the account
     */
    deleteOutgoingCallerId(req: operations.DeleteOutgoingCallerIdRequest, security: operations.DeleteOutgoingCallerIdSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteOutgoingCallerIdResponse>;
    /**
     * Kick a participant from a given conference
     */
    deleteParticipant(req: operations.DeleteParticipantRequest, security: operations.DeleteParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteParticipantResponse>;
    /**
     * Remove an empty queue
     */
    deleteQueue(req: operations.DeleteQueueRequest, security: operations.DeleteQueueSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteQueueResponse>;
    /**
     * Delete a recording from your account
     */
    deleteRecording(req: operations.DeleteRecordingRequest, security: operations.DeleteRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteRecordingResponse>;
    /**
     * Delete a result and purge all associated Payloads
     */
    deleteRecordingAddOnResult(req: operations.DeleteRecordingAddOnResultRequest, security: operations.DeleteRecordingAddOnResultSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteRecordingAddOnResultResponse>;
    /**
     * Delete a payload from the result along with all associated Data
     */
    deleteRecordingAddOnResultPayload(req: operations.DeleteRecordingAddOnResultPayloadRequest, security: operations.DeleteRecordingAddOnResultPayloadSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteRecordingAddOnResultPayloadResponse>;
    deleteRecordingTranscription(req: operations.DeleteRecordingTranscriptionRequest, security: operations.DeleteRecordingTranscriptionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteRecordingTranscriptionResponse>;
    deleteSigningKey(req: operations.DeleteSigningKeyRequest, security: operations.DeleteSigningKeySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSigningKeyResponse>;
    /**
     * Delete a credential list mapping from the requested domain
     */
    deleteSipAuthCallsCredentialListMapping(req: operations.DeleteSipAuthCallsCredentialListMappingRequest, security: operations.DeleteSipAuthCallsCredentialListMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSipAuthCallsCredentialListMappingResponse>;
    /**
     * Delete an IP Access Control List mapping from the requested domain
     */
    deleteSipAuthCallsIpAccessControlListMapping(req: operations.DeleteSipAuthCallsIpAccessControlListMappingRequest, security: operations.DeleteSipAuthCallsIpAccessControlListMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSipAuthCallsIpAccessControlListMappingResponse>;
    /**
     * Delete a credential list mapping from the requested domain
     */
    deleteSipAuthRegistrationsCredentialListMapping(req: operations.DeleteSipAuthRegistrationsCredentialListMappingRequest, security: operations.DeleteSipAuthRegistrationsCredentialListMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSipAuthRegistrationsCredentialListMappingResponse>;
    /**
     * Delete a credential resource.
     */
    deleteSipCredential(req: operations.DeleteSipCredentialRequest, security: operations.DeleteSipCredentialSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSipCredentialResponse>;
    /**
     * Delete a Credential List
     */
    deleteSipCredentialList(req: operations.DeleteSipCredentialListRequest, security: operations.DeleteSipCredentialListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSipCredentialListResponse>;
    /**
     * Delete a CredentialListMapping resource from an account.
     */
    deleteSipCredentialListMapping(req: operations.DeleteSipCredentialListMappingRequest, security: operations.DeleteSipCredentialListMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSipCredentialListMappingResponse>;
    /**
     * Delete an instance of a Domain
     */
    deleteSipDomain(req: operations.DeleteSipDomainRequest, security: operations.DeleteSipDomainSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSipDomainResponse>;
    /**
     * Delete an IpAccessControlList from the requested account
     */
    deleteSipIpAccessControlList(req: operations.DeleteSipIpAccessControlListRequest, security: operations.DeleteSipIpAccessControlListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSipIpAccessControlListResponse>;
    /**
     * Delete an IpAccessControlListMapping resource.
     */
    deleteSipIpAccessControlListMapping(req: operations.DeleteSipIpAccessControlListMappingRequest, security: operations.DeleteSipIpAccessControlListMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSipIpAccessControlListMappingResponse>;
    /**
     * Delete an IpAddress resource.
     */
    deleteSipIpAddress(req: operations.DeleteSipIpAddressRequest, security: operations.DeleteSipIpAddressSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSipIpAddressResponse>;
    /**
     * Delete a transcription from the account used to make the request
     */
    deleteTranscription(req: operations.DeleteTranscriptionRequest, security: operations.DeleteTranscriptionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteTranscriptionResponse>;
    deleteUsageTrigger(req: operations.DeleteUsageTriggerRequest, security: operations.DeleteUsageTriggerSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteUsageTriggerResponse>;
    /**
     * Delete a specific User Defined Message Subscription.
     */
    deleteUserDefinedMessageSubscription(req: operations.DeleteUserDefinedMessageSubscriptionRequest, security: operations.DeleteUserDefinedMessageSubscriptionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteUserDefinedMessageSubscriptionResponse>;
    /**
     * Fetch the account specified by the provided Account Sid
     */
    fetchAccount(req: operations.FetchAccountRequest, security: operations.FetchAccountSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchAccountResponse>;
    fetchAddress(req: operations.FetchAddressRequest, security: operations.FetchAddressSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchAddressResponse>;
    /**
     * Fetch the application specified by the provided sid
     */
    fetchApplication(req: operations.FetchApplicationRequest, security: operations.FetchApplicationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchApplicationResponse>;
    /**
     * Fetch an instance of an authorized-connect-app
     */
    fetchAuthorizedConnectApp(req: operations.FetchAuthorizedConnectAppRequest, security: operations.FetchAuthorizedConnectAppSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchAuthorizedConnectAppResponse>;
    fetchAvailablePhoneNumberCountry(req: operations.FetchAvailablePhoneNumberCountryRequest, security: operations.FetchAvailablePhoneNumberCountrySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchAvailablePhoneNumberCountryResponse>;
    /**
     * Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected immediately. Child accounts do not contain balance information
     */
    fetchBalance(req: operations.FetchBalanceRequest, security: operations.FetchBalanceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchBalanceResponse>;
    /**
     * Fetch the call specified by the provided Call SID
     */
    fetchCall(req: operations.FetchCallRequest, security: operations.FetchCallSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchCallResponse>;
    /**
     * Fetch a Feedback resource from a call
     */
    fetchCallFeedback(req: operations.FetchCallFeedbackRequest, security: operations.FetchCallFeedbackSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchCallFeedbackResponse>;
    /**
     * Fetch a FeedbackSummary resource from a call
     */
    fetchCallFeedbackSummary(req: operations.FetchCallFeedbackSummaryRequest, security: operations.FetchCallFeedbackSummarySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchCallFeedbackSummaryResponse>;
    fetchCallNotification(req: operations.FetchCallNotificationRequest, security: operations.FetchCallNotificationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchCallNotificationResponse>;
    /**
     * Fetch an instance of a recording for a call
     */
    fetchCallRecording(req: operations.FetchCallRecordingRequest, security: operations.FetchCallRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchCallRecordingResponse>;
    /**
     * Fetch an instance of a conference
     */
    fetchConference(req: operations.FetchConferenceRequest, security: operations.FetchConferenceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchConferenceResponse>;
    /**
     * Fetch an instance of a recording for a call
     */
    fetchConferenceRecording(req: operations.FetchConferenceRecordingRequest, security: operations.FetchConferenceRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchConferenceRecordingResponse>;
    /**
     * Fetch an instance of a connect-app
     */
    fetchConnectApp(req: operations.FetchConnectAppRequest, security: operations.FetchConnectAppSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchConnectAppResponse>;
    /**
     * Fetch an incoming-phone-number belonging to the account used to make the request.
     */
    fetchIncomingPhoneNumber(req: operations.FetchIncomingPhoneNumberRequest, security: operations.FetchIncomingPhoneNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchIncomingPhoneNumberResponse>;
    /**
     * Fetch an instance of an Add-on installation currently assigned to this Number.
     */
    fetchIncomingPhoneNumberAssignedAddOn(req: operations.FetchIncomingPhoneNumberAssignedAddOnRequest, security: operations.FetchIncomingPhoneNumberAssignedAddOnSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchIncomingPhoneNumberAssignedAddOnResponse>;
    /**
     * Fetch an instance of an Extension for the Assigned Add-on.
     */
    fetchIncomingPhoneNumberAssignedAddOnExtension(req: operations.FetchIncomingPhoneNumberAssignedAddOnExtensionRequest, security: operations.FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchIncomingPhoneNumberAssignedAddOnExtensionResponse>;
    fetchKey(req: operations.FetchKeyRequest, security: operations.FetchKeySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchKeyResponse>;
    /**
     * Fetch a single media instance belonging to the account used to make the request
     */
    fetchMedia(req: operations.FetchMediaRequest, security: operations.FetchMediaSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchMediaResponse>;
    /**
     * Fetch a specific member from the queue
     */
    fetchMember(req: operations.FetchMemberRequest, security: operations.FetchMemberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchMemberResponse>;
    /**
     * Fetch a message belonging to the account used to make the request
     */
    fetchMessage(req: operations.FetchMessageRequest, security: operations.FetchMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchMessageResponse>;
    /**
     * Fetch a notification belonging to the account used to make the request
     */
    fetchNotification(req: operations.FetchNotificationRequest, security: operations.FetchNotificationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchNotificationResponse>;
    /**
     * Fetch an outgoing-caller-id belonging to the account used to make the request
     */
    fetchOutgoingCallerId(req: operations.FetchOutgoingCallerIdRequest, security: operations.FetchOutgoingCallerIdSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchOutgoingCallerIdResponse>;
    /**
     * Fetch an instance of a participant
     */
    fetchParticipant(req: operations.FetchParticipantRequest, security: operations.FetchParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchParticipantResponse>;
    /**
     * Fetch an instance of a queue identified by the QueueSid
     */
    fetchQueue(req: operations.FetchQueueRequest, security: operations.FetchQueueSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchQueueResponse>;
    /**
     * Fetch an instance of a recording
     */
    fetchRecording(req: operations.FetchRecordingRequest, security: operations.FetchRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchRecordingResponse>;
    /**
     * Fetch an instance of an AddOnResult
     */
    fetchRecordingAddOnResult(req: operations.FetchRecordingAddOnResultRequest, security: operations.FetchRecordingAddOnResultSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchRecordingAddOnResultResponse>;
    /**
     * Fetch an instance of a result payload
     */
    fetchRecordingAddOnResultPayload(req: operations.FetchRecordingAddOnResultPayloadRequest, security: operations.FetchRecordingAddOnResultPayloadSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchRecordingAddOnResultPayloadResponse>;
    fetchRecordingTranscription(req: operations.FetchRecordingTranscriptionRequest, security: operations.FetchRecordingTranscriptionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchRecordingTranscriptionResponse>;
    /**
     * Fetch an instance of a short code
     */
    fetchShortCode(req: operations.FetchShortCodeRequest, security: operations.FetchShortCodeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchShortCodeResponse>;
    fetchSigningKey(req: operations.FetchSigningKeyRequest, security: operations.FetchSigningKeySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSigningKeyResponse>;
    /**
     * Fetch a specific instance of a credential list mapping
     */
    fetchSipAuthCallsCredentialListMapping(req: operations.FetchSipAuthCallsCredentialListMappingRequest, security: operations.FetchSipAuthCallsCredentialListMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSipAuthCallsCredentialListMappingResponse>;
    /**
     * Fetch a specific instance of an IP Access Control List mapping
     */
    fetchSipAuthCallsIpAccessControlListMapping(req: operations.FetchSipAuthCallsIpAccessControlListMappingRequest, security: operations.FetchSipAuthCallsIpAccessControlListMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSipAuthCallsIpAccessControlListMappingResponse>;
    /**
     * Fetch a specific instance of a credential list mapping
     */
    fetchSipAuthRegistrationsCredentialListMapping(req: operations.FetchSipAuthRegistrationsCredentialListMappingRequest, security: operations.FetchSipAuthRegistrationsCredentialListMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSipAuthRegistrationsCredentialListMappingResponse>;
    /**
     * Fetch a single credential.
     */
    fetchSipCredential(req: operations.FetchSipCredentialRequest, security: operations.FetchSipCredentialSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSipCredentialResponse>;
    /**
     * Get a Credential List
     */
    fetchSipCredentialList(req: operations.FetchSipCredentialListRequest, security: operations.FetchSipCredentialListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSipCredentialListResponse>;
    /**
     * Fetch a single CredentialListMapping resource from an account.
     */
    fetchSipCredentialListMapping(req: operations.FetchSipCredentialListMappingRequest, security: operations.FetchSipCredentialListMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSipCredentialListMappingResponse>;
    /**
     * Fetch an instance of a Domain
     */
    fetchSipDomain(req: operations.FetchSipDomainRequest, security: operations.FetchSipDomainSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSipDomainResponse>;
    /**
     * Fetch a specific instance of an IpAccessControlList
     */
    fetchSipIpAccessControlList(req: operations.FetchSipIpAccessControlListRequest, security: operations.FetchSipIpAccessControlListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSipIpAccessControlListResponse>;
    /**
     * Fetch an IpAccessControlListMapping resource.
     */
    fetchSipIpAccessControlListMapping(req: operations.FetchSipIpAccessControlListMappingRequest, security: operations.FetchSipIpAccessControlListMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSipIpAccessControlListMappingResponse>;
    /**
     * Read one IpAddress resource.
     */
    fetchSipIpAddress(req: operations.FetchSipIpAddressRequest, security: operations.FetchSipIpAddressSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSipIpAddressResponse>;
    /**
     * Fetch an instance of a Transcription
     */
    fetchTranscription(req: operations.FetchTranscriptionRequest, security: operations.FetchTranscriptionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchTranscriptionResponse>;
    /**
     * Fetch and instance of a usage-trigger
     */
    fetchUsageTrigger(req: operations.FetchUsageTriggerRequest, security: operations.FetchUsageTriggerSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUsageTriggerResponse>;
    /**
     * Retrieves a collection of Accounts belonging to the account used to make the request
     */
    listAccount(req: operations.ListAccountRequest, security: operations.ListAccountSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListAccountResponse>;
    listAddress(req: operations.ListAddressRequest, security: operations.ListAddressSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListAddressResponse>;
    /**
     * Retrieve a list of applications representing an application within the requesting account
     */
    listApplication(req: operations.ListApplicationRequest, security: operations.ListApplicationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListApplicationResponse>;
    /**
     * Retrieve a list of authorized-connect-apps belonging to the account used to make the request
     */
    listAuthorizedConnectApp(req: operations.ListAuthorizedConnectAppRequest, security: operations.ListAuthorizedConnectAppSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListAuthorizedConnectAppResponse>;
    listAvailablePhoneNumberCountry(req: operations.ListAvailablePhoneNumberCountryRequest, security: operations.ListAvailablePhoneNumberCountrySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListAvailablePhoneNumberCountryResponse>;
    listAvailablePhoneNumberLocal(req: operations.ListAvailablePhoneNumberLocalRequest, security: operations.ListAvailablePhoneNumberLocalSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListAvailablePhoneNumberLocalResponse>;
    listAvailablePhoneNumberMachineToMachine(req: operations.ListAvailablePhoneNumberMachineToMachineRequest, security: operations.ListAvailablePhoneNumberMachineToMachineSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListAvailablePhoneNumberMachineToMachineResponse>;
    listAvailablePhoneNumberMobile(req: operations.ListAvailablePhoneNumberMobileRequest, security: operations.ListAvailablePhoneNumberMobileSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListAvailablePhoneNumberMobileResponse>;
    listAvailablePhoneNumberNational(req: operations.ListAvailablePhoneNumberNationalRequest, security: operations.ListAvailablePhoneNumberNationalSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListAvailablePhoneNumberNationalResponse>;
    listAvailablePhoneNumberSharedCost(req: operations.ListAvailablePhoneNumberSharedCostRequest, security: operations.ListAvailablePhoneNumberSharedCostSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListAvailablePhoneNumberSharedCostResponse>;
    listAvailablePhoneNumberTollFree(req: operations.ListAvailablePhoneNumberTollFreeRequest, security: operations.ListAvailablePhoneNumberTollFreeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListAvailablePhoneNumberTollFreeResponse>;
    listAvailablePhoneNumberVoip(req: operations.ListAvailablePhoneNumberVoipRequest, security: operations.ListAvailablePhoneNumberVoipSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListAvailablePhoneNumberVoipResponse>;
    /**
     * Retrieves a collection of calls made to and from your account
     */
    listCall(req: operations.ListCallRequest, security: operations.ListCallSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListCallResponse>;
    /**
     * Retrieve a list of all events for a call.
     */
    listCallEvent(req: operations.ListCallEventRequest, security: operations.ListCallEventSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListCallEventResponse>;
    listCallNotification(req: operations.ListCallNotificationRequest, security: operations.ListCallNotificationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListCallNotificationResponse>;
    /**
     * Retrieve a list of recordings belonging to the call used to make the request
     */
    listCallRecording(req: operations.ListCallRecordingRequest, security: operations.ListCallRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListCallRecordingResponse>;
    /**
     * Retrieve a list of conferences belonging to the account used to make the request
     */
    listConference(req: operations.ListConferenceRequest, security: operations.ListConferenceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListConferenceResponse>;
    /**
     * Retrieve a list of recordings belonging to the call used to make the request
     */
    listConferenceRecording(req: operations.ListConferenceRecordingRequest, security: operations.ListConferenceRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListConferenceRecordingResponse>;
    /**
     * Retrieve a list of connect-apps belonging to the account used to make the request
     */
    listConnectApp(req: operations.ListConnectAppRequest, security: operations.ListConnectAppSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListConnectAppResponse>;
    listDependentPhoneNumber(req: operations.ListDependentPhoneNumberRequest, security: operations.ListDependentPhoneNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListDependentPhoneNumberResponse>;
    /**
     * Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.
     */
    listIncomingPhoneNumber(req: operations.ListIncomingPhoneNumberRequest, security: operations.ListIncomingPhoneNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListIncomingPhoneNumberResponse>;
    /**
     * Retrieve a list of Add-on installations currently assigned to this Number.
     */
    listIncomingPhoneNumberAssignedAddOn(req: operations.ListIncomingPhoneNumberAssignedAddOnRequest, security: operations.ListIncomingPhoneNumberAssignedAddOnSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListIncomingPhoneNumberAssignedAddOnResponse>;
    /**
     * Retrieve a list of Extensions for the Assigned Add-on.
     */
    listIncomingPhoneNumberAssignedAddOnExtension(req: operations.ListIncomingPhoneNumberAssignedAddOnExtensionRequest, security: operations.ListIncomingPhoneNumberAssignedAddOnExtensionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListIncomingPhoneNumberAssignedAddOnExtensionResponse>;
    listIncomingPhoneNumberLocal(req: operations.ListIncomingPhoneNumberLocalRequest, security: operations.ListIncomingPhoneNumberLocalSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListIncomingPhoneNumberLocalResponse>;
    listIncomingPhoneNumberMobile(req: operations.ListIncomingPhoneNumberMobileRequest, security: operations.ListIncomingPhoneNumberMobileSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListIncomingPhoneNumberMobileResponse>;
    listIncomingPhoneNumberTollFree(req: operations.ListIncomingPhoneNumberTollFreeRequest, security: operations.ListIncomingPhoneNumberTollFreeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListIncomingPhoneNumberTollFreeResponse>;
    listKey(req: operations.ListKeyRequest, security: operations.ListKeySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListKeyResponse>;
    /**
     * Retrieve a list of Media resources belonging to the account used to make the request
     */
    listMedia(req: operations.ListMediaRequest, security: operations.ListMediaSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListMediaResponse>;
    /**
     * Retrieve the members of the queue
     */
    listMember(req: operations.ListMemberRequest, security: operations.ListMemberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListMemberResponse>;
    /**
     * Retrieve a list of messages belonging to the account used to make the request
     */
    listMessage(req: operations.ListMessageRequest, security: operations.ListMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListMessageResponse>;
    /**
     * Retrieve a list of notifications belonging to the account used to make the request
     */
    listNotification(req: operations.ListNotificationRequest, security: operations.ListNotificationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListNotificationResponse>;
    /**
     * Retrieve a list of outgoing-caller-ids belonging to the account used to make the request
     */
    listOutgoingCallerId(req: operations.ListOutgoingCallerIdRequest, security: operations.ListOutgoingCallerIdSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListOutgoingCallerIdResponse>;
    /**
     * Retrieve a list of participants belonging to the account used to make the request
     */
    listParticipant(req: operations.ListParticipantRequest, security: operations.ListParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListParticipantResponse>;
    /**
     * Retrieve a list of queues belonging to the account used to make the request
     */
    listQueue(req: operations.ListQueueRequest, security: operations.ListQueueSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListQueueResponse>;
    /**
     * Retrieve a list of recordings belonging to the account used to make the request
     */
    listRecording(req: operations.ListRecordingRequest, security: operations.ListRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListRecordingResponse>;
    /**
     * Retrieve a list of results belonging to the recording
     */
    listRecordingAddOnResult(req: operations.ListRecordingAddOnResultRequest, security: operations.ListRecordingAddOnResultSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListRecordingAddOnResultResponse>;
    /**
     * Retrieve a list of payloads belonging to the AddOnResult
     */
    listRecordingAddOnResultPayload(req: operations.ListRecordingAddOnResultPayloadRequest, security: operations.ListRecordingAddOnResultPayloadSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListRecordingAddOnResultPayloadResponse>;
    listRecordingTranscription(req: operations.ListRecordingTranscriptionRequest, security: operations.ListRecordingTranscriptionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListRecordingTranscriptionResponse>;
    /**
     * Retrieve a list of short-codes belonging to the account used to make the request
     */
    listShortCode(req: operations.ListShortCodeRequest, security: operations.ListShortCodeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListShortCodeResponse>;
    listSigningKey(req: operations.ListSigningKeyRequest, security: operations.ListSigningKeySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSigningKeyResponse>;
    /**
     * Retrieve a list of credential list mappings belonging to the domain used in the request
     */
    listSipAuthCallsCredentialListMapping(req: operations.ListSipAuthCallsCredentialListMappingRequest, security: operations.ListSipAuthCallsCredentialListMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSipAuthCallsCredentialListMappingResponse>;
    /**
     * Retrieve a list of IP Access Control List mappings belonging to the domain used in the request
     */
    listSipAuthCallsIpAccessControlListMapping(req: operations.ListSipAuthCallsIpAccessControlListMappingRequest, security: operations.ListSipAuthCallsIpAccessControlListMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSipAuthCallsIpAccessControlListMappingResponse>;
    /**
     * Retrieve a list of credential list mappings belonging to the domain used in the request
     */
    listSipAuthRegistrationsCredentialListMapping(req: operations.ListSipAuthRegistrationsCredentialListMappingRequest, security: operations.ListSipAuthRegistrationsCredentialListMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSipAuthRegistrationsCredentialListMappingResponse>;
    /**
     * Retrieve a list of credentials.
     */
    listSipCredential(req: operations.ListSipCredentialRequest, security: operations.ListSipCredentialSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSipCredentialResponse>;
    /**
     * Get All Credential Lists
     */
    listSipCredentialList(req: operations.ListSipCredentialListRequest, security: operations.ListSipCredentialListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSipCredentialListResponse>;
    /**
     * Read multiple CredentialListMapping resources from an account.
     */
    listSipCredentialListMapping(req: operations.ListSipCredentialListMappingRequest, security: operations.ListSipCredentialListMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSipCredentialListMappingResponse>;
    /**
     * Retrieve a list of domains belonging to the account used to make the request
     */
    listSipDomain(req: operations.ListSipDomainRequest, security: operations.ListSipDomainSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSipDomainResponse>;
    /**
     * Retrieve a list of IpAccessControlLists that belong to the account used to make the request
     */
    listSipIpAccessControlList(req: operations.ListSipIpAccessControlListRequest, security: operations.ListSipIpAccessControlListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSipIpAccessControlListResponse>;
    /**
     * Retrieve a list of IpAccessControlListMapping resources.
     */
    listSipIpAccessControlListMapping(req: operations.ListSipIpAccessControlListMappingRequest, security: operations.ListSipIpAccessControlListMappingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSipIpAccessControlListMappingResponse>;
    /**
     * Read multiple IpAddress resources.
     */
    listSipIpAddress(req: operations.ListSipIpAddressRequest, security: operations.ListSipIpAddressSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSipIpAddressResponse>;
    /**
     * Retrieve a list of transcriptions belonging to the account used to make the request
     */
    listTranscription(req: operations.ListTranscriptionRequest, security: operations.ListTranscriptionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListTranscriptionResponse>;
    /**
     * Retrieve a list of usage-records belonging to the account used to make the request
     */
    listUsageRecord(req: operations.ListUsageRecordRequest, security: operations.ListUsageRecordSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordResponse>;
    listUsageRecordAllTime(req: operations.ListUsageRecordAllTimeRequest, security: operations.ListUsageRecordAllTimeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordAllTimeResponse>;
    listUsageRecordDaily(req: operations.ListUsageRecordDailyRequest, security: operations.ListUsageRecordDailySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordDailyResponse>;
    listUsageRecordLastMonth(req: operations.ListUsageRecordLastMonthRequest, security: operations.ListUsageRecordLastMonthSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordLastMonthResponse>;
    listUsageRecordMonthly(req: operations.ListUsageRecordMonthlyRequest, security: operations.ListUsageRecordMonthlySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordMonthlyResponse>;
    listUsageRecordThisMonth(req: operations.ListUsageRecordThisMonthRequest, security: operations.ListUsageRecordThisMonthSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordThisMonthResponse>;
    listUsageRecordToday(req: operations.ListUsageRecordTodayRequest, security: operations.ListUsageRecordTodaySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordTodayResponse>;
    listUsageRecordYearly(req: operations.ListUsageRecordYearlyRequest, security: operations.ListUsageRecordYearlySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordYearlyResponse>;
    listUsageRecordYesterday(req: operations.ListUsageRecordYesterdayRequest, security: operations.ListUsageRecordYesterdaySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordYesterdayResponse>;
    /**
     * Retrieve a list of usage-triggers belonging to the account used to make the request
     */
    listUsageTrigger(req: operations.ListUsageTriggerRequest, security: operations.ListUsageTriggerSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUsageTriggerResponse>;
    /**
     * Modify the properties of a given Account
     */
    updateAccount(req: operations.UpdateAccountRequest, security: operations.UpdateAccountSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateAccountResponse>;
    updateAddress(req: operations.UpdateAddressRequest, security: operations.UpdateAddressSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateAddressResponse>;
    /**
     * Updates the application's properties
     */
    updateApplication(req: operations.UpdateApplicationRequest, security: operations.UpdateApplicationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationResponse>;
    /**
     * Initiates a call redirect or terminates a call
     */
    updateCall(req: operations.UpdateCallRequest, security: operations.UpdateCallSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateCallResponse>;
    /**
     * Update a Feedback resource for a call
     */
    updateCallFeedback(req: operations.UpdateCallFeedbackRequest, security: operations.UpdateCallFeedbackSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateCallFeedbackResponse>;
    /**
     * Changes the status of the recording to paused, stopped, or in-progress. Note: Pass `Twilio.CURRENT` instead of recording sid to reference current active recording.
     */
    updateCallRecording(req: operations.UpdateCallRecordingRequest, security: operations.UpdateCallRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateCallRecordingResponse>;
    updateConference(req: operations.UpdateConferenceRequest, security: operations.UpdateConferenceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateConferenceResponse>;
    /**
     * Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.
     */
    updateConferenceRecording(req: operations.UpdateConferenceRecordingRequest, security: operations.UpdateConferenceRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateConferenceRecordingResponse>;
    /**
     * Update a connect-app with the specified parameters
     */
    updateConnectApp(req: operations.UpdateConnectAppRequest, security: operations.UpdateConnectAppSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateConnectAppResponse>;
    /**
     * Update an incoming-phone-number instance.
     */
    updateIncomingPhoneNumber(req: operations.UpdateIncomingPhoneNumberRequest, security: operations.UpdateIncomingPhoneNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateIncomingPhoneNumberResponse>;
    updateKey(req: operations.UpdateKeyRequest, security: operations.UpdateKeySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateKeyResponse>;
    /**
     * Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL
     */
    updateMember(req: operations.UpdateMemberRequest, security: operations.UpdateMemberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateMemberResponse>;
    /**
     * To redact a message-body from a post-flight message record, post to the message instance resource with an empty body
     */
    updateMessage(req: operations.UpdateMessageRequest, security: operations.UpdateMessageSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateMessageResponse>;
    /**
     * Updates the caller-id
     */
    updateOutgoingCallerId(req: operations.UpdateOutgoingCallerIdRequest, security: operations.UpdateOutgoingCallerIdSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateOutgoingCallerIdResponse>;
    /**
     * Update the properties of the participant
     */
    updateParticipant(req: operations.UpdateParticipantRequest, security: operations.UpdateParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateParticipantResponse>;
    /**
     * update an instance of payments with different phases of payment flows.
     */
    updatePayments(req: operations.UpdatePaymentsRequest, security: operations.UpdatePaymentsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdatePaymentsResponse>;
    /**
     * Update the queue with the new parameters
     */
    updateQueue(req: operations.UpdateQueueRequest, security: operations.UpdateQueueSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateQueueResponse>;
    /**
     * Update a short code with the following parameters
     */
    updateShortCode(req: operations.UpdateShortCodeRequest, security: operations.UpdateShortCodeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateShortCodeResponse>;
    updateSigningKey(req: operations.UpdateSigningKeyRequest, security: operations.UpdateSigningKeySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSigningKeyResponse>;
    /**
     * Update a credential resource.
     */
    updateSipCredential(req: operations.UpdateSipCredentialRequest, security: operations.UpdateSipCredentialSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSipCredentialResponse>;
    /**
     * Update a Credential List
     */
    updateSipCredentialList(req: operations.UpdateSipCredentialListRequest, security: operations.UpdateSipCredentialListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSipCredentialListResponse>;
    /**
     * Update the attributes of a domain
     */
    updateSipDomain(req: operations.UpdateSipDomainRequest, security: operations.UpdateSipDomainSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSipDomainResponse>;
    /**
     * Rename an IpAccessControlList
     */
    updateSipIpAccessControlList(req: operations.UpdateSipIpAccessControlListRequest, security: operations.UpdateSipIpAccessControlListSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSipIpAccessControlListResponse>;
    /**
     * Update an IpAddress resource.
     */
    updateSipIpAddress(req: operations.UpdateSipIpAddressRequest, security: operations.UpdateSipIpAddressSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSipIpAddressResponse>;
    /**
     * Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource
     */
    updateSiprec(req: operations.UpdateSiprecRequest, security: operations.UpdateSiprecSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSiprecResponse>;
    /**
     * Stop a Stream using either the SID of the Stream resource or the `name` used when creating the resource
     */
    updateStream(req: operations.UpdateStreamRequest, security: operations.UpdateStreamSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateStreamResponse>;
    /**
     * Update an instance of a usage trigger
     */
    updateUsageTrigger(req: operations.UpdateUsageTriggerRequest, security: operations.UpdateUsageTriggerSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateUsageTriggerResponse>;
}
