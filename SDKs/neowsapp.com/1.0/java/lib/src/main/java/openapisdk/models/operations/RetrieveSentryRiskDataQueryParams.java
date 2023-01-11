package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveSentryRiskDataQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_active")
    public Boolean isActive;
    public RetrieveSentryRiskDataQueryParams withIsActive(Boolean isActive) {
        this.isActive = isActive;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public RetrieveSentryRiskDataQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Integer size;
    public RetrieveSentryRiskDataQueryParams withSize(Integer size) {
        this.size = size;
        return this;
    }
}