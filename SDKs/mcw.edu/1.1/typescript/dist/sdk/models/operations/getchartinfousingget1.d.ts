import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETChartInfoUsingGet1Request extends SpeakeasyBase {
    /**
     * Species Type Key - 3=rat 4=chinchilla
     */
    speciesTypeKey: number;
    /**
     * List of term accession IDs
     */
    termString: string;
}
export declare class GETChartInfoUsingGet1Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
