import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProcessorBankTransferCreateRequest extends SpeakeasyBase {
    request: shared.ProcessorBankTransferCreateRequest;
}
export declare class ProcessorBankTransferCreateResponse extends SpeakeasyBase {
    contentType: string;
    error?: Record<string, any>;
    processorBankTransferCreateResponse?: Record<string, any>;
    statusCode: number;
}
