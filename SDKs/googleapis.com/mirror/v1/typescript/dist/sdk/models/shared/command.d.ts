import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single menu command that is part of a Contact.
 */
export declare class Command extends SpeakeasyBase {
    /**
     * The type of operation this command corresponds to. Allowed values are:
     *
     * @remarks
     * - TAKE_A_NOTE - Shares a timeline item with the transcription of user speech from the "Take a note" voice menu command.
     * - POST_AN_UPDATE - Shares a timeline item with the transcription of user speech from the "Post an update" voice menu command.
     */
    type?: string;
}
