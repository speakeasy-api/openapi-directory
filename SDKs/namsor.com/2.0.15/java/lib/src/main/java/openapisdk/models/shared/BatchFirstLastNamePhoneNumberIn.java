package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchFirstLastNamePhoneNumberIn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personalNamesWithPhoneNumbers")
    public FirstLastNamePhoneNumberIn[] personalNamesWithPhoneNumbers;
    public BatchFirstLastNamePhoneNumberIn withPersonalNamesWithPhoneNumbers(FirstLastNamePhoneNumberIn[] personalNamesWithPhoneNumbers) {
        this.personalNamesWithPhoneNumbers = personalNamesWithPhoneNumbers;
        return this;
    }
}