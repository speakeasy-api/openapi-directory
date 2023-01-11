package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudOrgpolicyV2AlternatePolicySpecInput
 * Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.
**/
public class GoogleCloudOrgpolicyV2AlternatePolicySpecInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launch")
    public String launch;
    public GoogleCloudOrgpolicyV2AlternatePolicySpecInput withLaunch(String launch) {
        this.launch = launch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public GoogleCloudOrgpolicyV2PolicySpecInput spec;
    public GoogleCloudOrgpolicyV2AlternatePolicySpecInput withSpec(GoogleCloudOrgpolicyV2PolicySpecInput spec) {
        this.spec = spec;
        return this;
    }
}