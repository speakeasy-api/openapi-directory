package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateIndividual2 {
    @JsonProperty("dateOfBirth")
    public LocalDate dateOfBirth;
    public CreateIndividual2 withDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @JsonProperty("name")
    public Object name;
    public CreateIndividual2 withName(Object name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nationalIdentification")
    public String nationalIdentification;
    public CreateIndividual2 withNationalIdentification(String nationalIdentification) {
        this.nationalIdentification = nationalIdentification;
        return this;
    }
}