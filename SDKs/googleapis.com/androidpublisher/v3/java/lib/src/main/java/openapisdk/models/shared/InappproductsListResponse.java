package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InappproductsListResponse
 * Response listing all in-app products.
**/
public class InappproductsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inappproduct")
    public InAppProduct[] inappproduct;
    public InappproductsListResponse withInappproduct(InAppProduct[] inappproduct) {
        this.inappproduct = inappproduct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public InappproductsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageInfo")
    public PageInfo pageInfo;
    public InappproductsListResponse withPageInfo(PageInfo pageInfo) {
        this.pageInfo = pageInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenPagination")
    public TokenPagination tokenPagination;
    public InappproductsListResponse withTokenPagination(TokenPagination tokenPagination) {
        this.tokenPagination = tokenPagination;
        return this;
    }
}