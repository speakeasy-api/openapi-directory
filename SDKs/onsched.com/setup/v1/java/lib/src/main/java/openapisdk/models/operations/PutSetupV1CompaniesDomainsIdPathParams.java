package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1CompaniesDomainsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutSetupV1CompaniesDomainsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}