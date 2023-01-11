package openapisdk.models.shared;



/**
 * AttachmentsListResponse
 * A list of Attachments. This is the response from the server to GET requests on the attachments collection.
**/
public class AttachmentsListResponse {
    public Attachment[] items;
    public AttachmentsListResponse withItems(Attachment[] items) {
        this.items = items;
        return this;
    }
    public String kind;
    public AttachmentsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}