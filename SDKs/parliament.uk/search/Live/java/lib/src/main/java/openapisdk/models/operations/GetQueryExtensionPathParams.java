package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQueryExtensionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=extension")
    public GetQueryExtensionExtensionEnum extension;
    public GetQueryExtensionPathParams withExtension(GetQueryExtensionExtensionEnum extension) {
        this.extension = extension;
        return this;
    }
}