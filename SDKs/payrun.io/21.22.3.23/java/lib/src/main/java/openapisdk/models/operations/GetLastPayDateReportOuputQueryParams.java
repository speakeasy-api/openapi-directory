package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLastPayDateReportOuputQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployeeKey")
    public String employeeKey;
    public GetLastPayDateReportOuputQueryParams withEmployeeKey(String employeeKey) {
        this.employeeKey = employeeKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployerKey")
    public String employerKey;
    public GetLastPayDateReportOuputQueryParams withEmployerKey(String employerKey) {
        this.employerKey = employerKey;
        return this;
    }
}