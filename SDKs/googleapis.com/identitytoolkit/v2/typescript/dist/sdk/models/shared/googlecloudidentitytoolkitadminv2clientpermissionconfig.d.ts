import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2ClientPermissions } from "./googlecloudidentitytoolkitadminv2clientpermissions";
/**
 * Options related to how clients making requests on behalf of a tenant should be configured.
 */
export declare class GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig extends SpeakeasyBase {
    /**
     * Configuration related to restricting a user's ability to affect their account.
     */
    permissions?: GoogleCloudIdentitytoolkitAdminV2ClientPermissions;
}
