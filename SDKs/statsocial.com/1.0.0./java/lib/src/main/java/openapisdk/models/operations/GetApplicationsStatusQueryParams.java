package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApplicationsStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public GetApplicationsStatusQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
}