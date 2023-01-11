import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTargetActionsRequest extends SpeakeasyBase {
    request: string[];
}
export declare class PostTargetActionsResponse extends SpeakeasyBase {
    actions?: shared.Actions[];
    contentType: string;
    statusCode: number;
}
