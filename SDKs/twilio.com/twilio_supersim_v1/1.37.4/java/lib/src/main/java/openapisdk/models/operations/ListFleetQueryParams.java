package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFleetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NetworkAccessProfile")
    public String networkAccessProfile;
    public ListFleetQueryParams withNetworkAccessProfile(String networkAccessProfile) {
        this.networkAccessProfile = networkAccessProfile;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListFleetQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}