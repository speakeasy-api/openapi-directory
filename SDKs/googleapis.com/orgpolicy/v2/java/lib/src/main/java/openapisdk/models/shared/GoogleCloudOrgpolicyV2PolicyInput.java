package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudOrgpolicyV2PolicyInput
 * Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
**/
public class GoogleCloudOrgpolicyV2PolicyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternate")
    public GoogleCloudOrgpolicyV2AlternatePolicySpecInput alternate;
    public GoogleCloudOrgpolicyV2PolicyInput withAlternate(GoogleCloudOrgpolicyV2AlternatePolicySpecInput alternate) {
        this.alternate = alternate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudOrgpolicyV2PolicyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public GoogleCloudOrgpolicyV2PolicySpecInput spec;
    public GoogleCloudOrgpolicyV2PolicyInput withSpec(GoogleCloudOrgpolicyV2PolicySpecInput spec) {
        this.spec = spec;
        return this;
    }
}