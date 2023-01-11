import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StsOauthtokenQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class StsOauthtokenRequest extends SpeakeasyBase {
    queryParams: StsOauthtokenQueryParams;
    request?: shared.GoogleIdentityStsV1ExchangeOauthTokenRequest;
}
export declare class StsOauthtokenResponse extends SpeakeasyBase {
    contentType: string;
    googleIdentityStsV1ExchangeOauthTokenResponse?: shared.GoogleIdentityStsV1ExchangeOauthTokenResponse;
    statusCode: number;
}
