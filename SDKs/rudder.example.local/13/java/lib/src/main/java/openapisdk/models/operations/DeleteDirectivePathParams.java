package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDirectivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=directiveId")
    public String directiveId;
    public DeleteDirectivePathParams withDirectiveId(String directiveId) {
        this.directiveId = directiveId;
        return this;
    }
}