import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProcessorBalanceGetRequest extends SpeakeasyBase {
    request: shared.ProcessorBalanceGetRequest;
}
export declare class ProcessorBalanceGetResponse extends SpeakeasyBase {
    contentType: string;
    processorBalanceGetResponse?: Record<string, any>;
    statusCode: number;
}
