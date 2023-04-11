import { SpeakeasyBase } from "../../../internal/utils";
import { BusinessUserPermissionViewModel } from "./businessuserpermissionviewmodel";
/**
 * Success
 */
export declare class BusinessUserViewModel extends SpeakeasyBase {
    accountId?: string;
    businessName?: string;
    email?: string;
    id?: string;
    identityAccount?: boolean;
    locationId?: string;
    name?: string;
    object?: string;
    permissions?: BusinessUserPermissionViewModel[];
    resourceId?: string;
    resourceName?: string;
    role?: string;
}
