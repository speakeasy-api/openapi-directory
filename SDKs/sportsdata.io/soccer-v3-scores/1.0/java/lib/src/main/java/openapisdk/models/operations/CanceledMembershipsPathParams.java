package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CanceledMembershipsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public CanceledMembershipsFormatEnum format;
    public CanceledMembershipsPathParams withFormat(CanceledMembershipsFormatEnum format) {
        this.format = format;
        return this;
    }
}