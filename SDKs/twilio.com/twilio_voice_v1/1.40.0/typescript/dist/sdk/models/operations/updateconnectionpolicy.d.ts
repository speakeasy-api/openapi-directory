import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateConnectionPolicyServerList: readonly ["https://voice.twilio.com"];
export declare class UpdateConnectionPolicySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateConnectionPolicyUpdateConnectionPolicyRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName?: string;
}
export declare class UpdateConnectionPolicyRequest extends SpeakeasyBase {
    requestBody?: UpdateConnectionPolicyUpdateConnectionPolicyRequest;
    /**
     * The unique string that we created to identify the Connection Policy resource to update.
     */
    sid: string;
}
export declare class UpdateConnectionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    voiceV1ConnectionPolicy?: shared.VoiceV1ConnectionPolicy;
}
