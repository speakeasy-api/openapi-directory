package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasRecentActivityListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ExtrasRecentActivityListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ExtrasRecentActivityListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user")
    public String user;
    public ExtrasRecentActivityListQueryParams withUser(String user) {
        this.user = user;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=username")
    public String username;
    public ExtrasRecentActivityListQueryParams withUsername(String username) {
        this.username = username;
        return this;
    }
}