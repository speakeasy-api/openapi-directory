import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSalesActivitiesRequest extends SpeakeasyBase {
    excludeOwner?: string;
    /**
     * Project ID
     */
    id: number;
    type?: shared.SalesActivityTypeEnum;
}
export declare class GetSalesActivitiesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    /**
     * Activities fetched successfully
     */
    salesActivities?: shared.SalesActivities;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
