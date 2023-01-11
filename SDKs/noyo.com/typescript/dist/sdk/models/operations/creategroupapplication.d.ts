import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateGroupApplicationPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class CreateGroupApplicationRequest extends SpeakeasyBase {
    pathParams: CreateGroupApplicationPathParams;
    request: shared.ApplicationCreateRequest;
}
export declare class CreateGroupApplicationResponse extends SpeakeasyBase {
    contentType: string;
    groupApplicationResult?: shared.GroupApplicationResult;
    statusCode: number;
}
