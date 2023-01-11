package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiSpecificationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-readme-version")
    public String xReadmeVersion;
    public GetApiSpecificationHeaders withXReadmeVersion(String xReadmeVersion) {
        this.xReadmeVersion = xReadmeVersion;
        return this;
    }
}