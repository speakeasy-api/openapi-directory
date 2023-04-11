import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutGeofencesIdRequest extends SpeakeasyBase {
    geofence: shared.Geofence;
    id: number;
}
export declare class PutGeofencesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    geofence?: shared.Geofence;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
