import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Whether or not to exclude podcasts/episodes with explicit language. 1 is yes and 0 is no. It works only when **show_podcasts** is *1*.
 *
 * @remarks
 *
 */
export declare enum TypeaheadSafeModeEnum {
    Zero = "0",
    One = "1"
}
/**
 * Whether or not to autosuggest genres. 1 is yes, 0 is no.
 *
 * @remarks
 *
 */
export declare enum TypeaheadShowGenresEnum {
    Zero = "0",
    One = "1"
}
/**
 * Autosuggest podcasts. This only searches podcast title and publisher and returns very limited info of 5 podcasts. 1 is yes, 0 is no. It's a bit slow to autosuggest podcasts, so we turn it off by default. If show_podcasts=1, you can also pass iTunes id (e.g., 474722933) to the q parameter to fetch podcast meta data.
 *
 * @remarks
 *
 */
export declare enum TypeaheadShowPodcastsEnum {
    Zero = "0",
    One = "1"
}
export declare class TypeaheadRequest extends SpeakeasyBase {
    /**
     * Get API Key on listennotes.com/api
     */
    xListenAPIKey: string;
    /**
     * Search term, e.g., person, place, topic... You can use double quotes to do verbatim match, e.g., "game of thrones". Otherwise, it's fuzzy search.
     *
     * @remarks
     *
     */
    q: string;
    /**
     * Whether or not to exclude podcasts/episodes with explicit language. 1 is yes and 0 is no. It works only when **show_podcasts** is *1*.
     *
     * @remarks
     *
     */
    safeMode?: TypeaheadSafeModeEnum;
    /**
     * Whether or not to autosuggest genres. 1 is yes, 0 is no.
     *
     * @remarks
     *
     */
    showGenres?: TypeaheadShowGenresEnum;
    /**
     * Autosuggest podcasts. This only searches podcast title and publisher and returns very limited info of 5 podcasts. 1 is yes, 0 is no. It's a bit slow to autosuggest podcasts, so we turn it off by default. If show_podcasts=1, you can also pass iTunes id (e.g., 474722933) to the q parameter to fetch podcast meta data.
     *
     * @remarks
     *
     */
    showPodcasts?: TypeaheadShowPodcastsEnum;
}
export declare class TypeaheadResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    typeaheadResponse?: shared.TypeaheadResponse;
}
