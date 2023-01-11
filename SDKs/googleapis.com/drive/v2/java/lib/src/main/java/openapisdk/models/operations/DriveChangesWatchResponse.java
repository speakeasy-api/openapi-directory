package openapisdk.models.operations;



public class DriveChangesWatchResponse {
    public openapisdk.models.shared.Channel channel;
    public DriveChangesWatchResponse withChannel(openapisdk.models.shared.Channel channel) {
        this.channel = channel;
        return this;
    }
    public String contentType;
    public DriveChangesWatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveChangesWatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}