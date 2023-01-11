package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetupV1ResourcesIdServicesRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public String[] strings;
    public PostSetupV1ResourcesIdServicesRequests withStrings(String[] strings) {
        this.strings = strings;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String[] strings1;
    public PostSetupV1ResourcesIdServicesRequests withStrings1(String[] strings1) {
        this.strings1 = strings1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public String[] strings2;
    public PostSetupV1ResourcesIdServicesRequests withStrings2(String[] strings2) {
        this.strings2 = strings2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public String[] strings3;
    public PostSetupV1ResourcesIdServicesRequests withStrings3(String[] strings3) {
        this.strings3 = strings3;
        return this;
    }
}