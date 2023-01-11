import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DepositSwitchTokenCreateRequest extends SpeakeasyBase {
    request: shared.DepositSwitchTokenCreateRequest;
}
export declare class DepositSwitchTokenCreateResponse extends SpeakeasyBase {
    contentType: string;
    depositSwitchTokenCreateResponse?: Record<string, any>;
    statusCode: number;
}
