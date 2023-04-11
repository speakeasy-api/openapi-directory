import { SpeakeasyBase } from "../../../internal/utils";
import { Promotion } from "./promotion";
import { Result } from "./result";
/**
 * Custom search request metadata.
 */
export declare class SearchQueriesNextPage extends SpeakeasyBase {
    /**
     * Number of search results returned in this set.
     */
    count?: number;
    /**
     * Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) in the `cr` parameter's value. Google WebSearch determines the country of a document by analyzing the following: * The top-level domain (TLD) of the document's URL. * The geographic location of the web server's IP address. See [Country (cr) Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) for a list of valid values for this parameter.
     */
    cr?: string;
    /**
     * The identifier of an engine created using the Programmable Search Engine [Control Panel](https://programmablesearchengine.google.com/). This is a custom property not defined in the OpenSearch spec. This parameter is **required**.
     */
    cx?: string;
    /**
     * Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years.
     */
    dateRestrict?: string;
    /**
     * Enables or disables the [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch) feature. Supported values are: * `0`: enabled (default) * `1`: disabled
     */
    disableCnTwTranslation?: string;
    /**
     * Identifies a phrase that all documents in the search results must contain.
     */
    exactTerms?: string;
    /**
     * Identifies a word or phrase that should not appear in any documents in the search results.
     */
    excludeTerms?: string;
    /**
     * Restricts results to files of a specified extension. Filetypes supported by Google include: * Adobe Portable Document Format (`pdf`) * Adobe PostScript (`ps`) * Lotus 1-2-3 (`wk1`, `wk2`, `wk3`, `wk4`, `wk5`, `wki`, `wks`, `wku`) * Lotus WordPro (`lwp`) * Macwrite (`mw`) * Microsoft Excel (`xls`) * Microsoft PowerPoint (`ppt`) * Microsoft Word (`doc`) * Microsoft Works (`wks`, `wps`, `wdb`) * Microsoft Write (`wri`) * Rich Text Format (`rtf`) * Shockwave Flash (`swf`) * Text (`ans`, `txt`). Additional filetypes may be added in the future. An up-to-date list can always be found in Google's [file type FAQ](https://support.google.com/webmasters/answer/35287).
     */
    fileType?: string;
    /**
     * Activates or deactivates the automatic filtering of Google search results. See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Valid values for this parameter are: * `0`: Disabled * `1`: Enabled (default) **Note**: By default, Google applies filtering to all search results to improve the quality of those results.
     */
    filter?: string;
    /**
     * Boosts search results whose country of origin matches the parameter value. See [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) for a list of valid values. Specifying a `gl` parameter value in WebSearch requests should improve the relevance of results. This is particularly true for international customers and, even more specifically, for customers in English-speaking countries other than the United States.
     */
    gl?: string;
    /**
     * Specifies the Google domain (for example, google.com, google.de, or google.fr) to which the search should be limited.
     */
    googleHost?: string;
    /**
     * Specifies the ending value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query.
     */
    highRange?: string;
    /**
     * Specifies the interface language (host language) of your user interface. Explicitly setting this parameter improves the performance and the quality of your search results. See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages.
     */
    hl?: string;
    /**
     * Appends the specified query terms to the query, as if they were combined with a logical `AND` operator.
     */
    hq?: string;
    /**
     * Restricts results to images of a specified color type. Supported values are: * `mono` (black and white) * `gray` (grayscale) * `color` (color)
     */
    imgColorType?: string;
    /**
     * Restricts results to images with a specific dominant color. Supported values are: * `red` * `orange` * `yellow` * `green` * `teal` * `blue` * `purple` * `pink` * `white` * `gray` * `black` * `brown`
     */
    imgDominantColor?: string;
    /**
     * Restricts results to images of a specified size. Supported values are: * `icon` (small) * `small | medium | large | xlarge` (medium) * `xxlarge` (large) * `huge` (extra-large)
     */
    imgSize?: string;
    /**
     * Restricts results to images of a specified type. Supported values are: * `clipart` (Clip art) * `face` (Face) * `lineart` (Line drawing) * `photo` (Photo) * `animated` (Animated) * `stock` (Stock)
     */
    imgType?: string;
    /**
     * The character encoding supported for search requests.
     */
    inputEncoding?: string;
    /**
     * The language of the search results.
     */
    language?: string;
    /**
     * Specifies that all results should contain a link to a specific URL.
     */
    linkSite?: string;
    /**
     * Specifies the starting value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query.
     */
    lowRange?: string;
    /**
     * Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. You can also use the [Boolean OR](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) query term for this type of query.
     */
    orTerms?: string;
    /**
     * The character encoding supported for search results.
     */
    outputEncoding?: string;
    /**
     * Specifies that all search results should be pages that are related to the specified URL. The parameter value should be a URL.
     */
    relatedSite?: string;
    /**
     * Filters based on licensing. Supported values include: * `cc_publicdomain` * `cc_attribute` * `cc_sharealike` * `cc_noncommercial` * `cc_nonderived`
     */
    rights?: string;
    /**
     * Specifies the [SafeSearch level](https://developers.google.com/custom-search/docs/json_api_reference#safeSearchLevels) used for filtering out adult results. This is a custom property not defined in the OpenSearch spec. Valid parameter values are: * `"off"`: Disable SafeSearch * `"active"`: Enable SafeSearch
     */
    safe?: string;
    /**
     * The search terms entered by the user.
     */
    searchTerms?: string;
    /**
     * Allowed values are `web` or `image`. If unspecified, results are limited to webpages.
     */
    searchType?: string;
    /**
     * Restricts results to URLs from a specified site.
     */
    siteSearch?: string;
    /**
     * Specifies whether to include or exclude results from the site named in the `sitesearch` parameter. Supported values are: * `i`: include content from site * `e`: exclude content from site
     */
    siteSearchFilter?: string;
    /**
     * Specifies that results should be sorted according to the specified expression. For example, sort by date.
     */
    sort?: string;
    /**
     * The index of the current set of search results into the total set of results, where the index of the first result is 1.
     */
    startIndex?: number;
    /**
     * The page number of this set of results, where the page length is set by the `count` property.
     */
    startPage?: number;
    /**
     * A description of the query.
     */
    title?: string;
    /**
     * Estimated number of total search results. May not be accurate.
     */
    totalResults?: string;
}
/**
 * Custom search request metadata.
 */
export declare class SearchQueriesPreviousPage extends SpeakeasyBase {
    /**
     * Number of search results returned in this set.
     */
    count?: number;
    /**
     * Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) in the `cr` parameter's value. Google WebSearch determines the country of a document by analyzing the following: * The top-level domain (TLD) of the document's URL. * The geographic location of the web server's IP address. See [Country (cr) Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) for a list of valid values for this parameter.
     */
    cr?: string;
    /**
     * The identifier of an engine created using the Programmable Search Engine [Control Panel](https://programmablesearchengine.google.com/). This is a custom property not defined in the OpenSearch spec. This parameter is **required**.
     */
    cx?: string;
    /**
     * Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years.
     */
    dateRestrict?: string;
    /**
     * Enables or disables the [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch) feature. Supported values are: * `0`: enabled (default) * `1`: disabled
     */
    disableCnTwTranslation?: string;
    /**
     * Identifies a phrase that all documents in the search results must contain.
     */
    exactTerms?: string;
    /**
     * Identifies a word or phrase that should not appear in any documents in the search results.
     */
    excludeTerms?: string;
    /**
     * Restricts results to files of a specified extension. Filetypes supported by Google include: * Adobe Portable Document Format (`pdf`) * Adobe PostScript (`ps`) * Lotus 1-2-3 (`wk1`, `wk2`, `wk3`, `wk4`, `wk5`, `wki`, `wks`, `wku`) * Lotus WordPro (`lwp`) * Macwrite (`mw`) * Microsoft Excel (`xls`) * Microsoft PowerPoint (`ppt`) * Microsoft Word (`doc`) * Microsoft Works (`wks`, `wps`, `wdb`) * Microsoft Write (`wri`) * Rich Text Format (`rtf`) * Shockwave Flash (`swf`) * Text (`ans`, `txt`). Additional filetypes may be added in the future. An up-to-date list can always be found in Google's [file type FAQ](https://support.google.com/webmasters/answer/35287).
     */
    fileType?: string;
    /**
     * Activates or deactivates the automatic filtering of Google search results. See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Valid values for this parameter are: * `0`: Disabled * `1`: Enabled (default) **Note**: By default, Google applies filtering to all search results to improve the quality of those results.
     */
    filter?: string;
    /**
     * Boosts search results whose country of origin matches the parameter value. See [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) for a list of valid values. Specifying a `gl` parameter value in WebSearch requests should improve the relevance of results. This is particularly true for international customers and, even more specifically, for customers in English-speaking countries other than the United States.
     */
    gl?: string;
    /**
     * Specifies the Google domain (for example, google.com, google.de, or google.fr) to which the search should be limited.
     */
    googleHost?: string;
    /**
     * Specifies the ending value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query.
     */
    highRange?: string;
    /**
     * Specifies the interface language (host language) of your user interface. Explicitly setting this parameter improves the performance and the quality of your search results. See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages.
     */
    hl?: string;
    /**
     * Appends the specified query terms to the query, as if they were combined with a logical `AND` operator.
     */
    hq?: string;
    /**
     * Restricts results to images of a specified color type. Supported values are: * `mono` (black and white) * `gray` (grayscale) * `color` (color)
     */
    imgColorType?: string;
    /**
     * Restricts results to images with a specific dominant color. Supported values are: * `red` * `orange` * `yellow` * `green` * `teal` * `blue` * `purple` * `pink` * `white` * `gray` * `black` * `brown`
     */
    imgDominantColor?: string;
    /**
     * Restricts results to images of a specified size. Supported values are: * `icon` (small) * `small | medium | large | xlarge` (medium) * `xxlarge` (large) * `huge` (extra-large)
     */
    imgSize?: string;
    /**
     * Restricts results to images of a specified type. Supported values are: * `clipart` (Clip art) * `face` (Face) * `lineart` (Line drawing) * `photo` (Photo) * `animated` (Animated) * `stock` (Stock)
     */
    imgType?: string;
    /**
     * The character encoding supported for search requests.
     */
    inputEncoding?: string;
    /**
     * The language of the search results.
     */
    language?: string;
    /**
     * Specifies that all results should contain a link to a specific URL.
     */
    linkSite?: string;
    /**
     * Specifies the starting value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query.
     */
    lowRange?: string;
    /**
     * Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. You can also use the [Boolean OR](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) query term for this type of query.
     */
    orTerms?: string;
    /**
     * The character encoding supported for search results.
     */
    outputEncoding?: string;
    /**
     * Specifies that all search results should be pages that are related to the specified URL. The parameter value should be a URL.
     */
    relatedSite?: string;
    /**
     * Filters based on licensing. Supported values include: * `cc_publicdomain` * `cc_attribute` * `cc_sharealike` * `cc_noncommercial` * `cc_nonderived`
     */
    rights?: string;
    /**
     * Specifies the [SafeSearch level](https://developers.google.com/custom-search/docs/json_api_reference#safeSearchLevels) used for filtering out adult results. This is a custom property not defined in the OpenSearch spec. Valid parameter values are: * `"off"`: Disable SafeSearch * `"active"`: Enable SafeSearch
     */
    safe?: string;
    /**
     * The search terms entered by the user.
     */
    searchTerms?: string;
    /**
     * Allowed values are `web` or `image`. If unspecified, results are limited to webpages.
     */
    searchType?: string;
    /**
     * Restricts results to URLs from a specified site.
     */
    siteSearch?: string;
    /**
     * Specifies whether to include or exclude results from the site named in the `sitesearch` parameter. Supported values are: * `i`: include content from site * `e`: exclude content from site
     */
    siteSearchFilter?: string;
    /**
     * Specifies that results should be sorted according to the specified expression. For example, sort by date.
     */
    sort?: string;
    /**
     * The index of the current set of search results into the total set of results, where the index of the first result is 1.
     */
    startIndex?: number;
    /**
     * The page number of this set of results, where the page length is set by the `count` property.
     */
    startPage?: number;
    /**
     * A description of the query.
     */
    title?: string;
    /**
     * Estimated number of total search results. May not be accurate.
     */
    totalResults?: string;
}
/**
 * Custom search request metadata.
 */
export declare class SearchQueriesRequest extends SpeakeasyBase {
    /**
     * Number of search results returned in this set.
     */
    count?: number;
    /**
     * Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) in the `cr` parameter's value. Google WebSearch determines the country of a document by analyzing the following: * The top-level domain (TLD) of the document's URL. * The geographic location of the web server's IP address. See [Country (cr) Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) for a list of valid values for this parameter.
     */
    cr?: string;
    /**
     * The identifier of an engine created using the Programmable Search Engine [Control Panel](https://programmablesearchengine.google.com/). This is a custom property not defined in the OpenSearch spec. This parameter is **required**.
     */
    cx?: string;
    /**
     * Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years.
     */
    dateRestrict?: string;
    /**
     * Enables or disables the [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch) feature. Supported values are: * `0`: enabled (default) * `1`: disabled
     */
    disableCnTwTranslation?: string;
    /**
     * Identifies a phrase that all documents in the search results must contain.
     */
    exactTerms?: string;
    /**
     * Identifies a word or phrase that should not appear in any documents in the search results.
     */
    excludeTerms?: string;
    /**
     * Restricts results to files of a specified extension. Filetypes supported by Google include: * Adobe Portable Document Format (`pdf`) * Adobe PostScript (`ps`) * Lotus 1-2-3 (`wk1`, `wk2`, `wk3`, `wk4`, `wk5`, `wki`, `wks`, `wku`) * Lotus WordPro (`lwp`) * Macwrite (`mw`) * Microsoft Excel (`xls`) * Microsoft PowerPoint (`ppt`) * Microsoft Word (`doc`) * Microsoft Works (`wks`, `wps`, `wdb`) * Microsoft Write (`wri`) * Rich Text Format (`rtf`) * Shockwave Flash (`swf`) * Text (`ans`, `txt`). Additional filetypes may be added in the future. An up-to-date list can always be found in Google's [file type FAQ](https://support.google.com/webmasters/answer/35287).
     */
    fileType?: string;
    /**
     * Activates or deactivates the automatic filtering of Google search results. See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Valid values for this parameter are: * `0`: Disabled * `1`: Enabled (default) **Note**: By default, Google applies filtering to all search results to improve the quality of those results.
     */
    filter?: string;
    /**
     * Boosts search results whose country of origin matches the parameter value. See [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) for a list of valid values. Specifying a `gl` parameter value in WebSearch requests should improve the relevance of results. This is particularly true for international customers and, even more specifically, for customers in English-speaking countries other than the United States.
     */
    gl?: string;
    /**
     * Specifies the Google domain (for example, google.com, google.de, or google.fr) to which the search should be limited.
     */
    googleHost?: string;
    /**
     * Specifies the ending value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query.
     */
    highRange?: string;
    /**
     * Specifies the interface language (host language) of your user interface. Explicitly setting this parameter improves the performance and the quality of your search results. See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages.
     */
    hl?: string;
    /**
     * Appends the specified query terms to the query, as if they were combined with a logical `AND` operator.
     */
    hq?: string;
    /**
     * Restricts results to images of a specified color type. Supported values are: * `mono` (black and white) * `gray` (grayscale) * `color` (color)
     */
    imgColorType?: string;
    /**
     * Restricts results to images with a specific dominant color. Supported values are: * `red` * `orange` * `yellow` * `green` * `teal` * `blue` * `purple` * `pink` * `white` * `gray` * `black` * `brown`
     */
    imgDominantColor?: string;
    /**
     * Restricts results to images of a specified size. Supported values are: * `icon` (small) * `small | medium | large | xlarge` (medium) * `xxlarge` (large) * `huge` (extra-large)
     */
    imgSize?: string;
    /**
     * Restricts results to images of a specified type. Supported values are: * `clipart` (Clip art) * `face` (Face) * `lineart` (Line drawing) * `photo` (Photo) * `animated` (Animated) * `stock` (Stock)
     */
    imgType?: string;
    /**
     * The character encoding supported for search requests.
     */
    inputEncoding?: string;
    /**
     * The language of the search results.
     */
    language?: string;
    /**
     * Specifies that all results should contain a link to a specific URL.
     */
    linkSite?: string;
    /**
     * Specifies the starting value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query.
     */
    lowRange?: string;
    /**
     * Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. You can also use the [Boolean OR](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) query term for this type of query.
     */
    orTerms?: string;
    /**
     * The character encoding supported for search results.
     */
    outputEncoding?: string;
    /**
     * Specifies that all search results should be pages that are related to the specified URL. The parameter value should be a URL.
     */
    relatedSite?: string;
    /**
     * Filters based on licensing. Supported values include: * `cc_publicdomain` * `cc_attribute` * `cc_sharealike` * `cc_noncommercial` * `cc_nonderived`
     */
    rights?: string;
    /**
     * Specifies the [SafeSearch level](https://developers.google.com/custom-search/docs/json_api_reference#safeSearchLevels) used for filtering out adult results. This is a custom property not defined in the OpenSearch spec. Valid parameter values are: * `"off"`: Disable SafeSearch * `"active"`: Enable SafeSearch
     */
    safe?: string;
    /**
     * The search terms entered by the user.
     */
    searchTerms?: string;
    /**
     * Allowed values are `web` or `image`. If unspecified, results are limited to webpages.
     */
    searchType?: string;
    /**
     * Restricts results to URLs from a specified site.
     */
    siteSearch?: string;
    /**
     * Specifies whether to include or exclude results from the site named in the `sitesearch` parameter. Supported values are: * `i`: include content from site * `e`: exclude content from site
     */
    siteSearchFilter?: string;
    /**
     * Specifies that results should be sorted according to the specified expression. For example, sort by date.
     */
    sort?: string;
    /**
     * The index of the current set of search results into the total set of results, where the index of the first result is 1.
     */
    startIndex?: number;
    /**
     * The page number of this set of results, where the page length is set by the `count` property.
     */
    startPage?: number;
    /**
     * A description of the query.
     */
    title?: string;
    /**
     * Estimated number of total search results. May not be accurate.
     */
    totalResults?: string;
}
/**
 * Query metadata for the previous, current, and next pages of results.
 */
export declare class SearchQueries extends SpeakeasyBase {
    /**
     * Metadata representing the next page of results, if applicable.
     */
    nextPage?: SearchQueriesNextPage[];
    /**
     * Metadata representing the previous page of results, if applicable.
     */
    previousPage?: SearchQueriesPreviousPage[];
    /**
     * Metadata representing the current request.
     */
    request?: SearchQueriesRequest[];
}
/**
 * Metadata about a search operation.
 */
export declare class SearchSearchInformation extends SpeakeasyBase {
    /**
     * The time taken for the server to return search results, formatted according to locale style.
     */
    formattedSearchTime?: string;
    /**
     * The total number of search results, formatted according to locale style.
     */
    formattedTotalResults?: string;
    /**
     * The time taken for the server to return search results.
     */
    searchTime?: number;
    /**
     * The total number of search results returned by the query.
     */
    totalResults?: string;
}
/**
 * Spell correction information for a query.
 */
export declare class SearchSpelling extends SpeakeasyBase {
    /**
     * The corrected query.
     */
    correctedQuery?: string;
    /**
     * The corrected query, formatted in HTML.
     */
    htmlCorrectedQuery?: string;
}
/**
 * OpenSearch template and URL.
 */
export declare class SearchUrl extends SpeakeasyBase {
    /**
     * The actual [OpenSearch template](http://www.opensearch.org/specifications/opensearch/1.1#opensearch_url_template_syntax) for this API.
     */
    template?: string;
    /**
     * The MIME type of the OpenSearch URL template for the Custom Search JSON API.
     */
    type?: string;
}
/**
 * Response to a custom search request.
 */
export declare class Search extends SpeakeasyBase {
    /**
     * Metadata and refinements associated with the given search engine, including: * The name of the search engine that was used for the query. * A set of [facet objects](https://developers.google.com/custom-search/docs/refinements#create) (refinements) you can use for refining a search.
     */
    context?: Record<string, any>;
    /**
     * The current set of custom search results.
     */
    items?: Result[];
    /**
     * Unique identifier for the type of current object. For this API, it is customsearch#search.
     */
    kind?: string;
    /**
     * The set of [promotions](https://developers.google.com/custom-search/docs/promotions). Present only if the custom search engine's configuration files define any promotions for the given query.
     */
    promotions?: Promotion[];
    /**
     * Query metadata for the previous, current, and next pages of results.
     */
    queries?: SearchQueries;
    /**
     * Metadata about a search operation.
     */
    searchInformation?: SearchSearchInformation;
    /**
     * Spell correction information for a query.
     */
    spelling?: SearchSpelling;
    /**
     * OpenSearch template and URL.
     */
    url?: SearchUrl;
}
