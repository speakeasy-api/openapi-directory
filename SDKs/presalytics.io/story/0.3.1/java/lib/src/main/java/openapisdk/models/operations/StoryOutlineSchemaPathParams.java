package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryOutlineSchemaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=schema_version")
    public String schemaVersion;
    public StoryOutlineSchemaPathParams withSchemaVersion(String schemaVersion) {
        this.schemaVersion = schemaVersion;
        return this;
    }
}