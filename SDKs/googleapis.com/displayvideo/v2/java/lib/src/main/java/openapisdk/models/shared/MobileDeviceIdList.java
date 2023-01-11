package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MobileDeviceIdList
 * Wrapper message for a list of mobile device IDs defining Customer Match audience members.
**/
public class MobileDeviceIdList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileDeviceIds")
    public String[] mobileDeviceIds;
    public MobileDeviceIdList withMobileDeviceIds(String[] mobileDeviceIds) {
        this.mobileDeviceIds = mobileDeviceIds;
        return this;
    }
}