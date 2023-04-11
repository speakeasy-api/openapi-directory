import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A deleted episode or podcast.
 *
 * @remarks
 * An episode or a podcast could be deleted from our podcast database.
 * Possible reasons: 1) Podcast producers sometimes delete their old episodes. 2) Copyright issues.
 *
 */
export declare class DeletedItem extends SpeakeasyBase {
    /**
     * Why this episode or podcast is deleted?
     */
    error?: string;
    /**
     * Episode id or podcast id.
     */
    id?: string;
    /**
     * The status of this episode or podcast. For now, the only possible value is **deleted**.
     */
    status?: string;
    /**
     * Episode title or podcast title.
     */
    title?: string;
}
