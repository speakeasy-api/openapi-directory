package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EditCustomerMatchMembersRequest
 * Request message for FirstAndThirdPartyAudienceService.EditCustomerMatchMembers.
**/
public class EditCustomerMatchMembersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addedContactInfoList")
    public ContactInfoList addedContactInfoList;
    public EditCustomerMatchMembersRequest withAddedContactInfoList(ContactInfoList addedContactInfoList) {
        this.addedContactInfoList = addedContactInfoList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addedMobileDeviceIdList")
    public MobileDeviceIdList addedMobileDeviceIdList;
    public EditCustomerMatchMembersRequest withAddedMobileDeviceIdList(MobileDeviceIdList addedMobileDeviceIdList) {
        this.addedMobileDeviceIdList = addedMobileDeviceIdList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiserId")
    public String advertiserId;
    public EditCustomerMatchMembersRequest withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
}