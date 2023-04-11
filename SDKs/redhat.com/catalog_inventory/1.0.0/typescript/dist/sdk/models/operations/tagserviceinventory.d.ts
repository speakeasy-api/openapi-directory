import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TagServiceInventoryRequest extends SpeakeasyBase {
    /**
     * Tag attributes to add
     */
    requestBody: shared.Tag[];
    /**
     * ID of the resource
     */
    id: string;
}
export declare class TagServiceInventoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceInventory tagged successful
     */
    tags?: shared.Tag[];
}
