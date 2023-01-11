package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchFirstLastNamePhoneCodedOut
 * Represents the output of inferring the LIKELY country and phone code of personal names+phones.
**/
public class BatchFirstLastNamePhoneCodedOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personalNamesWithPhoneNumbers")
    public FirstLastNamePhoneCodedOut[] personalNamesWithPhoneNumbers;
    public BatchFirstLastNamePhoneCodedOut withPersonalNamesWithPhoneNumbers(FirstLastNamePhoneCodedOut[] personalNamesWithPhoneNumbers) {
        this.personalNamesWithPhoneNumbers = personalNamesWithPhoneNumbers;
        return this;
    }
}