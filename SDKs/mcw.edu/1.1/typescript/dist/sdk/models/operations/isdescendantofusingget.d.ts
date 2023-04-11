import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IsDescendantOfUsingGETRequest extends SpeakeasyBase {
    /**
     * Child Term Accession ID
     */
    accId1: string;
    /**
     * Parent Term Accession ID
     */
    accId2: string;
}
export declare class IsDescendantOfUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
