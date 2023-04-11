import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Execution } from "./googlecloudrunv2execution";
/**
 * Response message containing a list of Executions.
 */
export declare class GoogleCloudRunV2ListExecutionsResponse extends SpeakeasyBase {
    /**
     * The resulting list of Executions.
     */
    executions?: GoogleCloudRunV2Execution[];
    /**
     * A token indicating there are more items than page_size. Use it in the next ListExecutions request to continue.
     */
    nextPageToken?: string;
}
