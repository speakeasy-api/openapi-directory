import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EmulationOutputRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class EmulationOutputRequestBody extends SpeakeasyBase {
    /**
     * file
     */
    file: EmulationOutputRequestBodyFile;
}
/**
 * emulation output after unpacking the file
 */
export declare class EmulationOutput200Wildcard extends SpeakeasyBase {
    output: string[];
}
export declare class EmulationOutputResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
