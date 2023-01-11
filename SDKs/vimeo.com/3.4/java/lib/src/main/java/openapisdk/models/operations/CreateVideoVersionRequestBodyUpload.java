package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVideoVersionRequestBodyUpload {
    @JsonProperty("approach")
    public CreateVideoVersionRequestBodyUploadApproachEnum approach;
    public CreateVideoVersionRequestBodyUpload withApproach(CreateVideoVersionRequestBodyUploadApproachEnum approach) {
        this.approach = approach;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public CreateVideoVersionRequestBodyUpload withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirect_url")
    public String redirectUrl;
    public CreateVideoVersionRequestBodyUpload withRedirectUrl(String redirectUrl) {
        this.redirectUrl = redirectUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public CreateVideoVersionRequestBodyUpload withSize(String size) {
        this.size = size;
        return this;
    }
}