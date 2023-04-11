import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * API methods responsible for spawning and manipulating individual calls
 */
export declare class Call {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * /v0.1/BulkCall/
     *
     * @remarks
     * Initiates multiple concurrent outbound calls
     */
    postV01BulkCall(req: shared.BulkCallParameters, security: operations.PostV01BulkCallSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01BulkCallResponse>;
    /**
     * /v0.1/Call/
     *
     * @remarks
     * Initiates an outbound call
     */
    postV01Call(req: shared.CallParameters, security: operations.PostV01CallSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01CallResponse>;
    /**
     * /v0.1/CancelScheduledHangup/
     *
     * @remarks
     * Cancels a scheduled hangup for a call
     */
    postV01CancelScheduledHangup(req: shared.CancelScheduledHangupParameters, security: operations.PostV01CancelScheduledHangupSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01CancelScheduledHangupResponse>;
    /**
     * /v0.1/CancelScheduledPlay/
     *
     * @remarks
     * Cancels a scheduled playback request
     */
    postV01CancelScheduledPlay(req: shared.CancelScheduledPlayParameters, security: operations.PostV01CancelScheduledPlaySecurity, config?: AxiosRequestConfig): Promise<operations.PostV01CancelScheduledPlayResponse>;
    /**
     * /v0.1/GroupCall/
     *
     * @remarks
     * Initiate multiple racing outbound calls
     */
    postV01GroupCall(req: shared.GroupCallParameters, security: operations.PostV01GroupCallSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01GroupCallResponse>;
    /**
     * /v0.1/HangupAllCalls/
     *
     * @remarks
     * Hangs up all established calls
     */
    postV01HangupAllCalls(config?: AxiosRequestConfig): Promise<operations.PostV01HangupAllCallsResponse>;
    /**
     * /v0.1/HangupCall/
     *
     * @remarks
     * Hangs up a specific call
     */
    postV01HangupCall(req: shared.HangupCallParameters, security: operations.PostV01HangupCallSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01HangupCallResponse>;
    /**
     * /v0.1/Play/
     *
     * @remarks
     * Plays media into a live call
     */
    postV01Play(req: shared.PlayParameters, security: operations.PostV01PlaySecurity, config?: AxiosRequestConfig): Promise<operations.PostV01PlayResponse>;
    /**
     * /v0.1/PlayStop/
     *
     * @remarks
     * Interrupts media playback on a given call
     */
    postV01PlayStop(req: shared.PlayStopParameters, security: operations.PostV01PlayStopSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01PlayStopResponse>;
    /**
     * /v0.1/RecordStart/
     *
     * @remarks
     * Initiates recording of a given call
     */
    postV01RecordStart(req: shared.RecordStartParameters, security: operations.PostV01RecordStartSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01RecordStartResponse>;
    /**
     * /v0.1/RecordStop/
     *
     * @remarks
     * Stops the recording of a given call
     */
    postV01RecordStop(req: shared.RecordStopParameters, security: operations.PostV01RecordStopSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01RecordStopResponse>;
    /**
     * /v0.1/ScheduleHangup/
     *
     * @remarks
     * Schedules a hangup for a specific call
     */
    postV01ScheduleHangup(req: shared.ScheduleHangupParameters, security: operations.PostV01ScheduleHangupSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01ScheduleHangupResponse>;
    /**
     * /v0.1/SchedulePlay/
     *
     * @remarks
     * Schedules media playback for a specific call
     */
    postV01SchedulePlay(req: shared.SchedulePlayParameters, security: operations.PostV01SchedulePlaySecurity, config?: AxiosRequestConfig): Promise<operations.PostV01SchedulePlayResponse>;
    /**
     * /v0.1/SendDigits/
     *
     * @remarks
     * Emits DMTF tones to a call
     */
    postV01SendDigits(req: shared.SendDigitsParameters, security: operations.PostV01SendDigitsSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01SendDigitsResponse>;
    /**
     * /v0.1/SoundTouch/
     *
     * @remarks
     * Applies SoundTouch effects to a live call
     */
    postV01SoundTouch(req: shared.SoundTouchParameters, security: operations.PostV01SoundTouchSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01SoundTouchResponse>;
    /**
     * /v0.1/SoundTouchStop/
     *
     * @remarks
     * Removes SoundTouch effects from a given call
     */
    postV01SoundTouchStop(req: shared.SoundTouchStopParameters, security: operations.PostV01SoundTouchStopSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01SoundTouchStopResponse>;
    /**
     * /v0.1/TransferCall/
     *
     * @remarks
     * Replaces the RestXML flow of a live call
     */
    postV01TransferCall(req: shared.TransferCallParameters, security: operations.PostV01TransferCallSecurity, config?: AxiosRequestConfig): Promise<operations.PostV01TransferCallResponse>;
}
