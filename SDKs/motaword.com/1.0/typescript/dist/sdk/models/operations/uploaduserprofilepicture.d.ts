import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadUserProfilePicturePathParams extends SpeakeasyBase {
    userId: number;
}
export declare class UploadUserProfilePictureRequestBodyProfilePicture extends SpeakeasyBase {
    content: Uint8Array;
    profilePicture: string;
}
export declare class UploadUserProfilePictureRequestBody extends SpeakeasyBase {
    profilePicture: UploadUserProfilePictureRequestBodyProfilePicture;
}
export declare class UploadUserProfilePictureSecurity extends SpeakeasyBase {
    mwoAuth: shared.SchemeMwoAuth;
}
export declare class UploadUserProfilePictureRequest extends SpeakeasyBase {
    pathParams: UploadUserProfilePicturePathParams;
    request?: UploadUserProfilePictureRequestBody;
    security: UploadUserProfilePictureSecurity;
}
export declare class UploadUserProfilePictureResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
