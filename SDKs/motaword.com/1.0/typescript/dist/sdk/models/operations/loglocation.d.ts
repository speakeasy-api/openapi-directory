import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LogLocationRequest extends SpeakeasyBase {
    request?: shared.LocationUpdateContent;
}
export declare class LogLocationResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
