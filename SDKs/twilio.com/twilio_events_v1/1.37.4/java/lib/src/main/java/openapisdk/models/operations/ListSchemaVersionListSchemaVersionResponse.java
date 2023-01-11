package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSchemaVersionListSchemaVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSchemaVersionListSchemaVersionResponseMeta meta;
    public ListSchemaVersionListSchemaVersionResponse withMeta(ListSchemaVersionListSchemaVersionResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema_versions")
    public openapisdk.models.shared.EventsV1SchemaSchemaVersion[] schemaVersions;
    public ListSchemaVersionListSchemaVersionResponse withSchemaVersions(openapisdk.models.shared.EventsV1SchemaSchemaVersion[] schemaVersions) {
        this.schemaVersions = schemaVersions;
        return this;
    }
}