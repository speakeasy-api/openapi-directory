package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Session
 * Sessions contain metadata, such as a user-friendly name and time interval information.
**/
public class Session {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeTimeMillis")
    public String activeTimeMillis;
    public Session withActiveTimeMillis(String activeTimeMillis) {
        this.activeTimeMillis = activeTimeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityType")
    public Integer activityType;
    public Session withActivityType(Integer activityType) {
        this.activityType = activityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("application")
    public Application application;
    public Session withApplication(Application application) {
        this.application = application;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Session withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTimeMillis")
    public String endTimeMillis;
    public Session withEndTimeMillis(String endTimeMillis) {
        this.endTimeMillis = endTimeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Session withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modifiedTimeMillis")
    public String modifiedTimeMillis;
    public Session withModifiedTimeMillis(String modifiedTimeMillis) {
        this.modifiedTimeMillis = modifiedTimeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Session withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTimeMillis")
    public String startTimeMillis;
    public Session withStartTimeMillis(String startTimeMillis) {
        this.startTimeMillis = startTimeMillis;
        return this;
    }
}