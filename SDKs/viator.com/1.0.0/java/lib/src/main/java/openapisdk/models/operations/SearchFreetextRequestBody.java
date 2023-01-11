package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchFreetextRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public SearchFreetextRequestBody withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destId")
    public Long destId;
    public SearchFreetextRequestBody withDestId(Long destId) {
        this.destId = destId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchTypes")
    public SearchFreetextRequestBodySearchTypesEnum[] searchTypes;
    public SearchFreetextRequestBody withSearchTypes(SearchFreetextRequestBodySearchTypesEnum[] searchTypes) {
        this.searchTypes = searchTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public openapisdk.models.shared.SortOrderEnum sortOrder;
    public SearchFreetextRequestBody withSortOrder(openapisdk.models.shared.SortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public SearchFreetextRequestBody withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topX")
    public String topX;
    public SearchFreetextRequestBody withTopX(String topX) {
        this.topX = topX;
        return this;
    }
}