import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectsRequest extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetProjectsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    projects?: shared.Project[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
