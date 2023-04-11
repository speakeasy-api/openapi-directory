import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Allowed values that can be passed to the exclude param.
 */
export declare enum MigrationsListForOrgExcludeEnum {
    Repositories = "repositories"
}
export declare class MigrationsListForOrgRequest extends SpeakeasyBase {
    /**
     * Exclude attributes from the API response to improve performance
     */
    exclude?: MigrationsListForOrgExcludeEnum[];
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
}
export declare class MigrationsListForOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    migrations?: shared.Migration[];
}
