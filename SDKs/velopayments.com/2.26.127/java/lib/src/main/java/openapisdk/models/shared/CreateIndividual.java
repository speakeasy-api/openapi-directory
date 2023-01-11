package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateIndividual {
    @JsonProperty("dateOfBirth")
    public LocalDate dateOfBirth;
    public CreateIndividual withDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @JsonProperty("name")
    public Object name;
    public CreateIndividual withName(Object name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nationalIdentification")
    public String nationalIdentification;
    public CreateIndividual withNationalIdentification(String nationalIdentification) {
        this.nationalIdentification = nationalIdentification;
        return this;
    }
}