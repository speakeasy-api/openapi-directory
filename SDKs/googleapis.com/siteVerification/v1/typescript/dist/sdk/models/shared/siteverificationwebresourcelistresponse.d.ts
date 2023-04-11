import { SpeakeasyBase } from "../../../internal/utils";
import { SiteVerificationWebResourceResource } from "./siteverificationwebresourceresource";
/**
 * Successful response
 */
export declare class SiteVerificationWebResourceListResponse extends SpeakeasyBase {
    /**
     * The list of sites that are owned by the authenticated user.
     */
    items?: SiteVerificationWebResourceResource[];
}
