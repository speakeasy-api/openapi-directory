package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitCommentRequestBody {
    @SpeakeasyMetadata("multipartForm:name=comment")
    public String comment;
    public SubmitCommentRequestBody withComment(String comment) {
        this.comment = comment;
        return this;
    }
}