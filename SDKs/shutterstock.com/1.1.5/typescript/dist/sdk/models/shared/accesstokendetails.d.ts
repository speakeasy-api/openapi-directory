import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccessTokenDetailsRealmEnum {
    Customer = "customer",
    Contributor = "contributor"
}
/**
 * Access token details that are currently associated with this user
**/
export declare class AccessTokenDetails extends SpeakeasyBase {
    clientId?: string;
    contributorId?: string;
    customerId?: string;
    expiresIn?: number;
    organizationId?: string;
    realm?: AccessTokenDetailsRealmEnum;
    scopes?: string[];
    userId?: string;
    username?: string;
}
