package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataCatalogConfig
 * Specifies how metastore metadata should be integrated with the Data Catalog service.
**/
public class DataCatalogConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public DataCatalogConfig withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}