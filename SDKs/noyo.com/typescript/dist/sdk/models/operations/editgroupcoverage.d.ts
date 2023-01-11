import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditGroupCoveragePathParams extends SpeakeasyBase {
    groupCoverageId: string;
    version: string;
}
export declare class EditGroupCoverageRequest extends SpeakeasyBase {
    pathParams: EditGroupCoveragePathParams;
    request: shared.GroupCoverageEditRequest;
}
export declare class EditGroupCoverageResponse extends SpeakeasyBase {
    contentType: string;
    groupCoverageResult?: shared.GroupCoverageResult;
    statusCode: number;
}
