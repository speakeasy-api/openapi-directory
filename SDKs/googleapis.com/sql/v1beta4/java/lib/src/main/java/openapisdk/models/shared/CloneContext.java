package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloneContext
 * Database instance clone context.
**/
public class CloneContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allocatedIpRange")
    public String allocatedIpRange;
    public CloneContext withAllocatedIpRange(String allocatedIpRange) {
        this.allocatedIpRange = allocatedIpRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("binLogCoordinates")
    public BinLogCoordinates binLogCoordinates;
    public CloneContext withBinLogCoordinates(BinLogCoordinates binLogCoordinates) {
        this.binLogCoordinates = binLogCoordinates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseNames")
    public String[] databaseNames;
    public CloneContext withDatabaseNames(String[] databaseNames) {
        this.databaseNames = databaseNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationInstanceName")
    public String destinationInstanceName;
    public CloneContext withDestinationInstanceName(String destinationInstanceName) {
        this.destinationInstanceName = destinationInstanceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CloneContext withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pitrTimestampMs")
    public String pitrTimestampMs;
    public CloneContext withPitrTimestampMs(String pitrTimestampMs) {
        this.pitrTimestampMs = pitrTimestampMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pointInTime")
    public String pointInTime;
    public CloneContext withPointInTime(String pointInTime) {
        this.pointInTime = pointInTime;
        return this;
    }
}