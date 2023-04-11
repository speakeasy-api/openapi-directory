import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message of CatalogService.GetDefaultBranch.
 */
export declare class GoogleCloudRetailV2GetDefaultBranchResponse extends SpeakeasyBase {
    /**
     * Full resource name of the branch id currently set as default branch.
     */
    branch?: string;
    /**
     * This corresponds to SetDefaultBranchRequest.note field, when this branch was set as default.
     */
    note?: string;
    /**
     * The time when this branch is set to default.
     */
    setTime?: string;
}
