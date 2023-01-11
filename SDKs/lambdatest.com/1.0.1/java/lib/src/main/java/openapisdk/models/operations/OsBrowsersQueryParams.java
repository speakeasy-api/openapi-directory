package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsBrowsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=os")
    public String os;
    public OsBrowsersQueryParams withOs(String os) {
        this.os = os;
        return this;
    }
}