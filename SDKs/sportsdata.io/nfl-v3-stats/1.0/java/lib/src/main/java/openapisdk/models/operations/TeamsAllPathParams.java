package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public TeamsAllPathParams withFormat(String format) {
        this.format = format;
        return this;
    }
}