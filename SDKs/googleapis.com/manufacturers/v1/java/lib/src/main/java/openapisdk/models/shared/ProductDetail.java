package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProductDetail
 * A product detail of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productdetail.
**/
public class ProductDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeName")
    public String attributeName;
    public ProductDetail withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeValue")
    public String attributeValue;
    public ProductDetail withAttributeValue(String attributeValue) {
        this.attributeValue = attributeValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sectionName")
    public String sectionName;
    public ProductDetail withSectionName(String sectionName) {
        this.sectionName = sectionName;
        return this;
    }
}