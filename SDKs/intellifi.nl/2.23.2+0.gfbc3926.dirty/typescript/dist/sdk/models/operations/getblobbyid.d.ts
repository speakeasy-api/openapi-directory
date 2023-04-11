import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetBlobByIdRequest extends SpeakeasyBase {
    /**
     * Filename of the blob.
     */
    filename: string;
    /**
     * Unique identifier
     */
    id: string;
}
export declare class GetBlobByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The stored binary blob
     */
    getBlobById200ImageWildcardBinaryString?: Uint8Array;
}
