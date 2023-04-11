import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateConnectionPolicyTargetServerList: readonly ["https://voice.twilio.com"];
export declare class CreateConnectionPolicyTargetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest extends SpeakeasyBase {
    /**
     * Whether the Target is enabled. The default is `true`.
     */
    enabled?: boolean;
    /**
     * A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName?: string;
    /**
     * The relative importance of the target. Can be an integer from 0 to 65535, inclusive, and the default is 10. The lowest number represents the most important target.
     */
    priority?: number;
    /**
     * The SIP address you want Twilio to route your calls to. This must be a `sip:` schema. `sips` is NOT supported.
     */
    target: string;
    /**
     * The value that determines the relative share of the load the Target should receive compared to other Targets with the same priority. Can be an integer from 1 to 65535, inclusive, and the default is 10. Targets with higher values receive more load than those with lower ones with the same priority.
     */
    weight?: number;
}
export declare class CreateConnectionPolicyTargetRequest extends SpeakeasyBase {
    /**
     * The SID of the Connection Policy that owns the Target.
     */
    connectionPolicySid: string;
    requestBody?: CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest;
}
export declare class CreateConnectionPolicyTargetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    voiceV1ConnectionPolicyConnectionPolicyTarget?: shared.VoiceV1ConnectionPolicyConnectionPolicyTarget;
}
