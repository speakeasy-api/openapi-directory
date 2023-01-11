package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchProductsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catId")
    public Long catId;
    public SearchProductsRequestBody withCatId(Long catId) {
        this.catId = catId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public SearchProductsRequestBody withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destId")
    public Long destId;
    public SearchProductsRequestBody withDestId(Long destId) {
        this.destId = destId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public String endDate;
    public SearchProductsRequestBody withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seoId")
    public String seoId;
    public SearchProductsRequestBody withSeoId(String seoId) {
        this.seoId = seoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public SearchProductsRequestBodySortOrderEnum sortOrder;
    public SearchProductsRequestBody withSortOrder(SearchProductsRequestBodySortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public String startDate;
    public SearchProductsRequestBody withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subCatId")
    public Long subCatId;
    public SearchProductsRequestBody withSubCatId(Long subCatId) {
        this.subCatId = subCatId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topX")
    public String topX;
    public SearchProductsRequestBody withTopX(String topX) {
        this.topX = topX;
        return this;
    }
}