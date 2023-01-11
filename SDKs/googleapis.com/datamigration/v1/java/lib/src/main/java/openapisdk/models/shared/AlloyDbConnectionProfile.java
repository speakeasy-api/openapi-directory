package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AlloyDbConnectionProfile
 * Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
**/
public class AlloyDbConnectionProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterId")
    public String clusterId;
    public AlloyDbConnectionProfile withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public AlloyDbSettings settings;
    public AlloyDbConnectionProfile withSettings(AlloyDbSettings settings) {
        this.settings = settings;
        return this;
    }
}