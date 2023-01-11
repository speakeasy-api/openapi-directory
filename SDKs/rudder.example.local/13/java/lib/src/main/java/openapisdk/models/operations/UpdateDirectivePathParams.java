package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDirectivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=directiveId")
    public String directiveId;
    public UpdateDirectivePathParams withDirectiveId(String directiveId) {
        this.directiveId = directiveId;
        return this;
    }
}