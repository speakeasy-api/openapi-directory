package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchNetworkAccessProfileNetworkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=NetworkAccessProfileSid")
    public String networkAccessProfileSid;
    public FetchNetworkAccessProfileNetworkPathParams withNetworkAccessProfileSid(String networkAccessProfileSid) {
        this.networkAccessProfileSid = networkAccessProfileSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public FetchNetworkAccessProfileNetworkPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}