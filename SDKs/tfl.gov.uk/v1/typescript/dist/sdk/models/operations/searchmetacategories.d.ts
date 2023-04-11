import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchMetaCategoriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    searchMetaCategories200ApplicationJSONStrings?: string[];
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    searchMetaCategories200TextJSONStrings?: string[];
}
