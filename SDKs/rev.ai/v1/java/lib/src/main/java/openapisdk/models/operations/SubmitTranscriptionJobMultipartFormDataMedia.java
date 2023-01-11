package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitTranscriptionJobMultipartFormDataMedia {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public SubmitTranscriptionJobMultipartFormDataMedia withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=media")
    public String media;
    public SubmitTranscriptionJobMultipartFormDataMedia withMedia(String media) {
        this.media = media;
        return this;
    }
}