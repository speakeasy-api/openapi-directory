import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WellsFilesListRequest extends SpeakeasyBase {
    tag: string;
}
export declare class WellsFilesList200ApplicationJSONPrivate extends SpeakeasyBase {
    name?: string;
    url?: string;
}
export declare class WellsFilesList200ApplicationJSONPublic extends SpeakeasyBase {
    name?: string;
    url?: string;
}
/**
 * OK
 */
export declare class WellsFilesList200ApplicationJSON extends SpeakeasyBase {
    private?: WellsFilesList200ApplicationJSONPrivate[];
    public?: WellsFilesList200ApplicationJSONPublic[];
}
export declare class WellsFilesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    wellsFilesList200ApplicationJSONObject?: WellsFilesList200ApplicationJSON;
}
