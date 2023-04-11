import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimSitesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this site.
     */
    id: number;
}
export declare class DcimSitesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
