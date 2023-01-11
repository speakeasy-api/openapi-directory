package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNamesNameIdOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nameId")
    public Long nameId;
    public GetNamesNameIdOutputFormatPathParams withNameId(Long nameId) {
        this.nameId = nameId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetNamesNameIdOutputFormatOutputFormatEnum outputFormat;
    public GetNamesNameIdOutputFormatPathParams withOutputFormat(GetNamesNameIdOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}