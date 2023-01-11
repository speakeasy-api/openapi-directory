package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsRaceEthnicityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firstName")
    public String firstName;
    public UsRaceEthnicityPathParams withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lastName")
    public String lastName;
    public UsRaceEthnicityPathParams withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
}