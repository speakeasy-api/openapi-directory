package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimPowerPortTemplatesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimPowerPortTemplatesReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}