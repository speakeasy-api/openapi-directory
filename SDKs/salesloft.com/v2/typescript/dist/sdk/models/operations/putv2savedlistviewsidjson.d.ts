import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutV2SavedListViewsIdJsonRequestBody extends SpeakeasyBase {
    /**
     * Whether the saved list view is the default
     */
    isDefault?: boolean;
    /**
     * The name of the saved list view
     */
    name?: string;
    /**
     * JSON object of list view parameters
     */
    viewParams?: string;
}
export declare class PutV2SavedListViewsIdJsonRequest extends SpeakeasyBase {
    requestBody?: PutV2SavedListViewsIdJsonRequestBody;
    /**
     * Saved List View ID
     */
    id: string;
}
export declare class PutV2SavedListViewsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
