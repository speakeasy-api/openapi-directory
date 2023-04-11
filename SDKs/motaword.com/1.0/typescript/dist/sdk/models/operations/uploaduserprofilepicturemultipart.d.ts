import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadUserProfilePictureMultipartSecurity extends SpeakeasyBase {
    mwoAuth: string;
}
export declare class UploadUserProfilePictureMultipartRequest extends SpeakeasyBase {
    profilePictureUpload1?: shared.ProfilePictureUpload1;
    /**
     * User ID
     */
    userId: number;
}
export declare class UploadUserProfilePictureMultipartResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * NoFileUploaded
     */
    error?: shared.ErrorT;
    /**
     * Successful operation
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
