/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListSchemaVersionListSchemaVersionResponse - OK
 */
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
    public org.openapis.openapi.models.shared.EventsV1SchemaSchemaVersion[] schemaVersions;
    public ListSchemaVersionListSchemaVersionResponse withSchemaVersions(org.openapis.openapi.models.shared.EventsV1SchemaSchemaVersion[] schemaVersions) {
        this.schemaVersions = schemaVersions;
        return this;
    }
    
}
