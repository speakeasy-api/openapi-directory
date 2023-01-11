import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchVideosAspectRatioEnum {
    Four3 = "4_3",
    Sixteen9 = "16_9",
    Nonstandard = "nonstandard"
}
export declare enum SearchVideosLicenseEnum {
    Commercial = "commercial",
    Editorial = "editorial"
}
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
export declare enum SearchVideosPeopleGenderEnum {
    Male = "male",
    Female = "female",
    Both = "both"
}
export declare enum SearchVideosResolutionEnum {
    Fourk = "4k",
    StandardDefinition = "standard_definition",
    HighDefinition = "high_definition"
}
export declare enum SearchVideosSortEnum {
    Newest = "newest",
    Popular = "popular",
    Relevance = "relevance",
    Random = "random"
}
export declare enum SearchVideosViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class SearchVideosQueryParams extends SpeakeasyBase {
    addedDate?: Date;
    addedDateEnd?: Date;
    addedDateStart?: Date;
    aspectRatio?: SearchVideosAspectRatioEnum;
    category?: string;
    contributor?: string[];
    contributorCountry?: string[];
    duration?: number;
    durationFrom?: number;
    durationTo?: number;
    fps?: number;
    fpsFrom?: number;
    fpsTo?: number;
    keywordSafeSearch?: boolean;
    language?: shared.LanguageEnum;
    license?: SearchVideosLicenseEnum[];
    model?: string[];
    page?: number;
    peopleAge?: SearchVideosPeopleAgeEnum;
    peopleEthnicity?: SearchVideosPeopleEthnicityEnum[];
    peopleGender?: SearchVideosPeopleGenderEnum;
    peopleModelReleased?: boolean;
    peopleNumber?: number;
    perPage?: number;
    query?: string;
    resolution?: SearchVideosResolutionEnum;
    safe?: boolean;
    sort?: SearchVideosSortEnum;
    view?: SearchVideosViewEnum;
}
export declare class SearchVideosSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class SearchVideosRequest extends SpeakeasyBase {
    queryParams: SearchVideosQueryParams;
    security: SearchVideosSecurity;
}
export declare class SearchVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoSearchResults?: shared.VideoSearchResults;
}
