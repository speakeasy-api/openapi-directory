package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtraceProjectsTraceSinksCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudtraceProjectsTraceSinksCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}