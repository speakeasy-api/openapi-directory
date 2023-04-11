import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
/**
 * Response message of customer's liting devices.
 */
export declare class CustomerListDevicesResponse extends SpeakeasyBase {
    /**
     * The customer's devices.
     */
    devices?: Device[];
    /**
     * A token used to access the next page of results. Omitted if no further results are available.
     */
    nextPageToken?: string;
}
