import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadUserProfilePictureJsonSecurity extends SpeakeasyBase {
    mwoAuth: string;
}
export declare class UploadUserProfilePictureJsonRequest extends SpeakeasyBase {
    profilePictureUpload?: shared.ProfilePictureUpload;
    /**
     * User ID
     */
    userId: number;
}
export declare class UploadUserProfilePictureJsonResponse extends SpeakeasyBase {
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
