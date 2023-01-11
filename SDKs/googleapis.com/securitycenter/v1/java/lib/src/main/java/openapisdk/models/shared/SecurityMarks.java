package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecurityMarks
 * User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.
**/
public class SecurityMarks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canonicalName")
    public String canonicalName;
    public SecurityMarks withCanonicalName(String canonicalName) {
        this.canonicalName = canonicalName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marks")
    public java.util.Map<String, String> marks;
    public SecurityMarks withMarks(java.util.Map<String, String> marks) {
        this.marks = marks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SecurityMarks withName(String name) {
        this.name = name;
        return this;
    }
}