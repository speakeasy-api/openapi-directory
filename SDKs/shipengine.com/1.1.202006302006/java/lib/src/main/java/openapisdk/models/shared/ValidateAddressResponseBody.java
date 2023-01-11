package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ValidateAddressResponseBody
 * An address validation result
**/
public class ValidateAddressResponseBody {
    @JsonProperty("matched_address")
    public ValidateAddressResponseBodyPartialAddress matchedAddress;
    public ValidateAddressResponseBody withMatchedAddress(ValidateAddressResponseBodyPartialAddress matchedAddress) {
        this.matchedAddress = matchedAddress;
        return this;
    }
    @JsonProperty("messages")
    public ResponseMessage[] messages;
    public ValidateAddressResponseBody withMessages(ResponseMessage[] messages) {
        this.messages = messages;
        return this;
    }
    @JsonProperty("original_address")
    public Address originalAddress;
    public ValidateAddressResponseBody withOriginalAddress(Address originalAddress) {
        this.originalAddress = originalAddress;
        return this;
    }
    @JsonProperty("status")
    public AddressValidationStatusEnum status;
    public ValidateAddressResponseBody withStatus(AddressValidationStatusEnum status) {
        this.status = status;
        return this;
    }
}