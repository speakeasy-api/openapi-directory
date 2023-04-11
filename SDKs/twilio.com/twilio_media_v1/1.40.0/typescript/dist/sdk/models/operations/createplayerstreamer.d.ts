import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreatePlayerStreamerServerList: readonly ["https://media.twilio.com"];
export declare class CreatePlayerStreamerSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`.
 */
export declare enum CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreatePlayerStreamerCreatePlayerStreamerRequest extends SpeakeasyBase {
    /**
     * The maximum time, in seconds, that the PlayerStreamer is active (`created` or `started`) before automatically ends. The default value is 300 seconds, and the maximum value is 90000 seconds. Once this maximum duration is reached, Twilio will end the PlayerStreamer, regardless of whether media is still streaming.
     */
    maxDuration?: number;
    /**
     * The URL to which Twilio will send asynchronous webhook requests for every PlayerStreamer event. See [Status Callbacks](/docs/live/status-callbacks) for more details.
     */
    statusCallback?: string;
    /**
     * The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`.
     */
    statusCallbackMethod?: CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum;
    /**
     * Specifies whether the PlayerStreamer is configured to stream video. Defaults to `true`.
     */
    video?: boolean;
}
export declare class CreatePlayerStreamerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    mediaV1PlayerStreamer?: shared.MediaV1PlayerStreamer;
}
