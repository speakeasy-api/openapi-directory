import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RoadMetaCategoriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    roadMetaCategories200ApplicationJSONStrings?: string[];
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    roadMetaCategories200TextJSONStrings?: string[];
}
