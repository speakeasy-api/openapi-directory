import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object of user ID and auth token pair, permitting Plaid to aggregate a user’s accounts
 */
export declare class ItemImportRequestUserAuth extends SpeakeasyBase {
    /**
     * Authorization token Plaid will use to aggregate this user’s accounts
     */
    authToken: string;
    /**
     * Opaque user identifier
     */
    userId: string;
}
