package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLicenseesSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeApiKey apiKey;
    public ListLicenseesSecurity withApiKey(openapisdk.models.shared.SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeUserToken userToken;
    public ListLicenseesSecurity withUserToken(openapisdk.models.shared.SchemeUserToken userToken) {
        this.userToken = userToken;
        return this;
    }
}