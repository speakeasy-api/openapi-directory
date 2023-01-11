package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceAndroidDetails
 * The Android instance details resource.
**/
public class InstanceAndroidDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enablePiracyCheck")
    public Boolean enablePiracyCheck;
    public InstanceAndroidDetails withEnablePiracyCheck(Boolean enablePiracyCheck) {
        this.enablePiracyCheck = enablePiracyCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public InstanceAndroidDetails withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packageName")
    public String packageName;
    public InstanceAndroidDetails withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferred")
    public Boolean preferred;
    public InstanceAndroidDetails withPreferred(Boolean preferred) {
        this.preferred = preferred;
        return this;
    }
}