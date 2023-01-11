package openapisdk.models.operations;



public class AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsResponse {
    public String contentType;
    public AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListLinkedAdUnitsResponse listLinkedAdUnitsResponse;
    public AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsResponse withListLinkedAdUnitsResponse(openapisdk.models.shared.ListLinkedAdUnitsResponse listLinkedAdUnitsResponse) {
        this.listLinkedAdUnitsResponse = listLinkedAdUnitsResponse;
        return this;
    }
    public Long statusCode;
    public AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}