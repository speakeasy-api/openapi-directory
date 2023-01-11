package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDpsMessageFromEmployerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DpsMessageId")
    public String dpsMessageId;
    public GetDpsMessageFromEmployerPathParams withDpsMessageId(String dpsMessageId) {
        this.dpsMessageId = dpsMessageId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetDpsMessageFromEmployerPathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}