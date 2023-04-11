import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://proxy.twilio.com"];
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
     * Create a new message Interaction to send directly from your system to one [Participant](https://www.twilio.com/docs/proxy/api/participant).  The `inbound` properties for the Interaction will always be empty.
     */
    createMessageInteraction(req: operations.CreateMessageInteractionRequest, security: operations.CreateMessageInteractionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateMessageInteractionResponse>;
    /**
     * Add a new Participant to the Session
     */
    createParticipant(req: operations.CreateParticipantRequest, security: operations.CreateParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateParticipantResponse>;
    /**
     * Add a Phone Number to a Service's Proxy Number Pool.
     */
    createPhoneNumber(req: operations.CreatePhoneNumberRequest, security: operations.CreatePhoneNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreatePhoneNumberResponse>;
    /**
     * Create a new Service for Twilio Proxy
     */
    createService(req: operations.CreateServiceCreateServiceRequest, security: operations.CreateServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateServiceResponse>;
    /**
     * Create a new Session
     */
    createSession(req: operations.CreateSessionRequest, security: operations.CreateSessionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSessionResponse>;
    /**
     * Add a Short Code to the Proxy Number Pool for the Service.
     */
    createShortCode(req: operations.CreateShortCodeRequest, security: operations.CreateShortCodeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateShortCodeResponse>;
    /**
     * Delete a specific Interaction.
     */
    deleteInteraction(req: operations.DeleteInteractionRequest, security: operations.DeleteInteractionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteInteractionResponse>;
    /**
     * Delete a specific Participant. This is a soft-delete. The participant remains associated with the session and cannot be re-added. Participants are only permanently deleted when the [Session](https://www.twilio.com/docs/proxy/api/session) is deleted.
     */
    deleteParticipant(req: operations.DeleteParticipantRequest, security: operations.DeleteParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteParticipantResponse>;
    /**
     * Delete a specific Phone Number from a Service.
     */
    deletePhoneNumber(req: operations.DeletePhoneNumberRequest, security: operations.DeletePhoneNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeletePhoneNumberResponse>;
    /**
     * Delete a specific Service.
     */
    deleteService(req: operations.DeleteServiceRequest, security: operations.DeleteServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteServiceResponse>;
    /**
     * Delete a specific Session.
     */
    deleteSession(req: operations.DeleteSessionRequest, security: operations.DeleteSessionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSessionResponse>;
    /**
     * Delete a specific Short Code from a Service.
     */
    deleteShortCode(req: operations.DeleteShortCodeRequest, security: operations.DeleteShortCodeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteShortCodeResponse>;
    /**
     * Retrieve a list of Interactions for a given [Session](https://www.twilio.com/docs/proxy/api/session).
     */
    fetchInteraction(req: operations.FetchInteractionRequest, security: operations.FetchInteractionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchInteractionResponse>;
    fetchMessageInteraction(req: operations.FetchMessageInteractionRequest, security: operations.FetchMessageInteractionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchMessageInteractionResponse>;
    /**
     * Fetch a specific Participant.
     */
    fetchParticipant(req: operations.FetchParticipantRequest, security: operations.FetchParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchParticipantResponse>;
    /**
     * Fetch a specific Phone Number.
     */
    fetchPhoneNumber(req: operations.FetchPhoneNumberRequest, security: operations.FetchPhoneNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchPhoneNumberResponse>;
    /**
     * Fetch a specific Service.
     */
    fetchService(req: operations.FetchServiceRequest, security: operations.FetchServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchServiceResponse>;
    /**
     * Fetch a specific Session.
     */
    fetchSession(req: operations.FetchSessionRequest, security: operations.FetchSessionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSessionResponse>;
    /**
     * Fetch a specific Short Code.
     */
    fetchShortCode(req: operations.FetchShortCodeRequest, security: operations.FetchShortCodeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchShortCodeResponse>;
    /**
     * Retrieve a list of all Interactions for a Session. A maximum of 100 records will be returned per page.
     */
    listInteraction(req: operations.ListInteractionRequest, security: operations.ListInteractionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListInteractionResponse>;
    listMessageInteraction(req: operations.ListMessageInteractionRequest, security: operations.ListMessageInteractionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListMessageInteractionResponse>;
    /**
     * Retrieve a list of all Participants in a Session.
     */
    listParticipant(req: operations.ListParticipantRequest, security: operations.ListParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListParticipantResponse>;
    /**
     * Retrieve a list of all Phone Numbers in the Proxy Number Pool for a Service. A maximum of 100 records will be returned per page.
     */
    listPhoneNumber(req: operations.ListPhoneNumberRequest, security: operations.ListPhoneNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListPhoneNumberResponse>;
    /**
     * Retrieve a list of all Services for Twilio Proxy. A maximum of 100 records will be returned per page.
     */
    listService(req: operations.ListServiceRequest, security: operations.ListServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListServiceResponse>;
    /**
     * Retrieve a list of all Sessions for the Service. A maximum of 100 records will be returned per page.
     */
    listSession(req: operations.ListSessionRequest, security: operations.ListSessionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSessionResponse>;
    /**
     * Retrieve a list of all Short Codes in the Proxy Number Pool for the Service. A maximum of 100 records will be returned per page.
     */
    listShortCode(req: operations.ListShortCodeRequest, security: operations.ListShortCodeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListShortCodeResponse>;
    /**
     * Update a specific Proxy Number.
     */
    updatePhoneNumber(req: operations.UpdatePhoneNumberRequest, security: operations.UpdatePhoneNumberSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdatePhoneNumberResponse>;
    /**
     * Update a specific Service.
     */
    updateService(req: operations.UpdateServiceRequest, security: operations.UpdateServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateServiceResponse>;
    /**
     * Update a specific Session.
     */
    updateSession(req: operations.UpdateSessionRequest, security: operations.UpdateSessionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSessionResponse>;
    /**
     * Update a specific Short Code.
     */
    updateShortCode(req: operations.UpdateShortCodeRequest, security: operations.UpdateShortCodeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateShortCodeResponse>;
}
