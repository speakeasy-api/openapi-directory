import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ViewSystemsAdvisoriesSecurity extends SpeakeasyBase {
    rhIdentity: string;
}
export declare class ViewSystemsAdvisoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    controllersSystemsAdvisoriesResponse?: shared.ControllersSystemsAdvisoriesResponse;
}
