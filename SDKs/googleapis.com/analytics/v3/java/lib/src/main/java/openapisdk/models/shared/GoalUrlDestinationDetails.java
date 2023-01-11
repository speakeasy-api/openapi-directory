package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoalUrlDestinationDetails
 * Details for the goal of the type URL_DESTINATION.
**/
public class GoalUrlDestinationDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caseSensitive")
    public Boolean caseSensitive;
    public GoalUrlDestinationDetails withCaseSensitive(Boolean caseSensitive) {
        this.caseSensitive = caseSensitive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstStepRequired")
    public Boolean firstStepRequired;
    public GoalUrlDestinationDetails withFirstStepRequired(Boolean firstStepRequired) {
        this.firstStepRequired = firstStepRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchType")
    public String matchType;
    public GoalUrlDestinationDetails withMatchType(String matchType) {
        this.matchType = matchType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steps")
    public GoalUrlDestinationDetailsSteps[] steps;
    public GoalUrlDestinationDetails withSteps(GoalUrlDestinationDetailsSteps[] steps) {
        this.steps = steps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GoalUrlDestinationDetails withUrl(String url) {
        this.url = url;
        return this;
    }
}