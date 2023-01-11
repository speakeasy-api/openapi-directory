package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAppsAppIdVersionsVersionStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=developerId")
    public String developerId;
    public PostAppsAppIdVersionsVersionStatusQueryParams withDeveloperId(String developerId) {
        this.developerId = developerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modifiedBy")
    public PostAppsAppIdVersionsVersionStatusModifiedByEnum modifiedBy;
    public PostAppsAppIdVersionsVersionStatusQueryParams withModifiedBy(PostAppsAppIdVersionsVersionStatusModifiedByEnum modifiedBy) {
        this.modifiedBy = modifiedBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reason")
    public String reason;
    public PostAppsAppIdVersionsVersionStatusQueryParams withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public PostAppsAppIdVersionsVersionStatusStatusEnum status;
    public PostAppsAppIdVersionsVersionStatusQueryParams withStatus(PostAppsAppIdVersionsVersionStatusStatusEnum status) {
        this.status = status;
        return this;
    }
}