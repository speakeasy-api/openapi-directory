package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchEventTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Type")
    public String type;
    public FetchEventTypePathParams withType(String type) {
        this.type = type;
        return this;
    }
}