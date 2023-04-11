import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateConnectionPolicyServerList: readonly ["https://voice.twilio.com"];
export declare class CreateConnectionPolicySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateConnectionPolicyCreateConnectionPolicyRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName?: string;
}
export declare class CreateConnectionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    voiceV1ConnectionPolicy?: shared.VoiceV1ConnectionPolicy;
}
