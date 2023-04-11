import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ChangePasswordRequestBodyNewPassword extends SpeakeasyBase {
    value?: string;
}
export declare class ChangePasswordRequestBodyOldPassword extends SpeakeasyBase {
    value?: string;
}
export declare class ChangePasswordRequestBody extends SpeakeasyBase {
    newPassword?: ChangePasswordRequestBodyNewPassword;
    oldPassword?: ChangePasswordRequestBodyOldPassword;
}
export declare class ChangePasswordRequest extends SpeakeasyBase {
    requestBody?: ChangePasswordRequestBody;
    userId: string;
}
export declare class ChangePasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
