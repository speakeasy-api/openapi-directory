package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDevicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=all")
    public Boolean all;
    public GetDevicesQueryParams withAll(Boolean all) {
        this.all = all;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public Long id;
    public GetDevicesQueryParams withId(Long id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uniqueId")
    public String uniqueId;
    public GetDevicesQueryParams withUniqueId(String uniqueId) {
        this.uniqueId = uniqueId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public Long userId;
    public GetDevicesQueryParams withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}