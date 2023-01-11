package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProductQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=forceCascade")
    public Boolean forceCascade;
    public DeleteProductQueryParams withForceCascade(Boolean forceCascade) {
        this.forceCascade = forceCascade;
        return this;
    }
}