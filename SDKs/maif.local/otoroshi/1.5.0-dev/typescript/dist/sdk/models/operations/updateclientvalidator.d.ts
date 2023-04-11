import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateClientValidatorSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateClientValidatorRequest extends SpeakeasyBase {
    validationAuthority?: shared.ValidationAuthority;
    /**
     * The validation authorities id
     */
    id: string;
}
export declare class UpdateClientValidatorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    validationAuthority?: shared.ValidationAuthority;
}
