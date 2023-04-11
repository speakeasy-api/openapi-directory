import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2Tenant } from "./googlecloudidentitytoolkitadminv2tenant";
/**
 * Response message for ListTenants.
 */
export declare class GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse extends SpeakeasyBase {
    /**
     * The token to get the next page of results.
     */
    nextPageToken?: string;
    /**
     * A list of tenants under the given agent project.
     */
    tenants?: GoogleCloudIdentitytoolkitAdminV2Tenant[];
}
