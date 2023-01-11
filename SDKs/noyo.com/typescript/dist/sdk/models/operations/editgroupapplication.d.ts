import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditGroupApplicationPathParams extends SpeakeasyBase {
    applicationId: string;
    version: string;
}
export declare class EditGroupApplicationRequest extends SpeakeasyBase {
    pathParams: EditGroupApplicationPathParams;
    request: shared.ApplicationEditRequest;
}
export declare class EditGroupApplicationResponse extends SpeakeasyBase {
    contentType: string;
    groupApplicationResult?: shared.GroupApplicationResult;
    statusCode: number;
}
