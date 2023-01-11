package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEasywindPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=easywindId")
    public String easywindId;
    public GetEasywindPathParams withEasywindId(String easywindId) {
        this.easywindId = easywindId;
        return this;
    }
}