import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Level at which permission could be applied (app or channel)
 */
export declare enum PermissionLevelEnum {
    App = "app",
    Channel = "channel"
}
export declare class Permission extends SpeakeasyBase {
    /**
     * Action name this permission is for (e.g. SendMessage)
     */
    action: string;
    /**
     * MongoDB style condition which decides whether or not the permission is granted
     */
    condition?: Record<string, any>;
    /**
     * Whether this is a custom permission or built-in
     */
    custom: boolean;
    /**
     * Description of the permission
     */
    description: string;
    /**
     * Unique permission ID
     */
    id: string;
    /**
     * Level at which permission could be applied (app or channel)
     */
    level: PermissionLevelEnum;
    /**
     * Name of the permission
     */
    name: string;
    /**
     * Whether this permission applies to resource owner or not
     */
    owner: boolean;
    /**
     * Whether this permission applies to teammates (multi-tenancy mode only)
     */
    sameTeam: boolean;
    /**
     * List of tags of the permission
     */
    tags: string[];
}
