package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteListingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=domains")
    public String[] domains;
    public DeleteListingsQueryParams withDomains(String[] domains) {
        this.domains = domains;
        return this;
    }
}