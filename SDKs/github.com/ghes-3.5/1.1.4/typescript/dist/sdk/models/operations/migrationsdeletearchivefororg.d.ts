import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MigrationsDeleteArchiveForOrgRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the migration.
     */
    migrationId: number;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class MigrationsDeleteArchiveForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
}
