package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppsAppIdVersionsVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=developerId")
    public String developerId;
    public GetAppsAppIdVersionsVersionQueryParams withDeveloperId(String developerId) {
        this.developerId = developerId;
        return this;
    }
}