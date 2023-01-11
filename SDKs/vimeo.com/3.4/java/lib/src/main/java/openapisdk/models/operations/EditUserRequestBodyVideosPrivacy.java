package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditUserRequestBodyVideosPrivacy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add")
    public Boolean add;
    public EditUserRequestBodyVideosPrivacy withAdd(Boolean add) {
        this.add = add;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public EditUserRequestBodyVideosPrivacyCommentsEnum comments;
    public EditUserRequestBodyVideosPrivacy withComments(EditUserRequestBodyVideosPrivacyCommentsEnum comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public EditUserRequestBodyVideosPrivacy withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public EditUserRequestBodyVideosPrivacyEmbedEnum embed;
    public EditUserRequestBodyVideosPrivacy withEmbed(EditUserRequestBodyVideosPrivacyEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public EditUserRequestBodyVideosPrivacyViewEnum view;
    public EditUserRequestBodyVideosPrivacy withView(EditUserRequestBodyVideosPrivacyViewEnum view) {
        this.view = view;
        return this;
    }
}