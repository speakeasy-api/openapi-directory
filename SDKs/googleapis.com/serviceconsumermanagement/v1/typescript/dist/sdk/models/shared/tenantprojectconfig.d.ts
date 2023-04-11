import { SpeakeasyBase } from "../../../internal/utils";
import { BillingConfig } from "./billingconfig";
import { ServiceAccountConfig } from "./serviceaccountconfig";
import { TenantProjectPolicy } from "./tenantprojectpolicy";
/**
 * This structure defines a tenant project to be added to the specified tenancy unit and its initial configuration and properties. A project lien is created for the tenant project to prevent the tenant project from being deleted accidentally. The lien is deleted as part of tenant project removal.
 */
export declare class TenantProjectConfig extends SpeakeasyBase {
    /**
     * Describes the billing configuration for a new tenant project.
     */
    billingConfig?: BillingConfig;
    /**
     * Folder where project in this tenancy unit must be located This folder must have been previously created with the required permissions for the caller to create and configure a project in it. Valid folder resource names have the format `folders/{folder_number}` (for example, `folders/123456`).
     */
    folder?: string;
    /**
     * Labels that are applied to this project.
     */
    labels?: Record<string, string>;
    /**
     * Describes the service account configuration for the tenant project.
     */
    serviceAccountConfig?: ServiceAccountConfig;
    /**
     * Google Cloud API names of services that are activated on this project during provisioning. If any of these services can't be activated, the request fails. For example: 'compute.googleapis.com','cloudfunctions.googleapis.com'
     */
    services?: string[];
    /**
     * Describes policy settings that can be applied to a newly created tenant project.
     */
    tenantProjectPolicy?: TenantProjectPolicy;
}
