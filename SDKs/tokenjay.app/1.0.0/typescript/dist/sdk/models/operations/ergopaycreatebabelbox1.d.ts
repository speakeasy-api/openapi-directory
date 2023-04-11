import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErgoPayCreateBabelBox1Request extends SpeakeasyBase {
    boxId: string;
}
export declare class ErgoPayCreateBabelBox1Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    ergoPayCreateBabelBox1400WildcardString?: string;
    /**
     * Unauthorized
     */
    ergoPayCreateBabelBox1401WildcardString?: string;
    /**
     * Not Found
     */
    ergoPayCreateBabelBox1404WildcardString?: string;
    /**
     * Conflict
     */
    ergoPayCreateBabelBox1409WildcardString?: string;
}
