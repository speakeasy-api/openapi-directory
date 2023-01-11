package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSetupV1CompaniesDomainsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteSetupV1CompaniesDomainsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}