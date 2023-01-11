package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NewsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public NewsPathParams withFormat(String format) {
        this.format = format;
        return this;
    }
}