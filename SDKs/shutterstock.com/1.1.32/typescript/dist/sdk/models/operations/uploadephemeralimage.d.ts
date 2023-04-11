import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadEphemeralImageSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class UploadEphemeralImageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    imageCreateResponse?: shared.ImageCreateResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
