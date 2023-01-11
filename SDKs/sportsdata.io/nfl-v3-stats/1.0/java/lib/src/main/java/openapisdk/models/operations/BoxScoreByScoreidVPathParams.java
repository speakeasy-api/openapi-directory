package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BoxScoreByScoreidVPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public BoxScoreByScoreidVFormatEnum format;
    public BoxScoreByScoreidVPathParams withFormat(BoxScoreByScoreidVFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scoreid")
    public String scoreid;
    public BoxScoreByScoreidVPathParams withScoreid(String scoreid) {
        this.scoreid = scoreid;
        return this;
    }
}