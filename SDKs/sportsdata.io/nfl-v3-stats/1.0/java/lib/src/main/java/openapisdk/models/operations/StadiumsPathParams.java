package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StadiumsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public StadiumsPathParams withFormat(String format) {
        this.format = format;
        return this;
    }
}