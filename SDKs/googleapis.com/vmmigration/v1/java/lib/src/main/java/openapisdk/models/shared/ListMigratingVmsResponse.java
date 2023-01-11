package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListMigratingVmsResponse
 * Response message for 'ListMigratingVms' request.
**/
public class ListMigratingVmsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("migratingVms")
    public MigratingVm[] migratingVms;
    public ListMigratingVmsResponse withMigratingVms(MigratingVm[] migratingVms) {
        this.migratingVms = migratingVms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListMigratingVmsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListMigratingVmsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}