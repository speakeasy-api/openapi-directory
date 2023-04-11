import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ViewAdvisoriesSystemsSecurity extends SpeakeasyBase {
    rhIdentity: string;
}
export declare class ViewAdvisoriesSystemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    controllersAdvisoriesSystemsResponse?: shared.ControllersAdvisoriesSystemsResponse;
}
