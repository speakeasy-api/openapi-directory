package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyLogoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=domain")
    public String domain;
    public CompanyLogoQueryParams withDomain(String domain) {
        this.domain = domain;
        return this;
    }
}