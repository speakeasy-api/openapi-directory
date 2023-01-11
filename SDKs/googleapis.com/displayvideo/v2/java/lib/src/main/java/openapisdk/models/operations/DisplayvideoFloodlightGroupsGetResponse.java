package openapisdk.models.operations;



public class DisplayvideoFloodlightGroupsGetResponse {
    public String contentType;
    public DisplayvideoFloodlightGroupsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FloodlightGroup floodlightGroup;
    public DisplayvideoFloodlightGroupsGetResponse withFloodlightGroup(openapisdk.models.shared.FloodlightGroup floodlightGroup) {
        this.floodlightGroup = floodlightGroup;
        return this;
    }
    public Long statusCode;
    public DisplayvideoFloodlightGroupsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}