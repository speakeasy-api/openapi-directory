import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromemanagementCustomersTelemetryEventsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ChromemanagementCustomersTelemetryEventsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ChromemanagementCustomersTelemetryEventsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChromemanagementCustomersTelemetryEventsListRequest extends SpeakeasyBase {
    pathParams: ChromemanagementCustomersTelemetryEventsListPathParams;
    queryParams: ChromemanagementCustomersTelemetryEventsListQueryParams;
    security: ChromemanagementCustomersTelemetryEventsListSecurity;
}
export declare class ChromemanagementCustomersTelemetryEventsListResponse extends SpeakeasyBase {
    contentType: string;
    googleChromeManagementV1ListTelemetryEventsResponse?: shared.GoogleChromeManagementV1ListTelemetryEventsResponse;
    statusCode: number;
}
