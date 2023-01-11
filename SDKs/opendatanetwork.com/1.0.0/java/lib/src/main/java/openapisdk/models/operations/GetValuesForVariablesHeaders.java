package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetValuesForVariablesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-App-Token")
    public String xAppToken;
    public GetValuesForVariablesHeaders withXAppToken(String xAppToken) {
        this.xAppToken = xAppToken;
        return this;
    }
}