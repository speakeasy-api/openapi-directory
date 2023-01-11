import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateMeRequest extends SpeakeasyBase {
    request?: shared.UserUpdateContent;
}
export declare class UpdateMeResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    user?: shared.User;
}
