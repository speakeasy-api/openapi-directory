import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindClientValidatorByIdSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FindClientValidatorByIdRequest extends SpeakeasyBase {
    /**
     * The auth. config id
     */
    id: string;
}
export declare class FindClientValidatorByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    validationAuthority?: shared.ValidationAuthority;
}
