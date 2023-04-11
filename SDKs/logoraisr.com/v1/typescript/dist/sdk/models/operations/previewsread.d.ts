import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PreviewsReadRequest extends SpeakeasyBase {
    /**
     * Id of the file for which the preview_img_url is generated.
     */
    fileId: string;
}
export declare class PreviewsReadResponse extends SpeakeasyBase {
    contentType: string;
    previewResponse?: shared.PreviewResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
