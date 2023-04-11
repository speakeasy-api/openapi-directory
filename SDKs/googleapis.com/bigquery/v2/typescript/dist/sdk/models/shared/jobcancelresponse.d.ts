import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * Successful response
 */
export declare class JobCancelResponse extends SpeakeasyBase {
    job?: Job;
    /**
     * The resource type of the response.
     */
    kind?: string;
}
