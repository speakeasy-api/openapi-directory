package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DependentCreateRequestPersonDetailsTobacco
 * Tobacco usage details (if applicable)
**/
public class DependentCreateRequestPersonDetailsTobacco {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public DependentCreateRequestPersonDetailsTobacco withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequency")
    public String frequency;
    public DependentCreateRequestPersonDetailsTobacco withFrequency(String frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("types")
    public DependentCreateRequestPersonDetailsTobaccoTypesEnum[] types;
    public DependentCreateRequestPersonDetailsTobacco withTypes(DependentCreateRequestPersonDetailsTobaccoTypesEnum[] types) {
        this.types = types;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public Boolean user;
    public DependentCreateRequestPersonDetailsTobacco withUser(Boolean user) {
        this.user = user;
        return this;
    }
}