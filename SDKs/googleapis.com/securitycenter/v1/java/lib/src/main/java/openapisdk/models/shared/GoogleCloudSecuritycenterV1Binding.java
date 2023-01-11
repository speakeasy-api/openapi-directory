package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudSecuritycenterV1Binding
 * Represents a Kubernetes RoleBinding or ClusterRoleBinding.
**/
public class GoogleCloudSecuritycenterV1Binding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudSecuritycenterV1Binding withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ns")
    public String ns;
    public GoogleCloudSecuritycenterV1Binding withNs(String ns) {
        this.ns = ns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public Role role;
    public GoogleCloudSecuritycenterV1Binding withRole(Role role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjects")
    public Subject[] subjects;
    public GoogleCloudSecuritycenterV1Binding withSubjects(Subject[] subjects) {
        this.subjects = subjects;
        return this;
    }
}