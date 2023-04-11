import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTaggedImageCountRequest extends SpeakeasyBase {
    /**
     * API key.
     */
    trainingKey: string;
    /**
     * The iteration id. Defaults to workspace.
     */
    iterationId?: string;
    /**
     * The project id.
     */
    projectId: string;
    /**
     * A list of tags ids to filter the images to count. Defaults to all tags when null.
     */
    tagIds?: string[];
}
export declare class GetTaggedImageCountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    /**
     * OK
     */
    getTaggedImageCount200ApplicationJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
