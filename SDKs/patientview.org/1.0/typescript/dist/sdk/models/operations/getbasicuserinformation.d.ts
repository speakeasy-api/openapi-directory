import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetBasicUserInformationRequest extends SpeakeasyBase {
    /**
     * token
     */
    token: string;
}
export declare class GetBasicUserInformationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
