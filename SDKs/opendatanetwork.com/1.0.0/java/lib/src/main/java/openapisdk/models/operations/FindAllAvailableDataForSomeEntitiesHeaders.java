package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindAllAvailableDataForSomeEntitiesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-App-Token")
    public String xAppToken;
    public FindAllAvailableDataForSomeEntitiesHeaders withXAppToken(String xAppToken) {
        this.xAppToken = xAppToken;
        return this;
    }
}