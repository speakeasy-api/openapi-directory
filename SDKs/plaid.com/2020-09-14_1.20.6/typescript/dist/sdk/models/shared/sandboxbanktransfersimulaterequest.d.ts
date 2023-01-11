import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SandboxBankTransferSimulateRequest defines the request schema for `/sandbox/bank_transfer/simulate`
**/
export declare class SandboxBankTransferSimulateRequest extends SpeakeasyBase {
    bankTransferId: string;
    clientId?: string;
    eventType: string;
    failureReason?: Record<string, any>;
    secret?: string;
}
