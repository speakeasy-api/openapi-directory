package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RotoballerArticlesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public RotoballerArticlesFormatEnum format;
    public RotoballerArticlesPathParams withFormat(RotoballerArticlesFormatEnum format) {
        this.format = format;
        return this;
    }
}