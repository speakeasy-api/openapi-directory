package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudsupportCasesCommentsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudsupportCasesCommentsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}