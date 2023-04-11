import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetActionRelatedListRequest extends SpeakeasyBase {
    /**
     * Dataset dictionary of the dataset (optional)
     */
    dataset?: string;
    /**
     * whether or not to restrict the results to only featured items
     */
    featured?: string;
    /**
     * id or name of the dataset (optional)
     */
    id?: string;
    /**
     * The order to sort the related items in
     */
    sort?: string;
    /**
     * The type of related item to show (optional)
     */
    typeFilter?: string;
}
export declare class GetActionRelatedListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
