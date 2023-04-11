import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportIterationRequest extends SpeakeasyBase {
    trainingKey: string;
    /**
     * The iteration id
     */
    iterationId: string;
    /**
     * The target platform (coreml or tensorflow)
     */
    platform: string;
    /**
     * The project id
     */
    projectId: string;
}
export declare class ExportIterationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    export?: shared.Export;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
