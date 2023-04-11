import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information needed to create an Admin User for Google Workspace.
 */
export declare class GoogleCloudChannelV1AdminUser extends SpeakeasyBase {
    /**
     * Primary email of the admin user.
     */
    email?: string;
    /**
     * Family name of the admin user.
     */
    familyName?: string;
    /**
     * Given name of the admin user.
     */
    givenName?: string;
}
