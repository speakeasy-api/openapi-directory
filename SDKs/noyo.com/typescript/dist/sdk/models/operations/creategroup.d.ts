import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateGroupRequest extends SpeakeasyBase {
    request: shared.GroupCreateRequest;
}
export declare class CreateGroupResponse extends SpeakeasyBase {
    contentType: string;
    groupResult?: shared.GroupResult;
    statusCode: number;
}
