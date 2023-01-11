package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubstitutionRule
 * A transformation rule to be applied against Kubernetes resources as they are selected for restoration from a Backup. A rule contains both filtering logic (which resources are subject to substitution) and substitution logic.
**/
public class SubstitutionRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newValue")
    public String newValue;
    public SubstitutionRule withNewValue(String newValue) {
        this.newValue = newValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalValuePattern")
    public String originalValuePattern;
    public SubstitutionRule withOriginalValuePattern(String originalValuePattern) {
        this.originalValuePattern = originalValuePattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetGroupKinds")
    public GroupKind[] targetGroupKinds;
    public SubstitutionRule withTargetGroupKinds(GroupKind[] targetGroupKinds) {
        this.targetGroupKinds = targetGroupKinds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetJsonPath")
    public String targetJsonPath;
    public SubstitutionRule withTargetJsonPath(String targetJsonPath) {
        this.targetJsonPath = targetJsonPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetNamespaces")
    public String[] targetNamespaces;
    public SubstitutionRule withTargetNamespaces(String[] targetNamespaces) {
        this.targetNamespaces = targetNamespaces;
        return this;
    }
}