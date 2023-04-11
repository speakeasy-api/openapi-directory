import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkDeviceRequestBody extends SpeakeasyBase {
    /**
     * The address of a device
     */
    address?: string;
    /**
     * The floor plan to associate to this device. null disassociates the device from the floorplan.
     */
    floorPlanId?: string;
    /**
     * The latitude of a device
     */
    lat?: number;
    /**
     * The longitude of a device
     */
    lng?: number;
    /**
     * Whether or not to set the latitude and longitude of a device based on the new address. Only applies when lat and lng are not specified.
     */
    moveMapMarker?: boolean;
    /**
     * The name of a device
     */
    name?: string;
    /**
     * The notes for the device. String. Limited to 255 characters.
     */
    notes?: string;
    /**
     * The ID of a switch profile to bind to the device (for available switch profiles, see the 'Switch Profiles' endpoint). Use null to unbind the switch device from the current profile. For a device to be bindable to a switch profile, it must (1) be a switch, and (2) belong to a network that is bound to a configuration template.
     */
    switchProfileId?: string;
    /**
     * The tags of a device
     */
    tags?: string;
}
export declare class UpdateNetworkDeviceRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkDeviceRequestBody;
    networkId: string;
    serial: string;
}
export declare class UpdateNetworkDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkDevice200ApplicationJSONObject?: Record<string, any>;
}
