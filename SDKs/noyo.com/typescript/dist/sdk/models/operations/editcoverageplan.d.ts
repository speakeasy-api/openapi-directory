import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditCoveragePlanPathParams extends SpeakeasyBase {
    planId: string;
    version: string;
}
export declare class EditCoveragePlanRequest extends SpeakeasyBase {
    pathParams: EditCoveragePlanPathParams;
    request: shared.CoveragePlanEditRequest;
}
export declare class EditCoveragePlanResponse extends SpeakeasyBase {
    contentType: string;
    coveragePlanResult?: shared.CoveragePlanResult;
    statusCode: number;
}
