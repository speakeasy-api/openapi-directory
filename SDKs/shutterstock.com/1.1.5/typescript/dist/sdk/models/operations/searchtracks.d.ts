import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchTracksLibraryEnum {
    Shutterstock = "shutterstock",
    Premier = "premier"
}
export declare enum SearchTracksSortEnum {
    Score = "score",
    RankingAll = "ranking_all",
    Artist = "artist",
    Title = "title",
    Bpm = "bpm",
    Freshness = "freshness",
    Duration = "duration"
}
export declare enum SearchTracksSortOrderEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum SearchTracksViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class SearchTracksQueryParams extends SpeakeasyBase {
    artists?: string[];
    bpm?: number;
    bpmFrom?: number;
    bpmTo?: number;
    duration?: number;
    durationFrom?: number;
    durationTo?: number;
    fields?: string;
    genre?: string[];
    instruments?: string[];
    isInstrumental?: boolean;
    language?: string;
    library?: SearchTracksLibraryEnum;
    moods?: string[];
    page?: number;
    perPage?: number;
    query?: string;
    sort?: SearchTracksSortEnum;
    sortOrder?: SearchTracksSortOrderEnum;
    view?: SearchTracksViewEnum;
    vocalDescription?: string;
}
export declare class SearchTracksSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class SearchTracksRequest extends SpeakeasyBase {
    queryParams: SearchTracksQueryParams;
    security: SearchTracksSecurity;
}
export declare class SearchTracksResponse extends SpeakeasyBase {
    audioSearchResults?: shared.AudioSearchResults;
    contentType: string;
    statusCode: number;
}
