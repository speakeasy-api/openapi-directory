package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enrollmentString")
    public String enrollmentString;
    public UpdateNetworkRequestBody withEnrollmentString(String enrollmentString) {
        this.enrollmentString = enrollmentString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public UpdateNetworkRequestBody withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public UpdateNetworkRequestBody withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public UpdateNetworkRequestBody withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}