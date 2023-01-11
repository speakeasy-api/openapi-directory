package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Material
 * Material attached to course work. When creating attachments, setting the `form` field is not supported.
**/
public class Material {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveFile")
    public SharedDriveFile driveFile;
    public Material withDriveFile(SharedDriveFile driveFile) {
        this.driveFile = driveFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form")
    public Form form;
    public Material withForm(Form form) {
        this.form = form;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public Link link;
    public Material withLink(Link link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("youtubeVideo")
    public YouTubeVideo youtubeVideo;
    public Material withYoutubeVideo(YouTubeVideo youtubeVideo) {
        this.youtubeVideo = youtubeVideo;
        return this;
    }
}