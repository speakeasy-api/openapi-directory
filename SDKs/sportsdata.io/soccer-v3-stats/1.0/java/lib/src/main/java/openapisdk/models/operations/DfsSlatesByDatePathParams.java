package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfsSlatesByDatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public DfsSlatesByDatePathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public DfsSlatesByDateFormatEnum format;
    public DfsSlatesByDatePathParams withFormat(DfsSlatesByDateFormatEnum format) {
        this.format = format;
        return this;
    }
}