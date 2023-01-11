package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePhoneNumberUpdatePhoneNumberRequest {
    @SpeakeasyMetadata("form:name=IsReserved")
    public Boolean isReserved;
    public UpdatePhoneNumberUpdatePhoneNumberRequest withIsReserved(Boolean isReserved) {
        this.isReserved = isReserved;
        return this;
    }
}