package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindTheRelativesOfAnEntityHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-App-Token")
    public String xAppToken;
    public FindTheRelativesOfAnEntityHeaders withXAppToken(String xAppToken) {
        this.xAppToken = xAppToken;
        return this;
    }
}