import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUntaggedImageCountRequest extends SpeakeasyBase {
    trainingKey: string;
    /**
     * The iteration id. Defaults to workspace.
     */
    iterationId?: string;
    /**
     * The project id.
     */
    projectId: string;
}
export declare class GetUntaggedImageCountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    getUntaggedImageCount200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    getUntaggedImageCount200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
