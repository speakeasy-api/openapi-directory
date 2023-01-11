package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetP45ReportOutputQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployeeKey")
    public String employeeKey;
    public GetP45ReportOutputQueryParams withEmployeeKey(String employeeKey) {
        this.employeeKey = employeeKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployerKey")
    public String employerKey;
    public GetP45ReportOutputQueryParams withEmployerKey(String employerKey) {
        this.employerKey = employerKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransformDefinitionKey")
    public String transformDefinitionKey;
    public GetP45ReportOutputQueryParams withTransformDefinitionKey(String transformDefinitionKey) {
        this.transformDefinitionKey = transformDefinitionKey;
        return this;
    }
}