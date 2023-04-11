import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AnimateImageRequest extends SpeakeasyBase {
    /**
     * URL of the company
     */
    type: string;
    /**
     * URL of the company
     */
    url: string;
}
export declare class AnimateImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
