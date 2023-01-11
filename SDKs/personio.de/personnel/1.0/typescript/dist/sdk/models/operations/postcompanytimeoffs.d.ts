import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCompanyTimeOffs201ApplicationJson extends SpeakeasyBase {
    data?: shared.CreateTimeOffPeriodResponse;
}
export declare class PostCompanyTimeOffsRequest extends SpeakeasyBase {
    request: shared.CreateTimeOffPeriodRequest;
}
export declare class PostCompanyTimeOffsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    postCompanyTimeOffs201ApplicationJSONObject?: PostCompanyTimeOffs201ApplicationJson;
}
