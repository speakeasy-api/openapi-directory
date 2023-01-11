package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePolicyModulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeletePolicyModulePathParams withId(String id) {
        this.id = id;
        return this;
    }
}