import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC
 */
export declare enum IdSourceEnum {
    Nsidc = "NSIDC",
    Ade = "ADE"
}
export declare class IdRequest extends SpeakeasyBase {
    /**
     * Search terms typed into the interface (minimum two characters)
     */
    q: string;
    /**
     * Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC
     */
    source: IdSourceEnum;
}
export declare class IdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    id200ApplicationXSuggestionsPlusJsonString?: string;
}
