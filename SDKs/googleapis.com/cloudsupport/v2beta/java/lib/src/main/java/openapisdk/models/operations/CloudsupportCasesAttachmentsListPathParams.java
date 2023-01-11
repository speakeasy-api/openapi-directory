package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudsupportCasesAttachmentsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudsupportCasesAttachmentsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}