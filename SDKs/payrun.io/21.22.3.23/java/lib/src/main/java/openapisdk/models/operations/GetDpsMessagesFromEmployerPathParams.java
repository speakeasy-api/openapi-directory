package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDpsMessagesFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetDpsMessagesFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}