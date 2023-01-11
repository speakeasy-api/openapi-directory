package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddLocalTaxPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=companyId")
    public String companyId;
    public AddLocalTaxPathParams withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employeeId")
    public String employeeId;
    public AddLocalTaxPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
}