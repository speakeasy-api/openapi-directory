package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsRaceEthnicityZip5PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firstName")
    public String firstName;
    public UsRaceEthnicityZip5PathParams withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lastName")
    public String lastName;
    public UsRaceEthnicityZip5PathParams withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=zip5Code")
    public String zip5Code;
    public UsRaceEthnicityZip5PathParams withZip5Code(String zip5Code) {
        this.zip5Code = zip5Code;
        return this;
    }
}