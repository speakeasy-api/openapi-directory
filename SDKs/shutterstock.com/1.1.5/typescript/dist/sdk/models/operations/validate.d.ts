import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ValidateQueryParams extends SpeakeasyBase {
    id: number;
    tag?: string[];
}
export declare class ValidateHeaders extends SpeakeasyBase {
    userAgent?: string;
}
export declare class ValidateRequest extends SpeakeasyBase {
    queryParams: ValidateQueryParams;
    headers: ValidateHeaders;
}
export declare class ValidateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testValidate?: shared.TestValidate;
}
