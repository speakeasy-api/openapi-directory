package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BackendMetastore {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metastoreType")
    public BackendMetastoreMetastoreTypeEnum metastoreType;
    public BackendMetastore withMetastoreType(BackendMetastoreMetastoreTypeEnum metastoreType) {
        this.metastoreType = metastoreType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public BackendMetastore withName(String name) {
        this.name = name;
        return this;
    }
}