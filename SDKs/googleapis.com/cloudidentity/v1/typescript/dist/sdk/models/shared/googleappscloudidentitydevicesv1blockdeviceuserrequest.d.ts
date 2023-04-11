import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for blocking account on device.
 */
export declare class GoogleAppsCloudidentityDevicesV1BlockDeviceUserRequest extends SpeakeasyBase {
    /**
     * Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer}`, where customer is the customer to whom the device belongs.
     */
    customer?: string;
}
