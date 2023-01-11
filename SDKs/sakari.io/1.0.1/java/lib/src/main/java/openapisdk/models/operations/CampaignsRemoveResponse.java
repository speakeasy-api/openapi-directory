package openapisdk.models.operations;



public class CampaignsRemoveResponse {
    public String contentType;
    public CampaignsRemoveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CampaignsRemoveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CampaignsRemove200ApplicationJson campaignsRemove200ApplicationJSONObject;
    public CampaignsRemoveResponse withCampaignsRemove200ApplicationJsonObject(CampaignsRemove200ApplicationJson campaignsRemove200ApplicationJSONObject) {
        this.campaignsRemove200ApplicationJSONObject = campaignsRemove200ApplicationJSONObject;
        return this;
    }
}