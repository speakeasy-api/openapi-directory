package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AppsCreateContentAttachmentRequestBody {
    @JsonProperty("body")
    public String body;
    public AppsCreateContentAttachmentRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public AppsCreateContentAttachmentRequestBody withTitle(String title) {
        this.title = title;
        return this;
    }
}