import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAnalyticsTokenRequest extends SpeakeasyBase {
    /**
     * Continuous project ID
     */
    id: number;
}
export declare class GetAnalyticsTokenResponse extends SpeakeasyBase {
    /**
     * JWT token result
     */
    analyticsToken?: shared.AnalyticsToken;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
