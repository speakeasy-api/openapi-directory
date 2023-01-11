package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPolicy
 * Used in `policy_type` to specify how `list_policy` behaves at this resource. `ListPolicy` can define specific values and subtrees of Cloud Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied by setting the `allowed_values` and `denied_values` fields. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - "projects/", e.g. "projects/tokyo-rain-123" - "folders/", e.g. "folders/1234" - "organizations/", e.g. "organizations/1234" The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used. You can set `allowed_values` and `denied_values` in the same `Policy` if `all_values` is `ALL_VALUES_UNSPECIFIED`. `ALLOW` or `DENY` are used to allow or deny all values. If `all_values` is set to either `ALLOW` or `DENY`, `allowed_values` and `denied_values` must be unset.
**/
public class ListPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allValues")
    public ListPolicyAllValuesEnum allValues;
    public ListPolicy withAllValues(ListPolicyAllValuesEnum allValues) {
        this.allValues = allValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedValues")
    public String[] allowedValues;
    public ListPolicy withAllowedValues(String[] allowedValues) {
        this.allowedValues = allowedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deniedValues")
    public String[] deniedValues;
    public ListPolicy withDeniedValues(String[] deniedValues) {
        this.deniedValues = deniedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inheritFromParent")
    public Boolean inheritFromParent;
    public ListPolicy withInheritFromParent(Boolean inheritFromParent) {
        this.inheritFromParent = inheritFromParent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suggestedValue")
    public String suggestedValue;
    public ListPolicy withSuggestedValue(String suggestedValue) {
        this.suggestedValue = suggestedValue;
        return this;
    }
}