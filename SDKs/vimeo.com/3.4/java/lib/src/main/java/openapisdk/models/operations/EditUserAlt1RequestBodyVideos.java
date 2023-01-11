package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditUserAlt1RequestBodyVideos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public EditUserAlt1RequestBodyVideosPrivacy privacy;
    public EditUserAlt1RequestBodyVideos withPrivacy(EditUserAlt1RequestBodyVideosPrivacy privacy) {
        this.privacy = privacy;
        return this;
    }
}