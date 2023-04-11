import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerStreamerEnumEndedReasonEnum } from "./playerstreamerenumendedreasonenum";
import { PlayerStreamerEnumStatusEnum } from "./playerstreamerenumstatusenum";
/**
 * The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`.
 */
export declare enum MediaV1PlayerStreamerStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * Created
 */
export declare class MediaV1PlayerStreamer extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the PlayerStreamer resource.
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
    endedReason?: PlayerStreamerEnumEndedReasonEnum;
    /**
     * The URLs of related resources.
     */
    links?: Record<string, any>;
    /**
     * The maximum time, in seconds, that the PlayerStreamer is active (`created` or `started`) before automatically ends. The default value is 300 seconds, and the maximum value is 90000 seconds. Once this maximum duration is reached, Twilio will end the PlayerStreamer, regardless of whether media is still streaming.
     */
    maxDuration?: number;
    /**
     * The unique string generated to identify the PlayerStreamer resource.
     */
    sid?: string;
    status?: PlayerStreamerEnumStatusEnum;
    /**
     * The URL to which Twilio will send asynchronous webhook requests for every PlayerStreamer event. See [Status Callbacks](/docs/live/status-callbacks) for more details.
     */
    statusCallback?: string;
    /**
     * The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`.
     */
    statusCallbackMethod?: MediaV1PlayerStreamerStatusCallbackMethodEnum;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
    /**
     * Specifies whether the PlayerStreamer is configured to stream video. Defaults to `true`.
     */
    video?: boolean;
}
