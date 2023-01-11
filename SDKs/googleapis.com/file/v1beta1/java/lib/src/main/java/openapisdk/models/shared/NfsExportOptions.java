package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NfsExportOptions
 * NFS export options specifications.
**/
public class NfsExportOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessMode")
    public NfsExportOptionsAccessModeEnum accessMode;
    public NfsExportOptions withAccessMode(NfsExportOptionsAccessModeEnum accessMode) {
        this.accessMode = accessMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anonGid")
    public String anonGid;
    public NfsExportOptions withAnonGid(String anonGid) {
        this.anonGid = anonGid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anonUid")
    public String anonUid;
    public NfsExportOptions withAnonUid(String anonUid) {
        this.anonUid = anonUid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipRanges")
    public String[] ipRanges;
    public NfsExportOptions withIpRanges(String[] ipRanges) {
        this.ipRanges = ipRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("squashMode")
    public NfsExportOptionsSquashModeEnum squashMode;
    public NfsExportOptions withSquashMode(NfsExportOptionsSquashModeEnum squashMode) {
        this.squashMode = squashMode;
        return this;
    }
}