import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateClientValidatorSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateClientValidatorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    validationAuthority?: shared.ValidationAuthority;
}
