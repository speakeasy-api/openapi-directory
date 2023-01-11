import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStringsQueryParams extends SpeakeasyBase {
    page?: number;
    sourceLanguage?: string;
}
export declare class GetStringsRequest extends SpeakeasyBase {
    queryParams: GetStringsQueryParams;
}
export declare class GetStringsResponse extends SpeakeasyBase {
    clientStrings?: shared.ClientStrings;
    contentType: string;
    statusCode: number;
}
