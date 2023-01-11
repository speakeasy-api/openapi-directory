package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsListRecommendGoogleLocationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessAccountsListRecommendGoogleLocationsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}