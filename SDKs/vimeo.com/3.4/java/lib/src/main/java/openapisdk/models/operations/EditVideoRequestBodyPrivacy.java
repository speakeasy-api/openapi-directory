package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditVideoRequestBodyPrivacy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add")
    public Boolean add;
    public EditVideoRequestBodyPrivacy withAdd(Boolean add) {
        this.add = add;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public EditVideoRequestBodyPrivacyCommentsEnum comments;
    public EditVideoRequestBodyPrivacy withComments(EditVideoRequestBodyPrivacyCommentsEnum comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download")
    public Boolean download;
    public EditVideoRequestBodyPrivacy withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embed")
    public EditVideoRequestBodyPrivacyEmbedEnum embed;
    public EditVideoRequestBodyPrivacy withEmbed(EditVideoRequestBodyPrivacyEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public EditVideoRequestBodyPrivacyViewEnum view;
    public EditVideoRequestBodyPrivacy withView(EditVideoRequestBodyPrivacyViewEnum view) {
        this.view = view;
        return this;
    }
}