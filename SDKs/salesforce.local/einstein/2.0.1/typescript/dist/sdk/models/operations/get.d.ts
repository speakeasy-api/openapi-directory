import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSecurity extends SpeakeasyBase {
    bearerToken: string;
}
export declare class GetRequest extends SpeakeasyBase {
    /**
     * Deletion Id
     */
    id: string;
}
export declare class GetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * deletion status
     */
    deletionResponse?: shared.DeletionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
