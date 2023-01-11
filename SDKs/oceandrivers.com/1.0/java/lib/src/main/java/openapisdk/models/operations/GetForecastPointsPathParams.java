package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetForecastPointsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=language")
    public String language;
    public GetForecastPointsPathParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=yatchclubid")
    public String yatchclubid;
    public GetForecastPointsPathParams withYatchclubid(String yatchclubid) {
        this.yatchclubid = yatchclubid;
        return this;
    }
}