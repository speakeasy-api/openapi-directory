package openapisdk.models.operations;



public class AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsResponse {
    public String contentType;
    public AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListLinkedCustomChannelsResponse listLinkedCustomChannelsResponse;
    public AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsResponse withListLinkedCustomChannelsResponse(openapisdk.models.shared.ListLinkedCustomChannelsResponse listLinkedCustomChannelsResponse) {
        this.listLinkedCustomChannelsResponse = listLinkedCustomChannelsResponse;
        return this;
    }
    public Long statusCode;
    public AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}