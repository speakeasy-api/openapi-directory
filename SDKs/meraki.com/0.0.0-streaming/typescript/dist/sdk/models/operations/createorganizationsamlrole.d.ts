import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateOrganizationSamlRoleRequestBodyNetworks extends SpeakeasyBase {
    /**
     * The privilege of the SAML administrator on the network
     */
    access: string;
    /**
     * The network ID
     */
    id: string;
}
export declare class CreateOrganizationSamlRoleRequestBodyTags extends SpeakeasyBase {
    /**
     * The privilege of the SAML administrator on the tag
     */
    access: string;
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
     * The privilege of the SAML administrator on the organization
     */
    orgAccess: string;
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
