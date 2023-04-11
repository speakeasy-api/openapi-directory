import { SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";
/**
 * A response containing a partial list of operations and a page token used to build the next request if the request has been truncated.
 */
export declare class OperationsListResponse extends SpeakeasyBase {
    /**
     * Output only. A token used to continue a truncated list request.
     */
    nextPageToken?: string;
    /**
     * Output only. Operations contained in this list response.
     */
    operations?: Operation[];
}
