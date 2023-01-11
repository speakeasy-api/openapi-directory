package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOccupantsOccupantIdOutputFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=occupantID")
    public String occupantID;
    public GetOccupantsOccupantIdOutputFormatPathParams withOccupantId(String occupantID) {
        this.occupantID = occupantID;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=outputFormat")
    public GetOccupantsOccupantIdOutputFormatOutputFormatEnum outputFormat;
    public GetOccupantsOccupantIdOutputFormatPathParams withOutputFormat(GetOccupantsOccupantIdOutputFormatOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}