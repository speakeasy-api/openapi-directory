import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The privilege of the SAML administrator on the network. Can be one of 'full', 'read-only', 'guest-ambassador', 'monitor-only' or 'ssid-admin'
 */
export declare enum UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum {
    Full = "full",
    GuestAmbassador = "guest-ambassador",
    MonitorOnly = "monitor-only",
    ReadOnly = "read-only",
    SsidAdmin = "ssid-admin"
}
export declare class UpdateOrganizationSamlRoleRequestBodyNetworks extends SpeakeasyBase {
    /**
     * The privilege of the SAML administrator on the network. Can be one of 'full', 'read-only', 'guest-ambassador', 'monitor-only' or 'ssid-admin'
     */
    access: UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum;
    /**
     * The network ID
     */
    id: string;
}
/**
 * The privilege of the SAML administrator on the organization. Can be one of 'none', 'read-only', 'full' or 'enterprise'
 */
export declare enum UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum {
    Enterprise = "enterprise",
    Full = "full",
    None = "none",
    ReadOnly = "read-only"
}
/**
 * The privilege of the SAML administrator on the tag. Can be one of 'full', 'read-only', 'guest-ambassador' or 'monitor-only'
 */
export declare enum UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum {
    Full = "full",
    GuestAmbassador = "guest-ambassador",
    MonitorOnly = "monitor-only",
    ReadOnly = "read-only"
}
export declare class UpdateOrganizationSamlRoleRequestBodyTags extends SpeakeasyBase {
    /**
     * The privilege of the SAML administrator on the tag. Can be one of 'full', 'read-only', 'guest-ambassador' or 'monitor-only'
     */
    access: UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum;
    /**
     * The name of the tag
     */
    tag: string;
}
export declare class UpdateOrganizationSamlRoleRequestBody extends SpeakeasyBase {
    /**
     * The list of networks that the SAML administrator has privileges on
     */
    networks?: UpdateOrganizationSamlRoleRequestBodyNetworks[];
    /**
     * The privilege of the SAML administrator on the organization. Can be one of 'none', 'read-only', 'full' or 'enterprise'
     */
    orgAccess?: UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum;
    /**
     * The role of the SAML administrator
     */
    role?: string;
    /**
     * The list of tags that the SAML administrator has privleges on
     */
    tags?: UpdateOrganizationSamlRoleRequestBodyTags[];
}
export declare class UpdateOrganizationSamlRoleRequest extends SpeakeasyBase {
    requestBody?: UpdateOrganizationSamlRoleRequestBody;
    organizationId: string;
    samlRoleId: string;
}
export declare class UpdateOrganizationSamlRole200ApplicationJSONNetworks extends SpeakeasyBase {
    /**
     * The privilege of the SAML administrator on the network
     */
    access?: string;
    /**
     * The network ID
     */
    id?: string;
}
export declare class UpdateOrganizationSamlRole200ApplicationJSONTags extends SpeakeasyBase {
    /**
     * The privilege of the SAML administrator on the tag
     */
    access?: string;
    /**
     * The name of the tag
     */
    tag?: string;
}
/**
 * Successful operation
 */
export declare class UpdateOrganizationSamlRole200ApplicationJSON extends SpeakeasyBase {
    /**
     * ID associated with the SAML role
     */
    id?: string;
    /**
     * The list of networks that the SAML administrator has privileges on
     */
    networks?: UpdateOrganizationSamlRole200ApplicationJSONNetworks[];
    /**
     * The privilege of the SAML administrator on the organization
     */
    orgAccess?: string;
    /**
     * The role of the SAML administrator
     */
    role?: string;
    /**
     * The list of tags that the SAML administrator has privleges on
     */
    tags?: UpdateOrganizationSamlRole200ApplicationJSONTags[];
}
export declare class UpdateOrganizationSamlRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationSamlRole200ApplicationJSONObject?: UpdateOrganizationSamlRole200ApplicationJSON;
}
