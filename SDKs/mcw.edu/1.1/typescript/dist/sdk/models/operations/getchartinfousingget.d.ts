import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETChartInfoUsingGETRequest extends SpeakeasyBase {
    /**
     * Reference RGD ID for a study
     */
    refRgdId: number;
    /**
     * Species Type Key - 3=rat 4=chinchilla
     */
    speciesTypeKey: number;
    /**
     * List of term accession IDs
     */
    termString: string;
}
export declare class GETChartInfoUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
