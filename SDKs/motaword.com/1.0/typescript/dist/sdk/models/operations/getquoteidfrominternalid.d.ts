import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetQuoteIdFromInternalIdPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class GetQuoteIdFromInternalId200ApplicationJson extends SpeakeasyBase {
    internalId?: number;
    publicId?: number;
}
export declare class GetQuoteIdFromInternalIdRequest extends SpeakeasyBase {
    pathParams: GetQuoteIdFromInternalIdPathParams;
}
export declare class GetQuoteIdFromInternalIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getQuoteIdFromInternalId200ApplicationJSONObject?: GetQuoteIdFromInternalId200ApplicationJson;
}
