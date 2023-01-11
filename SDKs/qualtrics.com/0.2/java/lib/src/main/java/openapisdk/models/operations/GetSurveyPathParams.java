package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSurveyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SurveyId")
    public String surveyId;
    public GetSurveyPathParams withSurveyId(String surveyId) {
        this.surveyId = surveyId;
        return this;
    }
}