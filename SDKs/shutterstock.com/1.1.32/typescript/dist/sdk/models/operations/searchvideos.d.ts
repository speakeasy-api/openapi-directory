import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchVideosSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
/**
 * Show videos with the specified aspect ratio
 */
export declare enum SearchVideosAspectRatioEnum {
    Four3 = "4_3",
    Sixteen9 = "16_9",
    Nonstandard = "nonstandard"
}
export declare enum SearchVideosLicenseEnum {
    Commercial = "commercial",
    Editorial = "editorial"
}
/**
 * Show videos that feature people of the specified age range
 */
export declare enum SearchVideosPeopleAgeEnum {
    Infants = "infants",
    Children = "children",
    Teenagers = "teenagers",
    Twentys = "20s",
    Thirtys = "30s",
    Fortys = "40s",
    Fiftys = "50s",
    Sixtys = "60s",
    Older = "older"
}
export declare enum SearchVideosPeopleEthnicityEnum {
    African = "african",
    AfricanAmerican = "african_american",
    Black = "black",
    Brazilian = "brazilian",
    Chinese = "chinese",
    Caucasian = "caucasian",
    EastAsian = "east_asian",
    Hispanic = "hispanic",
    Japanese = "japanese",
    MiddleEastern = "middle_eastern",
    NativeAmerican = "native_american",
    PacificIslander = "pacific_islander",
    SouthAsian = "south_asian",
    SoutheastAsian = "southeast_asian",
    Other = "other"
}
/**
 * Show videos with people with the specified gender
 */
export declare enum SearchVideosPeopleGenderEnum {
    Male = "male",
    Female = "female",
    Both = "both"
}
/**
 * Show videos with the specified resolution
 */
export declare enum SearchVideosResolutionEnum {
    Fourk = "4k",
    StandardDefinition = "standard_definition",
    HighDefinition = "high_definition"
}
/**
 * Sort by one of these categories
 */
export declare enum SearchVideosSortEnum {
    Newest = "newest",
    Popular = "popular",
    Relevance = "relevance",
    Random = "random"
}
/**
 * Amount of detail to render in the response
 */
export declare enum SearchVideosViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class SearchVideosRequest extends SpeakeasyBase {
    /**
     * Show videos added on the specified date
     */
    addedDate?: Date;
    /**
     * Show videos added before the specified date
     */
    addedDateEnd?: Date;
    /**
     * Show videos added on or after the specified date
     */
    addedDateStart?: Date;
    /**
     * Show videos with the specified aspect ratio
     */
    aspectRatio?: SearchVideosAspectRatioEnum;
    /**
     * Show videos with the specified Shutterstock-defined category; specify a category name or ID
     */
    category?: string;
    /**
     * Show videos with the specified artist names or IDs
     */
    contributor?: string[];
    /**
     * Show videos from contributors in one or more specified countries
     */
    contributorCountry?: string[];
    /**
     * (Deprecated; use duration_from and duration_to instead) Show videos with the specified duration in seconds
     */
    duration?: number;
    /**
     * Show videos with the specified duration or longer in seconds
     */
    durationFrom?: number;
    /**
     * Show videos with the specified duration or shorter in seconds
     */
    durationTo?: number;
    /**
     * (Deprecated; use fps_from and fps_to instead) Show videos with the specified frames per second
     */
    fps?: number;
    /**
     * Show videos with the specified frames per second or more
     */
    fpsFrom?: number;
    /**
     * Show videos with the specified frames per second or fewer
     */
    fpsTo?: number;
    /**
     * Hide results with potentially unsafe keywords
     */
    keywordSafeSearch?: boolean;
    /**
     * Set query and result language (uses Accept-Language header if not set)
     */
    language?: shared.LanguageEnum;
    /**
     * Show only videos with the specified license or licenses
     */
    license?: SearchVideosLicenseEnum[];
    /**
     * Show videos with each of the specified models
     */
    model?: string[];
    /**
     * Page number
     */
    page?: number;
    /**
     * Show videos that feature people of the specified age range
     */
    peopleAge?: SearchVideosPeopleAgeEnum;
    /**
     * Show videos with people of the specified ethnicities
     */
    peopleEthnicity?: SearchVideosPeopleEthnicityEnum[];
    /**
     * Show videos with people with the specified gender
     */
    peopleGender?: SearchVideosPeopleGenderEnum;
    /**
     * Show only videos of people with a signed model release
     */
    peopleModelReleased?: boolean;
    /**
     * Show videos with the specified number of people
     */
    peopleNumber?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * One or more search terms separated by spaces; you can use NOT to filter out videos that match a term
     */
    query?: string;
    /**
     * Show videos with the specified resolution
     */
    resolution?: SearchVideosResolutionEnum;
    /**
     * Enable or disable safe search
     */
    safe?: boolean;
    /**
     * Sort by one of these categories
     */
    sort?: SearchVideosSortEnum;
    /**
     * Amount of detail to render in the response
     */
    view?: SearchVideosViewEnum;
}
export declare class SearchVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    videoSearchResults?: shared.VideoSearchResults;
}
