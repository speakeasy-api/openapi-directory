package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetfullnameparsedmatchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=firstname")
    public String firstname;
    public GetfullnameparsedmatchQueryParams withFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lastname")
    public String lastname;
    public GetfullnameparsedmatchQueryParams withLastname(String lastname) {
        this.lastname = lastname;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=license")
    public String license;
    public GetfullnameparsedmatchQueryParams withLicense(String license) {
        this.license = license;
        return this;
    }
}