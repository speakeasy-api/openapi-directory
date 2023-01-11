package openapisdk.models.shared;



public class VoidedPurchasesListResponse {
    public PageInfo pageInfo;
    public VoidedPurchasesListResponse withPageInfo(PageInfo pageInfo) {
        this.pageInfo = pageInfo;
        return this;
    }
    public TokenPagination tokenPagination;
    public VoidedPurchasesListResponse withTokenPagination(TokenPagination tokenPagination) {
        this.tokenPagination = tokenPagination;
        return this;
    }
    public VoidedPurchase[] voidedPurchases;
    public VoidedPurchasesListResponse withVoidedPurchases(VoidedPurchase[] voidedPurchases) {
        this.voidedPurchases = voidedPurchases;
        return this;
    }
}