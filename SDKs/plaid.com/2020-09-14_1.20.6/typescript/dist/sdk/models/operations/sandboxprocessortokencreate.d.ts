import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SandboxProcessorTokenCreateRequest extends SpeakeasyBase {
    request: shared.SandboxProcessorTokenCreateRequest;
}
export declare class SandboxProcessorTokenCreateResponse extends SpeakeasyBase {
    contentType: string;
    error?: Record<string, any>;
    sandboxProcessorTokenCreateResponse?: Record<string, any>;
    statusCode: number;
}
