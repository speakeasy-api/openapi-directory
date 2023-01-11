import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EmployersSearchRequest extends SpeakeasyBase {
    request: shared.EmployersSearchRequest;
}
export declare class EmployersSearchResponse extends SpeakeasyBase {
    contentType: string;
    employersSearchResponse?: Record<string, any>;
    statusCode: number;
}
