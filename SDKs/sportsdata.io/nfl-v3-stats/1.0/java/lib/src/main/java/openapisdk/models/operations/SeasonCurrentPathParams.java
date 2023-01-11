package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SeasonCurrentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public SeasonCurrentPathParams withFormat(String format) {
        this.format = format;
        return this;
    }
}