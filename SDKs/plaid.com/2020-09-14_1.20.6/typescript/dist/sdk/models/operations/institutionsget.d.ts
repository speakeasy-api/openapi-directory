import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InstitutionsGetRequest extends SpeakeasyBase {
    request: shared.InstitutionsGetRequest;
}
export declare class InstitutionsGetResponse extends SpeakeasyBase {
    contentType: string;
    error?: Record<string, any>;
    institutionsGetResponse?: Record<string, any>;
    statusCode: number;
}
