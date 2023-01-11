import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesGoogleAdsLinksPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AnalyticsadminPropertiesGoogleAdsLinksPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AnalyticsadminPropertiesGoogleAdsLinksPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesGoogleAdsLinksPatchRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesGoogleAdsLinksPatchPathParams;
    queryParams: AnalyticsadminPropertiesGoogleAdsLinksPatchQueryParams;
    request?: shared.GoogleAnalyticsAdminV1betaGoogleAdsLinkInput;
    security: AnalyticsadminPropertiesGoogleAdsLinksPatchSecurity;
}
export declare class AnalyticsadminPropertiesGoogleAdsLinksPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1betaGoogleAdsLink?: shared.GoogleAnalyticsAdminV1betaGoogleAdsLink;
    statusCode: number;
}
