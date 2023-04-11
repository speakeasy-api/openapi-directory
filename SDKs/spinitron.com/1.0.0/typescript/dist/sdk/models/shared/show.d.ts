import { SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
export declare class ShowLinks extends SpeakeasyBase {
    personas?: Link[];
    playlists?: Link;
    self?: Link;
}
/**
 * A `Show` object describes one occurrence of a radio program. A result set may contain multiple occurrences of the same show with difference `start` and `end` values.
 */
export declare class Show extends SpeakeasyBase {
    links?: ShowLinks;
    /**
     * Program/show category
     */
    category?: string;
    /**
     * HTML-formatted description of the playlist or program/show
     */
    description?: string;
    /**
     * Duration in seconds
     */
    duration?: number;
    /**
     * UTC datetime ISO-8601
     */
    end?: Date;
    /**
     * Should the client application hide information about the show's DJs/hosts?
     */
    hideDj?: boolean;
    id?: number;
    image?: string;
    /**
     * Is the show a one-off in the schedule instead of repeating?
     */
    oneOff?: boolean;
    /**
     * Since what year has the program/show existed?
     */
    since?: number;
    /**
     * UTC datetime ISO-8601
     */
    start?: Date;
    /**
     * Station's time zone
     */
    timezone?: string;
    /**
     * Program/show title
     */
    title?: string;
    /**
     * URL to web site for the program/show
     */
    url?: string;
}
