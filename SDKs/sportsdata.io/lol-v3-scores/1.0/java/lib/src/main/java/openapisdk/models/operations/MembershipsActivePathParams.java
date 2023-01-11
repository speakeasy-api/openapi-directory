package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MembershipsActivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public MembershipsActiveFormatEnum format;
    public MembershipsActivePathParams withFormat(MembershipsActiveFormatEnum format) {
        this.format = format;
        return this;
    }
}