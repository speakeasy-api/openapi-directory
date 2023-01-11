package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetweatherQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city")
    public String city;
    public GetweatherQueryParams withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public GetweatherQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public GetweatherQueryParams withState(String state) {
        this.state = state;
        return this;
    }
}