import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindAllGlobalJwtVerifiersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    globalJwtVerifiers?: shared.GlobalJwtVerifier[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
