import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class GetGroupRequest extends SpeakeasyBase {
    pathParams: GetGroupPathParams;
}
export declare class GetGroupResponse extends SpeakeasyBase {
    contentType: string;
    groupResult?: shared.GroupResult;
    statusCode: number;
}
