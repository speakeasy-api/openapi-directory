import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateFlowServerList: readonly ["https://studio.twilio.com"];
export declare class CreateFlowSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateFlowCreateFlowRequest extends SpeakeasyBase {
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
    status: shared.FlowEnumStatusEnum;
}
export declare class CreateFlowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    studioV2Flow?: shared.StudioV2Flow;
}
