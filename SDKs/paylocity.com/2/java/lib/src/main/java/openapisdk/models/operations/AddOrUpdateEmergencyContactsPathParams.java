package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddOrUpdateEmergencyContactsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=companyId")
    public String companyId;
    public AddOrUpdateEmergencyContactsPathParams withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employeeId")
    public String employeeId;
    public AddOrUpdateEmergencyContactsPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
}