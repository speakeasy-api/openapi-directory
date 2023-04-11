import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadProfileImageRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    workgroupId: string;
}
export declare class UploadProfileImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Internal server error
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful
     */
    profileImageVO?: shared.ProfileImageVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
