package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SvgconvertFileToConvert {
    @SpeakeasyMetadata("multipartForm:file")
    public SvgconvertFileToConvertFile file;
    public SvgconvertFileToConvert withFile(SvgconvertFileToConvertFile file) {
        this.file = file;
        return this;
    }
}