import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
export declare class TeamProjectPermissions extends SpeakeasyBase {
    admin: boolean;
    read: boolean;
    write: boolean;
}
/**
 * A team's access to a project.
 */
export declare class TeamProject extends SpeakeasyBase {
    body: string;
    columnsUrl: string;
    createdAt: string;
    /**
     * A GitHub user.
     */
    creator: SimpleUser;
    htmlUrl: string;
    id: number;
    name: string;
    nodeId: string;
    number: number;
    /**
     * The organization permission for this project. Only present when owner is an organization.
     */
    organizationPermission?: string;
    ownerUrl: string;
    permissions: TeamProjectPermissions;
    /**
     * Whether the project is private or not. Only present when owner is an organization.
     */
    private?: boolean;
    state: string;
    updatedAt: string;
    url: string;
}
