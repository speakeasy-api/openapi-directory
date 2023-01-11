import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateLabelFromRatePathParams extends SpeakeasyBase {
    rateId: string;
}
export declare class CreateLabelFromRateRequest extends SpeakeasyBase {
    pathParams: CreateLabelFromRatePathParams;
    request: shared.CreateLabelFromRateRequestBody;
}
export declare class CreateLabelFromRateResponseOutput extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createLabelFromRateResponseBody?: shared.CreateLabelFromRateResponseBodyOutput;
    errorResponseBody?: shared.ErrorResponseBody;
}
