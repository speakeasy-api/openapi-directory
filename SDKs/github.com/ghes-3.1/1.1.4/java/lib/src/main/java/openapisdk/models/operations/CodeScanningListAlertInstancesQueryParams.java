package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CodeScanningListAlertInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public CodeScanningListAlertInstancesQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public CodeScanningListAlertInstancesQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ref")
    public String ref;
    public CodeScanningListAlertInstancesQueryParams withRef(String ref) {
        this.ref = ref;
        return this;
    }
}