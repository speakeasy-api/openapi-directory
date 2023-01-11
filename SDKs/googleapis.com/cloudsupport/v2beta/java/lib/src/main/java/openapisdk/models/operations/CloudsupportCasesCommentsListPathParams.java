package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudsupportCasesCommentsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudsupportCasesCommentsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}