import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAnalyticsTokenPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetAnalyticsTokenRequest extends SpeakeasyBase {
    pathParams: GetAnalyticsTokenPathParams;
}
export declare class GetAnalyticsTokenResponse extends SpeakeasyBase {
    analyticsToken?: shared.AnalyticsToken;
    contentType: string;
    statusCode: number;
}
