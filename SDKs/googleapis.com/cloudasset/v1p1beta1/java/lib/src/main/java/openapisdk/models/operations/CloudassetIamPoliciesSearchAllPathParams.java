package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudassetIamPoliciesSearchAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scope")
    public String scope;
    public CloudassetIamPoliciesSearchAllPathParams withScope(String scope) {
        this.scope = scope;
        return this;
    }
}