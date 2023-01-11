package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NewsByDatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public NewsByDatePathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public NewsByDateFormatEnum format;
    public NewsByDatePathParams withFormat(NewsByDateFormatEnum format) {
        this.format = format;
        return this;
    }
}