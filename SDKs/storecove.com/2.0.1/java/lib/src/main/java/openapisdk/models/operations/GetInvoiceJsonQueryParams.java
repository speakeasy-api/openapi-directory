package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvoiceJsonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pmv")
    public String pmv;
    public GetInvoiceJsonQueryParams withPmv(String pmv) {
        this.pmv = pmv;
        return this;
    }
}