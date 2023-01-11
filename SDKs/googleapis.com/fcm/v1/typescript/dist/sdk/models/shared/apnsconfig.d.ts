import { SpeakeasyBase } from "../../../internal/utils";
import { ApnsFcmOptions } from "./apnsfcmoptions";
/**
 * [Apple Push Notification Service](https://goo.gl/MXRTPa) specific options.
**/
export declare class ApnsConfig extends SpeakeasyBase {
    fcmOptions?: ApnsFcmOptions;
    headers?: Record<string, string>;
    payload?: Record<string, any>;
}
