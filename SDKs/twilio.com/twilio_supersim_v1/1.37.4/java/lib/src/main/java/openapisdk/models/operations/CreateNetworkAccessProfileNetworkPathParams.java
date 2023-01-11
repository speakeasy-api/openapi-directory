package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkAccessProfileNetworkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=NetworkAccessProfileSid")
    public String networkAccessProfileSid;
    public CreateNetworkAccessProfileNetworkPathParams withNetworkAccessProfileSid(String networkAccessProfileSid) {
        this.networkAccessProfileSid = networkAccessProfileSid;
        return this;
    }
}