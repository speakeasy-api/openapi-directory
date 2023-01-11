package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AlloyDbConnectionProfileInput
 * Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
**/
public class AlloyDbConnectionProfileInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterId")
    public String clusterId;
    public AlloyDbConnectionProfileInput withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public AlloyDbSettingsInput settings;
    public AlloyDbConnectionProfileInput withSettings(AlloyDbSettingsInput settings) {
        this.settings = settings;
        return this;
    }
}