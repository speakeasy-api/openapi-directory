package openapisdk.models.operations;



public class DfareportingSubaccountsGetResponse {
    public String contentType;
    public DfareportingSubaccountsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingSubaccountsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Subaccount subaccount;
    public DfareportingSubaccountsGetResponse withSubaccount(openapisdk.models.shared.Subaccount subaccount) {
        this.subaccount = subaccount;
        return this;
    }
}