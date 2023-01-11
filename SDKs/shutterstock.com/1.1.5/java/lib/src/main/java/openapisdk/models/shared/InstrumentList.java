package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InstrumentList
 * List of instruments
**/
public class InstrumentList {
    @JsonProperty("data")
    public String[] data;
    public InstrumentList withData(String[] data) {
        this.data = data;
        return this;
    }
}