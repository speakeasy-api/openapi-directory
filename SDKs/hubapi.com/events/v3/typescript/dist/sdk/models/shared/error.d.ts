import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";
export declare class ErrorT extends SpeakeasyBase {
    category: string;
    context?: Record<string, string[]>;
    correlationId: string;
    errors?: ErrorDetail[];
    links?: Record<string, string>;
    message: string;
    subCategory?: string;
}
