import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SaveCorporateUserRequest extends SpeakeasyBase {
    request: shared.UserUpdateContent;
}
export declare class SaveCorporateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
