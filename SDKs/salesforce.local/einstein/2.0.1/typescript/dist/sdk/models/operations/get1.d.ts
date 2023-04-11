import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Get1Security extends SpeakeasyBase {
    bearerToken: string;
}
export declare class Get1Request extends SpeakeasyBase {
    /**
     * Deletion Id
     */
    id: string;
}
export declare class Get1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * deletion status
     */
    deletionResponse?: shared.DeletionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
