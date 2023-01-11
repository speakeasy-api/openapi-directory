package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RotoballerArticlesByDatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=date")
    public String date;
    public RotoballerArticlesByDatePathParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public RotoballerArticlesByDateFormatEnum format;
    public RotoballerArticlesByDatePathParams withFormat(RotoballerArticlesByDateFormatEnum format) {
        this.format = format;
        return this;
    }
}