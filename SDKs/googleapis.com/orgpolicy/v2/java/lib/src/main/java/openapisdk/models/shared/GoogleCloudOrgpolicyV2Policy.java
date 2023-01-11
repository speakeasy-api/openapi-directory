package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudOrgpolicyV2Policy
 * Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
**/
public class GoogleCloudOrgpolicyV2Policy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternate")
    public GoogleCloudOrgpolicyV2AlternatePolicySpec alternate;
    public GoogleCloudOrgpolicyV2Policy withAlternate(GoogleCloudOrgpolicyV2AlternatePolicySpec alternate) {
        this.alternate = alternate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudOrgpolicyV2Policy withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public GoogleCloudOrgpolicyV2PolicySpec spec;
    public GoogleCloudOrgpolicyV2Policy withSpec(GoogleCloudOrgpolicyV2PolicySpec spec) {
        this.spec = spec;
        return this;
    }
}