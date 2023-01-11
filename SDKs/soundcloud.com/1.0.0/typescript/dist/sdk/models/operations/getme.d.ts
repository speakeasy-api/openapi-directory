import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMeSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class GetMeRequest extends SpeakeasyBase {
    security: GetMeSecurity;
}
export declare class GetMeResponse extends SpeakeasyBase {
    completeUser?: shared.CompleteUser;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
