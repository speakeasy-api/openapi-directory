import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateCustomPageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateCustomPageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
