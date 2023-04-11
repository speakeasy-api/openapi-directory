import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSiteSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class CreateSiteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * site details
     */
    site?: shared.Site;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
