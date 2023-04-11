import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Allows customers to configure tenant_id for GCIP instance per-app.
 */
export declare class GcipSettings extends SpeakeasyBase {
    /**
     * Login page URI associated with the GCIP tenants. Typically, all resources within the same project share the same login page, though it could be overridden at the sub resource level.
     */
    loginPageUri?: string;
    /**
     * GCIP tenant ids that are linked to the IAP resource. tenant_ids could be a string beginning with a number character to indicate authenticating with GCIP tenant flow, or in the format of _ to indicate authenticating with GCIP agent flow. If agent flow is used, tenant_ids should only contain one single element, while for tenant flow, tenant_ids can contain multiple elements.
     */
    tenantIds?: string[];
}
