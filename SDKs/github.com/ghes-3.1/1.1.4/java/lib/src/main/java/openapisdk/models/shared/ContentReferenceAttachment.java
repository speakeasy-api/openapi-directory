package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContentReferenceAttachment
 * Content Reference attachments allow you to provide context around URLs posted in comments
**/
public class ContentReferenceAttachment {
    @JsonProperty("body")
    public String body;
    public ContentReferenceAttachment withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public ContentReferenceAttachment withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("node_id")
    public String nodeId;
    public ContentReferenceAttachment withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ContentReferenceAttachment withTitle(String title) {
        this.title = title;
        return this;
    }
}