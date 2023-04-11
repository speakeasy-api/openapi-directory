import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * API methods responsible for managing conference rooms
 */
export declare class Conference {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * /v0.1/ConferenceDeaf/
     *
     * @remarks
     * Blocks audio to one or more conference members
     */
    postV01ConferenceDeaf(req: shared.ConferenceDeafParameters, security: operations.PostV01ConferenceDeafSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01ConferenceDeafResponse>;
    /**
     * /v0.1/ConferenceHangup/
     *
     * @remarks
     * Kicks one or more conference members, without playing the kick sound
     */
    postV01ConferenceHangup(req: shared.ConferenceHangupParameters, security: operations.PostV01ConferenceHangupSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01ConferenceHangupResponse>;
    /**
     * /v0.1/ConferenceKick/
     *
     * @remarks
     * Kicks one or more conference members
     */
    postV01ConferenceKick(req: shared.ConferenceKickParameters, security: operations.PostV01ConferenceKickSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01ConferenceKickResponse>;
    /**
     * /v0.1/ConferenceList/
     *
     * @remarks
     * Returns a list of all established conferences
     */
    postV01ConferenceList(req: shared.ConferenceListParameters, security: operations.PostV01ConferenceListSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01ConferenceListResponse>;
    /**
     * /v0.1/ConferenceListMembers/
     *
     * @remarks
     * Retrieves the member list for a given conference
     */
    postV01ConferenceListMembers(req: shared.ConferenceListMembersParameters, security: operations.PostV01ConferenceListMembersSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01ConferenceListMembersResponse>;
    /**
     * /v0.1/ConferenceMute/
     *
     * @remarks
     * Blocks audio from one or more conference members
     */
    postV01ConferenceMute(req: shared.ConferenceMuteParameters, security: operations.PostV01ConferenceMuteSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01ConferenceMuteResponse>;
    /**
     * /v0.1/ConferencePlay/
     *
     * @remarks
     * Plays media to one or more conference members
     */
    postV01ConferencePlay(req: shared.ConferencePlayParameters, security: operations.PostV01ConferencePlaySecurity, config?: AxiosRequestConfig): Promise<operations.PostV01ConferencePlayResponse>;
    /**
     * /v0.1/ConferenceRecordStart/
     *
     * @remarks
     * Initiates a conference recording
     */
    postV01ConferenceRecordStart(req: shared.ConferenceRecordStartParameters, security: operations.PostV01ConferenceRecordStartSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01ConferenceRecordStartResponse>;
    /**
     * /v0.1/ConferenceRecordStop/
     *
     * @remarks
     * Stops a conference recording
     */
    postV01ConferenceRecordStop(req: shared.ConferenceRecordStopParameters, security: operations.PostV01ConferenceRecordStopSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01ConferenceRecordStopResponse>;
    /**
     * /v0.1/ConferenceSpeak/
     *
     * @remarks
     * Plays synthesized speech into a conference
     */
    postV01ConferenceSpeak(req: shared.ConferenceSpeakParameters, security: operations.PostV01ConferenceSpeakSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01ConferenceSpeakResponse>;
    /**
     * /v0.1/ConferenceUndeaf/
     *
     * @remarks
     * Restores audio to one or more conference members
     */
    postV01ConferenceUndeaf(req: shared.ConferenceUndeafParameters, security: operations.PostV01ConferenceUndeafSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01ConferenceUndeafResponse>;
    /**
     * /v0.1/ConferenceUnmute/
     *
     * @remarks
     * Restores audio from one or more conference members
     */
    postV01ConferenceUnmute(req: shared.ConferenceUnmuteParameters, security: operations.PostV01ConferenceUnmuteSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01ConferenceUnmuteResponse>;
}
