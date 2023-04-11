import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteClientValidatorSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteClientValidatorRequest extends SpeakeasyBase {
    /**
     * The validation authorities id
     */
    id: string;
}
export declare class DeleteClientValidatorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    deleted?: shared.Deleted;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
