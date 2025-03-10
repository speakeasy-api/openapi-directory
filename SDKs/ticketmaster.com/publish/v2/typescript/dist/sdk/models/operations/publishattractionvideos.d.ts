import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PublishAttractionVideosRequest extends SpeakeasyBase {
    /**
     * Unique correlation id to be able to trace the request in our system
     */
    tmpsCorrelationId: string;
    /**
     * Video data
     */
    video: shared.Video;
    /**
     * ID of the attraction the video is linked to
     */
    id: string;
}
export declare class PublishAttractionVideosResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
