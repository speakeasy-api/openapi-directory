import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCertSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateCertResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    certificate?: shared.Certificate;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
