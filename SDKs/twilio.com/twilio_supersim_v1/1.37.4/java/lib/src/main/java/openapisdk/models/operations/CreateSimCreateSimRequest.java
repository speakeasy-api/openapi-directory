package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSimCreateSimRequest {
    @SpeakeasyMetadata("form:name=Iccid")
    public String iccid;
    public CreateSimCreateSimRequest withIccid(String iccid) {
        this.iccid = iccid;
        return this;
    }
    @SpeakeasyMetadata("form:name=RegistrationCode")
    public String registrationCode;
    public CreateSimCreateSimRequest withRegistrationCode(String registrationCode) {
        this.registrationCode = registrationCode;
        return this;
    }
}