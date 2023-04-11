import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimSitesGraphsRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this site.
     */
    id: number;
}
export declare class DcimSitesGraphsResponse extends SpeakeasyBase {
    contentType: string;
    site?: shared.Site;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
