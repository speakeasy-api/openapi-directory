import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUserPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class UpdateUserRequest extends SpeakeasyBase {
    pathParams: UpdateUserPathParams;
    request?: shared.UserUpdateContent;
}
export declare class UpdateUserResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    user?: shared.User;
}
