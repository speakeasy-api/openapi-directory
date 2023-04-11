import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateAKeyRequestBody extends SpeakeasyBase {
    actions?: string[];
    description?: string;
    expiresAt?: any;
    indexes?: string[];
    name?: string;
}
export declare class CreateAKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
