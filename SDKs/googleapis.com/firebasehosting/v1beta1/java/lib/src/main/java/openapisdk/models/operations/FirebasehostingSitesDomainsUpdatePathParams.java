package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasehostingSitesDomainsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FirebasehostingSitesDomainsUpdatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}