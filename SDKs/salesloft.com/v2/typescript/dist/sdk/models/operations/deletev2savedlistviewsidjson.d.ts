import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteV2SavedListViewsIdJsonRequest extends SpeakeasyBase {
    /**
     * Saved List View ID
     */
    id: string;
}
export declare class DeleteV2SavedListViewsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
