import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadProfilePictureRequestBodyProfilePicture extends SpeakeasyBase {
    content: Uint8Array;
    profilePicture: string;
}
export declare class UploadProfilePictureRequestBody extends SpeakeasyBase {
    profilePicture: UploadProfilePictureRequestBodyProfilePicture;
}
export declare class UploadProfilePictureRequest extends SpeakeasyBase {
    request?: UploadProfilePictureRequestBody;
}
export declare class UploadProfilePictureResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
