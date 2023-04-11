import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleHomeEnterpriseSdmV1Device } from "./googlehomeenterprisesdmv1device";
/**
 * Response message for SmartDeviceManagementService.ListDevices
 */
export declare class GoogleHomeEnterpriseSdmV1ListDevicesResponse extends SpeakeasyBase {
    /**
     * The list of devices.
     */
    devices?: GoogleHomeEnterpriseSdmV1Device[];
    /**
     * The pagination token to retrieve the next page of results.
     */
    nextPageToken?: string;
}
