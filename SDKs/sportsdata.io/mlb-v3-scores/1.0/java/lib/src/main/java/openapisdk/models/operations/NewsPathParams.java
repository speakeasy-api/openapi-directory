package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NewsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public NewsFormatEnum format;
    public NewsPathParams withFormat(NewsFormatEnum format) {
        this.format = format;
        return this;
    }
}