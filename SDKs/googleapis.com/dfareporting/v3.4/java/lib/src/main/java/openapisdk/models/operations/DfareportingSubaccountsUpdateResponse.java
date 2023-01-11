package openapisdk.models.operations;



public class DfareportingSubaccountsUpdateResponse {
    public String contentType;
    public DfareportingSubaccountsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingSubaccountsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Subaccount subaccount;
    public DfareportingSubaccountsUpdateResponse withSubaccount(openapisdk.models.shared.Subaccount subaccount) {
        this.subaccount = subaccount;
        return this;
    }
}