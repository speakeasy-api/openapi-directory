package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EcommerceData
 * E-commerce details associated with the user activity.
**/
public class EcommerceData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionType")
    public EcommerceDataActionTypeEnum actionType;
    public EcommerceData withActionType(EcommerceDataActionTypeEnum actionType) {
        this.actionType = actionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ecommerceType")
    public EcommerceDataEcommerceTypeEnum ecommerceType;
    public EcommerceData withEcommerceType(EcommerceDataEcommerceTypeEnum ecommerceType) {
        this.ecommerceType = ecommerceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("products")
    public ProductData[] products;
    public EcommerceData withProducts(ProductData[] products) {
        this.products = products;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction")
    public TransactionData transaction;
    public EcommerceData withTransaction(TransactionData transaction) {
        this.transaction = transaction;
        return this;
    }
}