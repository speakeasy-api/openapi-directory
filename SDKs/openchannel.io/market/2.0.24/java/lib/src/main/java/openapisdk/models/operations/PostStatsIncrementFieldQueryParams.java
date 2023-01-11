package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStatsIncrementFieldQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=appId")
    public String appId;
    public PostStatsIncrementFieldQueryParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public Long date;
    public PostStatsIncrementFieldQueryParams withDate(Long date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public String userId;
    public PostStatsIncrementFieldQueryParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=value")
    public Long value;
    public PostStatsIncrementFieldQueryParams withValue(Long value) {
        this.value = value;
        return this;
    }
}