import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1Workload } from "./googlecloudassuredworkloadsv1workload";
/**
 * Response of ListWorkloads endpoint.
 */
export declare class GoogleCloudAssuredworkloadsV1ListWorkloadsResponse extends SpeakeasyBase {
    /**
     * The next page token. Return empty if reached the last page.
     */
    nextPageToken?: string;
    /**
     * List of Workloads under a given parent.
     */
    workloads?: GoogleCloudAssuredworkloadsV1Workload[];
}
