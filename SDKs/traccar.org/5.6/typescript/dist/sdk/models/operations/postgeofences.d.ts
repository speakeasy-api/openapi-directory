import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostGeofencesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    geofence?: shared.Geofence;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
