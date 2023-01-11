package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JurisdictionDetailJurisdictionsJurisdictionIdGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public JurisdictionDetailJurisdictionsJurisdictionIdGetHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}