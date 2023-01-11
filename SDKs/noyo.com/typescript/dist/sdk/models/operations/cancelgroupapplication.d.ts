import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelGroupApplicationPathParams extends SpeakeasyBase {
    applicationId: string;
    version: string;
}
export declare class CancelGroupApplicationRequest extends SpeakeasyBase {
    pathParams: CancelGroupApplicationPathParams;
}
export declare class CancelGroupApplicationResponse extends SpeakeasyBase {
    contentType: string;
    groupApplicationResult?: shared.GroupApplicationResult;
    statusCode: number;
}
