import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DlpJob } from "./googleprivacydlpv2dlpjob";
/**
 * The response message for listing DLP jobs.
 */
export declare class GooglePrivacyDlpV2ListDlpJobsResponse extends SpeakeasyBase {
    /**
     * A list of DlpJobs that matches the specified filter in the request.
     */
    jobs?: GooglePrivacyDlpV2DlpJob[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
}
