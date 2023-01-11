package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DirectiveDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=directiveId")
    public String directiveId;
    public DirectiveDetailsPathParams withDirectiveId(String directiveId) {
        this.directiveId = directiveId;
        return this;
    }
}