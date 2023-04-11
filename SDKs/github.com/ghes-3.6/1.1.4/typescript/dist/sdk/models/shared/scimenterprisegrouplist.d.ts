import { SpeakeasyBase } from "../../../internal/utils";
import { ScimEnterpriseGroupResponse } from "./scimenterprisegroupresponse";
export declare enum ScimEnterpriseGroupListSchemasEnum {
    UrnIetfParamsScimApiMessages20ListResponse = "urn:ietf:params:scim:api:messages:2.0:ListResponse"
}
/**
 * Success, either groups were found or not found
 */
export declare class ScimEnterpriseGroupList extends SpeakeasyBase {
    /**
     * Information about each provisioned group.
     */
    resources: ScimEnterpriseGroupResponse[];
    /**
     * Number of objects per page
     */
    itemsPerPage: number;
    /**
     * The URIs that are used to indicate the namespaces of the list SCIM schemas.
     */
    schemas: ScimEnterpriseGroupListSchemasEnum[];
    /**
     * A starting index for the returned page
     */
    startIndex: number;
    /**
     * Number of results found
     */
    totalResults: number;
}
