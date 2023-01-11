package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiasporaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=countryIso2")
    public String countryIso2;
    public DiasporaPathParams withCountryIso2(String countryIso2) {
        this.countryIso2 = countryIso2;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firstName")
    public String firstName;
    public DiasporaPathParams withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lastName")
    public String lastName;
    public DiasporaPathParams withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
}