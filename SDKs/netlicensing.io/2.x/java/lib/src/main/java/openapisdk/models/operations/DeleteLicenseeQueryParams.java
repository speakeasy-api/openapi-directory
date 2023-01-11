package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLicenseeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=forceCascade")
    public Boolean forceCascade;
    public DeleteLicenseeQueryParams withForceCascade(Boolean forceCascade) {
        this.forceCascade = forceCascade;
        return this;
    }
}