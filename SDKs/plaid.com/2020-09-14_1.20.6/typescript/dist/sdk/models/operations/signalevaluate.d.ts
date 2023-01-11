import { SpeakeasyBase } from "../../../internal/utils";
export declare class SignalEvaluateRequest extends SpeakeasyBase {
    request: Record<string, any>;
}
export declare class SignalEvaluateResponse extends SpeakeasyBase {
    contentType: string;
    error?: Record<string, any>;
    signalEvaluateResponse?: Record<string, any>;
    statusCode: number;
}
