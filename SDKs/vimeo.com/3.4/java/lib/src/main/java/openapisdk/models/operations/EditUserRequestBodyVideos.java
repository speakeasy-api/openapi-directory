package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditUserRequestBodyVideos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public EditUserRequestBodyVideosPrivacy privacy;
    public EditUserRequestBodyVideos withPrivacy(EditUserRequestBodyVideosPrivacy privacy) {
        this.privacy = privacy;
        return this;
    }
}