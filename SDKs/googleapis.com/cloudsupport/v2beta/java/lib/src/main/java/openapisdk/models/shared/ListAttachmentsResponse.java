package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAttachmentsResponse
 * The response message for the ListAttachments endpoint.
**/
public class ListAttachmentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachments")
    public Attachment[] attachments;
    public ListAttachmentsResponse withAttachments(Attachment[] attachments) {
        this.attachments = attachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAttachmentsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}