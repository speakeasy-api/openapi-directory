package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudassetAnalyzeIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudassetAnalyzeIamPolicyPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}