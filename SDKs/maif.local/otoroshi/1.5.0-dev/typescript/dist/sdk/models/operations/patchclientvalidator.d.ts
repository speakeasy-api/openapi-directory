import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchClientValidatorSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PatchClientValidatorRequest extends SpeakeasyBase {
    requestBody?: shared.Patch[];
    /**
     * The validation authorities id
     */
    id: string;
}
export declare class PatchClientValidatorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    validationAuthority?: shared.ValidationAuthority;
}
