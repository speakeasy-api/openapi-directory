package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataplexConfig
 * Specifies how metastore metadata should be integrated with the Dataplex service.
**/
public class DataplexConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lakeResources")
    public java.util.Map<String, Lake> lakeResources;
    public DataplexConfig withLakeResources(java.util.Map<String, Lake> lakeResources) {
        this.lakeResources = lakeResources;
        return this;
    }
}