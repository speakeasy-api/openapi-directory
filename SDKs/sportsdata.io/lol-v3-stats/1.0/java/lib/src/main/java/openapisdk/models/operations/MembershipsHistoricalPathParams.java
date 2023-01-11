package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MembershipsHistoricalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public MembershipsHistoricalFormatEnum format;
    public MembershipsHistoricalPathParams withFormat(MembershipsHistoricalFormatEnum format) {
        this.format = format;
        return this;
    }
}