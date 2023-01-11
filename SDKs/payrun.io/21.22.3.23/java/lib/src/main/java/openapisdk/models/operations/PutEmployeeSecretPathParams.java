package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutEmployeeSecretPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployeeId")
    public String employeeId;
    public PutEmployeeSecretPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public PutEmployeeSecretPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=SecretId")
    public String secretId;
    public PutEmployeeSecretPathParams withSecretId(String secretId) {
        this.secretId = secretId;
        return this;
    }
}