package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSetupV1CompaniesRegionsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteSetupV1CompaniesRegionsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}