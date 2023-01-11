package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCompanyEmployeesEmployeeIdProfilePictureWidthPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employee_id")
    public Integer employeeId;
    public GetCompanyEmployeesEmployeeIdProfilePictureWidthPathParams withEmployeeId(Integer employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=width")
    public Integer width;
    public GetCompanyEmployeesEmployeeIdProfilePictureWidthPathParams withWidth(Integer width) {
        this.width = width;
        return this;
    }
}