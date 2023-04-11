import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateMediaProcessorServerList: readonly ["https://media.twilio.com"];
export declare class CreateMediaProcessorSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`.
 */
export declare enum CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateMediaProcessorCreateMediaProcessorRequest extends SpeakeasyBase {
    /**
     * The [Media Extension](/docs/live/api/media-extensions-overview) name or URL. Ex: `video-composer-v2`
     */
    extension: string;
    /**
     * The context of the Media Extension, represented as a JSON dictionary. See the documentation for the specific [Media Extension](/docs/live/api/media-extensions-overview) you are using for more information about the context to send.
     */
    extensionContext: string;
    /**
     * User-defined environment variables for the Media Extension, represented as a JSON dictionary of key/value strings. See the documentation for the specific [Media Extension](/docs/live/api/media-extensions-overview) you are using for more information about whether you need to provide this.
     */
    extensionEnvironment?: any;
    /**
     * The maximum time, in seconds, that the MediaProcessor can run before automatically ends. The default value is 300 seconds, and the maximum value is 90000 seconds. Once this maximum duration is reached, Twilio will end the MediaProcessor, regardless of whether media is still streaming.
     */
    maxDuration?: number;
    /**
     * The URL to which Twilio will send asynchronous webhook requests for every MediaProcessor event. See [Status Callbacks](/docs/live/status-callbacks) for details.
     */
    statusCallback?: string;
    /**
     * The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`.
     */
    statusCallbackMethod?: CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum;
}
export declare class CreateMediaProcessorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    mediaV1MediaProcessor?: shared.MediaV1MediaProcessor;
}
