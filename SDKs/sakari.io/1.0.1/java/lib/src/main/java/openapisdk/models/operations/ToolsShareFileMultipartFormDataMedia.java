package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolsShareFileMultipartFormDataMedia {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public ToolsShareFileMultipartFormDataMedia withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=media")
    public String media;
    public ToolsShareFileMultipartFormDataMedia withMedia(String media) {
        this.media = media;
        return this;
    }
}