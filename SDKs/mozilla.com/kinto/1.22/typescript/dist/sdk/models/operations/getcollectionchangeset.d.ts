import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCollectionChangesetRequest extends SpeakeasyBase {
    expected: string;
    limit?: number;
    since?: string;
    bid: string;
    bucket?: string;
    cid: string;
    collection?: string;
}
export declare class GetCollectionChangesetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
