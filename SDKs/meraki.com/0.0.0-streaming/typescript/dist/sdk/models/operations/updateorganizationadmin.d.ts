import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateOrganizationAdminRequestBodyNetworks extends SpeakeasyBase {
    /**
     * The privilege of the dashboard administrator on the network
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
export declare class UpdateOrganizationAdminRequestBodyTags extends SpeakeasyBase {
    /**
     * The privilege of the dashboard administrator on the tag
     */
    access: string;
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
