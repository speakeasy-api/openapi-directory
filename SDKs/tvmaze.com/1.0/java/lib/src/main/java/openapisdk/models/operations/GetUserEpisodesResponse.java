package openapisdk.models.operations;



public class GetUserEpisodesResponse {
    public String contentType;
    public GetUserEpisodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MarkedEpisode[] markedEpisodes;
    public GetUserEpisodesResponse withMarkedEpisodes(openapisdk.models.shared.MarkedEpisode[] markedEpisodes) {
        this.markedEpisodes = markedEpisodes;
        return this;
    }
    public Long statusCode;
    public GetUserEpisodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}