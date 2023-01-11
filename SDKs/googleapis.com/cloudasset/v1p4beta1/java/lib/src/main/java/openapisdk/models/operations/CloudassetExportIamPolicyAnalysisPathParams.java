package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudassetExportIamPolicyAnalysisPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudassetExportIamPolicyAnalysisPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}