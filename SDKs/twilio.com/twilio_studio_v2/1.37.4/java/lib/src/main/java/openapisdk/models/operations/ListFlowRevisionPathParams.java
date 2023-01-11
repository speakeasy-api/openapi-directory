package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFlowRevisionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public ListFlowRevisionPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}