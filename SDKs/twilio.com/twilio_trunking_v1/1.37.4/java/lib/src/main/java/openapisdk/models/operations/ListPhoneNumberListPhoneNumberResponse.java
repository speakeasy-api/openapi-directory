package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPhoneNumberListPhoneNumberResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListPhoneNumberListPhoneNumberResponseMeta meta;
    public ListPhoneNumberListPhoneNumberResponse withMeta(ListPhoneNumberListPhoneNumberResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_numbers")
    public openapisdk.models.shared.TrunkingV1TrunkPhoneNumber[] phoneNumbers;
    public ListPhoneNumberListPhoneNumberResponse withPhoneNumbers(openapisdk.models.shared.TrunkingV1TrunkPhoneNumber[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
}