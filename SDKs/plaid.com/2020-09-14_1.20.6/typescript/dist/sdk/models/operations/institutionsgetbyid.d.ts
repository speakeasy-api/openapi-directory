import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InstitutionsGetByIdRequest extends SpeakeasyBase {
    request: shared.InstitutionsGetByIdRequest;
}
export declare class InstitutionsGetByIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: Record<string, any>;
    institutionsGetByIdResponse?: Record<string, any>;
    statusCode: number;
}
