import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostV2SavedListViewsJsonRequestBody extends SpeakeasyBase {
    /**
     * Whether the saved list view is the default
     */
    isDefault?: boolean;
    /**
     * The name of the saved list view
     */
    name: string;
    /**
     * The type of objects in the saved list view.  Value must be one of: people, companies, or recordings
     */
    view: string;
    /**
     * JSON object of list view parameters
     */
    viewParams?: string;
}
export declare class PostV2SavedListViewsJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
