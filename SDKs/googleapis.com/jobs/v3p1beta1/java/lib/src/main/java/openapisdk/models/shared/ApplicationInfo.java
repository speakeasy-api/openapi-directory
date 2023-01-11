package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationInfo
 * Application related details of a job posting.
**/
public class ApplicationInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emails")
    public String[] emails;
    public ApplicationInfo withEmails(String[] emails) {
        this.emails = emails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instruction")
    public String instruction;
    public ApplicationInfo withInstruction(String instruction) {
        this.instruction = instruction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uris")
    public String[] uris;
    public ApplicationInfo withUris(String[] uris) {
        this.uris = uris;
        return this;
    }
}