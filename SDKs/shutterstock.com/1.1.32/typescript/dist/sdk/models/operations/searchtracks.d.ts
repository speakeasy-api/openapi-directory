import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchTracksSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Which library to search
 */
export declare enum SearchTracksLibraryEnum {
    Shutterstock = "shutterstock",
    Premier = "premier"
}
/**
 * Sort by
 */
export declare enum SearchTracksSortEnum {
    Score = "score",
    RankingAll = "ranking_all",
    Artist = "artist",
    Title = "title",
    Bpm = "bpm",
    Freshness = "freshness",
    Duration = "duration"
}
/**
 * Sort order
 */
export declare enum SearchTracksSortOrderEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * Amount of detail to render in the response
 */
export declare enum SearchTracksViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class SearchTracksRequest extends SpeakeasyBase {
    /**
     * Show tracks with one of the specified artist names or IDs
     */
    artists?: string[];
    /**
     * (Deprecated; use bpm_from and bpm_to instead) Show tracks with the specified beats per minute
     */
    bpm?: number;
    /**
     * Show tracks with the specified beats per minute or faster
     */
    bpmFrom?: number;
    /**
     * Show tracks with the specified beats per minute or slower
     */
    bpmTo?: number;
    /**
     * Show tracks with the specified duration in seconds
     */
    duration?: number;
    /**
     * Show tracks with the specified duration or longer in seconds
     */
    durationFrom?: number;
    /**
     * Show tracks with the specified duration or shorter in seconds
     */
    durationTo?: number;
    /**
     * Fields to display in the response; see the documentation for the fields parameter in the overview section
     */
    fields?: string;
    /**
     * Show tracks with each of the specified genres; to get the list of genres, use `GET /v2/audio/genres`
     */
    genre?: string[];
    /**
     * Show tracks with each of the specified instruments; to get the list of instruments, use `GET /v2/audio/instruments`
     */
    instruments?: string[];
    /**
     * Show instrumental music only
     */
    isInstrumental?: boolean;
    /**
     * Which language to search in
     */
    language?: string;
    /**
     * Which library to search
     */
    library?: SearchTracksLibraryEnum;
    /**
     * Show tracks with each of the specified moods; to get the list of moods, use `GET /v2/audio/moods`
     */
    moods?: string[];
    /**
     * Page number
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * One or more search terms separated by spaces
     */
    query?: string;
    /**
     * Sort by
     */
    sort?: SearchTracksSortEnum;
    /**
     * Sort order
     */
    sortOrder?: SearchTracksSortOrderEnum;
    /**
     * Amount of detail to render in the response
     */
    view?: SearchTracksViewEnum;
    /**
     * Show tracks with the specified vocal description (male, female)
     */
    vocalDescription?: string;
}
export declare class SearchTracksResponse extends SpeakeasyBase {
    /**
     * OK
     */
    audioSearchResults?: shared.AudioSearchResults;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
