import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateChangelogSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateChangelogResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
