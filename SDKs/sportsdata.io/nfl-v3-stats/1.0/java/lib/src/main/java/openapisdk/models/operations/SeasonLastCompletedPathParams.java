package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SeasonLastCompletedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public SeasonLastCompletedPathParams withFormat(String format) {
        this.format = format;
        return this;
    }
}