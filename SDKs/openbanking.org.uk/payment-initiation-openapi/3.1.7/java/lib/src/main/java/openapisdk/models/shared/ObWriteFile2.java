package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ObWriteFile2 {
    @JsonProperty("Data")
    public ObWriteFile2Data data;
    public ObWriteFile2 withData(ObWriteFile2Data data) {
        this.data = data;
        return this;
    }
}