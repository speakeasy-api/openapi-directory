import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestnetGetStatusRequest extends SpeakeasyBase {
    /**
     * Function to call, getInfo, getDifficulty, getBestBlockHash, or getLastBlockHash
     */
    q?: string;
}
export declare class TestnetGetStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Function Response
     */
    getStatusResponse?: Record<string, any>;
}
