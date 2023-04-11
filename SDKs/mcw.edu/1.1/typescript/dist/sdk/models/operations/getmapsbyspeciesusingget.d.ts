import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETMapsBySpeciesUsingGETRequest extends SpeakeasyBase {
    /**
     * species Key
     */
    speciesTypeKey: number;
}
export declare class GETMapsBySpeciesUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
