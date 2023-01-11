package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadHtmlInvoicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DownloadHtmlInvoicePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}