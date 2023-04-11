import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BulkSearchImagesSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare enum BulkSearchImagesImageTypeEnum {
    Photo = "photo",
    Illustration = "illustration",
    Vector = "vector"
}
export declare enum BulkSearchImagesLicenseEnum {
    Commercial = "commercial",
    Editorial = "editorial",
    Enhanced = "enhanced"
}
/**
 * Show image results with horizontal or vertical orientation
 */
export declare enum BulkSearchImagesOrientationEnum {
    Horizontal = "horizontal",
    Vertical = "vertical"
}
/**
 * Show images that feature people of the specified age category
 */
export declare enum BulkSearchImagesPeopleAgeEnum {
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
export declare enum BulkSearchImagesPeopleEthnicityEnum {
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
    Other = "other",
    NOTAfrican = "NOT african",
    NOTAfricanAmerican = "NOT african_american",
    NOTBlack = "NOT black",
    NOTBrazilian = "NOT brazilian",
    NOTChinese = "NOT chinese",
    NOTCaucasian = "NOT caucasian",
    NOTEastAsian = "NOT east_asian",
    NOTHispanic = "NOT hispanic",
    NOTJapanese = "NOT japanese",
    NOTMiddleEastern = "NOT middle_eastern",
    NOTNativeAmerican = "NOT native_american",
    NOTPacificIslander = "NOT pacific_islander",
    NOTSouthAsian = "NOT south_asian",
    NOTSoutheastAsian = "NOT southeast_asian",
    NOTOther = "NOT other"
}
/**
 * Show images with people of the specified gender
 */
export declare enum BulkSearchImagesPeopleGenderEnum {
    Male = "male",
    Female = "female",
    Both = "both"
}
/**
 * Sort by
 */
export declare enum BulkSearchImagesSortEnum {
    Newest = "newest",
    Popular = "popular",
    Relevance = "relevance",
    Random = "random"
}
/**
 * Amount of detail to render in the response
 */
export declare enum BulkSearchImagesViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class BulkSearchImagesRequest extends SpeakeasyBase {
    /**
     * List of queries to request results for and filters to apply per query; these values override the defaults in the query parameters
     */
    requestBody: shared.SearchImage[];
    /**
     * Show images added on the specified date
     */
    addedDate?: Date;
    /**
     * Show images added before the specified date
     */
    addedDateEnd?: Date;
    /**
     * Show images added on or after the specified date
     */
    addedDateStart?: Date;
    /**
     * Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
     */
    aspectRatio?: number;
    /**
     * Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
     */
    aspectRatioMax?: number;
    /**
     * Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image
     */
    aspectRatioMin?: number;
    /**
     * Show images with the specified Shutterstock-defined category; specify a category name or ID
     */
    category?: string;
    /**
     * Specify either a hexadecimal color in the format '4F21EA' or 'grayscale'; the API returns images that use similar colors
     */
    color?: string;
    /**
     * Show images with the specified contributor names or IDs, allows multiple
     */
    contributor?: string[];
    /**
     * Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search
     */
    contributorCountry?: any;
    /**
     * Fields to display in the response; see the documentation for the fields parameter in the overview section
     */
    fields?: string;
    /**
     * (Deprecated; use height_from and height_to instead) Show images with the specified height
     */
    height?: number;
    /**
     * Show images with the specified height or larger, in pixels
     */
    heightFrom?: number;
    /**
     * Show images with the specified height or smaller, in pixels
     */
    heightTo?: number;
    /**
     * Show images of the specified type
     */
    imageType?: BulkSearchImagesImageTypeEnum[];
    /**
     * Hide results with potentially unsafe keywords
     */
    keywordSafeSearch?: boolean;
    /**
     * Set query and result language (uses Accept-Language header if not set)
     */
    language?: shared.LanguageEnum;
    /**
     * Show only images with the specified license
     */
    license?: BulkSearchImagesLicenseEnum[];
    /**
     * Show image results with the specified model IDs
     */
    model?: string[];
    /**
     * Show image results with horizontal or vertical orientation
     */
    orientation?: BulkSearchImagesOrientationEnum;
    /**
     * Page number
     */
    page?: number;
    /**
     * Show images that feature people of the specified age category
     */
    peopleAge?: BulkSearchImagesPeopleAgeEnum;
    /**
     * Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities
     */
    peopleEthnicity?: BulkSearchImagesPeopleEthnicityEnum[];
    /**
     * Show images with people of the specified gender
     */
    peopleGender?: BulkSearchImagesPeopleGenderEnum;
    /**
     * Show images of people with a signed model release
     */
    peopleModelReleased?: boolean;
    /**
     * Show images with the specified number of people
     */
    peopleNumber?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * Raise or lower search result rankings based on the result's relevance to a specified region; you can provide a country code or an IP address from which the API infers a country
     */
    region?: any;
    /**
     * Enable or disable safe search
     */
    safe?: boolean;
    /**
     * Sort by
     */
    sort?: BulkSearchImagesSortEnum;
    /**
     * Spellcheck the search query and return results on suggested spellings
     */
    spellcheckQuery?: boolean;
    /**
     * Amount of detail to render in the response
     */
    view?: BulkSearchImagesViewEnum;
    /**
     * (Deprecated; use width_from and width_to instead) Show images with the specified width
     */
    width?: number;
    /**
     * Show images with the specified width or larger, in pixels
     */
    widthFrom?: number;
    /**
     * Show images with the specified width or smaller, in pixels
     */
    widthTo?: number;
}
export declare class BulkSearchImagesResponse extends SpeakeasyBase {
    /**
     * OK
     */
    bulkImageSearchResults?: shared.BulkImageSearchResults;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
