import { SpeakeasyBase } from "../../../internal/utils";
import { PatchJobInstanceDetails } from "./patchjobinstancedetails";
/**
 * A response message for listing the instances details for a patch job.
 */
export declare class ListPatchJobInstanceDetailsResponse extends SpeakeasyBase {
    /**
     * A pagination token that can be used to get the next page of results.
     */
    nextPageToken?: string;
    /**
     * A list of instance status.
     */
    patchJobInstanceDetails?: PatchJobInstanceDetails[];
}
