import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DetailAdvisorySecurity extends SpeakeasyBase {
    rhIdentity: string;
}
export declare class DetailAdvisoryRequest extends SpeakeasyBase {
    /**
     * Advisory ID
     */
    advisoryId: string;
}
export declare class DetailAdvisoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    controllersAdvisoryDetailResponse?: shared.ControllersAdvisoryDetailResponse;
}
