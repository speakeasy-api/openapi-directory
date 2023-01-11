import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurityOption1;
    option2?: AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurityOption2;
}
export declare class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest extends SpeakeasyBase {
    pathParams: AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetPathParams;
    queryParams: AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetQueryParams;
    security: AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurity;
}
export declare class AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleAnalyticsAdminV1betaMeasurementProtocolSecret?: shared.GoogleAnalyticsAdminV1betaMeasurementProtocolSecret;
    statusCode: number;
}
