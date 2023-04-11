import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Base model for all types
 */
export declare class PermissionType extends SpeakeasyBase {
    canAddCollaborators?: boolean;
    canDelete?: boolean;
    canEdit?: boolean;
    canView?: boolean;
    createdAt?: Date;
    createdBy?: string;
    id?: string;
    name?: string;
    updatedAt?: Date;
    updatedBy?: string;
}
