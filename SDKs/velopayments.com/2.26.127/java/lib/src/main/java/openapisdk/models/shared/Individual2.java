package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Individual2 {
    @JsonProperty("dateOfBirth")
    public String dateOfBirth;
    public Individual2 withDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @JsonProperty("name")
    public Object name;
    public Individual2 withName(Object name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nationalIdentification")
    public String nationalIdentification;
    public Individual2 withNationalIdentification(String nationalIdentification) {
        this.nationalIdentification = nationalIdentification;
        return this;
    }
}