import { SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
export declare class PlaylistLinks extends SpeakeasyBase {
    persona?: Link;
    self?: Link;
    show?: Link;
    spins?: Link;
}
/**
 * The playlist
 */
export declare class Playlist extends SpeakeasyBase {
    links?: PlaylistLinks;
    /**
     * Was the playlist created playlists created by a radio station automation system?
     */
    automation?: boolean;
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
     * HTML-formatted description of the episode
     */
    episodeDescription?: string;
    /**
     * Title of this episode of the program/show
     */
    episodeName?: string;
    /**
     * Should the client application hide information about the playlist's DJ/host?
     */
    hideDj?: boolean;
    id?: number;
    image?: string;
    personaId?: number;
    showId?: number;
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
     * URL to web site for the playlist or program/show
     */
    url?: string;
}
