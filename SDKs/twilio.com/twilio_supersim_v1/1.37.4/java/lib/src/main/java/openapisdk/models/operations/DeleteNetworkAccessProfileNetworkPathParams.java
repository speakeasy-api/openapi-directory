package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNetworkAccessProfileNetworkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=NetworkAccessProfileSid")
    public String networkAccessProfileSid;
    public DeleteNetworkAccessProfileNetworkPathParams withNetworkAccessProfileSid(String networkAccessProfileSid) {
        this.networkAccessProfileSid = networkAccessProfileSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Sid")
    public String sid;
    public DeleteNetworkAccessProfileNetworkPathParams withSid(String sid) {
        this.sid = sid;
        return this;
    }
}