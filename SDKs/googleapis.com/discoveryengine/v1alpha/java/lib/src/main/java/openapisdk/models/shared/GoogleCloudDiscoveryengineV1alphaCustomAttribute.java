package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudDiscoveryengineV1alphaCustomAttribute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numbers")
    public Double[] numbers;
    public GoogleCloudDiscoveryengineV1alphaCustomAttribute withNumbers(Double[] numbers) {
        this.numbers = numbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String[] text;
    public GoogleCloudDiscoveryengineV1alphaCustomAttribute withText(String[] text) {
        this.text = text;
        return this;
    }
}