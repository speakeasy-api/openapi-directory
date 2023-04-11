import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateFlowValidateServerList: readonly ["https://studio.twilio.com"];
export declare class UpdateFlowValidateSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateFlowValidateUpdateFlowValidateRequest extends SpeakeasyBase {
    /**
     * Description of change made in the revision.
     */
    commitMessage?: string;
    /**
     * JSON representation of flow definition.
     */
    definition: any;
    /**
     * The string that you assigned to describe the Flow.
     */
    friendlyName: string;
    status: shared.FlowValidateEnumStatusEnum;
}
export declare class UpdateFlowValidateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    studioV2FlowValidate?: shared.StudioV2FlowValidate;
}
