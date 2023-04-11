import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchCertSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PatchCertRequest extends SpeakeasyBase {
    requestBody?: shared.Patch[];
    /**
     * The certificate id
     */
    id: string;
}
export declare class PatchCertResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    certificate?: shared.Certificate;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
