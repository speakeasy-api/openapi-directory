package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDistributionLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public CreateDistributionLinks withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateDistributionLinks withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationDate")
    public String expirationDate;
    public CreateDistributionLinks withExpirationDate(String expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkType")
    public String linkType;
    public CreateDistributionLinks withLinkType(String linkType) {
        this.linkType = linkType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mailingListId")
    public String mailingListId;
    public CreateDistributionLinks withMailingListId(String mailingListId) {
        this.mailingListId = mailingListId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("surveyId")
    public String surveyId;
    public CreateDistributionLinks withSurveyId(String surveyId) {
        this.surveyId = surveyId;
        return this;
    }
}