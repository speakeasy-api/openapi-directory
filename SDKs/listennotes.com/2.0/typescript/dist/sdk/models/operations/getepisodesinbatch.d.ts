import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEpisodesInBatchHeaders extends SpeakeasyBase {
    xListenAPIKey: string;
}
export declare class GetEpisodesInBatchRequest extends SpeakeasyBase {
    headers: GetEpisodesInBatchHeaders;
    request: shared.GetEpisodesInBatchForm;
}
export declare class GetEpisodesInBatchResponse extends SpeakeasyBase {
    contentType: string;
    getEpisodesInBatchResponse?: shared.GetEpisodesInBatchResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
