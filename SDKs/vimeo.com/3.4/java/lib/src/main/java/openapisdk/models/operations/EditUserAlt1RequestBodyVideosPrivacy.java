package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditUserAlt1RequestBodyVideosPrivacy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add")
    public Boolean add;
    public EditUserAlt1RequestBodyVideosPrivacy withAdd(Boolean add) {
        this.add = add;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public EditUserAlt1RequestBodyVideosPrivacyCommentsEnum comments;
    public EditUserAlt1RequestBodyVideosPrivacy withComments(EditUserAlt1RequestBodyVideosPrivacyCommentsEnum comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public EditUserAlt1RequestBodyVideosPrivacy withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public EditUserAlt1RequestBodyVideosPrivacyEmbedEnum embed;
    public EditUserAlt1RequestBodyVideosPrivacy withEmbed(EditUserAlt1RequestBodyVideosPrivacyEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public EditUserAlt1RequestBodyVideosPrivacyViewEnum view;
    public EditUserAlt1RequestBodyVideosPrivacy withView(EditUserAlt1RequestBodyVideosPrivacyViewEnum view) {
        this.view = view;
        return this;
    }
}