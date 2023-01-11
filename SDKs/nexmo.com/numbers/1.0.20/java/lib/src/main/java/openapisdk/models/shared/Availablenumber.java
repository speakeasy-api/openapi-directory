package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Availablenumber {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cost")
    public String cost;
    public Availablenumber withCost(String cost) {
        this.cost = cost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public Availablenumber withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public String[] features;
    public Availablenumber withFeatures(String[] features) {
        this.features = features;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("msisdn")
    public String msisdn;
    public Availablenumber withMsisdn(String msisdn) {
        this.msisdn = msisdn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Availablenumber withType(String type) {
        this.type = type;
        return this;
    }
}