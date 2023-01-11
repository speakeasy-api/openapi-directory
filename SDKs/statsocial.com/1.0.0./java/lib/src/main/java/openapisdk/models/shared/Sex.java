package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Sex {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Female")
    public Female female;
    public Sex withFemale(Female female) {
        this.female = female;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Male")
    public Male male;
    public Sex withMale(Male male) {
        this.male = male;
        return this;
    }
}