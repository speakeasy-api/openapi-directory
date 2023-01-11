package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AvailableNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public AvailableNumbers withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numbers")
    public Availablenumber[] numbers;
    public AvailableNumbers withNumbers(Availablenumber[] numbers) {
        this.numbers = numbers;
        return this;
    }
}