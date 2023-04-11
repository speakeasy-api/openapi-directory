import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateOrganizationAdminRequestBodyNetworks extends SpeakeasyBase {
    /**
     * The privilege of the dashboard administrator on the network. Can be one of 'full', 'read-only', 'guest-ambassador' or 'monitor-only'
     */
    access: string;
    /**
     * The network ID
     */
    id: string;
}
/**
 * The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none'
 */
export declare enum UpdateOrganizationAdminRequestBodyOrgAccessEnum {
    Enterprise = "enterprise",
    Full = "full",
    None = "none",
    ReadOnly = "read-only"
}
/**
 * The privilege of the dashboard administrator on the tag. Can be one of 'full', 'read-only', 'guest-ambassador' or 'monitor-only'
 */
export declare enum UpdateOrganizationAdminRequestBodyTagsAccessEnum {
    Full = "full",
    GuestAmbassador = "guest-ambassador",
    MonitorOnly = "monitor-only",
    ReadOnly = "read-only"
}
export declare class UpdateOrganizationAdminRequestBodyTags extends SpeakeasyBase {
    /**
     * The privilege of the dashboard administrator on the tag. Can be one of 'full', 'read-only', 'guest-ambassador' or 'monitor-only'
     */
    access: UpdateOrganizationAdminRequestBodyTagsAccessEnum;
    /**
     * The name of the tag
     */
    tag: string;
}
export declare class UpdateOrganizationAdminRequestBody extends SpeakeasyBase {
    /**
     * The name of the dashboard administrator
     */
    name?: string;
    /**
     * The list of networks that the dashboard administrator has privileges on
     */
    networks?: UpdateOrganizationAdminRequestBodyNetworks[];
    /**
     * The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none'
     */
    orgAccess?: UpdateOrganizationAdminRequestBodyOrgAccessEnum;
    /**
     * The list of tags that the dashboard administrator has privileges on
     */
    tags?: UpdateOrganizationAdminRequestBodyTags[];
}
export declare class UpdateOrganizationAdminRequest extends SpeakeasyBase {
    requestBody?: UpdateOrganizationAdminRequestBody;
    adminId: string;
    organizationId: string;
}
export declare class UpdateOrganizationAdminResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationAdmin200ApplicationJSONObject?: Record<string, any>;
}
