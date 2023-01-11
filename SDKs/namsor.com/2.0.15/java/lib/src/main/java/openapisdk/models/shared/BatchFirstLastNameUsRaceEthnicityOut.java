package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchFirstLastNameUsRaceEthnicityOut
 * Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.
**/
public class BatchFirstLastNameUsRaceEthnicityOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personalNames")
    public FirstLastNameUsRaceEthnicityOut[] personalNames;
    public BatchFirstLastNameUsRaceEthnicityOut withPersonalNames(FirstLastNameUsRaceEthnicityOut[] personalNames) {
        this.personalNames = personalNames;
        return this;
    }
}