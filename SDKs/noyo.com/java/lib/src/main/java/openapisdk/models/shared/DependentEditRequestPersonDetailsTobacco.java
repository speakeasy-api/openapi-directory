package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DependentEditRequestPersonDetailsTobacco
 * Tobacco usage details (if applicable)
**/
public class DependentEditRequestPersonDetailsTobacco {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public DependentEditRequestPersonDetailsTobacco withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public String frequency;
    public DependentEditRequestPersonDetailsTobacco withFrequency(String frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("types")
    public DependentEditRequestPersonDetailsTobaccoTypesEnum[] types;
    public DependentEditRequestPersonDetailsTobacco withTypes(DependentEditRequestPersonDetailsTobaccoTypesEnum[] types) {
        this.types = types;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public Boolean user;
    public DependentEditRequestPersonDetailsTobacco withUser(Boolean user) {
        this.user = user;
        return this;
    }
}