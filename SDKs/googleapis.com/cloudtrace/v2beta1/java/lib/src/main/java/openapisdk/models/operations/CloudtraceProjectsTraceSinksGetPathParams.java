package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudtraceProjectsTraceSinksGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudtraceProjectsTraceSinksGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}