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
    /**
     * If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array.
     */
    restrictedToWorkflows?: boolean;
    runnersUrl: string;
    /**
     * Link to the selected repositories resource for this runner group. Not present unless visibility was set to `selected`
     */
    selectedRepositoriesUrl?: string;
    /**
     * List of workflows the runner group should be allowed to run. This setting will be ignored unless `restricted_to_workflows` is set to `true`.
     */
    selectedWorkflows?: string[];
    visibility: string;
    /**
     * If `true`, the `restricted_to_workflows` and `selected_workflows` fields cannot be modified.
     */
    workflowRestrictionsReadOnly?: boolean;
}
