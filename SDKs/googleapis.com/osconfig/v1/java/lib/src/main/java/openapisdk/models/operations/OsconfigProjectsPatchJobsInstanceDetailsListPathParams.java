package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsPatchJobsInstanceDetailsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public OsconfigProjectsPatchJobsInstanceDetailsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}