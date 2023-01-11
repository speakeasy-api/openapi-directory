package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DistributionsResponseResultElementsSurveyLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationDate")
    public String expirationDate;
    public DistributionsResponseResultElementsSurveyLink withExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkType")
    public String linkType;
    public DistributionsResponseResultElementsSurveyLink withLinkType(String linkType) {
        this.linkType = linkType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("surveyId")
    public String surveyId;
    public DistributionsResponseResultElementsSurveyLink withSurveyId(String surveyId) {
        this.surveyId = surveyId;
        return this;
    }
}