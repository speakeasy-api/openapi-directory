import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedResource } from "./embeddedresource";
/**
 * Success
 */
export declare class Note extends SpeakeasyBase {
    /**
     * Type of associated resource ('person' or 'account')
     */
    associatedType?: string;
    associatedWith?: EmbeddedResource;
    call?: EmbeddedResource;
    /**
     * The content of the note
     */
    content?: string;
    /**
     * Datetime of when the note was created
     */
    createdAt?: Date;
    /**
     * Note ID
     */
    id?: number;
    /**
     * Datetime of when the note was last updated
     */
    updatedAt?: Date;
    user?: EmbeddedResource;
}
