import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenerateServerForLanguageRequest extends SpeakeasyBase {
    /**
     * parameters
     */
    generatorInput: shared.GeneratorInput;
    /**
     * framework
     */
    framework: string;
}
export declare class GenerateServerForLanguageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
