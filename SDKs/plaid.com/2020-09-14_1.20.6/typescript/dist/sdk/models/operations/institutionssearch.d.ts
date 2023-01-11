import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InstitutionsSearchRequest extends SpeakeasyBase {
    request: shared.InstitutionsSearchRequest;
}
export declare class InstitutionsSearchResponse extends SpeakeasyBase {
    contentType: string;
    error?: Record<string, any>;
    institutionsSearchResponse?: Record<string, any>;
    statusCode: number;
}
