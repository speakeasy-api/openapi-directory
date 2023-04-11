import { SpeakeasyBase } from "../../../internal/utils";
import { Genre } from "./genre";
import { PodcastTypeaheadResult } from "./podcasttypeaheadresult";
/**
 * OK
 */
export declare class TypeaheadResponse extends SpeakeasyBase {
    /**
     * Genre suggestions. It'll show up when the **show_genres** parameter is *1*.
     */
    genres?: Genre[];
    /**
     * Podcast suggestions. It'll show up when the **show_podcasts** parameter is 1.
     */
    podcasts?: PodcastTypeaheadResult[];
    /**
     * Search term suggestions.
     */
    terms: string[];
}
