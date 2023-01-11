package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LicenseVideoRequest
 * List of videos to license
**/
public class LicenseVideoRequest {
    @JsonProperty("videos")
    public LicenseVideo[] videos;
    public LicenseVideoRequest withVideos(LicenseVideo[] videos) {
        this.videos = videos;
        return this;
    }
}