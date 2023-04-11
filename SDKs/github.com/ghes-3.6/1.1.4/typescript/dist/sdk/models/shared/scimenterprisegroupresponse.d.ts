import { SpeakeasyBase } from "../../../internal/utils";
import { Meta } from "./meta";
export declare class ScimEnterpriseGroupResponseMembers extends SpeakeasyBase {
    dollarRef?: string;
    display?: string;
    value?: string;
}
export declare enum ScimEnterpriseGroupResponseSchemasEnum {
    UrnIetfParamsScimSchemasCore20Group = "urn:ietf:params:scim:schemas:core:2.0:Group",
    UrnIetfParamsScimApiMessages20ListResponse = "urn:ietf:params:scim:api:messages:2.0:ListResponse"
}
/**
 * Group has been created
 */
export declare class ScimEnterpriseGroupResponse extends SpeakeasyBase {
    /**
     * A human-readable name for a security group.
     */
    displayName?: string;
    /**
     * A unique identifier for the resource as defined by the provisioning client.
     */
    externalId?: string;
    /**
     * The internally generated id for the group object.
     */
    id?: string;
    /**
     * The security group members.
     */
    members?: ScimEnterpriseGroupResponseMembers[];
    /**
     * The metadata associated with the creation/updates to the user.
     */
    meta?: Meta;
    /**
     * The URIs that are used to indicate the namespaces of the SCIM schemas.
     */
    schemas: ScimEnterpriseGroupResponseSchemasEnum[];
}
