import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchImagesImageTypeEnum {
    Photo = "photo",
    Illustration = "illustration",
    Vector = "vector"
}
export declare enum SearchImagesLicenseEnum {
    Commercial = "commercial",
    Editorial = "editorial",
    Enhanced = "enhanced"
}
export declare enum SearchImagesOrientationEnum {
    Horizontal = "horizontal",
    Vertical = "vertical"
}
export declare enum SearchImagesPeopleAgeEnum {
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
export declare enum SearchImagesPeopleEthnicityEnum {
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
export declare enum SearchImagesPeopleGenderEnum {
    Male = "male",
    Female = "female",
    Both = "both"
}
export declare enum SearchImagesSortEnum {
    Newest = "newest",
    Popular = "popular",
    Relevance = "relevance",
    Random = "random"
}
export declare enum SearchImagesViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class SearchImagesQueryParams extends SpeakeasyBase {
    addedDate?: Date;
    addedDateEnd?: Date;
    addedDateStart?: Date;
    aspectRatio?: number;
    aspectRatioMax?: number;
    aspectRatioMin?: number;
    category?: string;
    color?: string;
    contributor?: string[];
    contributorCountry?: any;
    fields?: string;
    height?: number;
    heightFrom?: number;
    heightTo?: number;
    imageType?: SearchImagesImageTypeEnum[];
    keywordSafeSearch?: boolean;
    language?: shared.LanguageEnum;
    license?: SearchImagesLicenseEnum[];
    model?: string[];
    orientation?: SearchImagesOrientationEnum;
    page?: number;
    peopleAge?: SearchImagesPeopleAgeEnum;
    peopleEthnicity?: SearchImagesPeopleEthnicityEnum[];
    peopleGender?: SearchImagesPeopleGenderEnum;
    peopleModelReleased?: boolean;
    peopleNumber?: number;
    perPage?: number;
    query?: string;
    region?: any;
    safe?: boolean;
    sort?: SearchImagesSortEnum;
    spellcheckQuery?: boolean;
    view?: SearchImagesViewEnum;
    width?: number;
    widthFrom?: number;
    widthTo?: number;
}
export declare class SearchImagesSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class SearchImagesRequest extends SpeakeasyBase {
    queryParams: SearchImagesQueryParams;
    security: SearchImagesSecurity;
}
export declare class SearchImagesResponse extends SpeakeasyBase {
    contentType: string;
    imageSearchResults?: shared.ImageSearchResults;
    statusCode: number;
}
