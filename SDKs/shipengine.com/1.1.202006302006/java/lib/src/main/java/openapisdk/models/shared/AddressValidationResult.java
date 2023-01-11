package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AddressValidationResult
 * An address validation result
**/
public class AddressValidationResult {
    @JsonProperty("matched_address")
    public AddressValidationResultPartialAddress matchedAddress;
    public AddressValidationResult withMatchedAddress(AddressValidationResultPartialAddress matchedAddress) {
        this.matchedAddress = matchedAddress;
        return this;
    }
    @JsonProperty("messages")
    public ResponseMessage[] messages;
    public AddressValidationResult withMessages(ResponseMessage[] messages) {
        this.messages = messages;
        return this;
    }
    @JsonProperty("original_address")
    public Address originalAddress;
    public AddressValidationResult withOriginalAddress(Address originalAddress) {
        this.originalAddress = originalAddress;
        return this;
    }
    @JsonProperty("status")
    public AddressValidationStatusEnum status;
    public AddressValidationResult withStatus(AddressValidationStatusEnum status) {
        this.status = status;
        return this;
    }
}