import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SandboxPublicTokenCreateRequest extends SpeakeasyBase {
    request: shared.SandboxPublicTokenCreateRequest;
}
export declare class SandboxPublicTokenCreateResponse extends SpeakeasyBase {
    contentType: string;
    error?: Record<string, any>;
    sandboxPublicTokenCreateResponse?: Record<string, any>;
    statusCode: number;
}
