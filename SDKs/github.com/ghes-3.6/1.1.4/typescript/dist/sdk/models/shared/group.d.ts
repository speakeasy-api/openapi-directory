import { SpeakeasyBase } from "../../../internal/utils";
export declare class GroupMembers extends SpeakeasyBase {
    /**
     * The display name associated with the member
     */
    displayName: string;
    /**
     * The local unique identifier for the member
     */
    value: string;
}
export declare enum GroupSchemasEnum {
    UrnIetfParamsScimSchemasCore20Group = "urn:ietf:params:scim:schemas:core:2.0:Group"
}
export declare class Group extends SpeakeasyBase {
    /**
     * A human-readable name for a security group.
     */
    displayName: string;
    /**
     * A unique identifier for the resource as defined by the provisioning client.
     */
    externalId: string;
    /**
     * The group members.
     */
    members: GroupMembers[];
    /**
     * The URIs that are used to indicate the namespaces of the SCIM schemas.
     */
    schemas: GroupSchemasEnum[];
}
