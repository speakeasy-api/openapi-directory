import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceTierConfig } from "./devicetierconfig";
/**
 * Response listing existing device tier configs.
 */
export declare class ListDeviceTierConfigsResponse extends SpeakeasyBase {
    /**
     * Device tier configs created by the developer.
     */
    deviceTierConfigs?: DeviceTierConfig[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
