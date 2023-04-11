import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmUserDeviceProfilesRequest extends SpeakeasyBase {
    networkId: string;
    userId: string;
}
export declare class GetNetworkSmUserDeviceProfiles200ApplicationJSON extends SpeakeasyBase {
    /**
     * The Meraki managed device Id.
     */
    deviceId?: string;
    /**
     * The numerical Meraki Id of the profile.
     */
    id?: string;
    /**
     * A boolean indicating if the profile is encrypted.
     */
    isEncrypted?: boolean;
    /**
     * Whether or not the profile is managed by Meraki.
     */
    isManaged?: boolean;
    /**
     * The name of the profile.
     */
    name?: string;
    /**
     * A string containing a JSON object with the profile data.
     */
    profileData?: string;
    /**
     * The identifier of the profile.
     */
    profileIdentifier?: string;
    /**
     * The verison of the profile.
     */
    version?: string;
}
export declare class GetNetworkSmUserDeviceProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmUserDeviceProfiles200ApplicationJSONObjects?: GetNetworkSmUserDeviceProfiles200ApplicationJSON[];
}
