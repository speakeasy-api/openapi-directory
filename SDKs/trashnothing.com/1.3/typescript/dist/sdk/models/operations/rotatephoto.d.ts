import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RotatePhotoRequest extends SpeakeasyBase {
    /**
     * Rotation in degrees - currently only 90, 180 and 270 are supported which correspond to rotate left, rotate upside down and rotate right.
     */
    degrees: number;
    /**
     * Client device pixel ratio used to determine thumbnail size (default 1.0).
     */
    devicePixelRatio?: number;
    photoId: string;
}
export declare class RotatePhotoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Photo rotated.
     */
    photoResult?: shared.PhotoResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
