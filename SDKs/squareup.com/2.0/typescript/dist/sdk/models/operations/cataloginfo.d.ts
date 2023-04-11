import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CatalogInfoResponse extends SpeakeasyBase {
    /**
     * Success
     */
    catalogInfoResponse?: shared.CatalogInfoResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
