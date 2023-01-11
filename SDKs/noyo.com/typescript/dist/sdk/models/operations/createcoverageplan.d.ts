import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCoveragePlanPathParams extends SpeakeasyBase {
    groupCoverageId: string;
}
export declare class CreateCoveragePlanRequest extends SpeakeasyBase {
    pathParams: CreateCoveragePlanPathParams;
    request: shared.CoveragePlanCreateRequest;
}
export declare class CreateCoveragePlanResponse extends SpeakeasyBase {
    contentType: string;
    coveragePlanResult?: shared.CoveragePlanResult;
    statusCode: number;
}
