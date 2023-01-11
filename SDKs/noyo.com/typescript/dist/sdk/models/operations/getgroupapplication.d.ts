import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupApplicationPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GetGroupApplicationRequest extends SpeakeasyBase {
    pathParams: GetGroupApplicationPathParams;
}
export declare class GetGroupApplicationResponse extends SpeakeasyBase {
    contentType: string;
    groupApplicationResult?: shared.GroupApplicationResult;
    statusCode: number;
}
