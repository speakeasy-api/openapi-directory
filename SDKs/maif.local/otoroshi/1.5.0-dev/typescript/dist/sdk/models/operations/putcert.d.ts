import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutCertSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PutCertRequest extends SpeakeasyBase {
    certificate?: shared.Certificate;
    /**
     * The certificate id
     */
    id: string;
}
export declare class PutCertResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    certificate?: shared.Certificate;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
