package openapisdk.models.operations;



public class GetScrobbleShowsShowIdResponse {
    public String contentType;
    public GetScrobbleShowsShowIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MarkedEpisode[] markedEpisodes;
    public GetScrobbleShowsShowIdResponse withMarkedEpisodes(openapisdk.models.shared.MarkedEpisode[] markedEpisodes) {
        this.markedEpisodes = markedEpisodes;
        return this;
    }
    public Long statusCode;
    public GetScrobbleShowsShowIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}