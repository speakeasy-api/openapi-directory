package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvoiceUblPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=guid")
    public String guid;
    public GetInvoiceUblPathParams withGuid(String guid) {
        this.guid = guid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packaging")
    public GetInvoiceUblPackagingEnum packaging;
    public GetInvoiceUblPathParams withPackaging(GetInvoiceUblPackagingEnum packaging) {
        this.packaging = packaging;
        return this;
    }
}