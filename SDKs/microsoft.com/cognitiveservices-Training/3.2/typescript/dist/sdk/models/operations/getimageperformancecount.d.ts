import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetImagePerformanceCountRequest extends SpeakeasyBase {
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
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    /**
     * OK
     */
    getImagePerformanceCount200ApplicationJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
