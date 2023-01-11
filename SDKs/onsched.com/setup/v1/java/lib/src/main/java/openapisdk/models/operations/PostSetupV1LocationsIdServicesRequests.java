package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupV1LocationsIdServicesRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public String[] strings;
    public PostSetupV1LocationsIdServicesRequests withStrings(String[] strings) {
        this.strings = strings;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String[] strings1;
    public PostSetupV1LocationsIdServicesRequests withStrings1(String[] strings1) {
        this.strings1 = strings1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public String[] strings2;
    public PostSetupV1LocationsIdServicesRequests withStrings2(String[] strings2) {
        this.strings2 = strings2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public String[] strings3;
    public PostSetupV1LocationsIdServicesRequests withStrings3(String[] strings3) {
        this.strings3 = strings3;
        return this;
    }
}