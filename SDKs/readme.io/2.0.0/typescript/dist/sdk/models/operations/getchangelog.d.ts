import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetChangelogSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetChangelogRequest extends SpeakeasyBase {
    /**
     * Slug of changelog
     */
    slug: string;
}
export declare class GetChangelogResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
