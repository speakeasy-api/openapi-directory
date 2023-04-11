import { SpeakeasyBase } from "../../../internal/utils";
import { PermissionType } from "./permissiontype";
/**
 * Base model for all types
 */
export declare class StoryCollaborator extends SpeakeasyBase {
    active?: boolean;
    createdAt?: Date;
    createdBy?: string;
    email?: string;
    id?: string;
    leadId?: number;
    name?: string;
    /**
     * A permission type that can be applied to story collaborator
     */
    permissionType?: PermissionType;
    permissionTypeId?: string;
    storyId?: string;
    updatedAt?: Date;
    updatedBy?: string;
    userId?: string;
}
