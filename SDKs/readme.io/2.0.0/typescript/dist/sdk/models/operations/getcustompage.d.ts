import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCustomPageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetCustomPageRequest extends SpeakeasyBase {
    /**
     * Slug of custom page
     */
    slug: string;
}
export declare class GetCustomPageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
