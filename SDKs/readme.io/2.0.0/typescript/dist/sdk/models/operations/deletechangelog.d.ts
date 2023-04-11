import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteChangelogSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteChangelogRequest extends SpeakeasyBase {
    /**
     * Slug of changelog
     */
    slug: string;
}
export declare class DeleteChangelogResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
