import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRateByIdPathParams extends SpeakeasyBase {
    rateId: string;
}
export declare class GetRateByIdRequest extends SpeakeasyBase {
    pathParams: GetRateByIdPathParams;
}
export declare class GetRateByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    getRateByIdResponseBody?: shared.GetRateByIdResponseBody;
}
