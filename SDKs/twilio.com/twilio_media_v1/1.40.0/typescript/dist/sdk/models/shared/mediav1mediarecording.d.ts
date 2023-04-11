import { SpeakeasyBase } from "../../../internal/utils";
import { MediaRecordingEnumFormatEnum } from "./mediarecordingenumformatenum";
import { MediaRecordingEnumStatusEnum } from "./mediarecordingenumstatusenum";
/**
 * The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`.
 */
export declare enum MediaV1MediaRecordingStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * OK
 */
export declare class MediaV1MediaRecording extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the MediaRecording resource.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The duration of the MediaRecording in seconds.
     */
    duration?: number;
    format?: MediaRecordingEnumFormatEnum;
    /**
     * The URLs of related resources.
     */
    links?: Record<string, any>;
    /**
     * The size of the recording media in bytes.
     */
    mediaSize?: number;
    /**
     * The SID of the MediaProcessor resource which produced the MediaRecording.
     */
    processorSid?: string;
    /**
     * The dimensions of the video image in pixels expressed as columns (width) and rows (height).
     */
    resolution?: string;
    /**
     * The unique string generated to identify the MediaRecording resource.
     */
    sid?: string;
    /**
     * The SID of the resource that generated the original media track(s) of the MediaRecording.
     */
    sourceSid?: string;
    status?: MediaRecordingEnumStatusEnum;
    /**
     * The URL to which Twilio will send asynchronous webhook requests for every MediaRecording event. See [Status Callbacks](/docs/live/status-callbacks) for more details.
     */
    statusCallback?: string;
    /**
     * The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`.
     */
    statusCallbackMethod?: MediaV1MediaRecordingStatusCallbackMethodEnum;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
