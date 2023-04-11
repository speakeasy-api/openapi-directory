import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2JobTrigger } from "./googleprivacydlpv2jobtrigger";
/**
 * Response message for ListJobTriggers.
 */
export declare class GooglePrivacyDlpV2ListJobTriggersResponse extends SpeakeasyBase {
    /**
     * List of triggeredJobs, up to page_size in ListJobTriggersRequest.
     */
    jobTriggers?: GooglePrivacyDlpV2JobTrigger[];
    /**
     * If the next page is available then the next page token to be used in following ListJobTriggers request.
     */
    nextPageToken?: string;
}
