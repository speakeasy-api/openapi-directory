package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFaxMediaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FaxSid")
    public String faxSid;
    public ListFaxMediaPathParams withFaxSid(String faxSid) {
        this.faxSid = faxSid;
        return this;
    }
}