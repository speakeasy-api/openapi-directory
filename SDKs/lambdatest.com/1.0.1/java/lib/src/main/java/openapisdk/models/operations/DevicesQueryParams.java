package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DevicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=os")
    public String os;
    public DevicesQueryParams withOs(String os) {
        this.os = os;
        return this;
    }
}