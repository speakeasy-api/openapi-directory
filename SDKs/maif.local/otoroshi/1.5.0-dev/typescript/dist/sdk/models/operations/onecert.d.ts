import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OneCertSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class OneCertRequest extends SpeakeasyBase {
    /**
     * The auth. config id
     */
    id: string;
}
export declare class OneCertResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    certificate?: shared.Certificate;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
