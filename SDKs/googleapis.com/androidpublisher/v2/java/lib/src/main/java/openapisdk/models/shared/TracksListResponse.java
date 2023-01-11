package openapisdk.models.shared;



public class TracksListResponse {
    public String kind;
    public TracksListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    public Track[] tracks;
    public TracksListResponse withTracks(Track[] tracks) {
        this.tracks = tracks;
        return this;
    }
}