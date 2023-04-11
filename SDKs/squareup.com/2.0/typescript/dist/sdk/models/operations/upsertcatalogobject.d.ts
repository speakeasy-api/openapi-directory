import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpsertCatalogObjectSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UpsertCatalogObjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    upsertCatalogObjectResponse?: shared.UpsertCatalogObjectResponse;
}
