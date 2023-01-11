import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersRequestBodyInput extends SpeakeasyBase {
    email: string;
    name: string;
    title?: shared.UserTitleEnum;
}
export declare class PostUsersRequest extends SpeakeasyBase {
    request: PostUsersRequestBodyInput;
}
export declare class PostUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
