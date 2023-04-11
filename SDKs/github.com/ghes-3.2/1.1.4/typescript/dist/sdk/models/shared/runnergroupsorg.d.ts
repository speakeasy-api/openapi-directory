import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response
 */
export declare class RunnerGroupsOrg extends SpeakeasyBase {
    allowsPublicRepositories: boolean;
    default: boolean;
    id: number;
    inherited: boolean;
    inheritedAllowsPublicRepositories?: boolean;
    name: string;
    runnersUrl: string;
    /**
     * Link to the selected repositories resource for this runner group. Not present unless visibility was set to `selected`
     */
    selectedRepositoriesUrl?: string;
    visibility: string;
}
