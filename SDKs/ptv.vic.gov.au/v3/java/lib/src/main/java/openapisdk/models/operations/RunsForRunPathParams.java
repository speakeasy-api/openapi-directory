package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunsForRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=run_ref")
    public String runRef;
    public RunsForRunPathParams withRunRef(String runRef) {
        this.runRef = runRef;
        return this;
    }
}