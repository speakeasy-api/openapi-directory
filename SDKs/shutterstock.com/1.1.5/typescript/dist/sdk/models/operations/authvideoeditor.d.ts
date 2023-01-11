import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthVideoEditorSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class AuthVideoEditorRequest extends SpeakeasyBase {
    request?: shared.VideoEditorTokenRequest;
    security: AuthVideoEditorSecurity;
}
export declare class AuthVideoEditorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoEditorTokenResponse?: shared.VideoEditorTokenResponse;
}
