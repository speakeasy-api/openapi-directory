package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Survey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("survey_guid")
    public String surveyGuid;
    public Survey withSurveyGuid(String surveyGuid) {
        this.surveyGuid = surveyGuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("survey_introduction_text")
    public String surveyIntroductionText;
    public Survey withSurveyIntroductionText(String surveyIntroductionText) {
        this.surveyIntroductionText = surveyIntroductionText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("survey_link")
    public String surveyLink;
    public Survey withSurveyLink(String surveyLink) {
        this.surveyLink = surveyLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("survey_page")
    public SurveyPageEnum surveyPage;
    public Survey withSurveyPage(SurveyPageEnum surveyPage) {
        this.surveyPage = surveyPage;
        return this;
    }
}