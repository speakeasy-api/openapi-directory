import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SiteTypesIndexRequest extends SpeakeasyBase {
    version: string;
}
export declare class SiteTypesIndexResponse extends SpeakeasyBase {
    contentType: string;
    siteTypeResponse?: shared.SiteTypeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
