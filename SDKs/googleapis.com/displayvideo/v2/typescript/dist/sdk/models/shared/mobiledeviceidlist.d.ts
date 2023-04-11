import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Wrapper message for a list of mobile device IDs defining Customer Match audience members.
 */
export declare class MobileDeviceIdList extends SpeakeasyBase {
    /**
     * A list of mobile device IDs defining Customer Match audience members. The size of mobile_device_ids mustn't be greater than 500,000.
     */
    mobileDeviceIds?: string[];
}
