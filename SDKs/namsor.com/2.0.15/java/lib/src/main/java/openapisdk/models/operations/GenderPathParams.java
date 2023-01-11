package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firstName")
    public String firstName;
    public GenderPathParams withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lastName")
    public String lastName;
    public GenderPathParams withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
}