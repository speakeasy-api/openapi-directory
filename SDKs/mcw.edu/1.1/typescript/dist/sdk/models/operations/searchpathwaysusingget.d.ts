import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchPathwaysUsingGETRequest extends SpeakeasyBase {
    /**
     * Free text search string
     */
    searchString: string;
}
export declare class SearchPathwaysUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
