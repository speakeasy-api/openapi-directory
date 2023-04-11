import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1Violation } from "./googlecloudassuredworkloadsv1violation";
/**
 * Response of ListViolations endpoint.
 */
export declare class GoogleCloudAssuredworkloadsV1ListViolationsResponse extends SpeakeasyBase {
    /**
     * The next page token. Returns empty if reached the last page.
     */
    nextPageToken?: string;
    /**
     * List of Violations under a Workload.
     */
    violations?: GoogleCloudAssuredworkloadsV1Violation[];
}
