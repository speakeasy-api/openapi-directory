package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObWriteFileConsent3 {
    @JsonProperty("Data")
    public ObWriteFileConsent3Data data;
    public ObWriteFileConsent3 withData(ObWriteFileConsent3Data data) {
        this.data = data;
        return this;
    }
}