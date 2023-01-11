package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAppsAppIdPublishQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=autoApprove")
    public Boolean autoApprove;
    public PostAppsAppIdPublishQueryParams withAutoApprove(Boolean autoApprove) {
        this.autoApprove = autoApprove;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=developerId")
    public String developerId;
    public PostAppsAppIdPublishQueryParams withDeveloperId(String developerId) {
        this.developerId = developerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=version")
    public Long version;
    public PostAppsAppIdPublishQueryParams withVersion(Long version) {
        this.version = version;
        return this;
    }
}