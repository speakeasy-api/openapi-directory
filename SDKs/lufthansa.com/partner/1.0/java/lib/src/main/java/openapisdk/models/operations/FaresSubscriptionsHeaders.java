package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FaresSubscriptionsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public FaresSubscriptionsHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}