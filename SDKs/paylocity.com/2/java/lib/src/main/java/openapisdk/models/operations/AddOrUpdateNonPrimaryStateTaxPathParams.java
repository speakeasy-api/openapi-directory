package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddOrUpdateNonPrimaryStateTaxPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=companyId")
    public String companyId;
    public AddOrUpdateNonPrimaryStateTaxPathParams withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employeeId")
    public String employeeId;
    public AddOrUpdateNonPrimaryStateTaxPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
}