package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddressAutocompleteSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeApiKey apiKey;
    public AddressAutocompleteSecurity withApiKey(openapisdk.models.shared.SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeUserToken userToken;
    public AddressAutocompleteSecurity withUserToken(openapisdk.models.shared.SchemeUserToken userToken) {
        this.userToken = userToken;
        return this;
    }
}