package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvoiceJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=guid")
    public String guid;
    public GetInvoiceJsonPathParams withGuid(String guid) {
        this.guid = guid;
        return this;
    }
}