package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SvgconvertRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public SvgconvertFileToConvert request;
    public SvgconvertRequest withRequest(SvgconvertFileToConvert request) {
        this.request = request;
        return this;
    }
}