import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContinuousProjectInvoicesRequest extends SpeakeasyBase {
    /**
     * Project ID
     */
    projectId: number;
}
export declare class GetContinuousProjectInvoicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invoices List
     */
    continuousProjectInvoices?: shared.ContinuousProjectInvoices;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
