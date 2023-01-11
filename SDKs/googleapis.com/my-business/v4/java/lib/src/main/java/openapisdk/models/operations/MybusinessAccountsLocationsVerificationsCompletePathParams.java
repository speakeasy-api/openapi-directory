package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessAccountsLocationsVerificationsCompletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessAccountsLocationsVerificationsCompletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}