package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistributionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=surveyId")
    public String surveyId;
    public GetDistributionsQueryParams withSurveyId(String surveyId) {
        this.surveyId = surveyId;
        return this;
    }
}