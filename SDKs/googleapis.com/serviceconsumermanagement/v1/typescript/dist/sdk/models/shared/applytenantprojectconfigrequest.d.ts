import { SpeakeasyBase } from "../../../internal/utils";
import { TenantProjectConfig } from "./tenantprojectconfig";
/**
 * Request to apply configuration to an existing tenant project.
 */
export declare class ApplyTenantProjectConfigRequest extends SpeakeasyBase {
    /**
     * This structure defines a tenant project to be added to the specified tenancy unit and its initial configuration and properties. A project lien is created for the tenant project to prevent the tenant project from being deleted accidentally. The lien is deleted as part of tenant project removal.
     */
    projectConfig?: TenantProjectConfig;
    /**
     * Required. Tag of the project. Must be less than 128 characters. Required.
     */
    tag?: string;
}
