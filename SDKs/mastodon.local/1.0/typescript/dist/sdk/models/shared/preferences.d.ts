import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Default visibility for new posts. Equivalent to [Source#privacy](https://docs.joinmastodon.org/entities/source/#privacy).
 */
export declare enum PreferencesPostingDefaultVisibilityEnum {
    Public = "public",
    Unlisted = "unlisted",
    Private = "private",
    Direct = "direct"
}
/**
 * Whether media attachments should be automatically displayed or blurred/hidden.
 */
export declare enum PreferencesReadingExpandMediaEnum {
    Default = "default",
    ShowAll = "show_all",
    HideAll = "hide_all"
}
/**
 * Represents a user's preferences.
 *
 * @see {@link https://docs.joinmastodon.org/entities/preferences/}
 */
export declare class Preferences extends SpeakeasyBase {
    /**
     * Default language for new posts. Equivalent to [Source#language](https://docs.joinmastodon.org/entities/source/#language). ISO 639-1 language two-letter code, or null
     */
    postingDefaultLanguage?: string;
    /**
     * Default sensitivity flag for new posts. Equivalent to [Source#sensitive](https://docs.joinmastodon.org/entities/source/#sensitive).
     */
    postingDefaultSensitive?: boolean;
    /**
     * Default visibility for new posts. Equivalent to [Source#privacy](https://docs.joinmastodon.org/entities/source/#privacy).
     */
    postingDefaultVisibility?: PreferencesPostingDefaultVisibilityEnum;
    /**
     * Whether media attachments should be automatically displayed or blurred/hidden.
     */
    readingExpandMedia?: PreferencesReadingExpandMediaEnum;
    /**
     * Whether CWs should be expanded by default.
     */
    readingExpandSpoilers?: boolean;
}
