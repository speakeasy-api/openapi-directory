import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCoveragePlanPathParams extends SpeakeasyBase {
    planId: string;
}
export declare class GetCoveragePlanRequest extends SpeakeasyBase {
    pathParams: GetCoveragePlanPathParams;
}
export declare class GetCoveragePlanResponse extends SpeakeasyBase {
    contentType: string;
    coveragePlanResult?: shared.CoveragePlanResult;
    statusCode: number;
}
