package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPolicyModulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetPolicyModulePathParams withId(String id) {
        this.id = id;
        return this;
    }
}