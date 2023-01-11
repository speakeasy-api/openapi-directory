package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeopleGeoPeopleGeoGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public PeopleGeoPeopleGeoGetHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}