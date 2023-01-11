package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTransformDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TransformDefinitionId")
    public String transformDefinitionId;
    public PutTransformDefinitionPathParams withTransformDefinitionId(String transformDefinitionId) {
        this.transformDefinitionId = transformDefinitionId;
        return this;
    }
}