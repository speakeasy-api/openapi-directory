import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AquifersFilesListRequest extends SpeakeasyBase {
    aquiferId: string;
}
export declare class AquifersFilesList200ApplicationJSONPrivate extends SpeakeasyBase {
    name?: string;
    url?: string;
}
export declare class AquifersFilesList200ApplicationJSONPublic extends SpeakeasyBase {
    name?: string;
    url?: string;
}
/**
 * OK
 */
export declare class AquifersFilesList200ApplicationJSON extends SpeakeasyBase {
    private?: AquifersFilesList200ApplicationJSONPrivate[];
    public?: AquifersFilesList200ApplicationJSONPublic[];
}
export declare class AquifersFilesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    aquifersFilesList200ApplicationJSONObject?: AquifersFilesList200ApplicationJSON;
}
