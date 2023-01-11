package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PageOfVariantSets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public VariantSet[] items;
    public PageOfVariantSets withItems(VariantSet[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public PageOfVariantSets withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pages")
    public Long pages;
    public PageOfVariantSets withPages(Long pages) {
        this.pages = pages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("per_page")
    public Long perPage;
    public PageOfVariantSets withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public PageOfVariantSets withTotal(Long total) {
        this.total = total;
        return this;
    }
}