package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtraceProjectsTraceSinksListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudtraceProjectsTraceSinksListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}