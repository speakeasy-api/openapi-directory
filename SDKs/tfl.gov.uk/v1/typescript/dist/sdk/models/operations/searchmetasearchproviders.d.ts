import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchMetaSearchProvidersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    searchMetaSearchProviders200ApplicationJSONStrings?: string[];
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    searchMetaSearchProviders200TextJSONStrings?: string[];
}
