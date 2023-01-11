package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CourseMaterial
 * A material attached to a course as part of a material set.
**/
public class CourseMaterial {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveFile")
    public DriveFile driveFile;
    public CourseMaterial withDriveFile(DriveFile driveFile) {
        this.driveFile = driveFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form")
    public Form form;
    public CourseMaterial withForm(Form form) {
        this.form = form;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public Link link;
    public CourseMaterial withLink(Link link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("youTubeVideo")
    public YouTubeVideo youTubeVideo;
    public CourseMaterial withYouTubeVideo(YouTubeVideo youTubeVideo) {
        this.youTubeVideo = youTubeVideo;
        return this;
    }
}