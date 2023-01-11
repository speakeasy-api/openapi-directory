package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckDirectivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=directiveId")
    public String directiveId;
    public CheckDirectivePathParams withDirectiveId(String directiveId) {
        this.directiveId = directiveId;
        return this;
    }
}