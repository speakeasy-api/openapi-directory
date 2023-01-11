import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostBillingActionsRequest extends SpeakeasyBase {
    request: string[];
}
export declare class PostBillingActionsResponse extends SpeakeasyBase {
    action?: shared.Action;
    contentType: string;
    statusCode: number;
}
