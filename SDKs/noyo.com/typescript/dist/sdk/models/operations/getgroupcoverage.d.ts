import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupCoveragePathParams extends SpeakeasyBase {
    groupCoverageId: string;
}
export declare class GetGroupCoverageRequest extends SpeakeasyBase {
    pathParams: GetGroupCoveragePathParams;
}
export declare class GetGroupCoverageResponse extends SpeakeasyBase {
    contentType: string;
    groupCoverageResult?: shared.GroupCoverageResult;
    statusCode: number;
}
