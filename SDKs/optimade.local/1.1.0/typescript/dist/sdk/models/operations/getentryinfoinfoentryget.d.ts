import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEntryInfoInfoEntryGetPathParams extends SpeakeasyBase {
    entry: string;
}
export declare class GetEntryInfoInfoEntryGetRequest extends SpeakeasyBase {
    pathParams: GetEntryInfoInfoEntryGetPathParams;
}
export declare class GetEntryInfoInfoEntryGetResponse extends SpeakeasyBase {
    contentType: string;
    entryInfoResponse?: shared.EntryInfoResponse;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
