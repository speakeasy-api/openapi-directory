package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VoidedPurchasesListResponse
 * Response for the voidedpurchases.list API.
**/
public class VoidedPurchasesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageInfo")
    public PageInfo pageInfo;
    public VoidedPurchasesListResponse withPageInfo(PageInfo pageInfo) {
        this.pageInfo = pageInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenPagination")
    public TokenPagination tokenPagination;
    public VoidedPurchasesListResponse withTokenPagination(TokenPagination tokenPagination) {
        this.tokenPagination = tokenPagination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voidedPurchases")
    public VoidedPurchase[] voidedPurchases;
    public VoidedPurchasesListResponse withVoidedPurchases(VoidedPurchase[] voidedPurchases) {
        this.voidedPurchases = voidedPurchases;
        return this;
    }
}