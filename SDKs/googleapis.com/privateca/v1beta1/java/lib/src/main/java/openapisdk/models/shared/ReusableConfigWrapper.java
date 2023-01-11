package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReusableConfigWrapper
 * A ReusableConfigWrapper describes values that may assist in creating an X.509 certificate, or a reference to a pre-defined set of values.
**/
public class ReusableConfigWrapper {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reusableConfig")
    public String reusableConfig;
    public ReusableConfigWrapper withReusableConfig(String reusableConfig) {
        this.reusableConfig = reusableConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reusableConfigValues")
    public ReusableConfigValues reusableConfigValues;
    public ReusableConfigWrapper withReusableConfigValues(ReusableConfigValues reusableConfigValues) {
        this.reusableConfigValues = reusableConfigValues;
        return this;
    }
}