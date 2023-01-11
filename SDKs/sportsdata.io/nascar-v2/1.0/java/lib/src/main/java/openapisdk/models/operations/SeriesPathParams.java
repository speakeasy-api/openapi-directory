package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SeriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public SeriesFormatEnum format;
    public SeriesPathParams withFormat(SeriesFormatEnum format) {
        this.format = format;
        return this;
    }
}