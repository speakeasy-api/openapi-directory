import { SpeakeasyBase } from "../../../internal/utils";
import { ScimEnterpriseUserResponse } from "./scimenterpriseuserresponse";
export declare enum ScimEnterpriseUserListSchemasEnum {
    UrnIetfParamsScimApiMessages20ListResponse = "urn:ietf:params:scim:api:messages:2.0:ListResponse"
}
/**
 * Success, either users were found or not found
 */
export declare class ScimEnterpriseUserList extends SpeakeasyBase {
    /**
     * Information about each provisioned account.
     */
    resources: ScimEnterpriseUserResponse[];
    /**
     * Number of objects per page
     */
    itemsPerPage: number;
    /**
     * The URIs that are used to indicate the namespaces of the list SCIM schemas.
     */
    schemas: ScimEnterpriseUserListSchemasEnum[];
    /**
     * A starting index for the returned page
     */
    startIndex: number;
    /**
     * Number of results found
     */
    totalResults: number;
}
