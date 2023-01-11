import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChangePasswordPathParams extends SpeakeasyBase {
    shopperId: string;
}
export declare class ChangePasswordRequest extends SpeakeasyBase {
    pathParams: ChangePasswordPathParams;
    request: any;
}
export declare class ChangePasswordResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    passwordError?: any;
    shopperId?: any;
    statusCode: number;
}
