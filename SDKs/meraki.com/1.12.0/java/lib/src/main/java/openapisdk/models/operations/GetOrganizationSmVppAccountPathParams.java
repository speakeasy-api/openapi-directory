package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationSmVppAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationSmVppAccountPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vppAccountId")
    public String vppAccountId;
    public GetOrganizationSmVppAccountPathParams withVppAccountId(String vppAccountId) {
        this.vppAccountId = vppAccountId;
        return this;
    }
}