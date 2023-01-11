package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Attachment
 * Attachment added to student assignment work. When creating attachments, setting the `form` field is not supported.
**/
public class Attachment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveFile")
    public DriveFile driveFile;
    public Attachment withDriveFile(DriveFile driveFile) {
        this.driveFile = driveFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form")
    public Form form;
    public Attachment withForm(Form form) {
        this.form = form;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public Link link;
    public Attachment withLink(Link link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("youTubeVideo")
    public YouTubeVideo youTubeVideo;
    public Attachment withYouTubeVideo(YouTubeVideo youTubeVideo) {
        this.youTubeVideo = youTubeVideo;
        return this;
    }
}