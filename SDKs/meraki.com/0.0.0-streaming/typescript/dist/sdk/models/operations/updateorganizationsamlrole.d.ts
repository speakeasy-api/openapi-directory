import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateOrganizationSamlRoleRequestBodyNetworks extends SpeakeasyBase {
    /**
     * The privilege of the SAML administrator on the network
     */
    access: string;
    /**
     * The network ID
     */
    id: string;
}
export declare class UpdateOrganizationSamlRoleRequestBodyTags extends SpeakeasyBase {
    /**
     * The privilege of the SAML administrator on the tag
     */
    access: string;
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
    tags?: UpdateOrganizationSamlRoleRequestBodyTags[];
}
export declare class UpdateOrganizationSamlRoleRequest extends SpeakeasyBase {
    requestBody?: UpdateOrganizationSamlRoleRequestBody;
    organizationId: string;
    samlRoleId: string;
}
export declare class UpdateOrganizationSamlRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationSamlRole200ApplicationJSONObject?: Record<string, any>;
}
