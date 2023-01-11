package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListIpAccessControlListListIpAccessControlListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_access_control_lists")
    public openapisdk.models.shared.TrunkingV1TrunkIpAccessControlList[] ipAccessControlLists;
    public ListIpAccessControlListListIpAccessControlListResponse withIpAccessControlLists(openapisdk.models.shared.TrunkingV1TrunkIpAccessControlList[] ipAccessControlLists) {
        this.ipAccessControlLists = ipAccessControlLists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListIpAccessControlListListIpAccessControlListResponseMeta meta;
    public ListIpAccessControlListListIpAccessControlListResponse withMeta(ListIpAccessControlListListIpAccessControlListResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}