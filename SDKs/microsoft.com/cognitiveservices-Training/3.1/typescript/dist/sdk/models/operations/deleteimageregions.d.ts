import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteImageRegionsRequest extends SpeakeasyBase {
    /**
     * API key.
     */
    trainingKey: string;
    /**
     * The project id.
     */
    projectId: string;
    /**
     * Regions to delete. Limited to 64.
     */
    regionIds: string[];
}
export declare class DeleteImageRegionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
