import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAPISpecificationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetAPISpecificationRequest extends SpeakeasyBase {
    /**
     * Used to specify further pages (starts at 1)
     */
    page?: number;
    /**
     * Number of items to include in pagination (up to 100, defaults to 10)
     */
    perPage?: number;
    /**
     * Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.
     */
    xReadmeVersion: string;
}
export declare class GetAPISpecificationResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
