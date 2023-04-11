import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestnetGetBlockIndexRequest extends SpeakeasyBase {
    /**
     * Block Index
     */
    blockindex: number;
}
export declare class TestnetGetBlockIndexResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Object containing block hash
     */
    getBlockIndexResponse?: shared.GetBlockIndexResponse;
}
