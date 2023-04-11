import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Returns black and white, grayscale, transparent, or color images. Acceptable values are: * `"color"` * `"gray"` * `"mono"`: black and white * `"trans"`: transparent background
 */
export declare enum SearchCseSiterestrictListImgColorTypeEnum {
    ImgColorTypeUndefined = "imgColorTypeUndefined",
    Mono = "mono",
    Gray = "gray",
    Color = "color",
    Trans = "trans"
}
/**
 * Returns images of a specific dominant color. Acceptable values are: * `"black"` * `"blue"` * `"brown"` * `"gray"` * `"green"` * `"orange"` * `"pink"` * `"purple"` * `"red"` * `"teal"` * `"white"` * `"yellow"`
 */
export declare enum SearchCseSiterestrictListImgDominantColorEnum {
    ImgDominantColorUndefined = "imgDominantColorUndefined",
    Black = "black",
    Blue = "blue",
    Brown = "brown",
    Gray = "gray",
    Green = "green",
    Orange = "orange",
    Pink = "pink",
    Purple = "purple",
    Red = "red",
    Teal = "teal",
    White = "white",
    Yellow = "yellow"
}
/**
 * Returns images of a specified size. Acceptable values are: * `"huge"` * `"icon"` * `"large"` * `"medium"` * `"small"` * `"xlarge"` * `"xxlarge"`
 */
export declare enum SearchCseSiterestrictListImgSizeEnum {
    ImgSizeUndefined = "imgSizeUndefined",
    Huge = "HUGE",
    Icon = "ICON",
    Large = "LARGE",
    Medium = "MEDIUM",
    Small = "SMALL",
    Xlarge = "XLARGE",
    Xxlarge = "XXLARGE"
}
/**
 * Returns images of a type. Acceptable values are: * `"clipart"` * `"face"` * `"lineart"` * `"stock"` * `"photo"` * `"animated"`
 */
export declare enum SearchCseSiterestrictListImgTypeEnum {
    ImgTypeUndefined = "imgTypeUndefined",
    Clipart = "clipart",
    Face = "face",
    Lineart = "lineart",
    Stock = "stock",
    Photo = "photo",
    Animated = "animated"
}
/**
 * Search safety level. Acceptable values are: * `"active"`: Enables SafeSearch filtering. * `"off"`: Disables SafeSearch filtering. (default)
 */
export declare enum SearchCseSiterestrictListSafeEnum {
    SafeUndefined = "safeUndefined",
    Active = "active",
    High = "high",
    Medium = "medium",
    Off = "off"
}
/**
 * Specifies the search type: `image`. If unspecified, results are limited to webpages. Acceptable values are: * `"image"`: custom image search.
 */
export declare enum SearchCseSiterestrictListSearchTypeEnum {
    SearchTypeUndefined = "searchTypeUndefined",
    Image = "image"
}
/**
 * Controls whether to include or exclude results from the site named in the `siteSearch` parameter. Acceptable values are: * `"e"`: exclude * `"i"`: include
 */
export declare enum SearchCseSiterestrictListSiteSearchFilterEnum {
    SiteSearchFilterUndefined = "siteSearchFilterUndefined",
    E = "e",
    I = "i"
}
export declare class SearchCseSiterestrictListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * Enables or disables [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch). The default value for this parameter is 0 (zero), meaning that the feature is enabled. Supported values are: * `1`: Disabled * `0`: Enabled (default)
     */
    c2coff?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#booleanOperators) in the cr parameter's value. Google Search determines the country of a document by analyzing: * the top-level domain (TLD) of the document's URL * the geographic location of the Web server's IP address See the [Country Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) page for a list of valid values for this parameter.
     */
    cr?: string;
    /**
     * The Programmable Search Engine ID to use for this request.
     */
    cx?: string;
    /**
     * Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years.
     */
    dateRestrict?: string;
    /**
     * Identifies a phrase that all documents in the search results must contain.
     */
    exactTerms?: string;
    /**
     * Identifies a word or phrase that should not appear in any documents in the search results.
     */
    excludeTerms?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Restricts results to files of a specified extension. A list of file types indexable by Google can be found in Search Console [Help Center](https://support.google.com/webmasters/answer/35287).
     */
    fileType?: string;
    /**
     * Controls turning on or off the duplicate content filter. * See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Note that host crowding filtering applies only to multi-site searches. * By default, Google applies filtering to all search results to improve the quality of those results. Acceptable values are: * `0`: Turns off duplicate content filter. * `1`: Turns on duplicate content filter.
     */
    filter?: string;
    /**
     * Geolocation of end user. * The `gl` parameter value is a two-letter country code. The `gl` parameter boosts search results whose country of origin matches the parameter value. See the [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) page for a list of valid values. * Specifying a `gl` parameter value should lead to more relevant results. This is particularly true for international customers and, even more specifically, for customers in English- speaking countries other than the United States.
     */
    gl?: string;
    /**
     * **Deprecated**. Use the `gl` parameter for a similar effect. The local Google domain (for example, google.com, google.de, or google.fr) to use to perform the search.
     */
    googlehost?: string;
    /**
     * Specifies the ending value for a search range. * Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query.
     */
    highRange?: string;
    /**
     * Sets the user interface language. * Explicitly setting this parameter improves the performance and the quality of your search results. * See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages.
     */
    hl?: string;
    /**
     * Appends the specified query terms to the query, as if they were combined with a logical AND operator.
     */
    hq?: string;
    /**
     * Returns black and white, grayscale, transparent, or color images. Acceptable values are: * `"color"` * `"gray"` * `"mono"`: black and white * `"trans"`: transparent background
     */
    imgColorType?: SearchCseSiterestrictListImgColorTypeEnum;
    /**
     * Returns images of a specific dominant color. Acceptable values are: * `"black"` * `"blue"` * `"brown"` * `"gray"` * `"green"` * `"orange"` * `"pink"` * `"purple"` * `"red"` * `"teal"` * `"white"` * `"yellow"`
     */
    imgDominantColor?: SearchCseSiterestrictListImgDominantColorEnum;
    /**
     * Returns images of a specified size. Acceptable values are: * `"huge"` * `"icon"` * `"large"` * `"medium"` * `"small"` * `"xlarge"` * `"xxlarge"`
     */
    imgSize?: SearchCseSiterestrictListImgSizeEnum;
    /**
     * Returns images of a type. Acceptable values are: * `"clipart"` * `"face"` * `"lineart"` * `"stock"` * `"photo"` * `"animated"`
     */
    imgType?: SearchCseSiterestrictListImgTypeEnum;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Specifies that all search results should contain a link to a particular URL.
     */
    linkSite?: string;
    /**
     * Specifies the starting value for a search range. Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query.
     */
    lowRange?: string;
    /**
     * Restricts the search to documents written in a particular language (e.g., `lr=lang_ja`). Acceptable values are: * `"lang_ar"`: Arabic * `"lang_bg"`: Bulgarian * `"lang_ca"`: Catalan * `"lang_cs"`: Czech * `"lang_da"`: Danish * `"lang_de"`: German * `"lang_el"`: Greek * `"lang_en"`: English * `"lang_es"`: Spanish * `"lang_et"`: Estonian * `"lang_fi"`: Finnish * `"lang_fr"`: French * `"lang_hr"`: Croatian * `"lang_hu"`: Hungarian * `"lang_id"`: Indonesian * `"lang_is"`: Icelandic * `"lang_it"`: Italian * `"lang_iw"`: Hebrew * `"lang_ja"`: Japanese * `"lang_ko"`: Korean * `"lang_lt"`: Lithuanian * `"lang_lv"`: Latvian * `"lang_nl"`: Dutch * `"lang_no"`: Norwegian * `"lang_pl"`: Polish * `"lang_pt"`: Portuguese * `"lang_ro"`: Romanian * `"lang_ru"`: Russian * `"lang_sk"`: Slovak * `"lang_sl"`: Slovenian * `"lang_sr"`: Serbian * `"lang_sv"`: Swedish * `"lang_tr"`: Turkish * `"lang_zh-CN"`: Chinese (Simplified) * `"lang_zh-TW"`: Chinese (Traditional)
     */
    lr?: string;
    /**
     * Number of search results to return. * Valid values are integers between 1 and 10, inclusive.
     */
    num?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms.
     */
    orTerms?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Query
     */
    q?: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Specifies that all search results should be pages that are related to the specified URL.
     */
    relatedSite?: string;
    /**
     * Filters based on licensing. Supported values include: `cc_publicdomain`, `cc_attribute`, `cc_sharealike`, `cc_noncommercial`, `cc_nonderived` and combinations of these. See [typical combinations](https://wiki.creativecommons.org/wiki/CC_Search_integration).
     */
    rights?: string;
    /**
     * Search safety level. Acceptable values are: * `"active"`: Enables SafeSearch filtering. * `"off"`: Disables SafeSearch filtering. (default)
     */
    safe?: SearchCseSiterestrictListSafeEnum;
    /**
     * Specifies the search type: `image`. If unspecified, results are limited to webpages. Acceptable values are: * `"image"`: custom image search.
     */
    searchType?: SearchCseSiterestrictListSearchTypeEnum;
    /**
     * Specifies a given site which should always be included or excluded from results (see `siteSearchFilter` parameter, below).
     */
    siteSearch?: string;
    /**
     * Controls whether to include or exclude results from the site named in the `siteSearch` parameter. Acceptable values are: * `"e"`: exclude * `"i"`: include
     */
    siteSearchFilter?: SearchCseSiterestrictListSiteSearchFilterEnum;
    /**
     * The sort expression to apply to the results. The sort parameter specifies that the results be sorted according to the specified expression i.e. sort by date. [Example: sort=date](https://developers.google.com/custom-search/docs/structured_search#sort-by-attribute).
     */
    sort?: string;
    /**
     * The index of the first result to return. The default number of results per page is 10, so `&start=11` would start at the top of the second page of results. **Note**: The JSON API will never return more than 100 results, even if more than 100 documents match the query, so setting the sum of `start + num` to a number greater than 100 will produce an error. Also note that the maximum value for `num` is 10.
     */
    start?: number;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class SearchCseSiterestrictListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    search?: shared.Search;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
