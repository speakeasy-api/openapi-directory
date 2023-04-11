import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LineMetaDisruptionCategoriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    lineMetaDisruptionCategories200ApplicationJSONStrings?: string[];
    /**
     * OK
     */
    lineMetaDisruptionCategories200TextJSONStrings?: string[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
