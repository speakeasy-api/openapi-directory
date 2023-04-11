import { SpeakeasyBase } from "../../../internal/utils";
import { ContactInfoList } from "./contactinfolist";
import { MobileDeviceIdList } from "./mobiledeviceidlist";
/**
 * Request message for FirstAndThirdPartyAudienceService.EditCustomerMatchMembers.
 */
export declare class EditCustomerMatchMembersRequest extends SpeakeasyBase {
    /**
     * Wrapper message for a list of contact information defining Customer Match audience members.
     */
    addedContactInfoList?: ContactInfoList;
    /**
     * Wrapper message for a list of mobile device IDs defining Customer Match audience members.
     */
    addedMobileDeviceIdList?: MobileDeviceIdList;
    /**
     * Required. The ID of the owner advertiser of the updated Customer Match FirstAndThirdPartyAudience.
     */
    advertiserId?: string;
}
