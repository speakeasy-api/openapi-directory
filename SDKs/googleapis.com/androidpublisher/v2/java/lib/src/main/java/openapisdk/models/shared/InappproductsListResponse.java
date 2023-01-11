package openapisdk.models.shared;



public class InappproductsListResponse {
    public InAppProduct[] inappproduct;
    public InappproductsListResponse withInappproduct(InAppProduct[] inappproduct) {
        this.inappproduct = inappproduct;
        return this;
    }
    public String kind;
    public InappproductsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    public PageInfo pageInfo;
    public InappproductsListResponse withPageInfo(PageInfo pageInfo) {
        this.pageInfo = pageInfo;
        return this;
    }
    public TokenPagination tokenPagination;
    public InappproductsListResponse withTokenPagination(TokenPagination tokenPagination) {
        this.tokenPagination = tokenPagination;
        return this;
    }
}