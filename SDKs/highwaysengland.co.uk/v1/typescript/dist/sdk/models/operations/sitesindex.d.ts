import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SitesIndexRequest extends SpeakeasyBase {
    version: string;
}
export declare class SitesIndexResponse extends SpeakeasyBase {
    contentType: string;
    siteResponse?: shared.SiteResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
