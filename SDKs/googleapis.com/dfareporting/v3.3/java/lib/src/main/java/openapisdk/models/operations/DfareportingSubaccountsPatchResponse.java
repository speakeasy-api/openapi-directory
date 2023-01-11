package openapisdk.models.operations;



public class DfareportingSubaccountsPatchResponse {
    public String contentType;
    public DfareportingSubaccountsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingSubaccountsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Subaccount subaccount;
    public DfareportingSubaccountsPatchResponse withSubaccount(openapisdk.models.shared.Subaccount subaccount) {
        this.subaccount = subaccount;
        return this;
    }
}