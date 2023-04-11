import { SpeakeasyBase } from "../../../internal/utils";
import { AllowedActionsEnum } from "./allowedactionsenum";
/**
 * Response
 */
export declare class ActionsRepositoryPermissions extends SpeakeasyBase {
    /**
     * The permissions policy that controls the actions that are allowed to run. Can be one of: `all`, `local_only`, or `selected`.
     */
    allowedActions?: AllowedActionsEnum;
    /**
     * Whether GitHub Actions is enabled on the repository.
     */
    enabled: boolean;
    /**
     * The API URL to use to get or set the actions that are allowed to run, when `allowed_actions` is set to `selected`.
     */
    selectedActionsUrl?: string;
}
