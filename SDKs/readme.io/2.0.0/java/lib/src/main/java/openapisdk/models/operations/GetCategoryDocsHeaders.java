package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCategoryDocsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-readme-version")
    public String xReadmeVersion;
    public GetCategoryDocsHeaders withXReadmeVersion(String xReadmeVersion) {
        this.xReadmeVersion = xReadmeVersion;
        return this;
    }
}