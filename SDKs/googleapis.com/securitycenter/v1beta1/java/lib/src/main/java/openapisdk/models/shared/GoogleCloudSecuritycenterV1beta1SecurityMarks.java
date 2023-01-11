package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudSecuritycenterV1beta1SecurityMarks
 * User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.
**/
public class GoogleCloudSecuritycenterV1beta1SecurityMarks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marks")
    public java.util.Map<String, String> marks;
    public GoogleCloudSecuritycenterV1beta1SecurityMarks withMarks(java.util.Map<String, String> marks) {
        this.marks = marks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudSecuritycenterV1beta1SecurityMarks withName(String name) {
        this.name = name;
        return this;
    }
}