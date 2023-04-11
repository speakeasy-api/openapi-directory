import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The quota information per method in the Content API. Includes only methods with current usage greater than zero for your account.
 */
export declare class MethodQuota extends SpeakeasyBase {
    /**
     * The method name, for example `products.list`. Method name does not contain version because quota can be shared between different API versions of the same method.
     */
    method?: string;
    /**
     * The current quota limit per day, meaning the maximum number of calls for the method.
     */
    quotaLimit?: string;
    /**
     * The current quota usage, meaning the number of calls already made to the method.
     */
    quotaUsage?: string;
}
