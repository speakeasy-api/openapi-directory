package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsrdapIpGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ipId")
    public String ipId;
    public DomainsrdapIpGetPathParams withIpId(String ipId) {
        this.ipId = ipId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ipId1")
    public String ipId1;
    public DomainsrdapIpGetPathParams withIpId1(String ipId1) {
        this.ipId1 = ipId1;
        return this;
    }
}