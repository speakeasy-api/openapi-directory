import { SpeakeasyBase } from "../../../internal/utils";
import { WebpushFcmOptions } from "./webpushfcmoptions";
/**
 * [Webpush protocol](https://tools.ietf.org/html/rfc8030) options.
**/
export declare class WebpushConfig extends SpeakeasyBase {
    data?: Record<string, string>;
    fcmOptions?: WebpushFcmOptions;
    headers?: Record<string, string>;
    notification?: Record<string, any>;
}
