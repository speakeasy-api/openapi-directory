package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDocHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-readme-version")
    public String xReadmeVersion;
    public CreateDocHeaders withXReadmeVersion(String xReadmeVersion) {
        this.xReadmeVersion = xReadmeVersion;
        return this;
    }
}