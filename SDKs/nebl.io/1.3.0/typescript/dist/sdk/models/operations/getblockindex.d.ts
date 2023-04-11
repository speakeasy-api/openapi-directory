import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBlockIndexRequest extends SpeakeasyBase {
    /**
     * Block Index
     */
    blockindex: number;
}
export declare class GetBlockIndexResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Object containing block hash
     */
    getBlockIndexResponse?: shared.GetBlockIndexResponse;
}
