package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JurisdictionListJurisdictionsGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public JurisdictionListJurisdictionsGetHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}