import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCertSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteCertRequest extends SpeakeasyBase {
    /**
     * The certificate id
     */
    id: string;
}
export declare class DeleteCertResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    deleted?: shared.Deleted;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
