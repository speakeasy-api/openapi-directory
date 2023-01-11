package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ItemImportRequest
 * ItemImportRequest defines the request schema for `/item/import`
**/
public class ItemImportRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public ItemImportRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public ItemImportRequestOptions options;
    public ItemImportRequest withOptions(ItemImportRequestOptions options) {
        this.options = options;
        return this;
    }
    @JsonProperty("products")
    public ProductsEnum[] products;
    public ItemImportRequest withProducts(ProductsEnum[] products) {
        this.products = products;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public ItemImportRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("user_auth")
    public ItemImportRequestUserAuth userAuth;
    public ItemImportRequest withUserAuth(ItemImportRequestUserAuth userAuth) {
        this.userAuth = userAuth;
        return this;
    }
}