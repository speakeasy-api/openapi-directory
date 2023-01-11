package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListHistoricalGwsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public ListHistoricalGwsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}