package openapisdk.models.operations;



public class AlarmVolumeResponse {
    public String contentType;
    public AlarmVolumeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Getvolume getvolume;
    public AlarmVolumeResponse withGetvolume(openapisdk.models.shared.Getvolume getvolume) {
        this.getvolume = getvolume;
        return this;
    }
    public Long statusCode;
    public AlarmVolumeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}