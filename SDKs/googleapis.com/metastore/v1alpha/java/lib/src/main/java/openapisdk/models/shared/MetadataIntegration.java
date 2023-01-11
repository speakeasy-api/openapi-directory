package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetadataIntegration
 * Specifies how metastore metadata should be integrated with external services.
**/
public class MetadataIntegration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataCatalogConfig")
    public DataCatalogConfig dataCatalogConfig;
    public MetadataIntegration withDataCatalogConfig(DataCatalogConfig dataCatalogConfig) {
        this.dataCatalogConfig = dataCatalogConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataplexConfig")
    public DataplexConfig dataplexConfig;
    public MetadataIntegration withDataplexConfig(DataplexConfig dataplexConfig) {
        this.dataplexConfig = dataplexConfig;
        return this;
    }
}