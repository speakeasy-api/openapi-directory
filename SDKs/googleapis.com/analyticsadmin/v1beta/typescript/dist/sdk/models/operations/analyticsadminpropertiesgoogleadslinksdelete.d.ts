import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesGoogleAdsLinksDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class AnalyticsadminPropertiesGoogleAdsLinksDeleteQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesGoogleAdsLinksDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesGoogleAdsLinksDeletePathParams;
    queryParams: AnalyticsadminPropertiesGoogleAdsLinksDeleteQueryParams;
    security: AnalyticsadminPropertiesGoogleAdsLinksDeleteSecurity;
}
export declare class AnalyticsadminPropertiesGoogleAdsLinksDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Record<string, any>;
    statusCode: number;
}
