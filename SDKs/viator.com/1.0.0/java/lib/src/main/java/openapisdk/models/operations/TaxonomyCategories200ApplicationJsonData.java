package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaxonomyCategories200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupName")
    public String groupName;
    public TaxonomyCategories200ApplicationJsonData withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupUrlName")
    public String groupUrlName;
    public TaxonomyCategories200ApplicationJsonData withGroupUrlName(String groupUrlName) {
        this.groupUrlName = groupUrlName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public TaxonomyCategories200ApplicationJsonData withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCount")
    public Long productCount;
    public TaxonomyCategories200ApplicationJsonData withProductCount(Long productCount) {
        this.productCount = productCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subcategories")
    public TaxonomyCategories200ApplicationJsonDataSubcategories[] subcategories;
    public TaxonomyCategories200ApplicationJsonData withSubcategories(TaxonomyCategories200ApplicationJsonDataSubcategories[] subcategories) {
        this.subcategories = subcategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailURL")
    public String thumbnailURL;
    public TaxonomyCategories200ApplicationJsonData withThumbnailUrl(String thumbnailURL) {
        this.thumbnailURL = thumbnailURL;
        return this;
    }
}