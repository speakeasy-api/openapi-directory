import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The method of authentication the user will use to sign in to the Meraki dashboard. Can be one of 'Email' or 'Cisco SecureX Sign-On'. The default is Email authentication
 */
export declare enum CreateOrganizationAdminRequestBodyAuthenticationMethodEnum {
    CiscoSecureXSignOn = "Cisco SecureX Sign-On",
    Email = "Email"
}
export declare class CreateOrganizationAdminRequestBodyNetworks extends SpeakeasyBase {
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
export declare enum CreateOrganizationAdminRequestBodyOrgAccessEnum {
    Enterprise = "enterprise",
    Full = "full",
    None = "none",
    ReadOnly = "read-only"
}
export declare class CreateOrganizationAdminRequestBodyTags extends SpeakeasyBase {
    /**
     * The privilege of the dashboard administrator on the tag
     */
    access: string;
    /**
     * The name of the tag
     */
    tag: string;
}
export declare class CreateOrganizationAdminRequestBody extends SpeakeasyBase {
    /**
     * The method of authentication the user will use to sign in to the Meraki dashboard. Can be one of 'Email' or 'Cisco SecureX Sign-On'. The default is Email authentication
     */
    authenticationMethod?: CreateOrganizationAdminRequestBodyAuthenticationMethodEnum;
    /**
     * The email of the dashboard administrator. This attribute can not be updated.
     */
    email: string;
    /**
     * The name of the dashboard administrator
     */
    name: string;
    /**
     * The list of networks that the dashboard administrator has privileges on
     */
    networks?: CreateOrganizationAdminRequestBodyNetworks[];
    /**
     * The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none'
     */
    orgAccess: CreateOrganizationAdminRequestBodyOrgAccessEnum;
    /**
     * The list of tags that the dashboard administrator has privileges on
     */
    tags?: CreateOrganizationAdminRequestBodyTags[];
}
export declare class CreateOrganizationAdminRequest extends SpeakeasyBase {
    requestBody: CreateOrganizationAdminRequestBody;
    organizationId: string;
}
export declare class CreateOrganizationAdminResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createOrganizationAdmin201ApplicationJSONObject?: Record<string, any>;
}
