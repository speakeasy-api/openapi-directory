import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UntagServiceInventoryRequest extends SpeakeasyBase {
    /**
     * Tag attributes to removed
     */
    requestBody: shared.Tag[];
    /**
     * ID of the resource
     */
    id: string;
}
export declare class UntagServiceInventoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
