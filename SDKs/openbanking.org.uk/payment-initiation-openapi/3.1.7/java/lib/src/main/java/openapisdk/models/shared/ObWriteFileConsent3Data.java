package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWriteFileConsent3Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Authorisation")
    public ObWriteFileConsent3DataAuthorisation authorisation;
    public ObWriteFileConsent3Data withAuthorisation(ObWriteFileConsent3DataAuthorisation authorisation) {
        this.authorisation = authorisation;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteFileConsent3DataInitiation initiation;
    public ObWriteFileConsent3Data withInitiation(ObWriteFileConsent3DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SCASupportData")
    public ObscaSupportData1 scaSupportData;
    public ObWriteFileConsent3Data withScaSupportData(ObscaSupportData1 scaSupportData) {
        this.scaSupportData = scaSupportData;
        return this;
    }
}