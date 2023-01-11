package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTransformDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TransformDefinitionId")
    public String transformDefinitionId;
    public DeleteTransformDefinitionPathParams withTransformDefinitionId(String transformDefinitionId) {
        this.transformDefinitionId = transformDefinitionId;
        return this;
    }
}