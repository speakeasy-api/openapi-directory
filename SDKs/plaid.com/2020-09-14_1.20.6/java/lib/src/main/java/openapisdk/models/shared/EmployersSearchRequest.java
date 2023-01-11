package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployersSearchRequest
 * EmployersSearchRequest defines the request schema for `/employers/search`.
**/
public class EmployersSearchRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public EmployersSearchRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("products")
    public String[] products;
    public EmployersSearchRequest withProducts(String[] products) {
        this.products = products;
        return this;
    }
    @JsonProperty("query")
    public String query;
    public EmployersSearchRequest withQuery(String query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public EmployersSearchRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}