import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetChangelogsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetChangelogsRequest extends SpeakeasyBase {
    /**
     * Used to specify further pages (starts at 1)
     */
    page?: number;
    /**
     * Number of items to include in pagination (up to 100, defaults to 10)
     */
    perPage?: number;
}
export declare class GetChangelogsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
