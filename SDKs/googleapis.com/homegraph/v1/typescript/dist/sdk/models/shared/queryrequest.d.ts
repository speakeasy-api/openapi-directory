import { SpeakeasyBase } from "../../../internal/utils";
import { QueryRequestInput } from "./queryrequestinput";
/**
 * Request type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call.
 */
export declare class QueryRequest extends SpeakeasyBase {
    /**
     * Required. Third-party user ID.
     */
    agentUserId?: string;
    /**
     * Required. Inputs containing third-party device IDs for which to get the device states.
     */
    inputs?: QueryRequestInput[];
    /**
     * Request ID used for debugging.
     */
    requestId?: string;
}
