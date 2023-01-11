package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrievedistributionlinksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=surveyId")
    public String surveyId;
    public RetrievedistributionlinksQueryParams withSurveyId(String surveyId) {
        this.surveyId = surveyId;
        return this;
    }
}