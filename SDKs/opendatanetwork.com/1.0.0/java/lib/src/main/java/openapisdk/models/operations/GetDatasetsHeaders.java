package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDatasetsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-App-Token")
    public String xAppToken;
    public GetDatasetsHeaders withXAppToken(String xAppToken) {
        this.xAppToken = xAppToken;
        return this;
    }
}