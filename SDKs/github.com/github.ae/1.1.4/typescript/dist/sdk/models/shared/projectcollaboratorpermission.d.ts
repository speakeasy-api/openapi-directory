import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
/**
 * Project Collaborator Permission
 */
export declare class ProjectCollaboratorPermission extends SpeakeasyBase {
    permission: string;
    /**
     * A GitHub user.
     */
    user: NullableSimpleUser;
}
