package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProductData
 * Details of the products in an e-commerce transaction.
**/
public class ProductData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemRevenue")
    public Double itemRevenue;
    public ProductData withItemRevenue(Double itemRevenue) {
        this.itemRevenue = itemRevenue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productName")
    public String productName;
    public ProductData withProductName(String productName) {
        this.productName = productName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productQuantity")
    public String productQuantity;
    public ProductData withProductQuantity(String productQuantity) {
        this.productQuantity = productQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productSku")
    public String productSku;
    public ProductData withProductSku(String productSku) {
        this.productSku = productSku;
        return this;
    }
}