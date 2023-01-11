import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditGroupPathParams extends SpeakeasyBase {
    groupId: string;
    version: string;
}
export declare class EditGroupRequest extends SpeakeasyBase {
    pathParams: EditGroupPathParams;
    request: shared.GroupEditRequest;
}
export declare class EditGroupResponse extends SpeakeasyBase {
    contentType: string;
    groupResult?: shared.GroupResult;
    statusCode: number;
}
