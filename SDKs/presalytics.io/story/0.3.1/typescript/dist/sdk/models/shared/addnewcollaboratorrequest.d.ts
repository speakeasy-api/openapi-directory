import { SpeakeasyBase } from "../../../internal/utils";
/**
 * required subset of collaborator data to get a permission
 */
export declare class AddNewCollaboratorRequest extends SpeakeasyBase {
    collaboratorType?: string;
    userEmail?: string;
    userId?: string;
}
