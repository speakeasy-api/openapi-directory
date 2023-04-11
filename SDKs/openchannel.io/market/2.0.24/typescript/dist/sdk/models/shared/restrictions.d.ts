import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Resticts users from accessing this app
 */
export declare class Restrictions extends SpeakeasyBase {
    /**
     * A custom object containing fields paired with an array value of restrictions. Restricts the users that may own this app. Example: {'country':['Canada','Mexico']}
     */
    own?: Record<string, any>;
    /**
     * A custom object containing fields paired with an array value of restrictions. Restricts the users that may view this app. Example: {'country':['Canada','Mexico']}
     */
    view?: Record<string, any>;
}
