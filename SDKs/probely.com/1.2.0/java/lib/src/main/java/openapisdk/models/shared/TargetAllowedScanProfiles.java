package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TargetAllowedScanProfiles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public ScanProfileEnum id;
    public TargetAllowedScanProfiles withId(ScanProfileEnum id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TargetAllowedScanProfiles withName(String name) {
        this.name = name;
        return this;
    }
}