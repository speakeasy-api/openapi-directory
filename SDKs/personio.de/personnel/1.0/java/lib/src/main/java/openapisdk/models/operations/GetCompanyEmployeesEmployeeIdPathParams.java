package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCompanyEmployeesEmployeeIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employee_id")
    public Integer employeeId;
    public GetCompanyEmployeesEmployeeIdPathParams withEmployeeId(Integer employeeId) {
        this.employeeId = employeeId;
        return this;
    }
}