package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DefaultResources
 * The default resources associated with the Project.
**/
public class DefaultResources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostingSite")
    public String hostingSite;
    public DefaultResources withHostingSite(String hostingSite) {
        this.hostingSite = hostingSite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public DefaultResources withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("realtimeDatabaseInstance")
    public String realtimeDatabaseInstance;
    public DefaultResources withRealtimeDatabaseInstance(String realtimeDatabaseInstance) {
        this.realtimeDatabaseInstance = realtimeDatabaseInstance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageBucket")
    public String storageBucket;
    public DefaultResources withStorageBucket(String storageBucket) {
        this.storageBucket = storageBucket;
        return this;
    }
}