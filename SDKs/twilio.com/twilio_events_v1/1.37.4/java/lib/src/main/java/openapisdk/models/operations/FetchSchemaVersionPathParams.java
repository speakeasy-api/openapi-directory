package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchSchemaVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public FetchSchemaVersionPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SchemaVersion")
    public Long schemaVersion;
    public FetchSchemaVersionPathParams withSchemaVersion(Long schemaVersion) {
        this.schemaVersion = schemaVersion;
        return this;
    }
}