import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDeviceCodesSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListDeviceCodesRequest extends SpeakeasyBase {
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     *
     * @remarks
     * Provide this to retrieve the next set of results for your original query.
     *
     * See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
     */
    cursor?: string;
    /**
     * If specified, only returns DeviceCodes of the specified location.
     *
     * @remarks
     * Returns DeviceCodes of all locations if empty.
     */
    locationId?: string;
    /**
     * If specified, only returns DeviceCodes targeting the specified product type.
     *
     * @remarks
     * Returns DeviceCodes of all product types if empty.
     */
    productType?: string;
    /**
     * If specified, returns DeviceCodes with the specified statuses.
     *
     * @remarks
     * Returns DeviceCodes of status `PAIRED` and `UNPAIRED` if empty.
     */
    status?: string;
}
export declare class ListDeviceCodesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listDeviceCodesResponse?: shared.ListDeviceCodesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
