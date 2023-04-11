import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateItemRequest extends SpeakeasyBase {
    /**
     * A JSON object containing item information
     */
    itemUpdate: shared.ItemUpdate;
    /**
     * Unique identifier
     */
    id: string;
}
export declare class UpdateItemResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the modified resource
     */
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
