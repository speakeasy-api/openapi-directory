import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SandboxBankTransferSimulateRequest extends SpeakeasyBase {
    request: shared.SandboxBankTransferSimulateRequest;
}
export declare class SandboxBankTransferSimulateResponse extends SpeakeasyBase {
    contentType: string;
    error?: Record<string, any>;
    sandboxBankTransferSimulateResponse?: Record<string, any>;
    statusCode: number;
}
