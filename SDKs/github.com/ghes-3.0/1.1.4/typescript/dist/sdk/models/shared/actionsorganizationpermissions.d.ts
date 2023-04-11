import { SpeakeasyBase } from "../../../internal/utils";
import { AllowedActionsEnum } from "./allowedactionsenum";
import { EnabledRepositoriesEnum } from "./enabledrepositoriesenum";
/**
 * Response
 */
export declare class ActionsOrganizationPermissions extends SpeakeasyBase {
    /**
     * The permissions policy that controls the actions that are allowed to run. Can be one of: `all`, `local_only`, or `selected`.
     */
    allowedActions?: AllowedActionsEnum;
    /**
     * The policy that controls the repositories in the organization that are allowed to run GitHub Actions. Can be one of: `all`, `none`, or `selected`.
     */
    enabledRepositories: EnabledRepositoriesEnum;
    /**
     * The API URL to use to get or set the actions that are allowed to run, when `allowed_actions` is set to `selected`.
     */
    selectedActionsUrl?: string;
    /**
     * The API URL to use to get or set the selected repositories that are allowed to run GitHub Actions, when `enabled_repositories` is set to `selected`.
     */
    selectedRepositoriesUrl?: string;
}
