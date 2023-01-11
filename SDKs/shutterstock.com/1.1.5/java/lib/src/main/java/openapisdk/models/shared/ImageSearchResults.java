package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageSearchResults
 * Image search results
**/
public class ImageSearchResults {
    @JsonProperty("data")
    public Image[] data;
    public ImageSearchResults withData(Image[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ImageSearchResults withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public ImageSearchResults withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("per_page")
    public Long perPage;
    public ImageSearchResults withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @JsonProperty("search_id")
    public String searchId;
    public ImageSearchResults withSearchId(String searchId) {
        this.searchId = searchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spellcheck_info")
    public java.util.Map<String, Object> spellcheckInfo;
    public ImageSearchResults withSpellcheckInfo(java.util.Map<String, Object> spellcheckInfo) {
        this.spellcheckInfo = spellcheckInfo;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public ImageSearchResults withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}