import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetImagePerformanceCountRequest extends SpeakeasyBase {
    trainingKey: string;
    /**
     * The iteration id. Defaults to workspace.
     */
    iterationId: string;
    /**
     * The project id.
     */
    projectId: string;
    /**
     * A list of tags ids to filter the images to count. Defaults to all tags when null.
     */
    tagIds?: string[];
}
export declare class GetImagePerformanceCountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    getImagePerformanceCount200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    getImagePerformanceCount200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
