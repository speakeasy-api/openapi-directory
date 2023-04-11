import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://insights.twilio.com"];
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
    fetchAccountSettings(req: operations.FetchAccountSettingsRequest, security: operations.FetchAccountSettingsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchAccountSettingsResponse>;
    /**
     * Fetch a specific Annotation.
     */
    fetchAnnotation(req: operations.FetchAnnotationRequest, security: operations.FetchAnnotationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchAnnotationResponse>;
    fetchCall(req: operations.FetchCallRequest, security: operations.FetchCallSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchCallResponse>;
    /**
     * Fetch a specific Conference.
     */
    fetchConference(req: operations.FetchConferenceRequest, security: operations.FetchConferenceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchConferenceResponse>;
    /**
     * Fetch a specific Conference Participant Summary.
     */
    fetchConferenceParticipant(req: operations.FetchConferenceParticipantRequest, security: operations.FetchConferenceParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchConferenceParticipantResponse>;
    fetchSummary(req: operations.FetchSummaryRequest, security: operations.FetchSummarySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSummaryResponse>;
    /**
     * Get Video Log Analyzer data for a Room Participant.
     */
    fetchVideoParticipantSummary(req: operations.FetchVideoParticipantSummaryRequest, security: operations.FetchVideoParticipantSummarySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchVideoParticipantSummaryResponse>;
    /**
     * Get Video Log Analyzer data for a Room.
     */
    fetchVideoRoomSummary(req: operations.FetchVideoRoomSummaryRequest, security: operations.FetchVideoRoomSummarySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchVideoRoomSummaryResponse>;
    listCallSummaries(req: operations.ListCallSummariesRequest, security: operations.ListCallSummariesSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListCallSummariesResponse>;
    /**
     * Retrieve a list of Conferences.
     */
    listConference(req: operations.ListConferenceRequest, security: operations.ListConferenceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListConferenceResponse>;
    /**
     * List Conference Participants.
     */
    listConferenceParticipant(req: operations.ListConferenceParticipantRequest, security: operations.ListConferenceParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListConferenceParticipantResponse>;
    listEvent(req: operations.ListEventRequest, security: operations.ListEventSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListEventResponse>;
    listMetric(req: operations.ListMetricRequest, security: operations.ListMetricSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListMetricResponse>;
    /**
     * Get a list of room participants.
     */
    listVideoParticipantSummary(req: operations.ListVideoParticipantSummaryRequest, security: operations.ListVideoParticipantSummarySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListVideoParticipantSummaryResponse>;
    /**
     * Get a list of Programmable Video Rooms.
     */
    listVideoRoomSummary(req: operations.ListVideoRoomSummaryRequest, security: operations.ListVideoRoomSummarySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListVideoRoomSummaryResponse>;
    updateAccountSettings(req: operations.UpdateAccountSettingsUpdateAccountSettingsRequest, security: operations.UpdateAccountSettingsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateAccountSettingsResponse>;
    /**
     * Create/Update the annotation for the call
     */
    updateAnnotation(req: operations.UpdateAnnotationRequest, security: operations.UpdateAnnotationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateAnnotationResponse>;
}
