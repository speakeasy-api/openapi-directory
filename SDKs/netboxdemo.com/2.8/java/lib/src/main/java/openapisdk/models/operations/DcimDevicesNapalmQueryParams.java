package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDevicesNapalmQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=method")
    public String method;
    public DcimDevicesNapalmQueryParams withMethod(String method) {
        this.method = method;
        return this;
    }
}