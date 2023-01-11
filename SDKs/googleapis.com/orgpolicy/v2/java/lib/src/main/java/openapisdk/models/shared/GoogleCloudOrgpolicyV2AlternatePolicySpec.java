package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudOrgpolicyV2AlternatePolicySpec
 * Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.
**/
public class GoogleCloudOrgpolicyV2AlternatePolicySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launch")
    public String launch;
    public GoogleCloudOrgpolicyV2AlternatePolicySpec withLaunch(String launch) {
        this.launch = launch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public GoogleCloudOrgpolicyV2PolicySpec spec;
    public GoogleCloudOrgpolicyV2AlternatePolicySpec withSpec(GoogleCloudOrgpolicyV2PolicySpec spec) {
        this.spec = spec;
        return this;
    }
}