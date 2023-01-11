package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProductModuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=forceCascade")
    public Boolean forceCascade;
    public DeleteProductModuleQueryParams withForceCascade(Boolean forceCascade) {
        this.forceCascade = forceCascade;
        return this;
    }
}