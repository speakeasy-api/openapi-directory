package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAppsAppIdVersionsVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=developerId")
    public String developerId;
    public DeleteAppsAppIdVersionsVersionQueryParams withDeveloperId(String developerId) {
        this.developerId = developerId;
        return this;
    }
}