package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCalendarsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=all")
    public Boolean all;
    public GetCalendarsQueryParams withAll(Boolean all) {
        this.all = all;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public Long userId;
    public GetCalendarsQueryParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}