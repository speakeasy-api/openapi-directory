package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Case
 * A support case.
**/
public class Case {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classification")
    public CaseClassification classification;
    public Case withClassification(CaseClassification classification) {
        this.classification = classification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Case withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public Actor creator;
    public Case withCreator(Actor creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Case withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Case withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("escalated")
    public Boolean escalated;
    public Case withEscalated(Boolean escalated) {
        this.escalated = escalated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public Case withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Case withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public CasePriorityEnum priority;
    public Case withPriority(CasePriorityEnum priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public CaseSeverityEnum severity;
    public Case withSeverity(CaseSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public CaseStateEnum state;
    public Case withState(CaseStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriberEmailAddresses")
    public String[] subscriberEmailAddresses;
    public Case withSubscriberEmailAddresses(String[] subscriberEmailAddresses) {
        this.subscriberEmailAddresses = subscriberEmailAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testCase")
    public Boolean testCase;
    public Case withTestCase(Boolean testCase) {
        this.testCase = testCase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public Case withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Case withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}