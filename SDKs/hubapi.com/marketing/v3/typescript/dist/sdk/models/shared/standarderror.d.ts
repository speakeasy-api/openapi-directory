import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCategory } from "./errorcategory";
import { ErrorDetail } from "./errordetail";
export declare class StandardError extends SpeakeasyBase {
    category: ErrorCategory;
    context: Record<string, string[]>;
    errors: ErrorDetail[];
    id?: string;
    links: Record<string, string>;
    message: string;
    status: string;
    subCategory?: Record<string, any>;
}
