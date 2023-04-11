import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetIterationsRequest extends SpeakeasyBase {
    trainingKey: string;
    /**
     * The project id.
     */
    projectId: string;
}
export declare class GetIterationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    iterations?: shared.Iteration[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
