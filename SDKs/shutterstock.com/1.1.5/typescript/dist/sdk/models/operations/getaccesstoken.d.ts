import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccessTokenSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class GetAccessTokenRequest extends SpeakeasyBase {
    security: GetAccessTokenSecurity;
}
export declare class GetAccessTokenResponse extends SpeakeasyBase {
    accessTokenDetails?: shared.AccessTokenDetails;
    contentType: string;
    statusCode: number;
}
