package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CaseInput
 * A support case.
**/
public class CaseInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classification")
    public CaseClassification classification;
    public CaseInput withClassification(CaseClassification classification) {
        this.classification = classification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public ActorInput creator;
    public CaseInput withCreator(ActorInput creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CaseInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public CaseInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("escalated")
    public Boolean escalated;
    public CaseInput withEscalated(Boolean escalated) {
        this.escalated = escalated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public CaseInput withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CaseInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public CasePriorityEnum priority;
    public CaseInput withPriority(CasePriorityEnum priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public CaseSeverityEnum severity;
    public CaseInput withSeverity(CaseSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriberEmailAddresses")
    public String[] subscriberEmailAddresses;
    public CaseInput withSubscriberEmailAddresses(String[] subscriberEmailAddresses) {
        this.subscriberEmailAddresses = subscriberEmailAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testCase")
    public Boolean testCase;
    public CaseInput withTestCase(Boolean testCase) {
        this.testCase = testCase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public CaseInput withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}