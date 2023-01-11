package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchQueriesNextPage
 * Custom search request metadata.
**/
public class SearchQueriesNextPage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Integer count;
    public SearchQueriesNextPage withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cr")
    public String cr;
    public SearchQueriesNextPage withCr(String cr) {
        this.cr = cr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cx")
    public String cx;
    public SearchQueriesNextPage withCx(String cx) {
        this.cx = cx;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateRestrict")
    public String dateRestrict;
    public SearchQueriesNextPage withDateRestrict(String dateRestrict) {
        this.dateRestrict = dateRestrict;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableCnTwTranslation")
    public String disableCnTwTranslation;
    public SearchQueriesNextPage withDisableCnTwTranslation(String disableCnTwTranslation) {
        this.disableCnTwTranslation = disableCnTwTranslation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exactTerms")
    public String exactTerms;
    public SearchQueriesNextPage withExactTerms(String exactTerms) {
        this.exactTerms = exactTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeTerms")
    public String excludeTerms;
    public SearchQueriesNextPage withExcludeTerms(String excludeTerms) {
        this.excludeTerms = excludeTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileType")
    public String fileType;
    public SearchQueriesNextPage withFileType(String fileType) {
        this.fileType = fileType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public SearchQueriesNextPage withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gl")
    public String gl;
    public SearchQueriesNextPage withGl(String gl) {
        this.gl = gl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleHost")
    public String googleHost;
    public SearchQueriesNextPage withGoogleHost(String googleHost) {
        this.googleHost = googleHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highRange")
    public String highRange;
    public SearchQueriesNextPage withHighRange(String highRange) {
        this.highRange = highRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hl")
    public String hl;
    public SearchQueriesNextPage withHl(String hl) {
        this.hl = hl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hq")
    public String hq;
    public SearchQueriesNextPage withHq(String hq) {
        this.hq = hq;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imgColorType")
    public String imgColorType;
    public SearchQueriesNextPage withImgColorType(String imgColorType) {
        this.imgColorType = imgColorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imgDominantColor")
    public String imgDominantColor;
    public SearchQueriesNextPage withImgDominantColor(String imgDominantColor) {
        this.imgDominantColor = imgDominantColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imgSize")
    public String imgSize;
    public SearchQueriesNextPage withImgSize(String imgSize) {
        this.imgSize = imgSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imgType")
    public String imgType;
    public SearchQueriesNextPage withImgType(String imgType) {
        this.imgType = imgType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputEncoding")
    public String inputEncoding;
    public SearchQueriesNextPage withInputEncoding(String inputEncoding) {
        this.inputEncoding = inputEncoding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public SearchQueriesNextPage withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkSite")
    public String linkSite;
    public SearchQueriesNextPage withLinkSite(String linkSite) {
        this.linkSite = linkSite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lowRange")
    public String lowRange;
    public SearchQueriesNextPage withLowRange(String lowRange) {
        this.lowRange = lowRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orTerms")
    public String orTerms;
    public SearchQueriesNextPage withOrTerms(String orTerms) {
        this.orTerms = orTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputEncoding")
    public String outputEncoding;
    public SearchQueriesNextPage withOutputEncoding(String outputEncoding) {
        this.outputEncoding = outputEncoding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relatedSite")
    public String relatedSite;
    public SearchQueriesNextPage withRelatedSite(String relatedSite) {
        this.relatedSite = relatedSite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rights")
    public String rights;
    public SearchQueriesNextPage withRights(String rights) {
        this.rights = rights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("safe")
    public String safe;
    public SearchQueriesNextPage withSafe(String safe) {
        this.safe = safe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchTerms")
    public String searchTerms;
    public SearchQueriesNextPage withSearchTerms(String searchTerms) {
        this.searchTerms = searchTerms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchType")
    public String searchType;
    public SearchQueriesNextPage withSearchType(String searchType) {
        this.searchType = searchType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteSearch")
    public String siteSearch;
    public SearchQueriesNextPage withSiteSearch(String siteSearch) {
        this.siteSearch = siteSearch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteSearchFilter")
    public String siteSearchFilter;
    public SearchQueriesNextPage withSiteSearchFilter(String siteSearchFilter) {
        this.siteSearchFilter = siteSearchFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort")
    public String sort;
    public SearchQueriesNextPage withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startIndex")
    public Integer startIndex;
    public SearchQueriesNextPage withStartIndex(Integer startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startPage")
    public Integer startPage;
    public SearchQueriesNextPage withStartPage(Integer startPage) {
        this.startPage = startPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public SearchQueriesNextPage withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalResults")
    public String totalResults;
    public SearchQueriesNextPage withTotalResults(String totalResults) {
        this.totalResults = totalResults;
        return this;
    }
}