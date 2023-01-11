import { SpeakeasyBase } from "../../../internal/utils";
export declare class AnimateImageQueryParams extends SpeakeasyBase {
    type: string;
    url: string;
}
export declare class AnimateImageRequest extends SpeakeasyBase {
    queryParams: AnimateImageQueryParams;
}
export declare class AnimateImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
