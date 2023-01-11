package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadPdfInvoicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DownloadPdfInvoicePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}