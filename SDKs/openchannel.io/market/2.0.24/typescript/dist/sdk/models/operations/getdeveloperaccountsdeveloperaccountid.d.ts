import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeveloperAccountsDeveloperAccountIdRequest extends SpeakeasyBase {
    /**
     * The id of the developer account to be located
     */
    developerAccountId: string;
}
export declare class GetDeveloperAccountsDeveloperAccountIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
