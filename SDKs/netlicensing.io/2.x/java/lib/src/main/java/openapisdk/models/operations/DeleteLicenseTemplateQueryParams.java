package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLicenseTemplateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=forceCascade")
    public Boolean forceCascade;
    public DeleteLicenseTemplateQueryParams withForceCascade(Boolean forceCascade) {
        this.forceCascade = forceCascade;
        return this;
    }
}