package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsActivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public TeamsActivePathParams withFormat(String format) {
        this.format = format;
        return this;
    }
}