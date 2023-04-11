import { SpeakeasyBase } from "../../../internal/utils";
import { Deployment } from "./deployment";
/**
 * A response containing a partial list of deployments and a page token used to build the next request if the request has been truncated.
 */
export declare class DeploymentsListResponse extends SpeakeasyBase {
    /**
     * Output only. The deployments contained in this response.
     */
    deployments?: Deployment[];
    /**
     * Output only. A token used to continue a truncated list request.
     */
    nextPageToken?: string;
}
