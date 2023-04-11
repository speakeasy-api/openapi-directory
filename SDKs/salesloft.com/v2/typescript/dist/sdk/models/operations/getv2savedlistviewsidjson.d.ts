import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2SavedListViewsIdJsonRequest extends SpeakeasyBase {
    /**
     * Saved List View ID
     */
    id: string;
}
export declare class GetV2SavedListViewsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
