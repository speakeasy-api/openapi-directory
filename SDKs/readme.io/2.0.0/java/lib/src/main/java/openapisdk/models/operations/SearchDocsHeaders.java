package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchDocsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-readme-version")
    public String xReadmeVersion;
    public SearchDocsHeaders withXReadmeVersion(String xReadmeVersion) {
        this.xReadmeVersion = xReadmeVersion;
        return this;
    }
}