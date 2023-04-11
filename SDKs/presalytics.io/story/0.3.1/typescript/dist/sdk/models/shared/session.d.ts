import { SpeakeasyBase } from "../../../internal/utils";
import { StoryCollaborator } from "./storycollaborator";
import { View } from "./view";
/**
 * Base model for all types
 */
export declare class Session extends SpeakeasyBase {
    /**
     * Description of a user that can collaborate on a story
     */
    collaborator?: StoryCollaborator;
    collaboratorId?: string;
    createdAt?: Date;
    createdBy?: string;
    host?: string;
    id?: string;
    outlineRevision?: number;
    updatedAt?: Date;
    updatedBy?: string;
    views?: View[];
}
