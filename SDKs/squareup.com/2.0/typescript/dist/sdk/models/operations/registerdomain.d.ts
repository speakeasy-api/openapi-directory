import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegisterDomainSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RegisterDomainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    registerDomainResponse?: shared.RegisterDomainResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
