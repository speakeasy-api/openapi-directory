import { SpeakeasyBase } from "../../../internal/utils";
import { AllowedActionsEnum } from "./allowedactionsenum";
import { EnabledOrganizationsEnum } from "./enabledorganizationsenum";
/**
 * Response
 */
export declare class ActionsEnterprisePermissions extends SpeakeasyBase {
    /**
     * The permissions policy that controls the actions that are allowed to run. Can be one of: `all`, `local_only`, or `selected`.
     */
    allowedActions?: AllowedActionsEnum;
    /**
     * The policy that controls the organizations in the enterprise that are allowed to run GitHub Actions. Can be one of: `all`, `none`, or `selected`.
     */
    enabledOrganizations: EnabledOrganizationsEnum;
    /**
     * The API URL to use to get or set the actions that are allowed to run, when `allowed_actions` is set to `selected`.
     */
    selectedActionsUrl?: string;
    /**
     * The API URL to use to get or set the selected organizations that are allowed to run GitHub Actions, when `enabled_organizations` is set to `selected`.
     */
    selectedOrganizationsUrl?: string;
}
