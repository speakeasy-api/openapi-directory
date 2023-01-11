package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetastoreConfig
 * Specifies a Metastore configuration.
**/
public class MetastoreConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataprocMetastoreService")
    public String dataprocMetastoreService;
    public MetastoreConfig withDataprocMetastoreService(String dataprocMetastoreService) {
        this.dataprocMetastoreService = dataprocMetastoreService;
        return this;
    }
}