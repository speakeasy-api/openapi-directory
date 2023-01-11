package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolsShareFileMultipartFormData {
    @SpeakeasyMetadata("multipartForm:file")
    public ToolsShareFileMultipartFormDataMedia media;
    public ToolsShareFileMultipartFormData withMedia(ToolsShareFileMultipartFormDataMedia media) {
        this.media = media;
        return this;
    }
}