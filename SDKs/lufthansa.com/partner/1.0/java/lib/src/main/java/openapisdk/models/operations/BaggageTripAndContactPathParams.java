package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaggageTripAndContactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=searchID")
    public String searchID;
    public BaggageTripAndContactPathParams withSearchId(String searchID) {
        this.searchID = searchID;
        return this;
    }
}