package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadApiSpecificationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-readme-version")
    public String xReadmeVersion;
    public UploadApiSpecificationHeaders withXReadmeVersion(String xReadmeVersion) {
        this.xReadmeVersion = xReadmeVersion;
        return this;
    }
}