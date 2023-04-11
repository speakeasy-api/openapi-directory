import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateFlowServerList: readonly ["https://studio.twilio.com"];
export declare class UpdateFlowSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateFlowUpdateFlowRequest extends SpeakeasyBase {
    /**
     * Description of change made in the revision.
     */
    commitMessage?: string;
    /**
     * JSON representation of flow definition.
     */
    definition?: any;
    /**
     * The string that you assigned to describe the Flow.
     */
    friendlyName?: string;
    status: shared.FlowEnumStatusEnum;
}
export declare class UpdateFlowRequest extends SpeakeasyBase {
    requestBody?: UpdateFlowUpdateFlowRequest;
    /**
     * The SID of the Flow resource to fetch.
     */
    sid: string;
}
export declare class UpdateFlowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    studioV2Flow?: shared.StudioV2Flow;
}
