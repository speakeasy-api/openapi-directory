import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateTaskReservationServerList: readonly ["https://taskrouter.twilio.com"];
export declare class UpdateTaskReservationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method we should use to call `conference_recording_status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
 */
export declare enum UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we should use to call `conference_status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
 */
export declare enum UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we should use when we call `recording_status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
 */
export declare enum UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we should use to call `status_callback`. Can be: `POST` or `GET` and the default is `POST`.
 */
export declare enum UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we should use to call `wait_url`. Can be `GET` or `POST` and the default is `POST`. When using a static audio file, this should be `GET` so that we can cache the file.
 */
export declare enum UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateTaskReservationUpdateTaskReservationRequest extends SpeakeasyBase {
    /**
     * Whether to play a notification beep when the participant joins or when to play a beep. Can be: `true`, `false`, `onEnter`, or `onExit`. The default value is `true`.
     */
    beep?: string;
    /**
     * Whether to play a notification beep when the customer joins.
     */
    beepOnCustomerEntrance?: boolean;
    /**
     * Whether to accept a reservation when executing a Call instruction.
     */
    callAccept?: boolean;
    /**
     * The Caller ID of the outbound call when executing a Call instruction.
     */
    callFrom?: string;
    /**
     * Whether to record both legs of a call when executing a Call instruction or which leg to record.
     */
    callRecord?: string;
    /**
     * The URL to call  for the completed call event when executing a Call instruction.
     */
    callStatusCallbackUrl?: string;
    /**
     * Timeout for call when executing a Call instruction.
     */
    callTimeout?: number;
    /**
     * The Contact URI of the worker when executing a Call instruction.  Can be the URI of the Twilio Client, the SIP URI for Programmable SIP, or the [E.164](https://www.twilio.com/docs/glossary/what-e164) formatted phone number, depending on the destination.
     */
    callTo?: string;
    /**
     * TwiML URI executed on answering the worker's leg as a result of the Call instruction.
     */
    callUrl?: string;
    /**
     * Whether to record the conference the participant is joining or when to record the conference. Can be: `true`, `false`, `record-from-start`, and `do-not-record`. The default value is `false`.
     */
    conferenceRecord?: string;
    /**
     * The URL we should call using the `conference_recording_status_callback_method` when the conference recording is available.
     */
    conferenceRecordingStatusCallback?: string;
    /**
     * The HTTP method we should use to call `conference_recording_status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
     */
    conferenceRecordingStatusCallbackMethod?: UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum;
    /**
     * The URL we should call using the `conference_status_callback_method` when the conference events in `conference_status_callback_event` occur. Only the value set by the first participant to join the conference is used. Subsequent `conference_status_callback` values are ignored.
     */
    conferenceStatusCallback?: string;
    /**
     * The conference status events that we will send to `conference_status_callback`. Can be: `start`, `end`, `join`, `leave`, `mute`, `hold`, `speaker`.
     */
    conferenceStatusCallbackEvent?: shared.TaskReservationEnumConferenceEventEnum[];
    /**
     * The HTTP method we should use to call `conference_status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
     */
    conferenceStatusCallbackMethod?: UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum;
    /**
     * How to trim the leading and trailing silence from your recorded conference audio files. Can be: `trim-silence` or `do-not-trim` and defaults to `trim-silence`.
     */
    conferenceTrim?: string;
    /**
     * The Caller ID of the call to the worker when executing a Dequeue instruction.
     */
    dequeueFrom?: string;
    /**
     * The SID of the Activity resource to start after executing a Dequeue instruction.
     */
    dequeuePostWorkActivitySid?: string;
    /**
     * Whether to record both legs of a call when executing a Dequeue instruction or which leg to record.
     */
    dequeueRecord?: string;
    /**
     * The Call progress events sent via webhooks as a result of a Dequeue instruction.
     */
    dequeueStatusCallbackEvent?: string[];
    /**
     * The Callback URL for completed call event when executing a Dequeue instruction.
     */
    dequeueStatusCallbackUrl?: string;
    /**
     * Timeout for call when executing a Dequeue instruction.
     */
    dequeueTimeout?: number;
    /**
     * The Contact URI of the worker when executing a Dequeue instruction. Can be the URI of the Twilio Client, the SIP URI for Programmable SIP, or the [E.164](https://www.twilio.com/docs/glossary/what-e164) formatted phone number, depending on the destination.
     */
    dequeueTo?: string;
    /**
     * Whether to allow an agent to hear the state of the outbound call, including ringing or disconnect messages. The default is `true`.
     */
    earlyMedia?: boolean;
    /**
     * Whether to end the conference when the customer leaves.
     */
    endConferenceOnCustomerExit?: boolean;
    /**
     * Whether to end the conference when the agent leaves.
     */
    endConferenceOnExit?: boolean;
    /**
     * The Caller ID of the call to the worker when executing a Conference instruction.
     */
    from?: string;
    /**
     * The assignment instruction for reservation.
     */
    instruction?: string;
    /**
     * The maximum number of participants in the conference. Can be a positive integer from `2` to `250`. The default value is `250`.
     */
    maxParticipants?: number;
    /**
     * Whether the agent is muted in the conference. The default is `false`.
     */
    muted?: boolean;
    /**
     * The new worker activity SID after executing a Conference instruction.
     */
    postWorkActivitySid?: string;
    /**
     * Whether to record the participant and their conferences, including the time between conferences. The default is `false`.
     */
    record?: boolean;
    /**
     * The recording channels for the final recording. Can be: `mono` or `dual` and the default is `mono`.
     */
    recordingChannels?: string;
    /**
     * The URL that we should call using the `recording_status_callback_method` when the recording status changes.
     */
    recordingStatusCallback?: string;
    /**
     * The HTTP method we should use when we call `recording_status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
     */
    recordingStatusCallbackMethod?: UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum;
    /**
     * Whether the reservation should be accepted when executing a Redirect instruction.
     */
    redirectAccept?: boolean;
    /**
     * The Call SID of the call parked in the queue when executing a Redirect instruction.
     */
    redirectCallSid?: string;
    /**
     * TwiML URI to redirect the call to when executing the Redirect instruction.
     */
    redirectUrl?: string;
    /**
     * The [region](https://support.twilio.com/hc/en-us/articles/223132167-How-global-low-latency-routing-and-region-selection-work-for-conferences-and-Client-calls) where we should mix the recorded audio. Can be:`us1`, `ie1`, `de1`, `sg1`, `br1`, `au1`, or `jp1`.
     */
    region?: string;
    reservationStatus?: shared.TaskReservationEnumStatusEnum;
    /**
     * The SIP password for authentication.
     */
    sipAuthPassword?: string;
    /**
     * The SIP username used for authentication.
     */
    sipAuthUsername?: string;
    /**
     * Whether to start the conference when the participant joins, if it has not already started. The default is `true`. If `false` and the conference has not started, the participant is muted and hears background music until another participant starts the conference.
     */
    startConferenceOnEnter?: boolean;
    /**
     * The URL we should call using the `status_callback_method` to send status information to your application.
     */
    statusCallback?: string;
    /**
     * The call progress events that we will send to `status_callback`. Can be: `initiated`, `ringing`, `answered`, or `completed`.
     */
    statusCallbackEvent?: shared.TaskReservationEnumCallStatusEnum[];
    /**
     * The HTTP method we should use to call `status_callback`. Can be: `POST` or `GET` and the default is `POST`.
     */
    statusCallbackMethod?: UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum;
    /**
     * The Supervisor SID/URI when executing the Supervise instruction.
     */
    supervisor?: string;
    supervisorMode?: shared.TaskReservationEnumSupervisorModeEnum;
    /**
     * Timeout for call when executing a Conference instruction.
     */
    timeout?: number;
    /**
     * The Contact URI of the worker when executing a Conference instruction. Can be the URI of the Twilio Client, the SIP URI for Programmable SIP, or the [E.164](https://www.twilio.com/docs/glossary/what-e164) formatted phone number, depending on the destination.
     */
    to?: string;
    /**
     * The HTTP method we should use to call `wait_url`. Can be `GET` or `POST` and the default is `POST`. When using a static audio file, this should be `GET` so that we can cache the file.
     */
    waitMethod?: UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum;
    /**
     * The URL we should call using the `wait_method` for the music to play while participants are waiting for the conference to start. The default value is the URL of our standard hold music. [Learn more about hold music](https://www.twilio.com/labs/twimlets/holdmusic).
     */
    waitUrl?: string;
    /**
     * The new worker activity SID if rejecting a reservation.
     */
    workerActivitySid?: string;
}
export declare class UpdateTaskReservationRequest extends SpeakeasyBase {
    /**
     * The If-Match HTTP request header
     */
    ifMatch?: string;
    requestBody?: UpdateTaskReservationUpdateTaskReservationRequest;
    /**
     * The SID of the TaskReservation resource to update.
     */
    sid: string;
    /**
     * The SID of the reserved Task resource with the TaskReservation resources to update.
     */
    taskSid: string;
    /**
     * The SID of the Workspace with the TaskReservation resources to update.
     */
    workspaceSid: string;
}
export declare class UpdateTaskReservationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceTaskTaskReservation?: shared.TaskrouterV1WorkspaceTaskTaskReservation;
}
