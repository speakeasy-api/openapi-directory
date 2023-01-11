import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DepositSwitchCreateRequest extends SpeakeasyBase {
    request: shared.DepositSwitchCreateRequest;
}
export declare class DepositSwitchCreateResponse extends SpeakeasyBase {
    contentType: string;
    depositSwitchCreateResponse?: Record<string, any>;
    statusCode: number;
}
