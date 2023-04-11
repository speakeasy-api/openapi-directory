import { SpeakeasyBase } from "../../../internal/utils";
import { UserAccess } from "./useraccess";
/**
 * List AccountUsers Response.
 */
export declare class ListAccountUsersResponse extends SpeakeasyBase {
    /**
     * All GTM AccountUsers of a GTM Account.
     */
    userAccess?: UserAccess[];
}
