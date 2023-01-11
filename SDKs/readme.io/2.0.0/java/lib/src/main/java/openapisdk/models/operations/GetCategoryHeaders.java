package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCategoryHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-readme-version")
    public String xReadmeVersion;
    public GetCategoryHeaders withXReadmeVersion(String xReadmeVersion) {
        this.xReadmeVersion = xReadmeVersion;
        return this;
    }
}