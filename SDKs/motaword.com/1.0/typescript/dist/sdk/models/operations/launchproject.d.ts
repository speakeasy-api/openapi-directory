import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LaunchProjectRequest extends SpeakeasyBase {
    projectPayment?: shared.ProjectPayment;
    /**
     * Project ID
     */
    id: number;
}
export declare class LaunchProjectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * MissingPaymentCode MissingCorporateAccount MissingPaymentMethod
     */
    error?: shared.ErrorT;
    /**
     * Project launched successfully
     */
    projectLaunchResponse?: shared.ProjectLaunchResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
