package openapisdk.models.operations;



public class Adexchangebuyer2AccountsCreativesDealAssociationsListResponse {
    public String contentType;
    public Adexchangebuyer2AccountsCreativesDealAssociationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDealAssociationsResponse listDealAssociationsResponse;
    public Adexchangebuyer2AccountsCreativesDealAssociationsListResponse withListDealAssociationsResponse(openapisdk.models.shared.ListDealAssociationsResponse listDealAssociationsResponse) {
        this.listDealAssociationsResponse = listDealAssociationsResponse;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsCreativesDealAssociationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}