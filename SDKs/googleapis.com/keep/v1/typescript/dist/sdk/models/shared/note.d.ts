import { SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
import { Permission } from "./permission";
import { Section } from "./section";
/**
 * A single note.
 */
export declare class Note extends SpeakeasyBase {
    /**
     * Output only. The attachments attached to this note.
     */
    attachments?: Attachment[];
    /**
     * The content of the note.
     */
    body?: Section;
    /**
     * Output only. When this note was created.
     */
    createTime?: string;
    /**
     * Output only. The resource name of this note. See general note on identifiers in KeepService.
     */
    name?: string;
    /**
     * Output only. The list of permissions set on the note. Contains at least one entry for the note owner.
     */
    permissions?: Permission[];
    /**
     * The title of the note. Length must be less than 1,000 characters.
     */
    title?: string;
    /**
     * Output only. When this note was trashed. If `trashed`, the note is eventually deleted. If the note is not trashed, this field is not set (and the trashed field is `false`).
     */
    trashTime?: string;
    /**
     * Output only. `true` if this note has been trashed. If trashed, the note is eventually deleted.
     */
    trashed?: boolean;
    /**
     * Output only. When this note was last modified.
     */
    updateTime?: string;
}
/**
 * A single note.
 */
export declare class NoteInput extends SpeakeasyBase {
    /**
     * The content of the note.
     */
    body?: Section;
    /**
     * The title of the note. Length must be less than 1,000 characters.
     */
    title?: string;
}
