package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public CreateDocumentPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}