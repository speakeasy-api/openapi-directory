import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteCustomPageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteCustomPageRequest extends SpeakeasyBase {
    /**
     * Slug of custom page
     */
    slug: string;
}
export declare class DeleteCustomPageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
