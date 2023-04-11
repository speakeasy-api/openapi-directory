import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetExportsRequest extends SpeakeasyBase {
    trainingKey: string;
    /**
     * The iteration id
     */
    iterationId: string;
    /**
     * The project id
     */
    projectId: string;
}
export declare class GetExportsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    exports?: shared.Export[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
