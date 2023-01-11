package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaxonomyCategories200ApplicationJsonDataSubcategories {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryId")
    public Long categoryId;
    public TaxonomyCategories200ApplicationJsonDataSubcategories withCategoryId(Long categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortorder")
    public Long sortorder;
    public TaxonomyCategories200ApplicationJsonDataSubcategories withSortorder(Long sortorder) {
        this.sortorder = sortorder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subCategoryUrlName")
    public String subCategoryUrlName;
    public TaxonomyCategories200ApplicationJsonDataSubcategories withSubCategoryUrlName(String subCategoryUrlName) {
        this.subCategoryUrlName = subCategoryUrlName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subcategoryId")
    public Long subcategoryId;
    public TaxonomyCategories200ApplicationJsonDataSubcategories withSubcategoryId(Long subcategoryId) {
        this.subcategoryId = subcategoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subcategoryName")
    public String subcategoryName;
    public TaxonomyCategories200ApplicationJsonDataSubcategories withSubcategoryName(String subcategoryName) {
        this.subcategoryName = subcategoryName;
        return this;
    }
}