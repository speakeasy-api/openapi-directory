import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenerateClientRequest extends SpeakeasyBase {
    /**
     * Configuration for building the client library
     */
    generatorInput: shared.GeneratorInput;
    /**
     * The target language for the client library
     */
    language: string;
}
export declare class GenerateClientResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
