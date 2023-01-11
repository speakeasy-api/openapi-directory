package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ToolsShareFileRequests {
    @SpeakeasyMetadata("request:mediaType=application/octet-stream")
    public byte[] applicationOctetStream;
    public ToolsShareFileRequests withApplicationOctetStream(byte[] applicationOctetStream) {
        this.applicationOctetStream = applicationOctetStream;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ToolsShareFileMultipartFormData object;
    public ToolsShareFileRequests withObject(ToolsShareFileMultipartFormData object) {
        this.object = object;
        return this;
    }
}