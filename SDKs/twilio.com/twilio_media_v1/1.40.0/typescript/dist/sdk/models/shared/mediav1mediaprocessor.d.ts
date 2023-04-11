import { SpeakeasyBase } from "../../../internal/utils";
import { MediaProcessorEnumStatusEnum } from "./mediaprocessorenumstatusenum";
/**
 * The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`.
 */
export declare enum MediaV1MediaProcessorStatusCallbackMethodEnum {
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
export declare class MediaV1MediaProcessor extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the MediaProcessor resource.
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
     * The reason why a MediaProcessor ended. When a MediaProcessor is in progress, will be `null`. When a MediaProcessor is completed, can be `ended-via-api`, `max-duration-exceeded`, `error-loading-extension`, `error-streaming-media` or `internal-service-error`. See [ended reasons](/docs/live/api/mediaprocessors#mediaprocessor-ended-reason-values) for more details.
     */
    endedReason?: string;
    /**
     * The [Media Extension](/docs/live/api/media-extensions-overview) name or URL. Ex: `video-composer-v2`
     */
    extension?: string;
    /**
     * The context of the Media Extension, represented as a JSON dictionary. See the documentation for the specific [Media Extension](/docs/live/api/media-extensions-overview) you are using for more information about the context to send.
     */
    extensionContext?: string;
    /**
     * The maximum time, in seconds, that the MediaProcessor can run before automatically ends. The default value is 300 seconds, and the maximum value is 90000 seconds. Once this maximum duration is reached, Twilio will end the MediaProcessor, regardless of whether media is still streaming.
     */
    maxDuration?: number;
    /**
     * The unique string generated to identify the MediaProcessor resource.
     */
    sid?: string;
    status?: MediaProcessorEnumStatusEnum;
    /**
     * The URL to which Twilio will send asynchronous webhook requests for every MediaProcessor event. See [Status Callbacks](/docs/live/status-callbacks) for details.
     */
    statusCallback?: string;
    /**
     * The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`.
     */
    statusCallbackMethod?: MediaV1MediaProcessorStatusCallbackMethodEnum;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
