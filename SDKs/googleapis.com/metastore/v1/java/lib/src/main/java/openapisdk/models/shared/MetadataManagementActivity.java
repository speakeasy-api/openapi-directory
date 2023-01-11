package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetadataManagementActivity
 * The metadata management activities of the metastore service.
**/
public class MetadataManagementActivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataExports")
    public MetadataExport[] metadataExports;
    public MetadataManagementActivity withMetadataExports(MetadataExport[] metadataExports) {
        this.metadataExports = metadataExports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restores")
    public Restore[] restores;
    public MetadataManagementActivity withRestores(Restore[] restores) {
        this.restores = restores;
        return this;
    }
}