import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGeofencesRequest extends SpeakeasyBase {
    /**
     * Can only be used by admins or managers to fetch all entities
     */
    all?: boolean;
    /**
     * Standard users can use this only with _deviceId_s, they have access to
     */
    deviceId?: number;
    /**
     * Standard users can use this only with _groupId_s, they have access to
     */
    groupId?: number;
    refresh?: boolean;
    /**
     * Standard users can use this only with their own _userId_
     */
    userId?: number;
}
export declare class GetGeofencesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    geofences?: shared.Geofence[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
