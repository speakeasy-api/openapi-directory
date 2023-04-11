import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateChangelogSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateChangelogRequest extends SpeakeasyBase {
    /**
     * Changelog object
     */
    changelog: shared.Changelog;
    /**
     * Slug of changelog
     */
    slug: string;
}
export declare class UpdateChangelogResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
