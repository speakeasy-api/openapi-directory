package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PropertyControllerGetPropertiesPhotosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=count")
    public Integer count;
    public PropertyControllerGetPropertiesPhotosQueryParams withCount(Integer count) {
        this.count = count;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public PropertyControllerGetPropertiesPhotosQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public PropertyControllerGetPropertiesPhotosQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}