package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchFirstLastNamePhoneNumberGeoIn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personalNamesWithPhoneNumbers")
    public FirstLastNamePhoneNumberGeoIn[] personalNamesWithPhoneNumbers;
    public BatchFirstLastNamePhoneNumberGeoIn withPersonalNamesWithPhoneNumbers(FirstLastNamePhoneNumberGeoIn[] personalNamesWithPhoneNumbers) {
        this.personalNamesWithPhoneNumbers = personalNamesWithPhoneNumbers;
        return this;
    }
}