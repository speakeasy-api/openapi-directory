import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateGroupCoveragePathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class CreateGroupCoverageRequest extends SpeakeasyBase {
    pathParams: CreateGroupCoveragePathParams;
    request: shared.GroupCoverageCreateRequest;
}
export declare class CreateGroupCoverageResponse extends SpeakeasyBase {
    contentType: string;
    groupCoverageResult?: shared.GroupCoverageResult;
    statusCode: number;
}
