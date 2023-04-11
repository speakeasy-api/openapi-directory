import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://video.twilio.com"];
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
    createComposition(req: operations.CreateCompositionCreateCompositionRequest, security: operations.CreateCompositionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateCompositionResponse>;
    createCompositionHook(req: operations.CreateCompositionHookCreateCompositionHookRequest, security: operations.CreateCompositionHookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateCompositionHookResponse>;
    createCompositionSettings(req: operations.CreateCompositionSettingsCreateCompositionSettingsRequest, security: operations.CreateCompositionSettingsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateCompositionSettingsResponse>;
    createRecordingSettings(req: operations.CreateRecordingSettingsCreateRecordingSettingsRequest, security: operations.CreateRecordingSettingsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateRecordingSettingsResponse>;
    createRoom(req: operations.CreateRoomCreateRoomRequest, security: operations.CreateRoomSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateRoomResponse>;
    /**
     * Delete a Recording Composition resource identified by a Composition SID.
     */
    deleteComposition(req: operations.DeleteCompositionRequest, security: operations.DeleteCompositionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteCompositionResponse>;
    /**
     * Delete a Recording CompositionHook resource identified by a `CompositionHook SID`.
     */
    deleteCompositionHook(req: operations.DeleteCompositionHookRequest, security: operations.DeleteCompositionHookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteCompositionHookResponse>;
    /**
     * Delete a Recording resource identified by a Recording SID.
     */
    deleteRecording(req: operations.DeleteRecordingRequest, security: operations.DeleteRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteRecordingResponse>;
    deleteRoomRecording(req: operations.DeleteRoomRecordingRequest, security: operations.DeleteRoomRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteRoomRecordingResponse>;
    /**
     * Returns a single Composition resource identified by a Composition SID.
     */
    fetchComposition(req: operations.FetchCompositionRequest, security: operations.FetchCompositionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchCompositionResponse>;
    /**
     * Returns a single CompositionHook resource identified by a CompositionHook SID.
     */
    fetchCompositionHook(req: operations.FetchCompositionHookRequest, security: operations.FetchCompositionHookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchCompositionHookResponse>;
    fetchCompositionSettings(serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchCompositionSettingsResponse>;
    /**
     * Returns a single Recording resource identified by a Recording SID.
     */
    fetchRecording(req: operations.FetchRecordingRequest, security: operations.FetchRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchRecordingResponse>;
    fetchRecordingSettings(serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchRecordingSettingsResponse>;
    fetchRoom(req: operations.FetchRoomRequest, security: operations.FetchRoomSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchRoomResponse>;
    fetchRoomParticipant(req: operations.FetchRoomParticipantRequest, security: operations.FetchRoomParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchRoomParticipantResponse>;
    /**
     * Returns a single Track resource represented by TrackName or SID.
     */
    fetchRoomParticipantPublishedTrack(req: operations.FetchRoomParticipantPublishedTrackRequest, security: operations.FetchRoomParticipantPublishedTrackSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchRoomParticipantPublishedTrackResponse>;
    /**
     * Returns a list of Subscribe Rules for the Participant.
     */
    fetchRoomParticipantSubscribeRule(req: operations.FetchRoomParticipantSubscribeRuleRequest, security: operations.FetchRoomParticipantSubscribeRuleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchRoomParticipantSubscribeRuleResponse>;
    /**
     * Returns a single Track resource represented by `track_sid`.  Note: This is one resource with the Video API that requires a SID, be Track Name on the subscriber side is not guaranteed to be unique.
     */
    fetchRoomParticipantSubscribedTrack(req: operations.FetchRoomParticipantSubscribedTrackRequest, security: operations.FetchRoomParticipantSubscribedTrackSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchRoomParticipantSubscribedTrackResponse>;
    fetchRoomRecording(req: operations.FetchRoomRecordingRequest, security: operations.FetchRoomRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchRoomRecordingResponse>;
    /**
     * Returns a list of Recording Rules for the Room.
     */
    fetchRoomRecordingRule(req: operations.FetchRoomRecordingRuleRequest, security: operations.FetchRoomRecordingRuleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchRoomRecordingRuleResponse>;
    /**
     * List of all Recording compositions.
     */
    listComposition(req: operations.ListCompositionRequest, security: operations.ListCompositionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListCompositionResponse>;
    /**
     * List of all Recording CompositionHook resources.
     */
    listCompositionHook(req: operations.ListCompositionHookRequest, security: operations.ListCompositionHookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListCompositionHookResponse>;
    /**
     * List of all Track recordings.
     */
    listRecording(req: operations.ListRecordingRequest, security: operations.ListRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListRecordingResponse>;
    listRoom(req: operations.ListRoomRequest, security: operations.ListRoomSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListRoomResponse>;
    listRoomParticipant(req: operations.ListRoomParticipantRequest, security: operations.ListRoomParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListRoomParticipantResponse>;
    /**
     * Returns a list of tracks associated with a given Participant. Only `currently` Published Tracks are in the list resource.
     */
    listRoomParticipantPublishedTrack(req: operations.ListRoomParticipantPublishedTrackRequest, security: operations.ListRoomParticipantPublishedTrackSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListRoomParticipantPublishedTrackResponse>;
    /**
     * Returns a list of tracks that are subscribed for the participant.
     */
    listRoomParticipantSubscribedTrack(req: operations.ListRoomParticipantSubscribedTrackRequest, security: operations.ListRoomParticipantSubscribedTrackSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListRoomParticipantSubscribedTrackResponse>;
    listRoomRecording(req: operations.ListRoomRecordingRequest, security: operations.ListRoomRecordingSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListRoomRecordingResponse>;
    updateCompositionHook(req: operations.UpdateCompositionHookRequest, security: operations.UpdateCompositionHookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateCompositionHookResponse>;
    updateRoom(req: operations.UpdateRoomRequest, security: operations.UpdateRoomSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateRoomResponse>;
    updateRoomParticipant(req: operations.UpdateRoomParticipantRequest, security: operations.UpdateRoomParticipantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateRoomParticipantResponse>;
    updateRoomParticipantAnonymize(req: operations.UpdateRoomParticipantAnonymizeRequest, security: operations.UpdateRoomParticipantAnonymizeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateRoomParticipantAnonymizeResponse>;
    /**
     * Update the Subscribe Rules for the Participant
     */
    updateRoomParticipantSubscribeRule(req: operations.UpdateRoomParticipantSubscribeRuleRequest, security: operations.UpdateRoomParticipantSubscribeRuleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateRoomParticipantSubscribeRuleResponse>;
    /**
     * Update the Recording Rules for the Room
     */
    updateRoomRecordingRule(req: operations.UpdateRoomRecordingRuleRequest, security: operations.UpdateRoomRecordingRuleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateRoomRecordingRuleResponse>;
}
