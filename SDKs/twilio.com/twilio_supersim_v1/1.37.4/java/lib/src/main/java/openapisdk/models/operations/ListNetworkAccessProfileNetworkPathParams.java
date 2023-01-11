package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListNetworkAccessProfileNetworkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=NetworkAccessProfileSid")
    public String networkAccessProfileSid;
    public ListNetworkAccessProfileNetworkPathParams withNetworkAccessProfileSid(String networkAccessProfileSid) {
        this.networkAccessProfileSid = networkAccessProfileSid;
        return this;
    }
}