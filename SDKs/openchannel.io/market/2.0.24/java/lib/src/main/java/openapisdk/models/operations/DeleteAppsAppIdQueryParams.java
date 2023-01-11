package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAppsAppIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=developerId")
    public String developerId;
    public DeleteAppsAppIdQueryParams withDeveloperId(String developerId) {
        this.developerId = developerId;
        return this;
    }
}