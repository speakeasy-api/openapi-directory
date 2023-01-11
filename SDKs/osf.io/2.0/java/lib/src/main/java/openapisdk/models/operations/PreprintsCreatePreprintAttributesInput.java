package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreprintsCreatePreprintAttributesInput
 * The properties of the preprint entity.
**/
public class PreprintsCreatePreprintAttributesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doi")
    public String doi;
    public PreprintsCreatePreprintAttributesInput withDoi(String doi) {
        this.doi = doi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license_record")
    public String licenseRecord;
    public PreprintsCreatePreprintAttributesInput withLicenseRecord(String licenseRecord) {
        this.licenseRecord = licenseRecord;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjects")
    public String[] subjects;
    public PreprintsCreatePreprintAttributesInput withSubjects(String[] subjects) {
        this.subjects = subjects;
        return this;
    }
}