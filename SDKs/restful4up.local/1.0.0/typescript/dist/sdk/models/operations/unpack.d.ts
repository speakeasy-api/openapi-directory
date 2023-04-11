import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnpackRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class UnpackRequestBody extends SpeakeasyBase {
    /**
     * file
     */
    file: UnpackRequestBodyFile;
}
export declare class UnpackResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Ok
     */
    unpack200WildcardBinaryString?: Uint8Array;
}
