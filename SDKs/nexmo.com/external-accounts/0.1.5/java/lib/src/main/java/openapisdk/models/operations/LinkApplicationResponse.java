package openapisdk.models.operations;



public class LinkApplicationResponse {
    public openapisdk.models.shared.FourHundredAndOneResponse fourHundredAndOneResponse;
    public LinkApplicationResponse withFourHundredAndOneResponse(openapisdk.models.shared.FourHundredAndOneResponse fourHundredAndOneResponse) {
        this.fourHundredAndOneResponse = fourHundredAndOneResponse;
        return this;
    }
    public openapisdk.models.shared.AccountResponse accountResponse;
    public LinkApplicationResponse withAccountResponse(openapisdk.models.shared.AccountResponse accountResponse) {
        this.accountResponse = accountResponse;
        return this;
    }
    public String contentType;
    public LinkApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public LinkApplication403ApplicationJson linkApplication403ApplicationJSONObject;
    public LinkApplicationResponse withLinkApplication403ApplicationJsonObject(LinkApplication403ApplicationJson linkApplication403ApplicationJSONObject) {
        this.linkApplication403ApplicationJSONObject = linkApplication403ApplicationJSONObject;
        return this;
    }
    public LinkApplication409ApplicationJson linkApplication409ApplicationJSONObject;
    public LinkApplicationResponse withLinkApplication409ApplicationJsonObject(LinkApplication409ApplicationJson linkApplication409ApplicationJSONObject) {
        this.linkApplication409ApplicationJSONObject = linkApplication409ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public LinkApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}