import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateItemListRequest extends SpeakeasyBase {
    /**
     * A JSON object containing item list information
     */
    itemListInput: shared.ItemListInput;
    /**
     * Unique identifier
     */
    id: string;
}
export declare class UpdateItemListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the modified resource
     */
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
