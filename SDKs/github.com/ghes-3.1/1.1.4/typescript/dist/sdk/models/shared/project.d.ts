import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
/**
 * The baseline permission that all organization members have on this project. Only present if owner is an organization.
 */
export declare enum ProjectOrganizationPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin",
    None = "none"
}
/**
 * Projects are a way to organize columns and cards of work.
 */
export declare class Project extends SpeakeasyBase {
    /**
     * Body of the project
     */
    body: string;
    columnsUrl: string;
    createdAt: Date;
    /**
     * Simple User
     */
    creator: NullableSimpleUser;
    htmlUrl: string;
    id: number;
    /**
     * Name of the project
     */
    name: string;
    nodeId: string;
    number: number;
    /**
     * The baseline permission that all organization members have on this project. Only present if owner is an organization.
     */
    organizationPermission?: ProjectOrganizationPermissionEnum;
    ownerUrl: string;
    /**
     * Whether or not this project can be seen by everyone. Only present if owner is an organization.
     */
    private?: boolean;
    /**
     * State of the project; either 'open' or 'closed'
     */
    state: string;
    updatedAt: Date;
    url: string;
}
