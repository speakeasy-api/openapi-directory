package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeopleSearchPeopleGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public PeopleSearchPeopleGetHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}