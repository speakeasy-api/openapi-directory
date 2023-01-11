package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransformDefinitionFromApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TransformDefinitionId")
    public String transformDefinitionId;
    public GetTransformDefinitionFromApplicationPathParams withTransformDefinitionId(String transformDefinitionId) {
        this.transformDefinitionId = transformDefinitionId;
        return this;
    }
}