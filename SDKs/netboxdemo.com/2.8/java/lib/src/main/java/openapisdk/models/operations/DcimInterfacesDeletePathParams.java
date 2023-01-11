package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInterfacesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimInterfacesDeletePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}