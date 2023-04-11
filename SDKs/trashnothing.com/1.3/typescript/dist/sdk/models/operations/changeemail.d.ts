import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ChangeEmailRequestBody extends SpeakeasyBase {
    /**
     * The new email address.
     */
    address: string;
}
export declare class ChangeEmailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
