import { SpeakeasyBase } from "../../../internal/utils";
import { BackgroundJobLogEntry } from "./backgroundjoblogentry";
/**
 * Response message for 'SearchBackgroundJobs' request.
 */
export declare class SearchBackgroundJobsResponse extends SpeakeasyBase {
    /**
     * The list of conversion workspace mapping rules.
     */
    jobs?: BackgroundJobLogEntry[];
}
