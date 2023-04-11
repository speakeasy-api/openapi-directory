import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DrillersFilesListRequest extends SpeakeasyBase {
    personGuid: string;
}
export declare class DrillersFilesList200ApplicationJSONPrivate extends SpeakeasyBase {
    name?: string;
    url?: string;
}
export declare class DrillersFilesList200ApplicationJSONPublic extends SpeakeasyBase {
    name?: string;
    url?: string;
}
/**
 * OK
 */
export declare class DrillersFilesList200ApplicationJSON extends SpeakeasyBase {
    private?: DrillersFilesList200ApplicationJSONPrivate[];
    public?: DrillersFilesList200ApplicationJSONPublic[];
}
export declare class DrillersFilesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    drillersFilesList200ApplicationJSONObject?: DrillersFilesList200ApplicationJSON;
}
