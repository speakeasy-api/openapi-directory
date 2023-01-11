package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEventNotificationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-fapi-financial-id")
    public String xFapiFinancialId;
    public CreateEventNotificationHeaders withXFapiFinancialId(String xFapiFinancialId) {
        this.xFapiFinancialId = xFapiFinancialId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-fapi-interaction-id")
    public String xFapiInteractionId;
    public CreateEventNotificationHeaders withXFapiInteractionId(String xFapiInteractionId) {
        this.xFapiInteractionId = xFapiInteractionId;
        return this;
    }
}