import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The privilege of the SAML administrator on the network. Can be one of 'full', 'read-only', 'guest-ambassador', 'monitor-only' or 'ssid-admin'
 */
export declare enum CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum {
    Full = "full",
    GuestAmbassador = "guest-ambassador",
    MonitorOnly = "monitor-only",
    ReadOnly = "read-only",
    SsidAdmin = "ssid-admin"
}
export declare class CreateOrganizationSamlRoleRequestBodyNetworks extends SpeakeasyBase {
    /**
     * The privilege of the SAML administrator on the network. Can be one of 'full', 'read-only', 'guest-ambassador', 'monitor-only' or 'ssid-admin'
     */
    access: CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum;
    /**
     * The network ID
     */
    id: string;
}
/**
 * The privilege of the SAML administrator on the organization. Can be one of 'none', 'read-only', 'full' or 'enterprise'
 */
export declare enum CreateOrganizationSamlRoleRequestBodyOrgAccessEnum {
    Enterprise = "enterprise",
    Full = "full",
    None = "none",
    ReadOnly = "read-only"
}
/**
 * The privilege of the SAML administrator on the tag. Can be one of 'full', 'read-only', 'guest-ambassador' or 'monitor-only'
 */
export declare enum CreateOrganizationSamlRoleRequestBodyTagsAccessEnum {
    Full = "full",
    GuestAmbassador = "guest-ambassador",
    MonitorOnly = "monitor-only",
    ReadOnly = "read-only"
}
export declare class CreateOrganizationSamlRoleRequestBodyTags extends SpeakeasyBase {
    /**
     * The privilege of the SAML administrator on the tag. Can be one of 'full', 'read-only', 'guest-ambassador' or 'monitor-only'
     */
    access: CreateOrganizationSamlRoleRequestBodyTagsAccessEnum;
    /**
     * The name of the tag
     */
    tag: string;
}
export declare class CreateOrganizationSamlRoleRequestBody extends SpeakeasyBase {
    /**
     * The list of networks that the SAML administrator has privileges on
     */
    networks?: CreateOrganizationSamlRoleRequestBodyNetworks[];
    /**
     * The privilege of the SAML administrator on the organization. Can be one of 'none', 'read-only', 'full' or 'enterprise'
     */
    orgAccess: CreateOrganizationSamlRoleRequestBodyOrgAccessEnum;
    /**
     * The role of the SAML administrator
     */
    role: string;
    /**
     * The list of tags that the SAML administrator has privleges on
     */
    tags?: CreateOrganizationSamlRoleRequestBodyTags[];
}
export declare class CreateOrganizationSamlRoleRequest extends SpeakeasyBase {
    requestBody: CreateOrganizationSamlRoleRequestBody;
    organizationId: string;
}
export declare class CreateOrganizationSamlRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createOrganizationSamlRole201ApplicationJSONObject?: Record<string, any>;
}
