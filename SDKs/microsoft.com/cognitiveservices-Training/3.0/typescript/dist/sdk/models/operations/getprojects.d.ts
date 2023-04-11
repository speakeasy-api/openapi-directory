import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectsRequest extends SpeakeasyBase {
    /**
     * API key.
     */
    trainingKey: string;
}
export declare class GetProjectsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    /**
     * OK
     */
    projects?: shared.Project[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
