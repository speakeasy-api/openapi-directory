package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrackingSnippetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=domain")
    public String domain;
    public GetTrackingSnippetQueryParams withDomain(String domain) {
        this.domain = domain;
        return this;
    }
}